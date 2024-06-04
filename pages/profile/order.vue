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
          <div class="bg-white w-full h-[30rem] p-4 rounded-2xl overflow-auto">

            <div>
              <table class="w-full border-collapse bg-white text-left text-sm text-gray-500">
                <thead class="bg-gray-50">
                  <tr>
                    <th class="px-6 py-4 font-medium text-gray-900">Product</th>
                    <th class="px-6 py-4 font-medium text-gray-900">Date</th>
                    <th class="px-6 py-4 font-medium text-gray-900 text-nowrap">Order Code</th>
                    <th class="px-6 py-4 font-medium text-gray-900">Price</th>
                    <th class="px-6 py-4 font-medium text-gray-900">Count</th>
                    <th class="px-6 py-4 font-medium text-gray-900">Status</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-gray-100 border-t border-gray-100" v-for="i in 12">
                  <tr class="hover:bg-gray-50">
                    <td class="px-6 py-4 font-medium text-gray-700 text-nowrap w-80">
                      <NuxtLink to="" class="hover:bg-indigo-500 hover:text-white px-2 py-2 rounded-2xl">
                        Reprizo Gold Dial Watch
                      </NuxtLink>
                    </td>
                    <td class="px-6 py-4 font-medium text-gray-700 text-base">2024.4.6</td>
                    <td class="px-6 py-4 font-medium text-gray-700">427602029</td>
                    <td class="px-6 py-4 font-medium text-gray-700">$100.5</td>
                    <td class="px-6 py-4 font-medium text-gray-700 pl-10">2</td>
                    <td class="px-6 py-4">
                      <!-- error -->
                      <svg class="w-6 h-6 flex-none mt-0.5" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#FECDD3"></circle><path d="M8 8l8 8M16 8l-8 8" stroke="#B91C1C" stroke-width="2"></path></svg>
                      <!-- success -->
                      <svg class="w-6 h-6 flex-none mt-0.5" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#A7F3D0"></circle><path d="M18 8l-8 8-4-4" stroke="#047857" stroke-width="2"></path></svg>
                    </td>
                  </tr>
                </tbody>
              </table>
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