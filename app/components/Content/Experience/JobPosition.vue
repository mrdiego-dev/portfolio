<script setup lang="ts">
import type { ResumeJob, ResumeLocale } from "@/types/resume";

const props = defineProps<{
  job: ResumeJob;
  locale: ResumeLocale;
}>();

const presentLabels: Record<ResumeLocale, string> = {
  en: "Present",
  es: "Actual",
};

const formatDate = (value?: string) => {
  if (!value) return presentLabels[props.locale];
  if (/^\d{4}$/.test(value)) return value;

  const match = /^(\d{4})-(\d{2})$/.exec(value);
  if (!match) return value;

  const date = new Date(Date.UTC(Number(match[1]), Number(match[2]) - 1, 1));
  const formattedDate = new Intl.DateTimeFormat(props.locale, {
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(date);

  return formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);
};

const dateRange = computed(() => {
  return `${formatDate(props.job.start)} - ${formatDate(props.job.end)}`;
});
</script>

<template>
  <li class="mb-10 ms-4">
    <div
      class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"
    ></div>

    <time class="mb-1 text-sm font-normal leading-none text-light-gray">
      {{ dateRange }}
    </time>

    <h3 class="text-lg">
      <span class="font-semibold text-turquoise">{{ job.employer }}</span>
      -
      <span>{{ job.position }}</span>
    </h3>

    <ul class="mt-2 list-disc ml-4 list-outside">
      <li
        v-for="achievement in job.highlights"
        :key="achievement"
        class="text-gray-400 text-justify"
      >
        {{ achievement }}
      </li>
    </ul>

    <div class="flex flex-wrap gap-2 mt-3">
      <div
        v-for="technology in job.keywords"
        :key="technology"
        class="flex items-center rounded-full bg-dark-turquoise/70 px-2 py-1 text-xs font-medium leading-4 text-light-gray"
      >
        {{ technology }}
      </div>
    </div>
  </li>
</template>
