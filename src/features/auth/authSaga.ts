import { PayloadAction } from "@reduxjs/toolkit";
import { push } from 'react-router-redux';
import { call, delay, fork, put, take } from "redux-saga/effects";
import { loginSuccess, login, LoginState, logOut,loginFail } from "./authSlice";

function* handleLogin(payload: LoginState) {
    try{
        yield delay(1000)
        // console.log('login')
        localStorage.setItem('accessToken', payload.userName)
        yield put(loginSuccess({
            id: '1',
            userName: payload.userName
        }))

        yield put(push('/notfound'))

    }catch(err){
        yield put(loginFail())
    }
}

function* handleLogOut(){
    yield delay(1000)
    // console.log('logOut')
    localStorage.removeItem('accessToken');
}

function* watchLoginFlow(){
    while(true) {
        // console.log('watchlogin')
        const isLoggedIn = Boolean(localStorage.getItem('accessToken'))
        if(!isLoggedIn){
            const action: PayloadAction<LoginState> = yield take(login.type);
            console.log(action)
            yield fork(handleLogin, action.payload);
        }
    
        yield take(logOut.type);
        yield call(handleLogOut);
    }
}

export default function* authSaga(){
    yield fork(watchLoginFlow)
}