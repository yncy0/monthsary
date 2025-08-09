<!-- <NuxtImg/> component under the hood -->

<script setup lang='ts'>
const props = defineProps<{
  imageUrl: string
}>()
</script>

<template>
  <NuxtImg :src="props.imageUrl" alt="image" />
</template>
