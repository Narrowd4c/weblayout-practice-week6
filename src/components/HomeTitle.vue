<script setup lang="ts">
const props = defineProps(['title', 'subtitle'])
</script>

<template>
    <div
    class="border-3 container mb-6 mt-8 flex items-center px-3 py-4 md:mb-8 md:mt-12 md:px-8 md:py-6"
  >
    <h2 class="text-2xl lg:text-6xl">{{ props.title }}</h2>
    <p class="ms-auto font-bold lg:text-3xl">{{ props.subtitle }}</p>
  </div>
</template>
