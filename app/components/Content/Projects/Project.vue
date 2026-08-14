<script setup lang="ts">
import { TransitionRoot, TransitionChild, Dialog, DialogPanel, DialogTitle } from "@headlessui/vue";
import { XMarkIcon, ArrowUpRightIcon, LinkIcon } from "@heroicons/vue/20/solid";
import GitHub from "@/assets/icons/GitHub.vue";
const { t } = useI18n();

const isOpen = ref(false);

interface Repository {
  label: string;
  url: string;
}

function closeModal() {
  isOpen.value = false;
}
function openModal() {
  isOpen.value = true;
}

defineProps<{
  stack: string[];
  image?: string;
  index: number;
  repositories?: Repository[];
}>();
</script>

<template>
  <div
    class="bg-charcoal-gray/40 hover:bg-charcoal-gray/60 p-5 rounded-lg mb-10 cursor-pointer"
    aria-label="click to view more"
    @click="openModal"
  >
    <div class="flex flex-col md:flex-row items-start">
      <img
        :src="image"
        alt="Project image"
        class="w-full md:w-1/3 md:mr-4 object-contain max-h-64 rounded-md mb-4 md:mb-0"
      />
      <div class="md:w-2/3">
        <h2 class="text-xl font-bold mb-2 flex justify-between">
          {{ t(`projects.${index}.title`) }}
          <ArrowUpRightIcon class="h-5 w-5 text-light-gray hover:text-white" />
        </h2>
        <p class="text-light-gray">
          {{ t(`projects.${index}.description`) }}
        </p>

        <div class="flex flex-wrap gap-2 mt-3">
          <div
            class="flex items-center rounded-full bg-dark-turquoise/70 px-2 py-1 text-xs font-medium leading-4 text-light-gray"
            v-for="(tech, tIndex) in stack"
          >
            {{ t(`projects.${index}.stack.${tIndex}`) }}
          </div>
        </div>
      </div>
    </div>
  </div>

  <TransitionRoot appear :show="isOpen" as="template">
    <Dialog as="div" @close="closeModal" class="relative z-10">
      <TransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-black/25" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-auto">
        <div class="flex min-h-full items-center justify-center p-4 text-center">
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <DialogPanel
              class="w-full max-w-4xl transform overflow-hidden rounded-2xl bg-turquoise p-6 text-left align-middle shadow-xl transition-all"
            >
              <DialogTitle as="h3" class="text-lg font-bold leading-6 text-charcoal-gray flex flex-row justify-end">
                <button
                  type="button"
                  class="text-dark-turquoise hover:text-teal-blue focus:outline-none"
                  @click="closeModal"
                >
                  <span class="sr-only">Close</span>
                  <XMarkIcon class="mr-1 h-6 w-6" aria-hidden="true" />
                </button>
              </DialogTitle>

              <div class="mt-2 flex flex-col md:flex-row items-start">
                <img
                  :src="image"
                  alt="Project image"
                  class="w-full md:w-2/3 md:mr-4 object-contain rounded-md mb-4 md:mb-0"
                />

                <div class="md:w-1/3 text-charcoal-gray">
                  <h2 class="text-xl font-bold mb-2">{{ t(`projects.${index}.title`) }}</h2>
                  <div class="flex flex-wrap gap-3 items-center mb-4">
                    <a
                      v-for="repository in repositories"
                      :key="repository.url"
                      class="inline-flex items-center gap-1 text-dark-turquoise hover:text-teal-blue"
                      :href="repository.url"
                      target="_blank"
                      rel="noopener noreferrer"
                      :aria-label="`${repository.label} repository on GitHub (opens in a new tab)`"
                      :title="`${repository.label} repository on GitHub`"
                    >
                      <GitHub />
                      <span class="text-sm font-medium">{{ repository.label }}</span>
                    </a>
                    <a
                      v-if="t(`projects.${index}.demo`) !== `projects.${index}.demo`"
                      class="text-dark-turquoise hover:text-teal-blue"
                      :href="t(`projects.${index}.demo`)"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Project Demo (opens in a new tab)"
                      title="Demo"
                    >
                      <LinkIcon class="h-6 w-6" aria-hidden="true" />
                    </a>
                  </div>

                  <div class="flex flex-wrap gap-2 mt-3 mb-3">
                    <div
                      class="flex items-center rounded-full bg-teal-blue/90 px-2 py-1 text-xs font-medium leading-4 text-light-gray"
                      v-for="(tech, tIndex) in stack"
                    >
                      {{ t(`projects.${index}.stack.${tIndex}`) }}
                    </div>
                  </div>

                  <p>
                    {{ t(`projects.${index}.description`) }}
                  </p>
                </div>
              </div>

              <div class="mt-4 text-charcoal-gray">
                <p>{{ t(`projects.${index}.details`) }}</p>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>
