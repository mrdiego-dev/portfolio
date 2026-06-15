<script setup lang="ts">
import { socialMedia } from "@/constants";
</script>

<template>
  <ul class="ml-1 mt-8 flex items-center" aria-label="Social media">
    <li class="mr-5 text-xs shrink-0" v-for="media in socialMedia">
      <a
        class="block hover:text-slate-200"
        :href="media.link"
        target="_blank"
        rel="noreferrer noopener"
        :aria-label="`${media.name} (opens in a new tab)`"
        title="GitHub"
      >
        <span class="sr-only">{{ media.name }}</span>
        <component :is="media.icon" />
      </a>
    </li>
  </ul>
</template>
