<script setup lang="ts">
import { RouterLink } from 'vue-router'
// defineProps<{
//   msg: string
// }>()
</script>

<template>
  <div class="border-b-[3px] border-black  md:py-6 relative">
    <header class="md:container flex flex-wrap">
      <div class="py-3 md:py-0 ms-3 md:ms-0 flex items-center">
        <RouterLink to="/" class="me-4 flex items-center lg:mr-12"
          ><img
            class="me-4 h-10 w-10 md:h-[53px] md:w-[53px]"
            src="@/assets/images/logo.png"
            alt="logo"
          />
          <h2 class="hidden items-center font-yeseva text-[2rem] md:flex">
            7TAO<span class="ms-1 font-noto text-base font-bold">活動訂票網</span>
          </h2></RouterLink
        >
        <div class="flex-1 flex border-2 border-black lg:w-[335px]">
          <input
            class="placeholder:text-base placeholder:text-[#878787] grow bg-inherit pl-6 "
            type="text"
            placeholder="探索活動"
          />
          <div class="bg-black p-3 leading-none text-white md:p-4">
            <i class="icofont-search-1"></i>
          </div>
        </div>
      </div>
      <button class="me-3 md:m-0 ms-auto self-center rounded border-2 border-black px-3 py-1 md:hidden">
        <span class="material-symbols-outlined w-[30px] align-middle font-bold">menu</span>
      </button>

      <ul class="border-black border-t-2 w-full px-3 py-6 ms-auto md:flex items-center gap-6 font-yeseva text-[18px] md:w-min ">
        <li class="mb-4 md:mb-0">
          <a href="#"><i class="icofont-ui-file mr-1"></i>REGISTER</a>
        </li>
        <li>
          <a href="#"><i class="icofont-ui-user mr-1"></i>LOGIN</a>
        </li>
      </ul>
    </header>
  </div>
</template>

<style></style>
