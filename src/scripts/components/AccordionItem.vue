<template>
  <div>
    <details :open="opened">
      <summary
          class="items-center flex flex-shrink-0 justify-between space-x-2 hover:cursor-pointer py-6"
          @click="toggleSVG"
      >
        <span class="text-left">
          <span :class="summaryClasses">{{ title }}</span>
        </span>

        <svg viewBox="0 0 20 24" class="h-6 w-6 transition-all duration-200 shrink-0 " :class="showDetails ? 'rotate-180' : 'rotate-0'">
          <path d="m18.838 12.744-8.057 8.057V.78H9.22v20.02l-8.057-8.057-1.074 1.074L10 23.73l9.912-9.912z" fill="#D52E7F" fill-rule="nonzero"/>
        </svg>

      </summary>

      <slot />
    </details>
  </div>
</template>

<script>
export default {
  name: "accordion-item",
  props: {
    title: {
      type: String,
      required: true,
    },
    summaryClasses: {
      type: String,
      default: "text-primary text-xl font-bold",
      required: false,
    },
    opened: {
      type: Boolean,
      required: false,
    },
  },
  data() {
    return {
      showDetails: false,
    }
  },
  methods: {
    toggleSVG() {
      this.showDetails = !this.showDetails
    },
  },
}
</script>

