<template>
  <div class="bg-[#f2f2f2] md:ml-28">
    <div class="flex flex-col items-center p-2 md:p-0">

      <div class="pt-10 w-full h-full flex flex-col p-1 md:p-5">
        <span class="text-2xl text-balance font-bold text-black">Profile</span>
        <div class="flex justify-between">
          <span class="capitalize text-slate-500 text-pretty">Welcome To Online Shop Me</span>
          <span class="capitalize text-slate-500 text-nowrap">
            <NuxtLink to="/panel/profile">profile</NuxtLink> > <NuxtLink to="/panel/reset-password">reset password</NuxtLink>
          </span>
        </div>
        <div class="flex gap-5 mt-10">
          <NuxtLink to="/panel/profile" class="text-slate-500 capitalize font-medium">Profile</NuxtLink>
          <NuxtLink to="/panel/reset-password" class="text-indigo-500 capitalize font-medium">Reset Password</NuxtLink>
        </div>

        <div class="flex justify-center items-center flex-row w-full h-full mt-20 md:mb-auto">
          <div class="lg:w-2/3 w-full">
            <span class="capitalize font-semibold text-xl text-black">reset password</span>
            <form method="post" class="p-5 bg-white rounded-xl w-full mt-5 space-y-5">
              <div>
                <label for="old-password" class="capitalize text-slate-500 font-medium">old password</label>
                <input type="password" name="old-password" class="w-full px-4 py-3 border-2 focus:border-indigo-500 outline-none rounded-lg mt-3 bg-white text-black">
              </div>
              <div>
                <label for="new-password" class="capitalize text-slate-500 font-medium">new password</label>
                <input type="password" name="new-password" class="w-full px-4 py-3 border-2 focus:border-indigo-500 outline-none rounded-lg mt-3 bg-white text-black">
              </div>
              <div>
                <label for="repetition-new-password" class="capitalize text-slate-500 font-medium">
                  repetition new password
                </label>
                <input type="password" name="repetition-new0password" class="w-full px-4 py-3 border-2 focus:border-indigo-500 outline-none rounded-lg mt-3 bg-white text-black">
              </div>
              
              <div class="w-full pt-3">
                  <button type="submit" class="btn btn-order">
                    Save
                  </button>
              </div>
            </form>
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