<template>
  <div class="p-10" v-if="data">
    <template v-for="v in data.files" :key="v">
      <li>
        <router-link :to="`/contents/${v}/0`">{{ v }}</router-link>
      </li>
    </template>
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
      data.value = (await res.json()) as ViewerData;
      return;
    }
  } catch (e) {
    console.log(e);
  }
  data.value = null;
};
main();
</script>
