<template>
  <section :id="id" class="mb-16 scroll-mt-16 md:mb-12 lg:mb-24 lg:scroll-mt-24">
    <div
      class="sticky top-0 z-10 -mx-6 mb-4 w-screen px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0"
    >
      <h2 class="text-sm font-bold uppercase tracking-widest text-white lg:sr-only">
        {{ title }}
      </h2>
    </div>
    <div>
      <slot />
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps({
  id: { type: String, required: true },
  title: { type: String, required: true },
});
</script>
