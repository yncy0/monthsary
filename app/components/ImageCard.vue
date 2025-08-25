<script setup lang="ts">
const props = defineProps<{
  img: string;
  date?: string;
  done: boolean;
}>()

const dateStamp = computed(() => {
  return props.date ? props.date : "Date not found"
})

</script>

<template>
  <!-- Floating Icon -->
  <div class="flex flex-row justify-end">
    <UIcon
      v-if="props.done" name="i-lucide-paw-print"
      class="size-[75px] z-10 text-latte-peach -rotate-z-12 relative left-9" 
    />
  </div>

  <!-- Image Card -->
  <div
    class="flex flex-col bg-white w-[280px] px-2 pt-2 pb-10 items-center justify-center gap-10 relative bottom-10">
    <img :src="props.img" class="size-[280px]">
    <p>{{ dateStamp }}</p>
  </div>
</template>

<style scoped>
p {
  color: black
}
</style>
