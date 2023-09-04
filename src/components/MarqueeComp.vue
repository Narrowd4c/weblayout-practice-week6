<template>
  <div class="text-primary overflow-hidden font-bold flex whitespace-nowrap bg-black py-6 text-3xl">
    <ul class="scroll flex border">
      <li v-for="i in 6" :key="i">活動集錦・ALBUMS・</li>
    </ul>
    <ul class="scroll2 flex border" aria-hidden="true">
      <li v-for="i in 6" :key="i">活動集錦・ALBUMS・</li>
    </ul>
  </div>
</template>

<style>
.scroll {
  animation: scroll 20s linear 0s infinite;
}
.scroll2 {
  animation: scroll2 20s linear -10s infinite;
}
@keyframes scroll {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(-100%);
  }
}
@keyframes scroll2 {
  from {
    transform: translateX(0%);
  }
  to {
    transform: translateX(-200%);
  }
}
</style>
