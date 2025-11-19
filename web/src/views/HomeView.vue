<template>
  <div class="container mx-auto px-4 py-8">
    <!-- Loading State -->
    <div v-if="data === undefined" class="flex min-h-[50vh] items-center justify-center">
      <div class="text-lg text-gray-600">Loading...</div>
    </div>

    <!-- Error State -->
    <div v-else-if="data === null" class="flex min-h-[50vh] items-center justify-center">
      <div class="text-lg text-red-600">Failed to load content</div>
    </div>

    <!-- Content Grid -->
    <div v-else>
      <h1 class="mb-8 text-3xl font-bold">Contents</h1>
      <ul class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <li v-for="v in data.files" :key="v" class="list-none">
          <router-link
            :to="`/contents/${v}/0`"
            class="block overflow-hidden rounded-lg bg-white shadow-md transition-shadow duration-300 hover:shadow-xl"
          >
            <div class="aspect-video w-full overflow-hidden bg-gray-100">
              <img
                :src="`${BASEURL}${v}/1.jpg`"
                :alt="v"
                class="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div class="p-4">
              <h2 class="truncate text-lg font-semibold text-gray-800">{{ v }}</h2>
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

const data = ref<{ files: string[] } | null | undefined>(undefined);

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
