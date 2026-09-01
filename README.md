# Diego M. Rivera — Portfolio

A bilingual personal portfolio and resume for Diego M. Rivera, built with Nuxt 4, Vue, Tailwind CSS, and Nuxt i18n.

## Requirements

- Node.js
- [pnpm](https://pnpm.io/)
- `wkhtmltopdf` for exporting resumes as PDF

Install the PDF export dependency on apt-based Linux distributions:

```bash
sudo apt install wkhtmltopdf
```

Confirm that it is available on your `PATH`:

```bash
wkhtmltopdf --version
```

## Setup

Install the project dependencies:

```bash
pnpm install
```

## Development

Start the development server at `http://localhost:3000`:

```bash
pnpm dev
```

## Production

Build the application for production:

```bash
pnpm build
```

Generate a static version of the application:

```bash
pnpm generate
```

Preview the production build locally:

```bash
pnpm preview
```

## Resume

Resume content is maintained separately for each supported language:

- `resume-en.json` — English
- `resume-es.json` — Spanish

After updating either file, export its PDF with the corresponding command:

```bash
# English: exported/resume-en.pdf
pnpm export:en

# Spanish: exported/resume-es.pdf
pnpm export:es

# Both languages
pnpm export
```

Generated PDFs are written to `exported/`. This directory is generated locally and excluded from Git.
