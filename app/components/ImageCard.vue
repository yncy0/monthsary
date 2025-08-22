<script setup lang="ts">
const props = defineProps<{
  img: string;
  date?: string;
}>()
</script>

<template>
  <div class="flex flex-col bg-white relative w-[280px] px-2 pt-2 pb-14 items-center justify-center top-56 right-28 -rotate-z-12">
    <img :src="props.img" class="size-[280px]">
    <p>{{ props.date }}</p>
  </div>
</template>
