<script setup lang="ts">
const { userAuth } = useAuthState()
</script>

<template>
  <UModal title="Let me ask you some questions">
    <UButton
      v-if="userAuth"
      label="Let's Get Started"
      variant="subtle" 
      size="sm"
      trailing-icon="i-lucide-arrow-right"
      class="px-4 py-2"
      :block="false" />

    <template #body>
      <form v-if="userAuth" class="flex flex-col gap-3">
        <UFormField label="How's your day?">
          <UInput placeholder="Answer Please" class="w-full" :ui="{ base: 'py-3' }" />
        </UFormField>
        <UFormField label="Where do you want to go out?">
          <UInput placeholder="SM MOA, Boracay, Baguio, etc..." class="w-full" :ui="{ base: 'py-3' }" />
        </UFormField>
        <UFormField label="Where do you want to eat?">
          <UInput placeholder="Vikings, Jollibee, McDonalds, etc..." class="w-full" :ui="{ base: 'py-3' }" />
        </UFormField>
        <UFormField label="What time do we meet?">
          <UInput placeholder="00:00" class="w-full" :ui="{ base: 'py-3' }" />
        </UFormField>

        <USeparator class="py-4" />

        <UButton label="Submit" variant="subtle" class="flex justify-center" />
      </form>
    </template>
  </UModal>
</template>
