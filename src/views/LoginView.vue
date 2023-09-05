<script setup lang="ts">
import RightArrow from '@/components/RightArrow.vue'
</script>
<template>
  <div class="container">
    <div class="mt-6 md:mt-15 mx-auto max-w-[416px]">
      <img class="mx-auto mb-4 h-8 w-8" src="@/assets/images/sparkler.png" alt="logo" />
      <h1 class="mb-4 text-center text-2xl font-bold tracking-[1.2px]">會員登入</h1>
      <form class="mb-6 flex flex-col font-noto md:mb-8">
        <label class="mb-2" for="account">帳號</label>
        <input
          class="mb-4 border bg-inherit py-2 pl-4 text-xl"
          type="text"
          name="account"
          id="account"
          placeholder="請輸入帳號"
        />
        <label class="mb-2" for="password">密碼</label>
        <input
          class="border bg-inherit py-2 pl-4 text-xl"
          type="text"
          name="password"
          id="password"
          placeholder="請輸入密碼"
        />
      </form>
      <button
        class="flex w-full items-center justify-center bg-black py-4 font-noto text-lg font-bold text-white md:py-2 md:text-xl"
      >
        登入
        <RightArrow class="ms-1 w-[18px] fill-white md:w-5"></RightArrow>
      </button>
    </div>
  </div>
</template>

<style></style>
