<template>
  <section class="flex w-full max-w-screen flex-col-reverse lg:flex-row">
    <section class="lg:w-1/2 lg:h-dvh flex flex-col gap-2 justify-center text-center lg:text-start lg:px-24">
      <h1
        class="text-4xl lg:text-7xl text-transparent bg-clip-text heading-gradient font-bold drop-shadow-latte-secodary">
        Gallery
      </h1>
      <p class="text-sm lg:text-lg px-5 lg:px-0">
        This page contains images of our journey. But this silly cat has a habit
        to not complete his sorcery on inserting images.
      </p>
    </section>
    <NyaNyaWizard />
  </section>
</template>

<style scoped>
.heading-gradient {
  background-image: linear-gradient(to top,
      var(--color-latte-secondary),
      var(--color-latte-lavender));
}
</style>
