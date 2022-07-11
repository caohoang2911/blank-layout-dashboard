import { PayloadAction } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";
import { call, fork, put, takeLatest, takeLeading } from "redux-saga/effects";
import { loginFailure, loginRequest, loginSuccess, logout } from "./authSlice";

const fakeLoginApi = ()=> new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve({status: 200, data: {token : 'my-token'}});
    },2000)
})

function* loginAction(action: PayloadAction<any>){
   try{
    const response : AxiosResponse = yield call(fakeLoginApi);
    yield put(loginSuccess(response?.data?.token));
    action.payload('/');
   }catch(err){
    yield put(loginFailure());
   }
}

function* logoutAction(action: PayloadAction<any>){
    action.payload('/login');
}

function* watchLoginFlow(){
    yield takeLatest(loginRequest.type,loginAction);
    yield takeLatest(logout.type, logoutAction)   
}

const authSaga = [fork(watchLoginFlow)]

export default authSaga;