<template>
  <div class="flex flex-col">
    <header class="flex flex-col w-full h-full">
      <div class="w-full h-16 p-4 overflow-hidden bg-white md:bg-gray-20 shadow-md md:shadow-none z-50 top-0 sticky">
        <div class="flex flex-row-reverse items-center justify-between w-full md:pr-10">
          <div class="flex items-center space-x-3">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" class="size-7 md:size-8 text-slate-500" viewBox="0 0 24 24">
                <path fill="currentColor"
                  d="M19.29 17.29L18 16v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-1.29 1.29c-.63.63-.19 1.71.7 1.71h13.17c.9 0 1.34-1.08.71-1.71M16 17H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5zm-4 5c1.1 0 2-.9 2-2h-4a2 2 0 0 0 2 2" />
              </svg>
            </div>
            <div>
              <img class="object-cover rounded-full size-8" src="/img/user-panel.jpg" alt="user" draggable="false">
            </div>
          </div>
          <div class="flex items-center">
            <NuxtLink to="/panel" class="md:hidden">
              <img class="object-cover w-20" src="/img/logo.png" alt="logo" draggable="false">
            </NuxtLink>
          </div>
        </div>
      </div>
      <slot />
      <nav class="w-full h-full md:w-28 md:h-dvh p-3 md:p-6 flex md:flex-col bg-white bottom-0 sticky md:fixed md:bottom-auto z-50">
        <NuxtLink to="/panel" class="hidden md:block">
          <img class="object-cover" src="/img/logo.png" alt="logo" draggable="false">
        </NuxtLink>
        <div class="flex flex-row md:flex-col justify-around md:justify-evenly w-full md:w-auto md:h-full">
          <NuxtLink to="/panel" class="relative flex justify-center items-center group">
            <svg xmlns="http://www.w3.org/2000/svg" class="size-6 text-slate-500 hover:text-indigo-500"
              viewBox="0 0 24 24">
              <path fill="currentColor"
                d="M11 4.68v3.88a2.45 2.45 0 0 1-1.509 2.258A2.409 2.409 0 0 1 8.56 11H4.68a2.44 2.44 0 0 1-2.43-2.44V4.69a2.44 2.44 0 0 1 2.43-2.44h3.88A2.44 2.44 0 0 1 11 4.68m10.75.01v3.87a2.41 2.41 0 0 1-.71 1.72a2.378 2.378 0 0 1-1.72.72h-3.88a2.45 2.45 0 0 1-2.256-1.502A2.4 2.4 0 0 1 13 8.56V4.69a2.391 2.391 0 0 1 .72-1.72a2.42 2.42 0 0 1 1.72-.72h3.88a2.44 2.44 0 0 1 2.43 2.44M11 15.45v3.87a2.44 2.44 0 0 1-2.44 2.43H4.68a2.45 2.45 0 0 1-1.72-.71a2.41 2.41 0 0 1-.71-1.72v-3.87a2.41 2.41 0 0 1 .71-1.72A2.47 2.47 0 0 1 4.68 13h3.88A2.46 2.46 0 0 1 11 15.45m10.75 1.93A4.37 4.37 0 1 1 17.37 13a4.4 4.4 0 0 1 4.049 2.707c.22.53.332 1.099.331 1.673" />
            </svg>
            <div class="px-3 py-1 bg-white shadow rounded-lg left-14 absolute hidden md:group-hover:block">
              <span class="text-indigo-500 capitalize">Dashboard</span>
            </div>
          </NuxtLink>
          <NuxtLink to="/panel/profile" class="relative flex justify-center items-center group">
            <svg xmlns="http://www.w3.org/2000/svg" class="size-6 text-slate-500 hover:text-indigo-500"
              viewBox="0 0 24 24">
              <path fill="currentColor"
                d="M12 11q.825 0 1.413-.588Q14 9.825 14 9t-.587-1.413Q12.825 7 12 7q-.825 0-1.412.587Q10 8.175 10 9q0 .825.588 1.412Q11.175 11 12 11Zm0 2q-1.65 0-2.825-1.175Q8 10.65 8 9q0-1.65 1.175-2.825Q10.35 5 12 5q1.65 0 2.825 1.175Q16 7.35 16 9q0 1.65-1.175 2.825Q13.65 13 12 13Zm0 11q-2.475 0-4.662-.938q-2.188-.937-3.825-2.574Q1.875 18.85.938 16.663Q0 14.475 0 12t.938-4.663q.937-2.187 2.575-3.825Q5.15 1.875 7.338.938Q9.525 0 12 0t4.663.938q2.187.937 3.825 2.574q1.637 1.638 2.574 3.825Q24 9.525 24 12t-.938 4.663q-.937 2.187-2.574 3.825q-1.638 1.637-3.825 2.574Q14.475 24 12 24Zm0-2q1.8 0 3.375-.575T18.25 19.8q-.825-.925-2.425-1.612q-1.6-.688-3.825-.688t-3.825.688q-1.6.687-2.425 1.612q1.3 1.05 2.875 1.625T12 22Zm-7.7-3.6q1.2-1.3 3.225-2.1q2.025-.8 4.475-.8q2.45 0 4.463.8q2.012.8 3.212 2.1q1.1-1.325 1.713-2.95Q22 13.825 22 12q0-2.075-.788-3.887q-.787-1.813-2.15-3.175q-1.362-1.363-3.175-2.151Q14.075 2 12 2q-2.05 0-3.875.787q-1.825.788-3.187 2.151Q3.575 6.3 2.788 8.113Q2 9.925 2 12q0 1.825.6 3.463q.6 1.637 1.7 2.937Z" />
            </svg>
            <div class="px-3 py-1 bg-white shadow rounded-lg left-14 absolute hidden md:group-hover:block">
              <span class="text-indigo-500 capitalize">profile</span>
            </div>
          </NuxtLink>
          <NuxtLink to="/panel/ticket" class="relative flex justify-center items-center group">
            <svg xmlns="http://www.w3.org/2000/svg" class="size-6 text-slate-500 hover:text-indigo-500"
              viewBox="0 0 24 24">
              <path fill="currentColor"
                d="M3 10H2a1 1 0 0 0 1 1zm0 4v-1a1 1 0 0 0-1 1zm18-4v1a1 1 0 0 0 1-1zm0 4h1a1 1 0 0 0-1-1zM5 6h5V4H5zm5 0h9V4h-9zm9 12h-9v2h9zm-9 0H5v2h5zM9 5v14h2V5zm-5.293 6.293a1 1 0 0 1 0 1.414l1.414 1.414a3 3 0 0 0 0-4.242zm16.586 1.414a1 1 0 0 1 0-1.414l-1.414-1.414a3 3 0 0 0 0 4.242zM3 11c.257 0 .512.097.707.293l1.414-1.414A2.994 2.994 0 0 0 3 9zm1-1V7H2v3zm0 7v-3H2v3zm-.293-4.293A.994.994 0 0 1 3 13v2c.766 0 1.536-.293 2.121-.879zm16.586-1.414A.994.994 0 0 1 21 11V9c-.766 0-1.536.293-2.121.879zM20 7v3h2V7zm0 7v3h2v-3zm1-1a.994.994 0 0 1-.707-.293l-1.414 1.414A2.994 2.994 0 0 0 21 15zM5 18a1 1 0 0 1-1-1H2a3 3 0 0 0 3 3zm14 2a3 3 0 0 0 3-3h-2a1 1 0 0 1-1 1zm0-14a1 1 0 0 1 1 1h2a3 3 0 0 0-3-3zM5 4a3 3 0 0 0-3 3h2a1 1 0 0 1 1-1z" />
            </svg>
            <div class="px-3 py-1 bg-white shadow rounded-lg left-14 absolute hidden md:group-hover:block">
              <span class="text-indigo-500 capitalize">Ticket</span>
            </div>
          </NuxtLink>
          <NuxtLink to="/" class="relative flex justify-center items-center group md:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" class="size-6 text-slate-500 hover:text-indigo-500"
              viewBox="0 0 24 24">
              <path fill="currentColor"
                d="M5 11h8v2H5v3l-5-4l5-4zm-1 7h2.708a8 8 0 1 0 0-12H4a9.985 9.985 0 0 1 8-4c5.523 0 10 4.477 10 10s-4.477 10-10 10a9.985 9.985 0 0 1-8-4" />
            </svg>
            <div class="px-3 py-1 bg-white shadow rounded-lg left-14 absolute hidden md:group-hover:block">
              <span class="text-indigo-500 capitalize">Logout</span>
            </div>
          </NuxtLink>
        </div>
        <NuxtLink to="/" class="relative md:flex justify-center items-center group hidden">
          <svg xmlns="http://www.w3.org/2000/svg" class="size-6 text-slate-500 hover:text-indigo-500"
            viewBox="0 0 24 24">
            <path fill="currentColor"
              d="M5 11h8v2H5v3l-5-4l5-4zm-1 7h2.708a8 8 0 1 0 0-12H4a9.985 9.985 0 0 1 8-4c5.523 0 10 4.477 10 10s-4.477 10-10 10a9.985 9.985 0 0 1-8-4" />
          </svg>
          <div class="px-3 py-1 bg-white shadow rounded-lg left-14 absolute hidden group-hover:block">
            <span class="text-indigo-500 capitalize">Logout</span>
          </div>
        </NuxtLink>
      </nav>
    </header>
  </div>
</template>