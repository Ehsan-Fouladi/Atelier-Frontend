<template>
  <div class="bg-[#f2f2f2] md:ml-28">
    <div class="flex flex-col items-center p-2 md:p-0">

      <div class="pt-10 w-full h-full flex flex-col p-1 md:p-5">
        <span class="text-2xl text-balance font-bold text-black">Profile</span>
        <div class="flex justify-between">
          <span class="capitalize text-slate-500 text-pretty">Welcome To Online Shop Me</span>
          <span class="capitalize text-slate-500 text-nowrap">
            <NuxtLink to="/panel/profile">profile</NuxtLink> > <NuxtLink to="/panel/profile">profile</NuxtLink>
          </span>
        </div>
        <div class="flex gap-5 mt-10">
          <NuxtLink to="/panel/profile" class="text-indigo-500 capitalize font-medium">Profile</NuxtLink>
          <NuxtLink to="/panel/reset-password" class="text-slate-500 capitalize font-medium">Reset Password</NuxtLink>
        </div>
        <div class="flex flex-col lg:flex-row w-full h-full mt-10 gap-5 overflow-hidden">
          <div class="lg:w-1/2 w-full">
            <span class="capitalize font-semibold text-xl text-black">User Profile</span>
            <form method="post" class="p-5 bg-white rounded-xl w-full mt-5 flex flex-col">
              <div>
                <label for="full-name" class="capitalize text-slate-500 font-medium">full name</label>
                <input type="text" name="full-name" class="w-full px-4 py-3 border-2 focus:border-indigo-500 outline-none rounded-lg mt-3 text-black bg-white">
              </div>
              <div class="flex flex-col justify-around mt-5 space-y-4">
                <div class="flex items-center">
                  <img class="object-cover w-14" src="https://enftx-html.vercel.app/images/profile/3.png" alt="profile" draggable="false">
                  <span class="text-lg font-bold text-balance pl-3 text-black">Jannatul Maowa</span>
                </div>
                <div>
                  <input type="file" class="text-black">
                </div>
                <div class="w-full pt-3">
                  <button type="submit" class="btn btn-order">
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div class="lg:w-1/2 w-full">
            <span class="capitalize font-semibold text-xl text-black">Update Profile</span>
            <form method="post" class="p-5 bg-white rounded-xl w-full mt-5 space-y-5">
              <div>
                <label for="email" class="capitalize text-slate-500 font-medium">email</label>
                <input type="text" name="email" class="w-full px-4 py-3 border-2 focus:border-indigo-500 outline-none rounded-lg mt-3 text-black bg-white">
              </div>
              <div>
                <label for="password" class="capitalize text-slate-500 font-medium">password</label>
                <input type="password" name="password" class="w-full px-4 py-3 border-2 focus:border-indigo-500 outline-none rounded-lg mt-3 text-black bg-white">
              </div>
              <div class="w-full pt-3">
                <button type="submit" class="btn btn-order">
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
        <div class="flex w-full h-full mt-12 md:mb-auto">
          <div class="w-full">
            <span class="capitalize font-semibold text-xl text-black">Personal Information</span>
            <form method="post" class="p-5 bg-white rounded-xl w-full mt-5 space-y-5 flex flex-col items-center">
              <div class="flex flex-col lg:flex-row w-full h-full lg:gap-10 gap-y-7">
                <div class="w-full">
                  <label for="email" class="capitalize text-slate-500 font-medium">email</label>
                  <input type="email" name="email" class="w-full px-4 py-2 border-2 focus:border-indigo-500 outline-none rounded-lg mt-3 text-black bg-white">
                </div>
                <div class="w-full">
                  <label for="phone number" class="capitalize text-slate-500 font-medium">phone number</label>
                  <input type="number" name="phone number" class="w-full px-4 py-2 border-2 focus:border-indigo-500 outline-none rounded-lg mt-3 text-black bg-white">
                </div>
              </div>
              <div class="flex flex-col lg:flex-row w-full h-full lg:gap-10 gap-y-7">
                <div class="w-full">
                  <label for="codepost" class="capitalize text-slate-500 font-medium">code post</label>
                  <input type="number" name="codepost" class="w-full px-4 py-2 border-2 focus:border-indigo-500 outline-none rounded-lg mt-3 text-black bg-white">
                </div>
                <div class="w-full">
                  <label for="address" class="capitalize text-slate-500 font-medium">address</label>
                  <input type="text" name="address" class="w-full px-4 py-2 border-2 focus:border-indigo-500 outline-none rounded-lg mt-3 text-black bg-white">
                </div>
              </div>
              <div class="flex flex-col lg:flex-row w-full h-full lg:gap-10 gap-y-7">
                <div class="w-full">
                  <label for="city" class="capitalize text-slate-500 font-medium">city</label>
                  <input type="text" name="city" class="w-full px-4 py-2 border-2 focus:border-indigo-500 outline-none rounded-lg mt-3 text-black bg-white">
                </div>
                <div class="w-full">
                  <label for="country" class="capitalize text-slate-500 font-medium">country</label>
                  <select name="country" class="w-full px-4 py-2 border-2 focus:border-indigo-500 outline-none rounded-lg mt-3 text-black bg-white">
                    <option value="iran">iran</option>
                    <option value="Japan">Japan</option>
                    <option value="America">America</option>
                    <option value="Russia">Russia</option>
                    <option value="London">London</option>
                  </select>
                </div>
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