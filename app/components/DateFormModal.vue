<script setup lang="ts">
const { userAuth } = useAuthState();

const open = ref<boolean>(false);

console.log(open.value)

watch(open, async() => {
  if (open.value === false) {
    console.log("It is supposed to be closed")
  } else {
    console.log("It is open")
  }
})

function testOpenValue() {
  console.log(open.value)
}

</script>

<template>
  <UModal v-model:open="open" title="Let me ask you some questions">
    <UButton 
      v-if="userAuth" 
      label="Let's Get Started"
      variant="subtle"
      size="sm"
      trailing-icon="i-lucide-arrow-right"
      class="px-4 py-2" 
      :block="false" 
      @click.prevent="testOpenValue"
    />
    <template #body>
      <DateForm v-model="open"/>
    </template>
  </UModal>
</template>
