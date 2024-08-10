<template>
  <div class="bg-gray-20 w-full">
    <div class="flex flex-col items-center p-2 md:p-0">

      <div class="pt-10 w-full h-full flex flex-col p-1 md:p-5">
        <span class="text-2xl text-balance font-bold text-black capitalize">Dashboard Product</span>
        <div class="flex justify-between">
          <span class="capitalize text-slate-500 text-pretty">Welcome To Online Shop Me</span>
        </div>
        <div class="flex gap-5 mt-10">
          <NuxtLink to="/profile/" class="text-indigo-500 capitalize font-medium">product</NuxtLink>
          <NuxtLink to="/profile/order" class="text-slate-500 capitalize font-medium">
            Order history
          </NuxtLink>
        </div>
        <div class="flex flex-col gap-2 w-full items-center justify-center py-4 pt-10">
          <div
            class="bg-base-300 text-base-content w-11/12 max-w-lg xl:max-w-xl p-5 rounded-xl flex flex-col lg:flex-row items-center"
            v-for="i in 10">
            <div class="w-full md:w-2/3">
              <img class="object-cover rounded-xl" src="/img/clock-product-1.png" alt="production" draggable="false">
            </div>
            <div class="flex flex-col lg:ml-10 w-full lg:space-y-10 lg:pb-20 mt-5 lg:mt-auto space-y-5">
              <span class="text-xl font-medium capitalize">Reprizo Gold Dial Watch</span>
              <span class="font-medium capitalize flex justify-between">
                Discount
                <span class="line-through">$600.00</span>
              </span>
              <span class="font-medium capitalize flex justify-between">
                Price
                <span>$500.00</span>
              </span>
              <div class="flex justify-between items-center">
                <button type="submit" class="btn btn-error">
                  Delete Product
                </button>
                <button type="submit" class="btn btn-primary">
                  Order Completion
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import AuthenticationMiddleware from '~/middlewares/AuthenticationMiddleware';

definePageMeta({
  layout: 'profile',
  middleware: AuthenticationMiddleware
})

onMounted(() => {
  const nuxtApp = useNuxtApp()

  console.log(nuxtApp.$useUserCookie.getUserData())
})
</script>