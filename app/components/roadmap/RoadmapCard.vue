<script setup lang="ts" generic="T">
import type { MockRoadmap } from '#imports';

const props = defineProps<MockRoadmap>();
</script>

<template>
  <div class="flex flex-row justify-between">
    <ImageCard :img="props.img" :date="props.date" />
    <UIcon v-if="props.done" name="i-lucide-paw-print" class="size-[150px] z-10 text-latte-peach left-10 top-24 relative -rotate-z-12"/>
  </div>
  <div
    class="relative max-w-screen w-full lg:w-[1000px] bg-mocha-base flex flex-col items-center text-center p-20 bottom-56">
    <div class="flex flex-col gap-5 px-32">
      <h2 class="text-3xl font-bold">{{ props.title }}</h2>
      <p class="text-sm lg:text-lg">{{ props.description }}</p>
    </div>
  </div>
</template>
