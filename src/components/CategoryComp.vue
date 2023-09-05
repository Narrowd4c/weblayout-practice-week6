<script setup lang="ts">
import { ref } from 'vue'

const category = ref([
  { img: './src/assets/images/cate01.svg', name: '演出' },
  { img: './src/assets/images/cate02.svg', name: '聯誼' },
  { img: './src/assets/images/cate03.svg', name: '展覽' },
  { img: './src/assets/images/cate04.svg', name: '美食' },
  { img: './src/assets/images/cate05.svg', name: '戶外' }
])
</script>

<template>
    <div class="mt-4 lg:mt-8">
    <div
      class="mb-8 flex h-[350px] flex-col bg-[url('@/assets/images/event/13.jpg')] bg-cover bg-center bg-no-repeat object-cover pb-6 text-center text-white lg:mb-12 lg:min-h-[590px]"
    >
      <p class="ps-10 pt-4 text-left text-[32px] lg:ps-12 lg:pt-12 lg:text-6xl">
        19 MAY <span class="block md:inline">2023</span>
      </p>
      <h3 class="mb-4 mt-auto text-2xl font-bold">隔牆有耳-沒有草東的派對</h3>
      <p class="hidden lg:block">
        你各位聽團仔們！每次想跟朋友一起聽草東專場卻每一次都搶不到票？「草東沒有派對」永遠都是「草東沒有門票」！<br />
        帶上啤酒、野餐墊，讓我們在Live House外面一起開場「沒有草東的派對」吧！
      </p>
    </div>
    <ul class="-mx-2 flex flex-wrap gap-y-2 font-bold xl:-mx-3 [&>*]:px-2 xl:[&>*]:px-3">
      <li class="w-1/3 xl:w-1/6" v-for="{ name, img } in category" :key="name">
        <a class="block border-2 py-5 text-center xl:py-[35px]" href="#">
          <img :src="img" :alt="name" class="mx-auto mb-2 w-10 object-cover xl:mb-3 xl:w-20" />
          <p class="xl:text-2xl">{{ name }}</p>
        </a>
      </li>
      <li class="w-1/3 xl:w-1/6">
        <a
          class="text-primary border-2  flex h-full items-center justify-center bg-black text-center text-2xl leading-tight xl:text-5xl"
          href="#"
        >
          探索<br />更多
        </a>
      </li>
    </ul>
  </div>
</template>