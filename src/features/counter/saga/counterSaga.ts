import { fork, put, takeLatest } from "redux-saga/effects";
import { incrementIfOddSagaSuccess } from "../counterSlice";
import { INCREMENT_IF_ODD } from "./actionTypes";
import { IncrementIfOdd } from "./types";

function* incrementIfOddSaga(action: IncrementIfOdd){
    yield put(incrementIfOddSagaSuccess(3333));
}

function* watchCounter(){
    yield takeLatest(INCREMENT_IF_ODD, incrementIfOddSaga)
}

const counterSaga = [fork(watchCounter)];

export default counterSaga;

