<template>
  <div class="min-w-7">
    <svg :class="active ? 'fill-primary' : 'fill-base-content'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        d="M5 11h8v2H5v3l-5-4l5-4zm-1 7h2.708a8 8 0 1 0 0-12H4a9.985 9.985 0 0 1 8-4c5.523 0 10 4.477 10 10s-4.477 10-10 10a9.985 9.985 0 0 1-8-4" />
    </svg>
  </div>
</template>

<script setup>
const props = defineProps({
  active: {
    type: Boolean,
    default: false
  }
})
</script>