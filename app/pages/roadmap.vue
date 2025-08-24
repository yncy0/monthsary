<script setup lang="ts" generic="T">
import type { MockRoadmap } from "#imports"

definePageMeta({
  colorMode: "dark"
})

const { userAuth } = useAuthState();

const items = ref<MockRoadmap | T>([]);

onMounted(async () => {
  const results = await useFetchRoadmap();

  if (!userAuth.value) {
    items.value = getMockRoadmap();
  } else {
    items.value = results
  }
})
</script>

<template>
  <main class="flex flex-col items-center justify-center mt-32 pb-32">
    <GeneratedStars />
    <section class="text-center gap-5 flex flex-col mb-5">
      <h1 class="text-5xl lg:text-6xl text-latte-primary font-bold drop-shadow-latte-primary">Roadmap</h1>
      <p class="text-sm lg:text-lg">
        A roadmap of our milestones and accomplishments as partner
      </p>
    </section>
    <div v-if="!userAuth">
      <RoadmapCard
        v-for="(item, index) in items"
        :key="index"
        :img="item.img"
        :title="item.title"
        :description="item.description"
        :done="item.done"
      />
    </div>
    <div v-else>
      <RoadmapCard
        v-for="(item, index) in items"
        :key="index"
        :img="item.images.image_url"
        :title="item.title"
        :description="item.description"
        :done="item.done"
        :date="item.date"
      />
    </div>
  </main>
</template>
