<script setup lang="ts">
definePageMeta({
  layout: "login",
  colorMode: "dark",
});

const supabase = useSupabaseClient();
const email = ref("");

const toast = useToast();

async function signInWithOtp() {
  const { error } = await supabase.auth.signInWithOtp({
    email: email.value,
    options: {
      shouldCreateUser: false,
      emailRedirectTo: "http://localhost:3000/confirm",
    },
  });
  if (error) {
    toast.add({
      title: "You are not my Girlfriend!",
      description: "My girlfriend are the only one who has the account for it",
      color: "error",
    });
  } else {
    toast.add({
      title: "Email Verification",
      description:
        "Check your email if you receive comfirmation provided by Supabase",
      color: "success",
    });
  }
}
</script>

<template>
  <TresCanvas window-size alpha>
    <TresPerspectiveCamera :position="[0, 0, 20]" />
    <TresAmbientLight />
    <TresDirectionalLight :position="[0, 5, 0]" />
    <Suspense>
      <NyaNyaOrangeWhite />
    </Suspense>
    <OrbitControls />
  </TresCanvas>
  <form
    class="flex flex-col justify-center items-center w-screen h-screen gap-5"
    @submit.prevent="signInWithOtp"
  >
    <UFormField label="Account">
      <UInput
        v-model="email"
        type="email"
        placeholder="Please enter your email account"
        class="w-2xs"
        :ui="{ base: 'bg-mocha-mantle py-2' }"
      />
    </UFormField>
    <UButton type="submit" variant="subtle" label="Login" />
    <UButton label="Back" variant="ghost" to="/" />
  </form>
</template>
