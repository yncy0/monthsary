<!-- Navigation Items list, scale the navigation here for futures references.
For more infor: visit https://ui3.nuxt.dev/getting-started -->

<script setup lang="ts">
const client = useSupabaseClient();
const user = useSupabaseUser();

const open = ref<boolean>(false)

const items = ref([
  {
    label: "Home",
    to: "/",
    onSelect: () => onClose(),
    children: [
      {
        label: "Go back",
        icon: "i-lucide-arrow-up",
        slot: "components",
        onSelect: () => scrollTo("#hero"),
      },
      {
        label: "Gallery",
        icon: "i-lucide-brain",
        slot: "components",
        onSelect: () => scrollTo("#gallery"),
      },
      {
        label: "Roadmap",
        icon: "i-lucide-map",
        slot: "components",
        onSelect: () => scrollTo("#roadmap"),
      },
    ],
  },

  {
    label: "Gallery",
    to: "gallery",
    onSelect: () => onClose(),
  },

  {
    label: "Roadmap",
    to: "roadmap",
    onSelect: () => onClose(),
  },
]);

//TODO: Refactor on a seperate file
function scrollTo(s: string) {
  nextTick(() => {
    const element = document.querySelector(s) as HTMLElement;
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  });
}

function onClose() {
  open.value = false;
  console.log("CLICKING ", open.value)
}

async function signOut() {
  const { error } = await client.auth.signOut();
  if (error) throw error;
}
</script>

<!--It uses NavigationMenu from NuxtUI, for more infor visit: https://ui3.nuxt.dev/components/navigation-menu-->
<template>
  <header class="fixed top-0 left-0 w-full z-30 bg-mocha-crust">
    <div class="flex flex-row items-center p-2 gap-4 justify-between lg:justify-around">
      <!-- Icon -->
      <img src="/favicon-16x16.png" width="32" height="32" >

      <!-- Navigation Menu -->
      <UNavigationMenu
        :items="items"
        orientation="horizontal"
        variant="link" 
        content-orientation="vertical"
        class="gap-2 hidden lg:flex"
      />

      <!-- Auth Button -->
      <span class="hidden lg:flex">
        <UButton v-if="!user" label="Login" variant="subtle" to="/login" />
        <UButton v-else label="Logout" variant="subtle" @click="signOut" />
      </span>

      <!-- Hamburger Menu -->
      <USlideover v-model:open="open" class="flex lg:hidden">
        <UButton icon="i-lucide-align-justify" variant="ghost" />

      <!-- Navigation Menu -->
        <template #body>
          <UNavigationMenu
            :items="items"
            orientation="vertical"
            variant="link" 
            content-orientation="vertical"
            class="gap-2"
          />
        </template>
      </USlideover>
    </div>
    <USeparator />
  </header>
</template>
