<script setup lang="ts">
import { ref } from 'vue'
import RightArrow from './RightArrow.vue'
const contacts = ref([
  { icon: 'icofont-ui-email', title: '7tao.event@gmail.com' },
  { icon: 'icofont-phone', title: '09123123123' },
  { icon: 'icofont-facebook', title: '7TAO七逃' }
])
</script>
<template>
  <div class="lg:my-15 container mb-12 mt-8 flex flex-col gap-y-6 lg:flex-row">
    <div class="border-2 lg:w-1/2 lg:border-r-0">
      <h2 class="border-b-2 py-4 pl-3 text-3xl font-bold lg:pl-8">#FOLLOW US</h2>
      <div class="px-3 py-4 font-noto lg:p-8">
        <p class="mb-4 leading-[23px] lg:mb-8">
          想第一時間獲得新奇有趣的活動資訊？<br />
          追蹤我們的社群吧！<br />
          也歡迎你聯繫我們，提供好玩有趣的活動企劃。
        </p>
        <ul class="space-y-4">
          <li v-for="{ icon, title } in contacts" :key="title">
            <a href="#" class="hover:underline flex items-center gap-x-4"
              ><i :class="icon" class="bg-black p-2 text-white"></i>{{ title }}</a
            >
          </li>
        </ul>
      </div>
    </div>
    <div class="border-2 lg:w-1/2">
      <h2 class="border-b-2 py-4 pl-3 text-3xl font-bold lg:pl-8"># SUBSCRIBE US</h2>
      <div class="px-3 py-4 font-noto lg:p-8 lg:pb-14">
        <p class="mb-4 leading-[23px] lg:mb-8">
          訂閱電子報送折價券！<br />定期精選文章資訊及最新優惠資訊， <br />還不通通給我訂閱起來？
        </p>
        <form>
          <input
            class="form-input w-full border-2 bg-inherit py-4 pl-6"
            type="email"
            placeholder="輸入Email"
          />
        </form>
      </div>
      <button
        class="group flex w-full items-center justify-center gap-x-1 bg-black py-4 text-white lg:py-2"
      >
        <p class="group-hover:text-primary font-noto text-xl font-bold">確認訂閱</p>
        <RightArrow class="group-hover:fill-primary fill-white" width="20"></RightArrow>
      </button>
    </div>
  </div>
</template>
