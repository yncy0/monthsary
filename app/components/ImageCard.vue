<script setup lang="ts">
const props = defineProps<{
  img: string;
  date?: string;
}>()

const dateStamp = computed(() => {
  return props.date ? props.date : "Date not found"
})

</script>

<template>
  <div
    class="flex flex-col bg-white relative w-[280px] px-2 pt-2 pb-10 items-center justify-center -rotate-z-12 gap-10 z-50 right-32">
    <img :src="props.img" class="size-[280px]">
    <p>{{ dateStamp }}</p>
  </div>
</template>

<style scoped>
p {
  color: black
}
</style>
