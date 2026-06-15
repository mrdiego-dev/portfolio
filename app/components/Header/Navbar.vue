<template>
  <nav class="nav hidden lg:block">
    <ul class="mt-16 w-max">
      <li v-for="item in navigation">
        <a
          :href="item.href"
          :class="{ active: activeLink === item.href }"
          class="group flex items-center py-3"
          @click="setActive(item.href)"
        >
          <span
            class="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"
          ></span>
          <span
            class="nav-text text-xs font-bold uppercase tracking-widest text-slate-400 group-hover:text-slate-200 group-focus-visible:text-slate-200"
          >
            {{ t(item.name) }}
          </span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useI18n } from "vue-i18n";
const { t } = useI18n();
import { navigation } from "@/constants";

const activeLink = ref("#about");

const setActive = (targetId: string) => {
  activeLink.value = targetId;
};

const handleScroll = () => {
  const scrollThreshold = 100;
  const scrollPosition = window.scrollY;

  navigation.forEach((item) => {
    const targetElement = document.querySelector(item.href) as HTMLElement;

    if (targetElement) {
      const targetPosition = targetElement.offsetTop;
      if (Math.abs(scrollPosition - targetPosition) < scrollThreshold) {
        activeLink.value = item.href;
      }
    }
  });
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});
</script>

<style scoped lang="scss">
.active {
  .nav-indicator {
    width: 4rem;
    background-color: white;
  }
  .nav-text {
    color: white;
  }
}
</style>
