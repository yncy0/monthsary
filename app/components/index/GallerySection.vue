<script setup lang="ts">
const { userAuth } = useAuthState();

const items = ref([]);
const isUser = ref(false);

onMounted(async () => {
  const results = await useFetchMemories();

  if (!userAuth.value) {
    items.value = getMockGallery();
    isUser.value = false;
  } else {
    items.value = results;
    isUser.value = true;
  }
});
</script>

<template>
  <section
    id="gallery"
    class="flex flex-col w-full h-dvh items-center gap-10 pb-20 pt-10"
  >
    <h2 class="drop-shadow-latte-primary text-3xl lg:text-5xl">Memories</h2>
    <div class="px-4">
      <p class="text-sm lg:text-lg">
        Here lies our precious memories that we did together, from the beginning
        until now.
        <span>
          <NuxtLink class="text-latte-primary" href="/gallery"
            >See more...
          </NuxtLink>
        </span>
      </p>
    </div>
    <div class="w-full max-w-screen lg:w-[1000px] px-4">
      <GalleryCarousel :items="items" />
    </div>
  </section>
</template>
