<script setup lang="ts">
import HomeTitle from './HomeTitle.vue'
import RightArrow from './RightArrow.vue'
import { ref } from 'vue'
const tags = ref(['競賽', '科技', '有趣'])
const disabled = ref(false)
</script>

<template>
  <HomeTitle :title="'ONLINE'" :subtitle="'線上活動'"></HomeTitle>
  <section class="mb-15  md:flex gap-x-6">
    <div
      class="mb-4 md:mb-0 min-h-[158px] w-full bg-[url('@/assets/images/event/online.jpg')] bg-[center_30%] bg-no-repeat md:w-1/2"
    ></div>
    <div class="w-full md:w-1/2">
      <h3 class="mb-2 md:mb-4  text-lg md:text-3xl font-bold">切特居批踢</h3>
      <ul class="flex gap-x-2">
        <li v-for="tag in tags" :key="tag" class="hover:text-white hover:bg-black text-sm md:text-base font-bold border border-l-4 ">
          <a href="#" class="block px-4 md:px-6 py-1">{{ tag }}</a>
        </li>
      </ul>
      <article class="my-3 md:my-8 font-noto">
        最近網路上很流行的AI程式
        ChatGPT，可以用來聊天或是查詢、整理各種資料，不同的應用方式如雨後春筍般冒出來。
        這個活動讓大家把自己最有特色的使用方法提出來讓大家參考，也會投票出最有趣的用法。<br />
        該讓其他人知道自己使用 ChatGPT 的姿勢才是最特別的那個了！
      </article>
      <button
        :disabled="disabled"
        class="group  disabled:bg-gray-500 disabled:text-white font-bold w-full flex items-center justify-center bg-black py-4 md:py-2 font-noto md:text-xl md:leading-[29px]  text-white"
        ><p class="me-1 group-enabled:group-hover:text-primary">查看活動詳情</p>
        <RightArrow  class="fill-white group-enabled:group-hover:fill-primary"  width="20" 
      /></button>
    </div>
  </section>
</template>
