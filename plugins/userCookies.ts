export default defineNuxtPlugin((nuxtApp) => {
    const userCookie = useCookie('user_data', {
        maxAge: 60 * 60 * 24 * 7  
    })

    const setUserData = (data: any) => {
        userCookie.value = data
    }

    const getUserData = () => {
        return userCookie.value
    }

    const clearUserData = () => {
        userCookie.value = null
    }
    
    const isLogin = () => {
        return !! getUserData()
    }

    return {
        provide: {
            useUserCookie : {
                setUserData,
                getUserData,
                clearUserData,
                isLogin,
            }
        }
    }
})
