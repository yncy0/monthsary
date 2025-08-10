<script setup>
definePageMeta({
  colorMode: "dark"
})
</script>

<template>
  <main class="flex flex-col gap-64">
    <GalleryHero class="z-10" />
    <section class="flex flex-col gap-2 z-20">
      <GalleryImages />
    </section>
  </main>
</template>
