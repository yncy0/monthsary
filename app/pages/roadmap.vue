<script setup lang="ts" generic="T">
import type { MockRoadmap } from "#imports"

definePageMeta({
  colorMode: "dark"
})

const items = ref<MockRoadmap[] | T[]>([]);

onMounted(async () => {
  if (items.value) {
    items.value = getMockRoadmap();
  }
})
</script>

<template>
  <main class="flex flex-col items-center justify-center mt-32 pb-32">
    <GeneratedStars />
    <section class="text-center mb-10">
      <h1 class="text-5xl lg:text-6xl text-latte-primary font-bold">Roadmap</h1>
      <p class="text-sm lg:text-lg">
        A roadmap of our milestones and accomplishments as partner
      </p>
    </section>
    <section class="px-4">
      <RoadmapCard
        v-for="(item, index) in items"
        :key="index"
        :title="item.title"
        :description="item.description"
        class="mt-5 lg:mt-10"
      />
    </section>
  </main>
</template>

