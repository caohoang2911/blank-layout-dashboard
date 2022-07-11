import { AxiosResponse } from "axios";
import { call, fork, put, takeLatest } from "redux-saga/effects";
import { getTodos } from "~/services/todoService";
import { fecthTodoRequest, fecthTodoSuccess } from "./todoSlice";
import { Todo } from "./types";

function* fecthTodoAction(){
    try{
        const response : AxiosResponse = yield call(getTodos);
        const todos: Todo[] = response.data;
        yield put(fecthTodoSuccess(todos));
    }catch(err){
        
    }
}

function* watchTodoSaga(){
   yield takeLatest(fecthTodoRequest, fecthTodoAction)
}

const todoSaga = [fork(watchTodoSaga)]

export default todoSaga;

