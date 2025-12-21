<template>
  <div class="container mx-auto px-3 py-4 sm:px-4 sm:py-6 md:py-8">
    <!-- Loading State -->
    <div v-if="data === undefined" class="flex min-h-[50vh] items-center justify-center">
      <div class="text-base text-gray-600 sm:text-lg">Loading...</div>
    </div>

    <!-- Error State -->
    <div v-else-if="data === null" class="flex min-h-[50vh] items-center justify-center">
      <div class="text-base text-red-600 sm:text-lg">Failed to load content</div>
    </div>

    <!-- Content Grid -->
    <div v-else>
      <h1 class="mb-4 text-2xl font-bold sm:mb-6 sm:text-3xl md:mb-8">Contents</h1>
      <ul class="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 md:grid-cols-3 md:gap-6 lg:grid-cols-4">
        <li v-for="v in data.files" :key="v.dir" class="list-none">
          <router-link
            :to="`/contents/${v.dir}/0`"
            class="block overflow-hidden rounded-lg bg-white shadow-md transition-shadow duration-300 hover:shadow-xl active:shadow-lg"
          >
            <div class="aspect-video w-full overflow-hidden bg-gray-100">
              <img
                :src="`${BASEURL}${v.dir}/1.jpg`"
                :alt="v.dir"
                class="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                loading="lazy"
              />
            </div>
            <div class="p-3 sm:p-4">
              <h2 class="truncate text-base font-semibold text-gray-800 sm:text-lg">{{ v.dir }}</h2>
            </div>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { BASEURL } from "../configs/config";

const data = ref<{ files: { dir: string }[] } | null | undefined>(undefined);

const main = async () => {
  try {
    const res = await fetch(BASEURL + "data.json");
    if (res.status === 200) {
      data.value = await res.json();
      return;
    }
  } catch (e) {
    console.error(e);
  }
  data.value = null;
};

main();
</script>
