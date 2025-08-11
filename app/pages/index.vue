<script setup>
definePageMeta({
  colorMode: "dark"
})

onMounted(() => {
  monthlyIncrement()  
})

</script>

<template>
  <main>
    <NyaNyaGang />
    <HeroSection />

    <GallerySection />

    <RoadmapSection />
  </main>
</template>
