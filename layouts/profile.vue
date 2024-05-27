<template>
  <div class="flex flex-col">
    <header
      class="w-full flex flex-row-reverse items-center justify-between fixed bg-base-100 top-0 left-0 h-16 px-3 md:static">
      <div class="flex items-center space-x-3">
        <SvgBuzzer />
        <div>
          <img class="object-cover rounded-full size-8" src="/img/user-panel.jpg" alt="user" draggable="false">
        </div>
      </div>
      <div class="flex items-center">
        <NuxtLink to="/">
          <img class="object-cover w-20" src="/img/logo.png" alt="logo" draggable="false">
        </NuxtLink>
      </div>
    </header>

    <!-- page and navbar -->
    <div class="flex flex-col md:flex-row w-full gap-2 h-svh">
      <!-- links -->
      <div class="hidden md:flex flex-col w-44 h-full items-center justify-evenly">
        <NuxtLink to="/profile" class="flex justify-center items-center group">
          <svg-dashboard :active="true" title="Dashboard" />
        </NuxtLink>
        <NuxtLink to="/profile/edit" class="flex justify-center items-center group">
          <svg-profile :active="false" title="profile" />
        </NuxtLink>
        <NuxtLink to="/profile/ticket" class="flex justify-center items-center group">
          <svg-ticket :active="false" title="ticket" />
        </NuxtLink>
        <NuxtLink to="/" class="flex justify-center items-center">
          <svg-exit :active="false" title="exit" />
        </NuxtLink>
      </div>
      <!-- page -->
      <div class="min-h-svh py-20 md:py-0 overflow-auto bg-base-content">
        <NuxtPage />
      </div>
    </div>
    
    <!-- navbar -->
    <nav class="w-full flex items-center justify-evenly fixed bg-base-100 bottom-0 left-0 h-16 md:hidden">
      <NuxtLink to="/profile" class="flex justify-center items-center group">
        <svg-dashboard :active="true" title="Dashboard" />
      </NuxtLink>
      <NuxtLink to="/profile/edit" class="flex justify-center items-center group">
        <svg-profile :active="false" title="profile" />
      </NuxtLink>
      <NuxtLink to="/profile/ticket" class="flex justify-center items-center group">
        <svg-ticket :active="false" title="ticket" />
      </NuxtLink>
      <NuxtLink to="/" class="flex justify-center items-center">
        <svg-exit :active="false" title="exit" />
      </NuxtLink>
    </nav>
  </div>
</template>