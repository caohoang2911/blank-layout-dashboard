import { combineReducers } from '@reduxjs/toolkit';
import { postReducer } from '~/features/post/saga/postReducer';
import counterReducer from '../features/counter/counterSlice';
import todoReducer from '../features/todoNew/todoSlice'
import authReducer from '../features/auth/authSlice';
import { persistReducer } from 'redux-persist';
import {authPersistConfig} from './persistReducer';

const rootReducer = combineReducers({
    counter: counterReducer,
    post: postReducer,
    todo: todoReducer,
    auth: persistReducer(authPersistConfig, authReducer),  
})


export default rootReducer;