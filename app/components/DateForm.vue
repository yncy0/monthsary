<script setup lang="ts">
const { userAuth } = useAuthState();
</script>

<template>
  <form v-if="userAuth" class="flex flex-col gap-3">
    <UFormField label="How's your day?">
      <UInput
        placeholder="Answer Please"
        class="w-full"
        :ui="{ base: 'py-3' }"
      />
    </UFormField>
    <UFormField label="Where do you want to go out?">
      <UInput
        placeholder="SM MOA, Boracay, Baguio, etc..."
        class="w-full"
        :ui="{ base: 'py-3' }"
      />
    </UFormField>
    <UFormField label="Where do you want to eat?">
      <UInput
        placeholder="Vikings, Jollibee, McDonalds, etc..."
        class="w-full"
        :ui="{ base: 'py-3' }"
      />
    </UFormField>
    <UFormField label="What time do we meet?">
      <UInput placeholder="00:00" class="w-full" :ui="{ base: 'py-3' }" />
    </UFormField>

    <USeparator class="py-4" />

    <UButton label="Submit" variant="subtle" class="flex justify-center" />
  </form>
</template>
