<script setup lang="ts">
import MarqueeComp from './MarqueeComp.vue'
import { ref } from 'vue'
import album01 from "@/assets/images/album/01.jpg"
import album02 from "@/assets/images/album/02.jpg"
import album03 from "@/assets/images/album/03.jpg"
import album04 from "@/assets/images/album/04.jpg"


const albums = ref([
  { imgUrl: album01, tag: '社群活動', title: '無聲派對-閉閉嘴dancing' },
  { imgUrl: album02, tag: '藝文活動', title: '拯救老店大作戰' },
  { imgUrl: album03, tag: '自我覺察', title: '內觀修行-部落篇' },
  { imgUrl: album04, tag: '聯誼活動', title: '賞櫻野餐' }
])
</script>

<template>
  <MarqueeComp />
  <div class="lg:my-15 container my-12">
    <ul
      class="-mx-3 flex flex-wrap justify-center gap-y-12 [&>li:nth-child(3)]:-rotate-2 [&>li:nth-child(even)]:rotate-2"
    >
      <li
        class="w-2/3 min-w-[291px] px-3 md:w-1/2 xl:w-1/4"
        v-for="{ imgUrl, title, tag } in albums"
        :key="title"
      >
        <div class="relative border-2 font-bold">
          <figure>
            <img class="h-[274px] w-full object-cover p-3 lg:p-4" :src="imgUrl" :alt="title" />
            <figcaption class="pb-8 pl-3 text-lg lg:pb-12 lg:pl-4">{{ title }}</figcaption>
          </figure>
          <p
            class="absolute left-1/2 top-0 w-fit -translate-x-1/2 -translate-y-1/2 rotate-[-4deg] bg-white px-4 py-2 text-center"
          >
            {{ tag }}
          </p>
        </div>
      </li>
    </ul>
  </div>
  <MarqueeComp />
</template>
