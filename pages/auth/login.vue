<template>
  <div class="flex flex-col w-full h-svh items-center justify-center">
    <form @submit.prevent="login()" class="flex flex-col p-5 rounded-lg text-black gap-5 w-full max-w-lg bg-base-300">
      <input type="text" placeholder="username" v-model="form.email" />
      <input type="password" placeholder="password" v-model="form.password" />
      <button class="btn">login</button>
    </form>
  </div>
</template>

<script setup>
definePageMeta({
  layout: false
})
const nuxtApp = useNuxtApp()
const form = ref({
  email: 'name@gmail',
  password: 'asdaskdjkl'
})
const step = ref(0)
onMounted(() => {
  let json = {}
  console.log(useJDate(Date.now()))
})
async function login() {
  let response = await nuxtApp.$axios.get('auth/login', form.value)
  if (response.status === 200) {
    refreshNuxtData()
    navigateTo('/', {
      open: {
        target: "_self"
      }
    })
  }
}

onMounted(() => {
  nuxtApp.$useUserCookie.setUserData({
    token: 'this is my token'
  })
  if (nuxtApp.$useUserCookie.isLogin())
    console.log(nuxtApp.$useUserCookie.getUserData().token)
})
</script>
