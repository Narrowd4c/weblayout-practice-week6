<script setup lang="ts">
import { ref } from 'vue'
import HomeTitle from './HomeTitle.vue'
import RightArrow from './RightArrow.vue'
const events = ref([
  {
    date: '19 MAY 2023',
    img: './src/assets/images/event/01.jpg',
    title: '邪典電影派對——房間',
    article:
      '你有聽說過「大災難家」裡面的主角 Tommy Wiseau 製作的「史上最爛的電影」——房間嗎？在美國甚至演變成一種邪教、一種派對的形式，在電影播放的對著螢幕丟湯匙都...',
    tag: '社群活動',
    status: '開賣中'
  },
  {
    date: '23 MAY 2023',
    img: './src/assets/images/event/02.jpg',
    title: '怪舞俱樂部',
    article:
      '覺得自己的舞蹈細胞異於常人？每次隨著音樂起舞身邊的人總是露出無法理解的表情？來這裡就對了！來參加這場一起跳舞的聚會，也會在每一次的舞會中選出舞步最怪的...',
    tag: '演出',
    status: '檢視活動'
  },
  {
    date: '30 MAY 2023',
    img: './src/assets/images/event/03.jpg',
    title: '哈利波特馬拉松',
    article:
      '每次身邊有人開啟哈利波特的話題，自己永遠都是聽不懂的那個麻瓜？看大家在討論魁地奇、用咒語鬥法的時候，自己永遠是陪笑的那個人？穿好你的法袍、帶上你的法杖...',
    tag: '聯誼',
    status: '開賣中'
  },
  {
    date: '12 June 2023',
    img: './src/assets/images/event/04.jpg',
    title: '皮卡丘排球大賽',
    article:
      '還記得小時候玩的小遊戲嗎？總是有朋友吹噓自己獨孤求敗、只求一敗？是時候該展現真正的實力了！本活動採用瑞士制賽程，以絕對公平的方式進行，是時候該證明自己...',
    tag: '遊戲競賽',
    status: '開賣中'
  },
  {
    date: '25 June 2023',
    img: './src/assets/images/event/05.jpg',
    title: '酒精路跑',
    article:
      '身邊總是有對自己酒量有高度自信的朋友嗎？拉著他/她一起來參加酒精路跑吧！一起拍下第一杯直到倒下為止的照片，一起喝遍市區內各家極具品味的酒吧。',
    tag: '社群活動',
    status: '開賣中'
  },
  {
    date: '9 July 2023',
    img: './src/assets/images/event/06.jpg',
    title: '展覽——我的房間',
    article:
      '每個人的房間總會有那麼一兩個能代表自己的物事，或許是再平凡不過的牙刷、馬克杯，或許有那些別人的房間從沒出現過的小東西——那些能定義自己的特別的東西。',
    tag: '展覽',
    status: '開賣中'
  }
])
</script>
<template>
  <HomeTitle :title="'RECENT'" :subtitle="'近期活動'"></HomeTitle>
  <ul class="lg:mb-15 -mx-3 flex flex-wrap gap-y-6 lg:gap-y-12">
    <li
      v-for="{ date, title, img, tag, article, status } in events"
      class="px-3 md:w-1/2 xl:w-1/3"
      :key="date + title"
    >
      <div class="group/img flex h-full flex-col">
        <p class="border-b-3 mb-4 pb-2 text-3xl lg:mb-3 lg:pb-3 lg:text-5xl">{{ date }}</p>
        <div class="mb-2 overflow-hidden lg:mb-3">
          <img
            class="h-[210px] w-full object-cover transition duration-700 ease-out group-hover/img:scale-150 lg:h-[255px]"
            :src="img"
            :alt="title"
          />
        </div>
        <h3 class="mb-2 text-lg font-bold lg:mb-3 lg:text-2xl">{{ title }}</h3>
        <p class="mb-4 flex-1 font-noto">
          {{ article }}
        </p>
        <div class="border-y-3 flex items-center py-[10px] font-bold lg:py-3">
          <img
            class="me-1 h-auto w-6 object-contain"
            src="@/assets/images/sparkler.png"
            alt="sparker"
          />
          <a href="#" class="hover:underline">{{ tag }}</a>
          <a class="group relative ms-auto flex items-center gap-x-1"
            >{{ status }}<RightArrow width="16" fill="black"></RightArrow>
            <div
              class="group-hover:bg-primary absolute left-[-10px] top-[-3.5px] z-[-1] h-[29px] w-[29px] rounded-full bg-none"
              aria-hidden="true"
            ></div
          ></a>
        </div>
      </div>
    </li>
  </ul>
</template>
