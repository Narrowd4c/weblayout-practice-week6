<script setup lang="ts">
import HomeTitle from './HomeTitle.vue'
import RightArrow from './RightArrow.vue'
import { ref } from 'vue'
const tags = ref(['競賽', '科技', '有趣'])
</script>

<template>
  <HomeTitle :title="'ONLINE'" :subtitle="'線上活動'"></HomeTitle>
  <section class="mb-15  md:flex gap-x-6">
    <div
      class="mb-4 md:mb-0 min-h-[158px] w-full bg-[url('./src/assets/images/event/online.jpg')] bg-[center_30%] bg-no-repeat md:w-1/2"
    ></div>
    <div class="w-full md:w-1/2">
      <h3 class="mb-2 md:mb-4  text-lg md:text-3xl font-bold">切特居批踢</h3>
      <ul class="flex gap-x-2">
        <li v-for="tag in tags" :key="tag" class="text-sm md:text-base font-bold border border-l-4 px-4 md:px-6 py-1">
          {{ tag }}
        </li>
      </ul>
      <article class="my-3 md:my-8 font-noto">
        最近網路上很流行的AI程式
        ChatGPT，可以用來聊天或是查詢、整理各種資料，不同的應用方式如雨後春筍般冒出來。
        這個活動讓大家把自己最有特色的使用方法提出來讓大家參考，也會投票出最有趣的用法。<br />
        該讓其他人知道自己使用 ChatGPT 的姿勢才是最特別的那個了！
      </article>
      <a
        href="#"
        class="font-bold flex items-center justify-center bg-black py-4 md:py-2 font-noto md:text-xl/5  text-white"
        ><p class="me-1">查看活動詳情</p>
        <RightArrow :width="20" :color="'white'"
      /></a>
    </div>
  </section>
</template>
