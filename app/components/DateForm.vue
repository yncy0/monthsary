<script setup lang="ts">
const { userAuth } = useAuthState();

// FIXME: bad design

const moodSpectrum = ref<string | undefined>(undefined);
const place = ref<string | undefined>(undefined);
const foodEstablishment = ref<string | undefined>(undefined);
const meetingTime = ref<string | undefined>(undefined);

async function onFormSubmit() {
  let insert

  if (moodSpectrum.value && place.value && foodEstablishment.value && meetingTime.value) {
    insert = useInsertDatePlan(
      moodSpectrum.value,
      place.value,
      foodEstablishment.value,
      meetingTime.value,
    );

  }
  return insert;
}
</script>

<template>
  <form v-if="userAuth" class="flex flex-col gap-3" @submit.prevent="onFormSubmit">
    <UFormField label="How's your day?">
      <UInput v-model="moodSpectrum" placeholder="Answer Please" class="w-full" :ui="{ base: 'py-3' }" />
    </UFormField>
    <UFormField v-model="place" label="Where do you want to go out?">
      <UInput placeholder="SM MOA, Boracay, Baguio, etc..." class="w-full" :ui="{ base: 'py-3' }" />
    </UFormField>
    <UFormField v-model="foodEstablishment" label="Where do you want to eat?">
      <UInput placeholder="Vikings, Jollibee, McDonalds, etc..." class="w-full" :ui="{ base: 'py-3' }" />
    </UFormField>
    <UFormField v-model="meetingTime" label="What time should we met?">
      <TimeFieldRoot 
        id="birthday" 
        v-slot="{ segments }"
        class="w-36 flex select-none bg-white items-center rounded-lg shadow-sm text-center text-green10 border p-1 data-[invalid]:border-red-500">
        <template v-for="item in segments" :key="item.part">
          <TimeFieldInput v-if="item.part === 'literal'" :part="item.part">
            {{ item.value }}
          </TimeFieldInput>
          <TimeFieldInput 
            v-else 
            :part="item.part"
            class="rounded p-0.5 focus:outline-none focus:shadow-[0_0_0_2px] focus:shadow-black data-[placeholder]:text-green9">
            {{ item.value }}
          </TimeFieldInput>
        </template>
      </TimeFieldRoot>
    </UFormField>

    <USeparator class="py-4" />

    <UButton type="submit" label="Submit" variant="subtle" class="flex justify-center" />
  </form>
</template>
