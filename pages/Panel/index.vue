<template>
  <div class="bg-[#f2f2f2] md:ml-28">
    <div class="flex flex-col justify-center items-center p-2 md:p-0">
      <div class="bg-white md:w-4/5 lg:w-3/5 h-full p-5 rounded-xl flex flex-col lg:flex-row items-center my-5" v-for="i in 10">
        <div>
          <img class="object-cover rounded-xl" src="/img/clock-product-1.png" alt="production" draggable="false">
        </div>
        <div class="flex flex-col lg:ml-10 w-full lg:space-y-10 lg:pb-20 mt-5 lg:mt-auto space-y-5">
          <span class="text-lg font-medium capitalize text-gray-700">Reprizo Gold Dial Watch</span>
          <span class="font-medium capitalize flex justify-between text-gray-700">
            Discount 
            <span class="line-through">$600.00</span>
          </span>
          <span class="font-medium capitalize flex justify-between text-gray-700">
            Price 
            <span>$500.00</span>
          </span>
          <div class="flex justify-between items-center">
            <button type="submit" class="btn btn-error text-error-content">
              Delete Product
            </button>
            <button type="submit" class="btn btn-primary text-primary-content">
              Order Completion
            </button>
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