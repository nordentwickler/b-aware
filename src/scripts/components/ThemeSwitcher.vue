<script setup>
import {ref, onMounted} from 'vue';
import {store} from '@scripts/store';

const isDarkMode = ref(false);

const toggleTheme = () => {
  isDarkMode.value = !isDarkMode.value;
  localStorage.theme = isDarkMode.value ? 'dark' : 'light';
  updateTheme();
};

const updateTheme = () => {
  document.documentElement.classList.toggle('dark', isDarkMode.value);
};

onMounted(() => {
  // On page load or when changing themes, best to add inline in `head` to avoid FOUC
  if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    isDarkMode.value = true;
  }

  updateTheme();
});
</script>
<template>
  <button class="theme-switcher z-60" @click="toggleTheme"
  :class="store.navigationOpen ? 'text-white dark:text-white hover:text-secondary' : ' text-secondary dark:text-white hover:text-primary dark:hover:text-primary'">
    <span class="sr-only">Toggle Website Theme</span>
    <svg viewBox="0 0 40 40" class="fill-current h-6 w-6 lg:h-10 lg:w-10">
      <path
          d="M20 40c-2.767 0-5.367-.525-7.8-1.575-2.433-1.05-4.55-2.475-6.35-4.275-1.8-1.8-3.225-3.917-4.275-6.35C.525 25.367 0 22.767 0 20c0-2.767.525-5.367 1.575-7.8C2.625 9.767 4.05 7.65 5.85 5.85c1.8-1.8 3.917-3.225 6.35-4.275C14.633.525 17.233 0 20 0c2.767 0 5.367.525 7.8 1.575 2.433 1.05 4.55 2.475 6.35 4.275 1.8 1.8 3.225 3.917 4.275 6.35C39.475 14.633 40 17.233 40 20c0 2.767-.525 5.367-1.575 7.8-1.05 2.433-2.475 4.55-4.275 6.35-1.8 1.8-3.917 3.225-6.35 4.275C25.367 39.475 22.767 40 20 40Zm1-3c4.567-.333 8.375-2.1 11.425-5.3C35.475 28.5 37 24.6 37 20s-1.525-8.5-4.575-11.7C29.375 5.1 25.567 3.333 21 3v34Z"
          fill-rule="nonzero"/>
    </svg>
  </button>
</template>