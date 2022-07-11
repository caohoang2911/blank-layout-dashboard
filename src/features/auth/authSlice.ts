import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { NavigateFunction, Navigator } from "react-router-dom";
import { RootState } from "~/app/store";

export interface AuthState{
    userInfo: any
    isLogin: boolean
    token: string | null
    loadingLogin: boolean
}

const initialState : AuthState={
    userInfo: [],
    isLogin: false,
    token: null,
    loadingLogin: false
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers:{
        loginRequest: (state:AuthState, actions: PayloadAction<any>) =>{
            state.loadingLogin = true
        },
        loginSuccess: (state: AuthState, actions: PayloadAction<string>) =>{
            state.loadingLogin = false;
            state.isLogin = true;
            state.token = actions.payload
        },
        loginFailure: (state: AuthState) =>{
            state.loadingLogin = false;
        },
        logout: (state: AuthState, actions: PayloadAction<any>) =>{
            state.isLogin = false;
            state.token=null;
        }

    }
})


export const getIsLogin = (state: RootState) => state.auth.isLogin;  
export const getLoadingLogin = (state: RootState) => state.auth.loadingLogin

// actions

export const {loginRequest,loginSuccess,loginFailure,logout} = authSlice.actions;

export default authSlice.reducer