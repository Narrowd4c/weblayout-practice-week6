<script setup lang="ts">
import { RouterView } from 'vue-router'
import HeaderComp from "./components/HeaderComp.vue"
import FooterComp from "./components/FooterComp.vue"
</script>

<template>
  <HeaderComp></HeaderComp>
  <RouterView />
  <FooterComp></FooterComp>
</template>

<style>
  .js{
    justify-self: end;
  }
</style>
