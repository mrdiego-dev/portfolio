<script setup lang="ts">
import { startDate } from "@/constants";
import Section from "../Section.vue";
const { t } = useI18n();

const differenceInYears = ref(5);

const today = new Date();
const differenceInMilliseconds = today.valueOf() - startDate.valueOf();
differenceInYears.value = Math.floor(differenceInMilliseconds / (365.25 * 24 * 60 * 60 * 1000));
</script>

<template>
  <Section id="about" :title="t('header.nav.about')">
    <p class="mb-4 text-justify">
      {{ t("about.paragraph1", { years: differenceInYears }) }}
    </p>
  </Section>
</template>
