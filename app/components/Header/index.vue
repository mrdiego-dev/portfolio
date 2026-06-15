<script setup lang="ts">
import Navbar from './Navbar.vue'
import Name from './Name.vue'
import SocialMedia from './SocialMedia.vue'
</script>

<template>
  <header
    class="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24"
  >
    <div>
      <Name />
      <SocialMedia />
      <Navbar />
    </div>
  </header>
</template>
