<script setup>
import {store} from "@scripts/store"
</script>

<template>
  <button
      @click="store.toggleNavigation()"
      class=" z-60 my-4 flex h-6 w-6 lg:h-[56px] lg:w-[56px] items-center justify-center "
  >
    <span class="sr-only">Toggle navigation</span>
    <span v-if="!store.navigationOpen" class="text-primary ">
      <svg viewBox="0 0 40 40" class="fill-current h-6 lg:h-[40px] w-auto"><path
          d="M0 38.667c0-.737.597-1.334 1.333-1.334h37.334a1.333 1.333 0 0 1 0 2.667H1.333A1.333 1.333 0 0 1 0 38.667ZM0 20c0-.736.597-1.333 1.333-1.333h37.334a1.333 1.333 0 1 1 0 2.666H1.333A1.333 1.333 0 0 1 0 20ZM0 1.333C0 .597.597 0 1.333 0h37.334a1.333 1.333 0 0 1 0 2.667H1.333A1.333 1.333 0 0 1 0 1.333Z"
          fill="#D52E7F" fill-rule="nonzero"/></svg>
          </span>
    <span v-else class="text-white">
            <svg
                viewBox="0 0 44 44"
                class="h-6 w-auto fill-current lg:h-[40px]"
                xmlns="http://www.w3.org/2000/svg"
            >
              <path
                  d="M43.386 2.761 41.238.613 22 19.851 2.761.613.613 2.761l19.238 19.24L.613 41.237l2.148 2.148 19.24-19.238 19.237 19.238 2.148-2.148L24.148 22z"
                  fill-rule="nonzero"
              />
            </svg>
          </span>
  </button>
</template>
