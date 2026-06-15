<script setup lang="ts">
import { useI18n } from "vue-i18n";
const { t } = useI18n();
</script>

<template>
  <h1 class="text-4xl font-bold tracking-tight text-white sm:text-5xl">
    {{ t("header.name") }}
  </h1>
  <h2
    class="mt-3 text-lg font-medium tracking-tight text-light-gray sm:text-xl"
  >
    {{ t("header.title") }}
  </h2>
</template>
