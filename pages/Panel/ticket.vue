<template>
  <div class="bg-[#f2f2f2] md:ml-28">
    <div class="flex flex-col justify-center items-center my-5 p-2 md:p-0">
      <form method="post" class="w-full md:w-1/2 h-full bg-white rounded-lg p-5">
        <div class="flex justify-center">
          <span class="font-medium text-2xl">Ticket</span>
        </div>
        <div class="flex flex-col">
          <label for="name" class="font-medium after:content-['*'] after:text-red-500 after:text-lg text-slate-800">
            Name
          </label>
          <input type="text" name="name" placeholder="FirstName" class="mt-3 w-full px-2 py-3 rounded-md border-2 border-indigo-300 outline-none text-gray-800 focus:placeholder:text-black bg-white placeholder:text-gray-700">
        </div>
        <div class="flex flex-col mt-4">
          <label for="email" class="font-medium after:content-['*'] after:text-red-500 after:text-lg text-slate-800">
            Email
          </label>
          <input type="email" name="email" placeholder="email" class="mt-3 w-full px-2 py-3 rounded-md border-2 border-indigo-300 outline-none text-gray-800 focus:placeholder:text-black bg-white placeholder:text-gray-700">
        </div>
        <div class="flex flex-col mt-4">
          <label for="name product" class="font-medium after:content-['*'] after:text-red-500 after:text-lg text-slate-800">
            Name Product
          </label>
          <input type="text" placeholder="name product" class="mt-3 w-full px-2 py-3 rounded-md border-2 border-indigo-300 outline-none text-gray-800 focus:placeholder:text-black bg-white placeholder:text-gray-700">
        </div>
        <div class="flex flex-col mt-4">
          <label for="subject" class="font-medium after:content-['*'] after:text-red-500 after:text-lg text-slate-800">
            Subject
          </label>
          <input type="text" name="subject" placeholder="subject" class="mt-3 w-full px-2 py-3 rounded-md border-2 border-indigo-300 outline-none text-gray-800 focus:placeholder:text-black bg-white placeholder:text-gray-700">
        </div>
        <div class="flex flex-col mt-4">
          <label for="message" class="font-medium after:content-['*'] after:text-red-500 after:text-lg text-slate-800">
            Message
          </label>
          <textarea name="message" cols="30" rows="10" placeholder="message" class="mt-3 w-full px-2 py-3 rounded-md border-2 border-indigo-300 outline-none text-gray-800 focus:placeholder:text-black bg-white placeholder:text-gray-700">
          </textarea>
        </div>
        <div class="mt-7">
          <button class="px-10 py-2 bg-green-500 rounded-xl hover:-translate-y-2 transition-all duration-700 hover:bg-transparent border border-green-500 text-white hover:text-black font-medium">Submit</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
    layout: 'panel',
})
</script>