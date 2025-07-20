<script setup lang="ts">
const { t } = useI18n();

defineProps({
  achievements: { type: Array<string>, required: true },
  stack: { type: Array<string>, required: true },
  index: { type: Number, required: true },
});
</script>

<template>
  <li class="mb-10 ms-4">
    <div
      class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"
    ></div>

    <time class="mb-1 text-sm font-normal leading-none text-light-gray">
      {{ t(`experience.jobs.${index}.startDate`) }} - {{ t(`experience.jobs.${index}.endDate`) }}
    </time>

    <h3 class="text-lg">
      <span class="font-semibold text-turquoise">{{ t(`experience.jobs.${index}.company`) }}</span>
      -
      <span>{{ t(`experience.jobs.${index}.title`) }}</span>
    </h3>

    <ul class="mt-2 list-disc ml-4 list-outside">
      <li class="text-gray-400 text-justify" v-for="(achievement, aIndex) in achievements">
        {{ t(`experience.jobs.${index}.achievements.${aIndex}`) }}
      </li>
    </ul>

    <div class="flex flex-wrap gap-2 mt-3">
      <div
        class="flex items-center rounded-full bg-dark-turquoise/70 px-2 py-1 text-xs font-medium leading-4 text-light-gray"
        v-for="(tech, tIndex) in stack"
      >
        {{ t(`experience.jobs.${index}.stack.${tIndex}`) }}
      </div>
    </div>
  </li>
</template>
