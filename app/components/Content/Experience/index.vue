<script setup lang="ts">
  import Section from '../Section.vue';
  import JobPosition from './JobPosition.vue';
  import { experience } from '@@/i18n/en/experience';

  const { jobs } = experience;
</script>

<template>
  <Section id="experience" title="Experience">
    <ol class="relative border-s border-charcoal-gray">
      <JobPosition v-for="(job, index) in jobs" :achievements="job.achievements" :stack="job.stack" :index="index" />
    </ol>
  </Section>
</template>
