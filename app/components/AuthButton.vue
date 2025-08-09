<script setup lang="ts">
const client = useSupabaseClient();
const { userAuth } = useAuthState();

async function signOut() {
  const { error } = await client.auth.signOut();
  if (error) throw error;

  window.location.reload();
}
</script>

<template>
  <UButton v-if="!userAuth" label="Login" variant="subtle" to="/login" />
  <UButton v-else label="Logout" variant="subtle" @click="signOut" />
</template>
