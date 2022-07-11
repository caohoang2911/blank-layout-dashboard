import counterSaga from "~/features/counter/saga/counterSaga";
import { all } from 'redux-saga/effects'
import postsSaga from "~/features/post/saga/postSaga";
import todoSaga from "~/features/todoNew/todoSaga";
import authSaga from "~/features/auth/authSaga";

function* rootSaga() {
    yield all([
        ...counterSaga,
        ...postsSaga,
        ...todoSaga,
        ...authSaga
    ])
}

export default rootSaga;