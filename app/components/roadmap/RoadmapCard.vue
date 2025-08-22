<script setup lang="ts" generic="T">
import type { MockRoadmap } from '#imports';

const props = defineProps<MockRoadmap>();
</script>

<template>
  <ImageCard :img="props.img" />
  <div class="max-w-screen w-full lg:w-[1000px] bg-mocha-base flex flex-col items-center text-center p-20">
    <div class="z-10 flex flex-col gap-5 px-32">
      <h2 class="text-3xl font-bold">{{ props.title }}</h2>
      <p class="text-sm lg:text-lg">{{ props.description }}</p>
    </div>
  </div>
</template>
