<script setup lang="ts" generic="T">
import type { MockRoadmap } from '#imports';

const props = defineProps<MockRoadmap>();
</script>

<template>
  <ImageCard :img="props.img" :date="props.date"/>
  <div class="relative max-w-screen w-full lg:w-[1000px] bg-mocha-base flex flex-col items-center text-center p-20 bottom-56">
    <div class="flex flex-col gap-5 px-32">
      <h2 class="text-3xl font-bold">{{ props.title }}</h2>
      <p class="text-sm lg:text-lg">{{ props.description }}</p>
    </div>
  </div>
</template>
