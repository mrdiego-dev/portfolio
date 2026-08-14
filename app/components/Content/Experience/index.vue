<script setup lang="ts">
import resumeEn from "@@/resume-en.json";
import resumeEs from "@@/resume-es.json";
import type { Resume, ResumeLocale } from "@/types/resume";
import Section from "../Section.vue";
import JobPosition from "./JobPosition.vue";

const { locale, t } = useI18n();

const resumes = {
  en: resumeEn,
  es: resumeEs,
} satisfies Record<ResumeLocale, Resume>;

const activeLocale = computed<ResumeLocale>(() =>
  locale.value === "es" ? "es" : "en",
);
const jobs = computed(() => resumes[activeLocale.value].employment.history);
</script>

<template>
  <Section id="experience" :title="t('header.nav.experience')">
    <ol class="relative border-s border-charcoal-gray">
      <JobPosition
        v-for="job in jobs"
        :key="`${job.employer}-${job.start}`"
        :job="job"
        :locale="activeLocale"
      />
    </ol>
  </Section>
</template>
