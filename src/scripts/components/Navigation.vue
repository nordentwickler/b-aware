<script setup>
import {store} from "@scripts/store";
import Logo from "@components/Logo.vue";
import ThemeSwitcher from "@components/ThemeSwitcher.vue";
import NavigationButton from "@components/NavigationButton.vue";

const props = defineProps({
  siteUrl: String,
})
</script>

<template>
  <header class="py-6 lg:py-12 z-50 relative" :class="store.navigationOpen ? 'bg-primary' : 'bg-transparent'">
    <div class="container max-w-6xl">
      <div class="flex justify-between items-center">
        <ThemeSwitcher></ThemeSwitcher>
        <Logo :site-url="props.siteUrl"/>
        <NavigationButton></NavigationButton>
      </div>
    </div>
  </header>

  <div
      v-cloak
      class="fixed bottom-0 left-0 right-0 h-screen top-0 z-40 w-full transform overflow-x-auto bg-primary transition-all duration-300 ease-in-out"
      :class="store.navigationOpen ? 'translate-y-0' : '-translate-y-full'"
  >
    <div class="px-6 md:px-20 lg:px-40 pt-32 h-screen pb-48 flex flex-col justify-between lg:pt-[270px]">
      <slot/>
    </div>
  </div>
</template>
