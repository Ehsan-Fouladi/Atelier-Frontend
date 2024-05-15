<template>
  <div class="bg-[#f2f2f2] md:ml-28">
    <div class="flex flex-col justify-center items-center my-5 p-2 md:p-0">
      <div class="bg-white md:w-4/5 lg:w-3/5 h-full p-5 rounded-xl flex flex-col lg:flex-row items-center my-5" v-for="i in 10">
        <div>
          <img class="object-cover rounded-xl" src="/img/clock-product-1.png" alt="production" draggable="false">
        </div>
        <div class="flex flex-col lg:ml-10 w-full lg:space-y-10 lg:pb-20 mt-5 lg:mt-auto space-y-5">
          <span class="text-lg font-medium capitalize">Reprizo Gold Dial Watch</span>
          <span class="font-medium capitalize flex justify-between">Discount <span class="line-through">$600.00</span></span>
          <span class="font-medium capitalize flex justify-between">Price <span>$500.00</span></span>
          <div class="flex justify-between items-center">
            <NuxtLink to="" class="text-xs sm:text-base font-semibold sm:font-medium px-4 py-3 bg-[#f73164] hover:bg-[#ff1751] rounded-xl text-white capitalize cursor-pointer transition-all duration-300">
              delete product
            </NuxtLink>
            <NuxtLink to="" class="text-xs sm:text-base font-semibold sm:font-medium px-4 py-3 bg-[#6f4ef2] hover:bg-[#572dff] rounded-xl text-white capitalize cursor-pointer transition-all duration-300">
              Order completion
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
definePageMeta({
    layout: 'panel',
})
</script>