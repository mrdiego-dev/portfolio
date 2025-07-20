<script setup lang="ts">
  import LanguageSelector from '@/components/LanguageSelector.vue';
  import Header from '@/components/Header/index.vue';
  import About from '@/components/Content/About/index.vue';
  import Experience from '@/components/Content/Experience/index.vue';
  import Projects from '@/components/Content/Projects/index.vue';
  import { options } from '@/constants/particles';

  useHead({
    htmlAttrs: {
      class: 'scroll-smooth focus:scroll-auto',
    },
    bodyAttrs: {
      class: 'leading-relaxed text-white bg-soft-black',
    },
  });

  useSeoMeta({
    title: 'Diego M. Rivera',
    description: "Diego M. Rivera's personal Portfolio. A Software Engineer.",
    ogDescription: "Diego M. Rivera's personal Portfolio. A Software Engineer.",
    keywords: 'Diego M. Rivera, Full Stack Developer, Software Engineer, Frontend Developer',
  });
</script>

<template>
  <NuxtParticles id="tsparticles" :options="options" />
  <LanguageSelector />

  <div class="mx-auto min-h-screen max-w-(--breakpoint-xl) px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
    <div class="lg:flex lg:justify-between lg:gap-4">
      <Header />

      <main id="content" class="pt-24 lg:w-1/2 lg:py-24">
        <About />
        <Experience />
        <Projects />
      </main>
    </div>
  </div>
</template>
