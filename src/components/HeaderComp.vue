<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { ref } from 'vue'

const menuHidden = ref(true)
function url() { 
  let url = new URL(`../assets/images/`, import.meta.url).href
  console.log(url)
}
url()
</script>

<template>
  <div class="border-b-3 md:py-6">
    <header class="flex flex-wrap md:container">
      <div class="mx-[25px] flex flex-1 items-center py-3 md:m-0 md:py-0">
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
        <div class="flex flex-1 border-2 sm:max-w-[335px]">
          <input
            class="w-full bg-inherit pl-6 placeholder:text-base placeholder:text-[#878787]"
            type="text"
            placeholder="探索活動"
          />
          <div class="cursor-pointer bg-black p-3 leading-none text-white md:p-4">
            <i class="icofont-search-1"></i>
          </div>
        </div>
      </div>
      <button
        @click="menuHidden = !menuHidden"
        class="me-3 ms-auto self-center rounded border-2 px-3 py-1 md:m-0 md:hidden"
      >
        <span class="material-symbols-outlined w-[30px] align-middle font-bold">menu</span>
      </button>

      <ul
        :class="[{ hidden: menuHidden }]"
        class="ms-auto w-full items-center gap-6 border-t-2 px-3 py-6 font-yeseva text-[18px] md:flex md:w-min md:border-t-0 [&>*:hover]:cursor-pointer [&>*:hover]:text-[#9C9E18]"
      >
        <li class="mb-4 md:mb-0">
          <RouterLink to="login"><i class="icofont-ui-file mr-1"></i>REGISTER</RouterLink>
        </li>
        <li>
          <RouterLink to="login"><i class="icofont-ui-user mr-1"></i>LOGIN</RouterLink>
        </li>
      </ul>
    </header>
  </div>
</template>
