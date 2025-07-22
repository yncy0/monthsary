<script setup lang="ts">
const { userAuth } = useAuthState();
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
      :block="false" 
    />
    <template #body>
      <DateForm />
    </template>
  </UModal>
</template>
