<script setup>
import {Navigation} from "swiper/modules"
import {Swiper} from "swiper/vue"
import {defineComponent} from "vue"

import "swiper/css"

const props = defineProps({
  id: String,
  nextId: String,
  prevId: String,
  length: Number,
})

defineComponent({
  Swiper
})

const modules = [Navigation]
</script>

<template>
  <div
      class="relative"
      :id="props.id"
  >

    <swiper
        :slides-per-view="1"
        :modules="modules"
        :loop="true"
        :watch-overflow="true"
        :navigation="{
        nextEl: '#' + props.nextId,
        prevEl: '#' + props.prevId,
        disabledClass: 'opacity-30',
      }"
        slides-per-view="auto"
        :space-between="30"
        :centered-slides="true"
    >
      <slot></slot>
    </swiper>


    <button
        v-if="props.length > 1"
        :id="props.prevId"
        class="gallery-prev cursor:pointer flex flex-shrink-0 items-center justify-center rounded-full border-white hover:bg-white hover:text-primary border-2 left-0 lg:left-auto lg:right-1/2 transform lg:-translate-x-[360px] absolute bottom-0 p-3.5"
        aria-label="Previous"
    >
      <svg
          viewBox="0 0 52 45"
          class="h-7 w-7 fill-current"
          xmlns="http://www.w3.org/2000/svg"
      >
        <path
            d="M51.062 20.781H7.02L24.744 3.056 22.381.693.574 22.5l21.807 21.806 2.363-2.363L7.02 24.218h44.043z"
            fill-rule="nonzero"
        />
      </svg>
      <span class="sr-only">Previous</span>
    </button>


    <button
        v-if="props.length > 1"
        :id="props.nextId"
        class="gallery-next cursor:pointer sm:mr-0 flex-shrink-0 flex items-center justify-center hover:bg-white hover:text-primary rounded-full border-white border-2 right-0 lg:right-auto lg:left-1/2 transform lg:translate-x-[360px] absolute bottom-0 p-3.5"
        aria-label="Next"
    >
      <svg
          viewBox="0 0 52 45"
          class="h-7 w-7 fill-current"
          xmlns="http://www.w3.org/2000/svg"
      >
        <path
            d="m29.62.693-2.364 2.363L44.98 20.781H.938v3.437H44.98L27.256 41.943l2.363 2.363L51.425 22.5z"
            fill-rule="nonzero"
        />
      </svg>
      <span class="sr-only">Next</span>
    </button>
  </div>
</template>

<style>
.swiper {
  z-index: auto;
}

.swiper-slide,
.swiper-wrapper,
.swiper-backface-hidden .swiper-slide {
  backface-visibility: hidden;
  transform: none;
  z-index: auto;
}
</style>
