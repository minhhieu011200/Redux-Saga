import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import { User } from '../../model'

export interface LoginState{
    userName: string;
    password: string;
}

export interface AuthState{
    isLoggedIn: boolean
    logging?: boolean // đã đăng nhập trước đó chưa
    user?: User
}

const initialState: AuthState = {
    isLoggedIn: false,
    logging: false,
    user: undefined
}

export const authSlice= createSlice({
    name:'auth',
    initialState,
    reducers:{
        login:(state,action: PayloadAction<LoginState>)=>{
            state.logging=true;
        },
        loginSuccess:(state,action: PayloadAction<User>)=>{
            state.isLoggedIn = true
            state.logging=true
            state.user = action.payload
        },
        loginFail:(state)=>{
            state.logging= false
        },
        logOut:(state)=>{
            state.isLoggedIn= false
            state.logging= false
            state.user= undefined
        },
    }
})

//actions
export const { login,logOut,loginSuccess,loginFail } = authSlice.actions


//state
export const isLoggedIn= (state: any)=>state.auth.isLoggedIn
export const logging= (state:any)=>state.auth.logging
export const user= (state: any)=>state.auth.user


//reducer
const authReducer =authSlice.reducer
export default authReducer