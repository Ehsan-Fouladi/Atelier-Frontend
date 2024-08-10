export default defineNuxtRouteMiddleware((to, from) => {
    const nuxtApp = useNuxtApp()
    if (!nuxtApp.$useUserCookie.isLogin()) return navigateTo('/auth/login')
})
