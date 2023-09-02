<script setup lang="ts">
import { RouterView } from 'vue-router'
import HeaderComp from "./components/HeaderComp.vue"

</script>

<template>
  <HeaderComp></HeaderComp>
  <RouterView />
  <footer class="border-t-3 border-black py-6 md:py-8 text-center">
    <p class="text-sm md:text-base">© 7TAO七逃. All Rights Reserved</p>
  </footer>
</template>

<style>

</style>
