import { AxiosResponse } from "axios";
import { call, put, takeLatest } from "redux-saga/effects";
import { getPosts } from "~/services/postSerivce";
import { FECTH_POSTS_REQUEST } from "../types/actionTypes";
import { Post } from "../types/postTypes";
import { fetchPostsSuccess } from "./postAction";

function* fecthPostsSaga(){
    try{
        const response : AxiosResponse = yield call(getPosts);
        const posts : Post[] = response.data;
        yield put(fetchPostsSuccess({posts}))
    }catch(err){
        console.log(err,'error')
    }
}

function* watchPostProcess(){
    yield takeLatest(FECTH_POSTS_REQUEST, fecthPostsSaga)
}

const postsSaga = [watchPostProcess()];

export default postsSaga;