<template>
  <div class="flex flex-col">
    <header
      class="w-full flex flex-row-reverse items-center justify-between fixed bg-base-100 top-0 left-0 h-16 px-3 z-50">
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
      <div class="hidden md:flex flex-col w-20 h-full items-center justify-evenly">
        <NuxtLink to="/profile" class="flex justify-center items-center group">
          <svg-dashboard :active="check_current_page('profile')" title="Dashboard" />
        </NuxtLink>
        <NuxtLink to="/profile/edit" class="flex justify-center items-center group">
          <svg-profile :active="check_current_page('edit')" title="profile" />
        </NuxtLink>
        <NuxtLink to="/profile/ticket" class="flex justify-center items-center group">
          <svg-ticket :active="check_current_page('ticket')" title="ticket" />
        </NuxtLink>
        <NuxtLink to="/" class="flex justify-center items-center">
          <svg-exit :active="false" title="exit" />
        </NuxtLink>
      </div>
      <!-- page -->
      <div class="min-h-svh py-20 overflow-auto bg-base-content w-full h-full">
        <NuxtPage />
      </div>
    </div>

    <!-- navbar -->
    <nav class="w-full flex items-center justify-evenly fixed bg-base-100 bottom-0 left-0 h-16 md:hidden">
      <NuxtLink to="/profile" class="flex justify-center items-center group">
        <svg-dashboard :active="check_current_page('profile')" title="Dashboard" />
      </NuxtLink>
      <NuxtLink to="/profile/edit" class="flex justify-center items-center group">
        <svg-profile :active="check_current_page('edit')" title="profile" />
      </NuxtLink>
      <NuxtLink to="/profile/ticket" class="flex justify-center items-center group">
        <svg-ticket :active="check_current_page('ticket')" title="ticket" />
      </NuxtLink>
      <NuxtLink to="/" class="flex justify-center items-center">
        <svg-exit :active="false" title="exit" />
      </NuxtLink>
    </nav>
  </div>
</template>

<script setup>
const current_page = () => {
  let path = useRoute().fullPath.split('/')

  return path.length === 2 ? path[1] : path[2]
}

const check_current_page = (page) => {
  return current_page() === page
}
</script>