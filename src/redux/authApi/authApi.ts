
import { baseApi } from "../Api/baseApi";

const authApi = baseApi.injectEndpoints({
    endpoints:(builder) =>({
        loginUser:builder.mutation({
            query:(arg)=>({
                url:'/auth/login',
                method:"POST",
                body:arg
            })
        }),
        signUpUser:builder.mutation({
            query:(arg)=>({
                url:"/auth/signup",
                method:"POST",
                body:arg
            })
        })
    })
})

export const {useLoginUserMutation,useSignUpUserMutation} =authApi