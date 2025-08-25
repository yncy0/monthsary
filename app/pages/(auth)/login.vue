<script setup lang="ts">
import type { FormSubmitEvent } from "@nuxt/ui";

definePageMeta({
  layout: "login",
  colorMode: "dark",
});

const supabase = useSupabaseClient();
const configUrl = useRuntimeConfig().public.supabaseRedirect

const toast = useToast();

const state = reactive({email: ''})


async function signInWithOtp(event: FormSubmitEvent<LoginSchema>) {
  const { error } = await supabase.auth.signInWithOtp({
    email: event.data.email,
    options: {
      shouldCreateUser: false,
      emailRedirectTo: configUrl,
    },
  });
  if (error) {
    toast.add({
      title: "Inavild Account!",
      description:
        "Your account is not registered, only whitelisted accounts are capable of loggin in.",
      color: "error",
    });
  } else {
    toast.add({
      title: "Email Verification",
      description: "Check your email if you receive comfirmation.",
      color: "success",
    });
  }
}
</script>

<template>
  <NyaNyaOrangeWhite/>
  <div class="border-gradient rounded-lg w-full lg:w-[720px]">
    <UForm
      :schema="loginSchema"
      :state="state"
      class="flex flex-col justify-center items-center gap-10 lg:gap-5 px-12 py-20 lg:p-20 z-50 bg-mocha-base rounded-md text-center"
      @submit.prevent="signInWithOtp"
    >
      <div class="flex flex-col gap-2">
        <h1 class="text-2xl font-bold text-latte-primary drop-shadow-latte-primary">Hello There!</h1>
        <p>Welcome back my pookie!</p>
      </div>
      <UFormField label="Email Account" name="email" class="w-full">
        <UInput
          v-model="state.email"
          type="email"
          placeholder="Please enter your email account"
          class="w-full"
          :ui="{ base: 'bg-mocha-mantle p-3' }"
        />
      </UFormField>
      <div class="flex flex-col gap-5 w-full">
        <UButton
          type="submit"
          variant="subtle"
          label="Login"
          class="w-full lg:p-4 flex flex-col items-center"
        />
        <UButton
          label="Back"
          variant="ghost"
          to="/"
          class="w-full lg:p-4 flex flex-col items-center"
        />
      </div>
    </UForm>
  </div>
</template>
