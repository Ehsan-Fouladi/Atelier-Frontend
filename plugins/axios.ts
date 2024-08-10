import axios from "axios"

export default defineNuxtPlugin((nuxtApp) => {

    nuxtApp.hook('app:mounted', () => {

        const API_URL = useRuntimeConfig().public.API_URL
        const API_VERSION = useRuntimeConfig().public.API_VERSION

        const { $useUserCookie } = useNuxtApp()
        let token = $useUserCookie.getUserData()?.token

        const axiosInstance = axios.create({
            baseURL: `${API_URL}/v${API_VERSION}`,
            headers: {
                Accept: 'application/json',
                Authorization: `Bearer ${token}`,
            }
        })

        nuxtApp.provide('axios', axiosInstance)
    })
})
