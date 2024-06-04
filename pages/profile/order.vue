<template>
  <div class="bg-gray-20 w-full">
    <div class="flex flex-col items-center p-2 md:p-0">

      <div class="pt-10 w-full h-full flex flex-col p-1 md:p-5">
        <span class="text-2xl text-balance font-bold text-black capitalize">Order history</span>
        <div class="flex justify-between">
          <span class="capitalize text-slate-500 text-pretty">Welcome To Online Shop Me</span>
        </div>
        <div class="flex gap-5 mt-10">
          <NuxtLink to="/profile/" class="text-slate-500 capitalize font-medium">product</NuxtLink>
          <NuxtLink to="/profile/order" class="text-indigo-500 capitalize font-medium">
            Order history
          </NuxtLink>
        </div>

        <div class="w-full h-full flex items-center pt-8">
          <div class="bg-white w-full h-[30rem] p-4 rounded-2xl overflow-auto space-y-3">

            <div class="border border-black p-4 rounded-xl flex flex-col overflow-hidden" v-for="i in 12">
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-2">
                  <svg class="w-6 h-6 flex-none mt-0.5" fill="none" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="12" fill="#A7F3D0"></circle>
                    <path d="M18 8l-8 8-4-4" stroke="#047857" stroke-width="2"></path>
                  </svg>
                  <span class="text-lg font-medium text-black">Delivered</span>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 text-black">
                  <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
              </div>
              <div class="pt-5 flex-col md:flex-row flex md:items-center gap-2 md:gap-x-10">
                <div class="space-x-2">
                  <span class="text-gray-500">Date:</span>
                  <span class="text-gray-700 font-medium">2024.6.6</span>
                </div>
                <div class="space-x-2">
                  <span class=" text-gray-500">Order Code:</span>
                  <span class="text-gray-700 font-medium">297250292</span>
                </div>
                <div class="space-x-2">
                  <span class=" text-gray-500">Total Price:</span>
                  <span class="text-gray-700 font-medium">$100.0</span>
                </div>
              </div>
              <div class="pt-4 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="size-6 text-yellow-500" viewBox="0 0 24 24"><path fill="currentColor" d="m12 14.475l1.925 1.15q.275.175.538-.012t.187-.513l-.5-2.175l1.7-1.475q.25-.225.15-.537t-.45-.338l-2.225-.175l-.875-2.075q-.125-.3-.45-.3t-.45.3l-.875 2.075l-2.225.175q-.35.025-.45.338t.15.537l1.7 1.475l-.5 2.175q-.075.325.188.513t.537.012zM8.65 20H6q-.825 0-1.412-.587T4 18v-2.65L2.075 13.4q-.275-.3-.425-.662T1.5 12t.15-.737t.425-.663L4 8.65V6q0-.825.588-1.412T6 4h2.65l1.95-1.925q.3-.275.663-.425T12 1.5t.738.15t.662.425L15.35 4H18q.825 0 1.413.588T20 6v2.65l1.925 1.95q.275.3.425.663t.15.737t-.15.738t-.425.662L20 15.35V18q0 .825-.587 1.413T18 20h-2.65l-1.95 1.925q-.3.275-.662.425T12 22.5t-.737-.15t-.663-.425z"/></svg>
                <span class="font-medium text-black ml-2">Total points <span class="font-normal ml-1">.47</span></span>
              </div>
              <div class="flex border mt-5 rounded-lg">
                <img class="size-32 object-cover scale-110 hover:scale-105 duration-500 delay-100" src="/img/clock-product-1.png" alt="product" draggable="false">
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: 'profile'
})
</script>