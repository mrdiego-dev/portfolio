import { mkdtempSync, mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { spawnSync } from "node:child_process";

const locale = process.argv[2];
const supportedLocales = ["en", "es"];

if (!supportedLocales.includes(locale)) {
  console.error("Usage: node scripts/export-resume.mjs <en|es>");
  process.exit(1);
}

const labels = {
  en: {
    profiles: "profiles",
    skills: "skills",
    skill: "Skill",
    keywords: "Keywords",
    employment: "employment",
    projects: "projects",
    education: "education",
    courses: "courses & certifications",
    languages: "languages",
    present: "Present",
  },
  es: {
    profiles: "perfiles",
    skills: "habilidades",
    skill: "Habilidad",
    keywords: "Tecnologías",
    employment: "experiencia laboral",
    projects: "proyectos",
    education: "educación",
    courses: "cursos y certificaciones",
    languages: "idiomas",
    present: "Actual",
  },
}[locale];

const scriptDirectory = dirname(fileURLToPath(import.meta.url));
const projectDirectory = dirname(scriptDirectory);
const outputDirectory = join(projectDirectory, "exported");
const resumePath = join(projectDirectory, `resume-${locale}.json`);
const pdfPath = join(outputDirectory, `resume-${locale}.pdf`);
const temporaryDirectory = mkdtempSync(join(tmpdir(), `portfolio-resume-${locale}-`));
const htmlPath = join(temporaryDirectory, `resume-${locale}.html`);
const resume = JSON.parse(readFileSync(resumePath, "utf8"));

const escapeHtml = (value) =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");

const formatDate = (value) => {
  const match = /^(\d{4})-(\d{2})(?:-\d{2})?$/.exec(value);
  if (!match) return value;

  const date = new Date(Date.UTC(Number(match[1]), Number(match[2]) - 1, 1));
  const formattedDate = new Intl.DateTimeFormat(locale, {
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  })
    .format(date)
    .replace(".", "");

  return formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);
};

const sectionHeader = (title) => `<header><h2>${escapeHtml(title)}</h2></header>`;

const profilesSection = `<hr>
<section id="profiles">
  ${sectionHeader(labels.profiles)}
  <p>${resume.social.map(({ network, url }) =>
    `<strong>${escapeHtml(network)}:</strong> <a href="${escapeHtml(url)}">${escapeHtml(url.replace(/^https?:\/\/(www\.)?/, ""))}</a>`
  ).join(" &nbsp; | &nbsp; ")}</p>
</section>`;

const coursesSection = `<hr>
<section id="courses">
  ${sectionHeader(labels.courses)}
  <ul>${resume.courses.map(({ name, provider, date }) =>
    `<li><strong>${escapeHtml(name)}</strong> — ${escapeHtml(provider)} (${escapeHtml(formatDate(date))})</li>`
  ).join("")}</ul>
</section>`;

const languagesSection = `<hr>
<section id="languages">
  ${sectionHeader(labels.languages)}
  <p>${resume.languages.map(({ language, level }) =>
    `<strong>${escapeHtml(language)}:</strong> ${escapeHtml(level)}`
  ).join(" &nbsp; | &nbsp; ")}</p>
</section>`;

const run = (command, args) => {
  const result = spawnSync(command, args, {
    cwd: projectDirectory,
    stdio: "inherit",
    env: { ...process.env, QT_QPA_PLATFORM: "offscreen" },
  });

  if (result.error) throw result.error;
  if (result.status !== 0) {
    throw new Error(`${command} exited with status ${result.status ?? "unknown"}`);
  }
};

const localizeThemeHtml = (html) => {
  const headings = {
    skills: labels.skills,
    employment: labels.employment,
    projects: labels.projects,
    education: labels.education,
  };

  let localizedHtml = html;
  for (const [english, localized] of Object.entries(headings)) {
    localizedHtml = localizedHtml.replace(
      `<h2>${english}</h2>`,
      `<h2>${escapeHtml(localized)}</h2>`,
    );
  }

  localizedHtml = localizedHtml
    .replace("<th>Skill</th>", `<th>${escapeHtml(labels.skill)}</th>`)
    .replace("<th>Keywords</th>", `<th>${escapeHtml(labels.keywords)}</th>`)
    .replaceAll("Present", labels.present);

  if (locale === "es") {
    const monthNames = {
      Jan: "Ene",
      Feb: "Feb",
      Mar: "Mar",
      Apr: "Abr",
      May: "Mayo",
      Jun: "Jun",
      Jul: "Jul",
      Aug: "Ago",
      Sep: "Sept",
      Oct: "Oct",
      Nov: "Nov",
      Dec: "Dic",
    };

    localizedHtml = localizedHtml.replace(
      /\b(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\b/g,
      (month) => monthNames[month],
    );
  }

  return localizedHtml;
};

mkdirSync(outputDirectory, { recursive: true });

try {
  run("hackmyresume", ["build", resumePath, "TO", htmlPath, "--theme", "compact"]);

  const html = localizeThemeHtml(readFileSync(htmlPath, "utf8"))
    .replace(
      '<hr>\n            <section id="skills">',
      `${profilesSection}\n            <hr>\n            <section id="skills">`,
    )
    .replace("</main>", `${coursesSection}\n${languagesSection}\n</main>`)
    .replace(/\b\d{4}-\d{2}(?:-\d{2})?\b/g, formatDate)
    .replace(/<link[^>]+font-awesome[^>]*>\s*/i, "")
    .replace(
      "</head>",
      `<style>
        @page { size: A4; margin: 10mm; }
        html, body, main {
          background: #fff !important;
          color: #111 !important;
        }
        body, main, section, header, ul, p, li, table, td {
          font-size: 13px;
        }
        body { line-height: 1.3; }
        h1 { font-size: 17px; }
        h2, h3 { font-size: 13px; }
        span.keywords { font-size: 10.5px; }
        main { padding: 0; max-width: none; }
        section { margin-top: 0.75em; }
        section > div { margin-bottom: 0.75em; }
        h3 { margin-top: 0.7em; }
        li { line-height: 1.3; }
        #employment > div, #projects > div, #education > div {
          page-break-inside: avoid;
        }
        #profiles p, #languages p { text-align: left; }
      </style>
    </head>`,
    );

  writeFileSync(htmlPath, html);
  run("wkhtmltopdf", ["--enable-local-file-access", htmlPath, pdfPath]);
  console.log(`Generated ${pdfPath}`);
} catch (error) {
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
} finally {
  rmSync(temporaryDirectory, { recursive: true, force: true });
}
