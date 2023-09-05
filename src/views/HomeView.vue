<script setup lang="ts">
import CategoryComp from '../components/CategoryComp.vue'
import EventsComp from '../components/EventsComp.vue'
import OnlineEvent from '../components/OnlineEvent.vue'
import AlbumsComp from '@/components/AlbumsComp.vue';
import ConcatComp from '@/components/ConcatComp.vue';
</script>

<template>
  <div class="container">
    <CategoryComp></CategoryComp>
    <EventsComp></EventsComp>
    <OnlineEvent></OnlineEvent>
  </div>
  <AlbumsComp></AlbumsComp>
  <ConcatComp></ConcatComp>
  <div class="border-t-3 text-center py-12 lg:py-15 font-bold">
    <p class="mb-3 lg:mb-4 md:text-3xl">此刻打盹，你將做夢；此刻學習，你將圓夢</p>
    <p class="text-sm md:text-lg">——我也不知道誰說的</p>
  </div>
</template>

<style>

</style>