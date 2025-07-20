<template>
  <Menu as="div" class="relative inline-block text-right float-right mt-5 mr-5">
    <div>
      <MenuButton
        aria-label="Language selector"
        class="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-transparent px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-gray-300 hover:bg-charcoal-gray"
      >
        <component v-if="selected" :is="selected.icon" class="h-6 w-6" />
        <ChevronDownIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
      </MenuButton>
    </div>

    <transition
      enter-active-class="transition ease-out duration-100"
      enter-from-class="transform opacity-0 scale-95"
      enter-to-class="transform opacity-100 scale-100"
      leave-active-class="transition ease-in duration-75"
      leave-from-class="transform opacity-100 scale-100"
      leave-to-class="transform opacity-0 scale-95"
    >
      <MenuItems class="absolute right-0 z-10 mt-2 origin-top-right rounded-md bg-turquoise shadow-lg focus:outline-none">
        <div class="py-0">
          <MenuItem v-slot="{ active }" v-for="lang in languages">
            <div
              @click="changeLanguage(lang)"
              class="block items-center px-4 py-1 text-charcoal-gray hover:text-light-gray hover:bg-charcoal-gray cursor-pointer first:rounded-t-md last:rounded-b-md"
            >
              <component :is="lang.icon" class="h-8 w-8" />
              <span class="ml-2">{{ lang.name }}</span>
            </div>
          </MenuItem>
        </div>
      </MenuItems>
    </transition>
  </Menu>
</template>

<script setup lang="ts">
  import { type ILanguage } from '@/types/language';
  import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue';
  import { ChevronDownIcon } from '@heroicons/vue/20/solid';

  import { shallowRef } from 'vue';
  import UsaFlag from '@/assets/icons/UsaFlag.vue';
  import SpainFlag from '@/assets/icons/SpainFlag.vue';

  const { locale } = useI18n();

  const languages: ILanguage[] = [
    { name: 'English', value: 'en', icon: UsaFlag },
    { name: 'Español', value: 'es', icon: SpainFlag },
  ];

  const changeLanguage = (lang: ILanguage) => {
    selected.value = lang;
    locale.value = lang.value;
  };

  const selected = shallowRef(languages.find((lang) => lang.value === locale.value));
</script>
