<script setup lang="ts">
import type { Database } from "~/types/database.types.ts";

const { userAuth } = useAuthState();

// FIXME: bad design

const moodSpectrum = ref<string | undefined>(undefined);
const place = ref<string | undefined>(undefined);
const foodEstablishment = ref<string | undefined>(undefined);
const meetingTime = ref<string | undefined>(undefined);

async function onFormSubmit() {
  let insert

  try {
    if (moodSpectrum.value && place.value && foodEstablishment.value && meetingTime.value) {
      insert = await useInsertDatePlan(
        moodSpectrum.value,
        place.value,
        foodEstablishment.value,
        meetingTime.value,
      );
    }
  } catch (error) {
    console.error(error)
  }
  return insert;
}

async function onFormSubmitTest() {
  const client = useSupabaseClient<Database>()

  try {
    const { data, error } = await client
      .from("date_plan")
      .insert(
        {
          mood_spectrum: moodSpectrum.value,
          place: place.value,
          food_establishment: foodEstablishment.value,
          meeting_time: meetingTime.value,
        }
      )
      .select()

    if (data) console.log(data)

    if (error) throw error

  } catch (error) {
    console.error(error)
  }

}
</script>

<template>
  <form v-if="userAuth" class="flex flex-col gap-3" @submit.prevent="onFormSubmit">
    <UFormField label="How's your day?">
      <UInput v-model="moodSpectrum" placeholder="Answer Please" class="w-full" :ui="{ base: 'py-3' }" />
    </UFormField>
    <UFormField label="Where do you want to go out?">
      <UInput v-model="place" placeholder="SM MOA, Boracay, Baguio, etc..." class="w-full" :ui="{ base: 'py-3' }" />
    </UFormField>
    <UFormField label="Where do you want to eat?">
      <UInput
v-model="foodEstablishment" placeholder="Vikings, Jollibee, McDonalds, etc..." class="w-full"
        :ui="{ base: 'py-3' }" />
    </UFormField>
    <UFormField label="What time should we met?">
      <UInput v-model="meetingTime" type="time" />
    </UFormField>

    <USeparator class="py-4" />

    <UButton type="submit" label="Submit" variant="subtle" class="flex justify-center" />
  </form>
</template>
