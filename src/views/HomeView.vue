<script setup lang="ts">
import CategoryComp from '../components/CategoryComp.vue'
import EventsComp from '../components/EventsComp.vue'
import OnlineEvent from '../components/OnlineEvent.vue'
import AlbumsComp from '@/components/AlbumsComp.vue';
</script>

<template>
  <div class="container">
    <CategoryComp></CategoryComp>
    <EventsComp></EventsComp>
    <OnlineEvent></OnlineEvent>
  </div>
  <AlbumsComp></AlbumsComp> 
</template>

<style>

</style>