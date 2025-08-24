<script setup lang="ts">
const { userAuth } = useAuthState();
</script>

<template>
  <section
    id="hero"
    class="flex flex-col items-center justify-center w-full h-dvh"
  >
    <HeroTitle />
    <section class="flex flex-col gap-2 z-10">
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
