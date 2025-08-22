<script setup lang="ts">
const props = defineProps<{
  isReversed: boolean;
  imgSource: string;
  title: string;
  description: string;
}>();

const flexDir = ref(props.isReversed ? "row-reverse" : "row");
</script>

<template>
  <div 
    class="flex flex-wrap flex-row justify-between gap-5 lg:gap-40 lg:px-56"
    :style="{ flexDirection: flexDir }"
  >
    <img :src="props.imgSource" class="flex flex-1 max-w-screen h-[320px] lg:size-[360px] rounded-lg" >
    <div class="flex flex-col justify-center flex-1 lg:w-[360px]">
      <HeadingGlow :level="3" :text="props.title" class="text-2xl lg:text-4xl text-start" />
      <p class="text-start">{{ props.description }}</p>
    </div>
  </div>
</template>
