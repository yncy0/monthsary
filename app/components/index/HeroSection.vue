<script setup lang="ts">
const { userAuth } = useAuthState();

const year: string = "2024"
const month: string = "11"
const day: string = "30"

const monthsary = monthlyIncrement(year, month, day)
</script>

<template>
  <section
    id="hero"
    class="flex flex-col items-center justify-center w-full h-dvh"
  >
    <section class="flex flex-col gap-2 z-10">
      <h1
        class="text-4xl md:text-5xl lg:text-6xl text-transparent heading-gradient bg-clip-text font-bold text-center"
      >
        Happy {{monthsary}}th
        <span class="text-transparent bg-clip-text"> Monthsary </span>
        <br>
        <span
          v-if="!userAuth"
          class="text-transparent heading-gradient-span bg-clip-text"
        >
          My Pookie!
        </span>
        <span
          v-else
          class="text-transparent heading-gradient-span bg-clip-text"
        >
          My Bebi!
        </span>
      </h1>
      <p
        v-if="userAuth"
        class="pb-6 px-4 text-sm md:text-md lg:text-lg text-center"
      >
        I hope you are doing well my love! May our relationship lasts forever.
      </p>
      <p v-else class="pb-6 px-4 text-sm md:text-md lg:text-lg text-center">
        It seems that you are not login yet, feel free to scroll anon or login
        to your account
      </p>
    </section>
    <DateFormModal />
  </section>
</template>

<style scoped>
.heading-gradient {
  background-image: linear-gradient(
    to right,
    var(--color-latte-yellow),
    var(--color-latte-primary),
    var(--color-latte-secondary)
  );

  .heading-gradient-span {
    background-image: linear-gradient(
      to right,
      var(--color-latte-primary),
      var(--color-latte-secondary)
    );
  }
}
</style>
