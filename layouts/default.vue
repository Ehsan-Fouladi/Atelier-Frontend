<template>
  <header class="flex w-full h-20 z-50">
    <nav class="flex flex-1 justify-between items-center w-full shadow-lg lg:p-10 p-4 uppercase">
      <ul class="cursor-pointer hidden lg:flex items-center space-x-7">
        <li class="hover:text-yellow-800 duration-300 flex items-center gap-2 text-gray-600 relative" @click="MenuHome">
          <a href="#" class="font-medium text-sm">home</a>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
            stroke="currentColor" class="size-4">
            <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
          </svg>
          <div class="absolute bg-gray-900 p-5 rounded min-w-56 top-10 flex flex-col flex-shrink space-y-4"
            v-show="!home">
            <a href="#" class="text-white hover:text-yellow-800 font-medium text-sm">Home Watch</a>
            <a href="#" class="text-white hover:text-yellow-800 font-medium text-sm">Home Jewelry</a>
            <a href="#" class="text-white hover:text-yellow-800 font-medium text-sm">Home Repair</a>
          </div>
        </li>
        <li class="hover:text-yellow-800 duration-300 flex items-center gap-2 text-gray-600 relative" @click="MenuPage">
          <a href="#" class="font-medium text-sm">pages</a>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
            stroke="currentColor" class="size-4">
            <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
          </svg>
          <div class="absolute bg-gray-900 p-5 rounded min-w-56 top-10 flex flex-col flex-shrink space-y-4"
            v-show="!page">
            <a href="#" class="text-white hover:text-yellow-800 font-medium text-sm">about</a>
            <a href="#" class="text-white hover:text-yellow-800 font-medium text-sm">contact</a>
          </div>
        </li>
        <li class="hover:text-yellow-800 duration-300 flex items-center gap-2 text-gray-600 relative" @click="Menushop">
          <a href="#" class="font-medium text-sm">shop</a>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
            stroke="currentColor" class="size-4">
            <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
          </svg>
          <div class="absolute bg-gray-900 p-5 rounded min-w-56 top-10 flex flex-col flex-shrink space-y-4"
            v-show="!shop">
            <a href="#" class="text-white hover:text-yellow-800 font-medium text-sm">All collections</a>
            <a href="#" class="text-white hover:text-yellow-800 font-medium text-sm">All Products</a>
            <a href="#" class="text-white hover:text-yellow-800 font-medium text-sm">Single product</a>
          </div>
        </li>
        <li class="hover:text-yellow-800 duration-300 flex items-center gap-2 text-gray-600 relative" @click="MenuNews">
          <a href="#" class="font-medium text-sm">news</a>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
            stroke="currentColor" class="size-4">
            <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
          </svg>
          <div class="absolute bg-gray-900 p-5 rounded min-w-56 top-10 flex flex-col flex-shrink space-y-4"
            v-show="!news">
            <a href="#" class="text-white hover:text-yellow-800 font-medium text-sm">Watches</a>
            <a href="#" class="text-white hover:text-yellow-800 font-medium text-sm">Jewelry</a>
            <a href="#" class="text-white hover:text-yellow-800 font-medium text-sm">Repair</a>
          </div>
        </li>
      </ul>
      <!-- Menu Tablet -->
      <div class="hidden sm:block lg:hidden">
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
        <div class="absolute top-[80px] right-0 p-4 w-full h-svh bg-white" v-show="!MenuTablet">
          <div class="flex flex-col space-y-7 p-2">
            <div class="p-2 flex flex-col flex-shrink">
              <div class="flex justify-between items-center" @click="MenuMobile1">
                <a href="#" class="hover:text-yellow-800 duration-300 text-gray-600 font-medium">Home</a>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
              </div>
              <div class="mt-6" v-show="!MenuMobileHome">
                <ul class="space-y-6 ml-2 text-sm">
                  <li class="cursor-pointer hover:text-yellow-800 font-medium text-gray-700 duration-500">
                    <a href="#">Home Watch</a>
                  </li>
                  <li class="cursor-pointer hover:text-yellow-800 font-medium text-gray-700 duration-500">
                    <a href="#">Home Jewelry</a>
                  </li>
                  <li class="cursor-pointer hover:text-yellow-800 font-medium text-gray-700 duration-500">
                    <a href="#">Home Repair</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="p-2 flex flex-col flex-shrink">
              <div class="flex justify-between items-center" @click="MenuMobile2">
                <a href="#" class="hover:text-yellow-800 duration-300 text-gray-600 font-medium">pages</a>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
              </div>
              <div class="mt-6" v-show="!MenuMobilePage">
                <ul class="space-y-6 ml-2 text-sm">
                  <li class="cursor-pointer hover:text-yellow-800 font-medium text-gray-700 duration-500">
                    <a href="#">about</a>
                  </li>
                  <li class="cursor-pointer hover:text-yellow-800 font-medium text-gray-700 duration-500">
                    <a href="#">contact</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="p-2 flex flex-col flex-shrink">
              <div class="flex justify-between items-center" @click="MenuMobile3">
                <a href="#" class="hover:text-yellow-800 duration-300 text-gray-600 font-medium">shop</a>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
              </div>
              <div class="mt-6" v-show="!MenuMobileShop">
                <ul class="space-y-6 ml-2 text-sm">
                  <li class="cursor-pointer hover:text-yellow-800 font-medium text-gray-700 duration-500">
                    <a href="#">All collections</a>
                  </li>
                  <li class="cursor-pointer hover:text-yellow-800 font-medium text-gray-700 duration-500">
                    <a href="#">All Products</a>
                  </li>
                  <li class="cursor-pointer hover:text-yellow-800 font-medium text-gray-700 duration-500">
                    <a href="#">Single product</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="p-2 flex flex-col flex-shrink">
              <div class="flex justify-between items-center" @click="MenuMobile4">
                <a href="#" class="hover:text-yellow-800 duration-300 text-gray-600 font-medium">news</a>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
              </div>
              <div class="mt-6" v-show="!MenuMobileNews">
                <ul class="space-y-6 ml-2 text-sm">
                  <li class="cursor-pointer hover:text-yellow-800 font-medium text-gray-700 duration-500">
                    <a href="#">Watches</a>
                  </li>
                  <li class="cursor-pointer hover:text-yellow-800 font-medium text-gray-700 duration-500">
                    <a href="#">Jewelry</a>
                  </li>
                  <li class="cursor-pointer hover:text-yellow-800 font-medium text-gray-700 duration-500">
                    <a href="#">Repair</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- End Menu Tablet -->
      <img class="object-cover max-w-[135px]" src="/img/logo.png" alt="logo">
      <ul class="cursor-pointer flex items-center space-x-5 uppercase">
        <li class="hover:text-yellow-800 duration-300 flex items-center gap-2 text-gray-600 relative"
          @click="MenuAccount">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
            stroke="currentColor" class="size-5">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
          </svg>
          <a href="#" class="font-medium hidden lg:block">account</a>
          <div class="absolute bg-gray-900 p-5 rounded min-w-28 top-10 flex flex-col flex-shrink space-y-4"
            v-show="!account">
            <a href="#" class="text-white hover:text-yellow-800 font-medium text-sm">login</a>
            <a href="#" class="text-white hover:text-yellow-800 font-medium text-sm">register</a>
          </div>
        </li>
        <li class="hover:text-yellow-800 duration-300 flex items-center gap-2 text-gray-600">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
            stroke="currentColor" class="size-5">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
          </svg>
          <a href="#" class="font-medium hidden lg:block">Wishlist</a>
        </li>
        <li class="hover:text-yellow-800 duration-300 flex items-center gap-2 text-gray-600">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
            stroke="currentColor" class="size-5">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
          </svg>
          <a href="#" class="font-medium hidden lg:block">cart</a>
          <a href="#" class="font-medium">(0)</a>
        </li>
      </ul>
      <!-- Menu Mobile -->
      <div class="sm:hidden">
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
        <div class="absolute top-[80px] right-0 p-4 w-full h-svh bg-white" v-show="!MenuTablet">
          <div class="flex flex-col space-y-7 p-2">
            <div class="p-2 flex flex-col flex-shrink">
              <div class="flex justify-between items-center" @click="MenuMobile1">
                <a href="#" class="hover:text-yellow-800 duration-300 text-gray-600 font-medium">Home</a>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
              </div>
              <div class="mt-6" v-show="!MenuMobileHome">
                <ul class="space-y-6 ml-2 text-sm">
                  <li class="cursor-pointer hover:text-yellow-800 font-medium text-gray-700 duration-500">
                    <a href="#">Home Watch</a>
                  </li>
                  <li class="cursor-pointer hover:text-yellow-800 font-medium text-gray-700 duration-500">
                    <a href="#">Home Jewelry</a>
                  </li>
                  <li class="cursor-pointer hover:text-yellow-800 font-medium text-gray-700 duration-500">
                    <a href="#">Home Repair</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="p-2 flex flex-col flex-shrink">
              <div class="flex justify-between items-center" @click="MenuMobile2">
                <a href="#" class="hover:text-yellow-800 duration-300 text-gray-600 font-medium">pages</a>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
              </div>
              <div class="mt-6" v-show="!MenuMobilePage">
                <ul class="space-y-6 ml-2 text-sm">
                  <li class="cursor-pointer hover:text-yellow-800 font-medium text-gray-700 duration-500">
                    <a href="#">about</a>
                  </li>
                  <li class="cursor-pointer hover:text-yellow-800 font-medium text-gray-700 duration-500">
                    <a href="#">contact</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="p-2 flex flex-col flex-shrink">
              <div class="flex justify-between items-center" @click="MenuMobile3">
                <a href="#" class="hover:text-yellow-800 duration-300 text-gray-600 font-medium">shop</a>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
              </div>
              <div class="mt-6" v-show="!MenuMobileShop">
                <ul class="space-y-6 ml-2 text-sm">
                  <li class="cursor-pointer hover:text-yellow-800 font-medium text-gray-700 duration-500">
                    <a href="#">All collections</a>
                  </li>
                  <li class="cursor-pointer hover:text-yellow-800 font-medium text-gray-700 duration-500">
                    <a href="#">All Products</a>
                  </li>
                  <li class="cursor-pointer hover:text-yellow-800 font-medium text-gray-700 duration-500">
                    <a href="#">Single product</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="p-2 flex flex-col flex-shrink">
              <div class="flex justify-between items-center" @click="MenuMobile4">
                <a href="#" class="hover:text-yellow-800 duration-300 text-gray-600 font-medium">news</a>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
              </div>
              <div class="mt-6" v-show="!MenuMobileNews">
                <ul class="space-y-6 ml-2 text-sm">
                  <li class="cursor-pointer hover:text-yellow-800 font-medium text-gray-700 duration-500">
                    <a href="#">Watches</a>
                  </li>
                  <li class="cursor-pointer hover:text-yellow-800 font-medium text-gray-700 duration-500">
                    <a href="#">Jewelry</a>
                  </li>
                  <li class="cursor-pointer hover:text-yellow-800 font-medium text-gray-700 duration-500">
                    <a href="#">Repair</a>
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
</template>
<script setup>
const home = ref(true)
const page = ref(true)
const shop = ref(true)
const news = ref(true)
const account = ref(true)
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

function MenuAccount() {
  account.value = !account.value
}

function MenuHome() {
  home.value = !home.value
}
function MenuPage() {
  page.value = !page.value
}
function Menushop() {
  shop.value = !shop.value
}
function MenuNews() {
  news.value = !news.value
}

</script>