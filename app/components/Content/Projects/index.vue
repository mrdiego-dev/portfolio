<script setup lang="ts">
  import Section from '../Section.vue';
  import Project from './Project.vue';
  import { projects } from '@@/i18n/en/projects';
</script>

<template>
  <Section id="projects" title="Projects">
    <Project v-for="(project, index) in projects" :stack="project.stack" :image="project.image" :index="index" />
  </Section>
</template>
