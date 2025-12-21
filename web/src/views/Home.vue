<template>
  <div class="min-h-screen">
    <Navigation />
    <div class="flex items-center justify-center px-3 py-6 sm:p-4 md:p-6">
      <div class="w-full max-w-2xl space-y-4 sm:space-y-6 sm:py-8">
        <!-- Hero -->
        <div class="text-center">
          <h1 class="text-foreground text-2xl leading-tight font-extrabold sm:text-4xl md:text-5xl lg:text-6xl">
            {{ t("home.hero.title") }}
          </h1>
          <p class="text-muted-foreground mt-3 text-sm sm:mt-4 sm:text-base md:text-lg">
            {{ t("home.hero.subtitle") }}<br />
            {{ t("home.hero.description") }}<br />
            <i18n-t keypath="home.hero.description2" tag="span">
              <template #emphasize>
                <span class="font-semibold">{{ t("home.hero.emphasize") }}</span>
              </template>
            </i18n-t>
          </p>
        </div>

        <!-- Feature Card -->
        <div
          class="group border-muted bg-card hover:bg-muted/50 relative rounded-xl border p-4 sm:rounded-2xl sm:p-5 md:p-6"
        >
          <h2 class="mb-3 text-lg font-bold sm:mb-4 sm:text-xl">{{ t("home.features.title") }}</h2>
          <ul class="text-muted-foreground list-disc space-y-1.5 pl-5 text-sm sm:space-y-2 sm:text-base">
            <li>{{ t("home.features.items.0") }}</li>
            <li>{{ t("home.features.items.1") }}</li>
            <li>{{ t("home.features.items.2") }}</li>
          </ul>
        </div>

        <!-- Use Case -->
        <div
          class="group border-muted bg-card hover:bg-muted/50 relative rounded-xl border p-4 sm:rounded-2xl sm:p-5 md:p-6"
        >
          <h2 class="mb-2 text-lg font-bold sm:text-xl">{{ t("home.useCases.title") }}</h2>
          <div
            class="text-muted-foreground group-hover:text-foreground mt-2 flex flex-col gap-2 text-sm sm:gap-2.5 sm:text-base"
          >
            <p>
              <span class="font-semibold">{{ t("home.useCases.student.label") }}</span>
              {{ t("home.useCases.student.description") }}
            </p>
            <p>
              <span class="font-semibold">{{ t("home.useCases.business.label") }}</span>
              {{ t("home.useCases.business.description") }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Navigation from "@/components/Navigation.vue";

import { useI18n } from "vue-i18n";
const { t } = useI18n();
</script>

<style scoped></style>
