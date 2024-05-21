<template>
  <div class="w-full flex flex-col overflow-hidden">
    <header class="flex w-full h-20 z-50">
      <nav class="flex flex-1 justify-between items-center w-full lg:p-10 p-4 uppercase">
        <ul class="cursor-pointer hidden lg:flex items-center space-x-4">
          <div class="dropdown relative">
            <div tabindex="0" role="button" class="btn btn-ghost">
              <span>home</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="size-4 ml-3">
                <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
              </svg>
            </div>
            <div tabindex="0" class="dropdown-content menu absolute bg-gray-900 p-5 rounded min-w-56 top-10 flex flex-col flex-shrink space-y-4">
              <NuxtLink to="#" class="text-white hover:text-yellow-800 font-medium text-sm">Home Watch</NuxtLink>
              <NuxtLink to="#" class="text-white hover:text-yellow-800 font-medium text-sm">Home Jewelry</NuxtLink>
              <NuxtLink to="#" class="text-white hover:text-yellow-800 font-medium text-sm">Home Repair</NuxtLink>
            </div>
          </div>

          <div class="dropdown relative">
            <div tabindex="0" role="button" class="btn btn-ghost">
              <span>pages</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="size-4 ml-3">
                <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
              </svg>
            </div>
            <div tabindex="0" class="dropdown-content menu absolute bg-gray-900 p-5 rounded min-w-56 top-10 flex flex-col flex-shrink space-y-4">
              <NuxtLink to="#" class="text-white hover:text-yellow-800 font-medium text-sm">about</NuxtLink>
              <NuxtLink to="#" class="text-white hover:text-yellow-800 font-medium text-sm">contact</NuxtLink>
            </div>
          </div>
          
          <div class="dropdown relative">
            <div tabindex="0" role="button" class="btn btn-ghost">
              <span>shop</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="size-4 ml-3">
                <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
              </svg>
            </div>
            <div tabindex="0" class="dropdown-content menu absolute bg-gray-900 p-5 rounded min-w-56 top-10 flex flex-col flex-shrink space-y-4">
              <NuxtLink to="#" class="text-white hover:text-yellow-800 font-medium text-sm">All collections</NuxtLink>
              <NuxtLink to="#" class="text-white hover:text-yellow-800 font-medium text-sm">All Products</NuxtLink>
              <NuxtLink to="#" class="text-white hover:text-yellow-800 font-medium text-sm">Single product</NuxtLink>
            </div>
          </div>

          <div class="dropdown relative">
            <div tabindex="0" role="button" class="btn btn-ghost">
              <span>news</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="size-4 ml-3">
                <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
              </svg>
            </div>
            <div tabindex="0" class="dropdown-content menu absolute bg-gray-900 p-5 rounded min-w-56 top-10 flex flex-col flex-shrink space-y-4">
              <NuxtLink to="#" class="text-white hover:text-yellow-800 font-medium text-sm">Watches</NuxtLink>
              <NuxtLink to="#" class="text-white hover:text-yellow-800 font-medium text-sm">Jewelry</NuxtLink>
              <NuxtLink to="#" class="text-white hover:text-yellow-800 font-medium text-sm">Repair</NuxtLink>
            </div>
          </div>
        </ul>
        <!-- Menu Tablet -->
        <div class="hidden sm:block lg:hidden z-50">
          <div @click="Tablet" v-if="MenuTablet">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" class="size-7">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </div>
          <div @click="Tablet" v-else>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" class="size-7">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </div>
          <div class="absolute top-[80px] right-0 p-4 w-full bg-white" v-show="!MenuTablet">
            <div class="flex flex-col space-y-7 p-2">
              <div class="p-2 flex flex-col flex-shrink">
                <div class="flex justify-between items-center" @click="MenuMobile1">
                  <span class="hover:text-yellow-800 duration-300 text-gray-600 font-medium">Home</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-6 h-6 text-black">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                  </svg>
                </div>
                <div class="mt-6" v-show="!MenuMobileHome">
                  <ul class="space-y-6 ml-2 text-sm">
                    <li class="cursor-pointer hover:text-yellow-800 font-medium text-gray-700 duration-500">
                      <NuxtLink to="#">Home Watch</NuxtLink>
                    </li>
                    <li class="cursor-pointer hover:text-yellow-800 font-medium text-gray-700 duration-500">
                      <NuxtLink to="#">Home Jewelry</NuxtLink>
                    </li>
                    <li class="cursor-pointer hover:text-yellow-800 font-medium text-gray-700 duration-500">
                      <NuxtLink to="#">Home Repair</NuxtLink>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="p-2 flex flex-col flex-shrink">
                <div class="flex justify-between items-center" @click="MenuMobile2">
                  <span class="hover:text-yellow-800 duration-300 text-gray-600 font-medium">pages</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-6 h-6 text-black">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                  </svg>
                </div>
                <div class="mt-6" v-show="!MenuMobilePage">
                  <ul class="space-y-6 ml-2 text-sm">
                    <li class="cursor-pointer hover:text-yellow-800 font-medium text-gray-700 duration-500">
                      <NuxtLink to="#">about</NuxtLink>
                    </li>
                    <li class="cursor-pointer hover:text-yellow-800 font-medium text-gray-700 duration-500">
                      <NuxtLink to="#">contact</NuxtLink>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="p-2 flex flex-col flex-shrink">
                <div class="flex justify-between items-center" @click="MenuMobile3">
                  <span class="hover:text-yellow-800 duration-300 text-gray-600 font-medium">shop</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-6 h-6 text-black">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                  </svg>
                </div>
                <div class="mt-6" v-show="!MenuMobileShop">
                  <ul class="space-y-6 ml-2 text-sm">
                    <li class="cursor-pointer hover:text-yellow-800 font-medium text-gray-700 duration-500">
                      <NuxtLink to="#">All collections</NuxtLink>
                    </li>
                    <li class="cursor-pointer hover:text-yellow-800 font-medium text-gray-700 duration-500">
                      <NuxtLink to="#">All Products</NuxtLink>
                    </li>
                    <li class="cursor-pointer hover:text-yellow-800 font-medium text-gray-700 duration-500">
                      <NuxtLink to="#">Single product</NuxtLink>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="p-2 flex flex-col flex-shrink">
                <div class="flex justify-between items-center" @click="MenuMobile4">
                  <span class="hover:text-yellow-800 duration-300 text-gray-600 font-medium">news</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-6 h-6 text-black">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                  </svg>
                </div>
                <div class="mt-6" v-show="!MenuMobileNews">
                  <ul class="space-y-6 ml-2 text-sm">
                    <li class="cursor-pointer hover:text-yellow-800 font-medium text-gray-700 duration-500">
                      <NuxtLink to="#">Watches</NuxtLink>
                    </li>
                    <li class="cursor-pointer hover:text-yellow-800 font-medium text-gray-700 duration-500">
                      <NuxtLink to="#">Jewelry</NuxtLink>
                    </li>
                    <li class="cursor-pointer hover:text-yellow-800 font-medium text-gray-700 duration-500">
                      <NuxtLink to="#">Repair</NuxtLink>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- End Menu Tablet -->
        <img class="object-cover max-w-32 md:max-w-44 lg:max-w-[135px]" src="/img/logo.png" alt="logo">
        <ul class="cursor-pointer flex items-center justify-evenly md:justify-stretch space-x-5 uppercase w-full md:w-auto">
          <div class="dropdown relative">
            <div tabindex="0" role="button" class="btn btn-ghost">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" class="size-5 lg:mr-2">
              <path stroke-linecap="round" stroke-linejoin="round"
              d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
            </svg>
            <span class="hidden lg:block">account</span>
            </div>
            <div tabindex="0" class="dropdown-content menu absolute bg-gray-900 p-5 rounded min-w-28 top-10 flex flex-col flex-shrink space-y-4">
              <NuxtLink to="#" class="text-white hover:text-yellow-800 font-medium text-sm">login</NuxtLink>
              <NuxtLink to="#" class="text-white hover:text-yellow-800 font-medium text-sm">register</NuxtLink>
            </div>
          </div>
          <li class="hover:text-yellow-800 duration-300 flex items-center gap-2 text-white">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" class="size-5">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
            </svg>
            <span class="font-medium hidden lg:block">Wishlist</span>
          </li>
          <li class="hover:text-yellow-800 duration-300 flex items-center gap-2 text-white">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" class="size-5">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
            </svg>
            <span class="font-medium hidden lg:block">cart</span>
            <span class="font-medium">(0)</span>
          </li>
        </ul>
        <!-- Menu Mobile -->
        <div class="sm:hidden z-50">
          <div @click="Tablet" v-if="MenuTablet">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" class="size-7">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </div>
          <div @click="Tablet" v-else>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" class="size-7">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </div>
          <div class="absolute top-[80px] right-0 p-4 w-full bg-white" v-show="!MenuTablet">
            <div class="flex flex-col space-y-7 p-2">
              <div class="p-2 flex flex-col flex-shrink">
                <div class="flex justify-between items-center" @click="MenuMobile1">
                  <span class="hover:text-yellow-800 duration-300 text-gray-600 font-medium">Home</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-6 h-6 text-black">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                  </svg>
                </div>
                <div class="mt-6" v-show="!MenuMobileHome">
                  <ul class="space-y-6 ml-2 text-sm">
                    <li class="cursor-pointer hover:text-yellow-800 font-medium text-gray-700 duration-500">
                      <NuxtLink to="#">Home Watch</NuxtLink>
                    </li>
                    <li class="cursor-pointer hover:text-yellow-800 font-medium text-gray-700 duration-500">
                      <NuxtLink to="#">Home Jewelry</NuxtLink>
                    </li>
                    <li class="cursor-pointer hover:text-yellow-800 font-medium text-gray-700 duration-500">
                      <NuxtLink to="#">Home Repair</NuxtLink>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="p-2 flex flex-col flex-shrink">
                <div class="flex justify-between items-center" @click="MenuMobile2">
                  <span class="hover:text-yellow-800 duration-300 text-gray-600 font-medium">pages</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-6 h-6 text-black">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                  </svg>
                </div>
                <div class="mt-6" v-show="!MenuMobilePage">
                  <ul class="space-y-6 ml-2 text-sm">
                    <li class="cursor-pointer hover:text-yellow-800 font-medium text-gray-700 duration-500">
                      <NuxtLink to="#">about</NuxtLink>
                    </li>
                    <li class="cursor-pointer hover:text-yellow-800 font-medium text-gray-700 duration-500">
                      <NuxtLink to="#">contact</NuxtLink>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="p-2 flex flex-col flex-shrink">
                <div class="flex justify-between items-center" @click="MenuMobile3">
                  <span class="hover:text-yellow-800 duration-300 text-gray-600 font-medium">shop</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-6 h-6 text-black">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                  </svg>
                </div>
                <div class="mt-6" v-show="!MenuMobileShop">
                  <ul class="space-y-6 ml-2 text-sm">
                    <li class="cursor-pointer hover:text-yellow-800 font-medium text-gray-700 duration-500">
                      <NuxtLink to="#">All collections</NuxtLink>
                    </li>
                    <li class="cursor-pointer hover:text-yellow-800 font-medium text-gray-700 duration-500">
                      <NuxtLink to="#">All Products</NuxtLink>
                    </li>
                    <li class="cursor-pointer hover:text-yellow-800 font-medium text-gray-700 duration-500">
                      <NuxtLink to="#">Single product</NuxtLink>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="p-2 flex flex-col flex-shrink">
                <div class="flex justify-between items-center" @click="MenuMobile4">
                  <span class="hover:text-yellow-800 duration-300 text-gray-600 font-medium">news</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-6 h-6 text-black">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                  </svg>
                </div>
                <div class="mt-6" v-show="!MenuMobileNews">
                  <ul class="space-y-6 ml-2 text-sm">
                    <li class="cursor-pointer hover:text-yellow-800 font-medium text-gray-700 duration-500">
                      <NuxtLink to="#">Watches</NuxtLink>
                    </li>
                    <li class="cursor-pointer hover:text-yellow-800 font-medium text-gray-700 duration-500">
                      <NuxtLink to="#">Jewelry</NuxtLink>
                    </li>
                    <li class="cursor-pointer hover:text-yellow-800 font-medium text-gray-700 duration-500">
                      <NuxtLink to="#">Repair</NuxtLink>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- End Menu Mobile -->
      </nav>
    </header>
    <NuxtPage />
    <footer class="mt-20 bg-gray-700 flex flex-col w-full h-full">
      <div class="w-full flex flex-col lg:flex-row justify-evenly items-center mt-10 lg:mt-20">
        <div class="flex flex-col justify-center items-center">
          <p class="font-medium break-words leading-relaxed text-xl text-white lg:w-2/3 p-4">
            Sign up for our newsletter to receive special offers, news and great sales notifications.
          </p>
          <form action="#" method="get" class="flex flex-col md:flex-row items-center mt-5 w-full md:w-auto p-3 md:p-0">
            <input type="email" placeholder="Email Address"
              class="font-medium placeholder:text-gray-500 outline-none bg-gray-800 px-3 py-3 text-gray-300 w-full md:w-[40rem] lg:w-96">
            <button type="submit"
              class="font-medium bg-white text-black px-5 py-3 hover:bg-yellow-900/70 duration-500 hover:text-white w-full md:w-auto mt-2 md:mt-auto">
              Submit
            </button>
          </form>
        </div>
        <div
          class="flex flex-col md:flex-row justify-around lg:items-center w-full lg:w-1/2 uppercase mt-10 lg:mt-auto">
          <div class="flex flex-col justify-center md:items-center pl-5">
            <ul class="mt-7 space-y-4">
              <span class="font-medium text-white text-sm">links</span>
              <li class="font-medium text-white hover:text-yellow-800 duration-500 text-sm">
                <NuxtLink to="#">home</NuxtLink>
              </li>
              <li class="font-medium text-white hover:text-yellow-800 duration-500 text-sm">
                <NuxtLink to="#">shop</NuxtLink>
              </li>
              <li class="font-medium text-white hover:text-yellow-800 duration-500 text-sm">
                <NuxtLink to="#">COLLECTIONS</NuxtLink>
              </li>
              <li class="font-medium text-white hover:text-yellow-800 duration-500 text-sm">
                <NuxtLink to="#">SEARCH</NuxtLink>
              </li>
            </ul>
          </div>
          <div class="flex flex-col justify-center md:items-center pl-5">
            <ul class="mt-7 space-y-4">
              <span class="font-medium text-white text-sm">links</span>
              <li class="font-medium text-white hover:text-yellow-800 duration-500 text-sm">
                <NuxtLink to="#">JEWELRY</NuxtLink>
              </li>
              <li class="font-medium text-white hover:text-yellow-800 duration-500 text-sm">
                <NuxtLink to="#">WATCHES</NuxtLink>
              </li>
              <li class="font-medium text-white hover:text-yellow-800 duration-500 text-sm">
                <NuxtLink to="#">ABOUT</NuxtLink>
              </li>
              <li class="font-medium text-white hover:text-yellow-800 duration-500 text-sm">
                <NuxtLink to="#">CONTACTS</NuxtLink>
              </li>
            </ul>
          </div>
          <div class="flex flex-col justify-center md:items-center pl-5">
            <ul class="mt-7 space-y-4">
              <span class="font-medium text-white text-sm">SOCIALS</span>
              <li class="font-medium text-white hover:text-yellow-800 duration-500 text-sm">
                <NuxtLink to="#">FACEBOOK</NuxtLink>
              </li>
              <li class="font-medium text-white hover:text-yellow-800 duration-500 text-sm">
                <NuxtLink to="#">PINTEREST</NuxtLink>
              </li>
              <li class="font-medium text-white hover:text-yellow-800 duration-500 text-sm">
                <NuxtLink to="#">INSTAGRAM</NuxtLink>
              </li>
              <li class="font-medium text-white hover:text-yellow-800 duration-500 text-sm">
                <NuxtLink to="#">YOUTUBE</NuxtLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="flex flex-col justify-center items-center w-full mt-32">
        <div class="border-y-2 border-white/50 w-11/12 lg:w-2/3 h-1"></div>
        <div class="flex justify-center items-center my-10 w-full">
          <span class="font-medium text-xl text-white">Teams &COPY; 2024</span>
        </div>
      </div>
    </footer>
  </div>
</template>
<script setup>
const MenuTablet = ref(true)
const MenuMobileHome = ref(true)
const MenuMobilePage = ref(true)
const MenuMobileShop = ref(true)
const MenuMobileNews = ref(true)

function MenuMobile1() {
  MenuMobileHome.value = !MenuMobileHome.value
}

function MenuMobile2() {
  MenuMobilePage.value = !MenuMobilePage.value
}

function MenuMobile3() {
  MenuMobileShop.value = !MenuMobileShop.value
}

function MenuMobile4() {
  MenuMobileNews.value = !MenuMobileNews.value
}

function Tablet() {
  MenuTablet.value = !MenuTablet.value
}
</script>