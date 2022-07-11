import { createReducer } from "@reduxjs/toolkit";
import { DELETE_POST_SUCCESS, FECTH_POSTS_FAILURE, FECTH_POSTS_REQUEST, FECTH_POSTS_SUCCESS } from "../types/actionTypes";
import { FecthPostsSuccess, PostState } from "../types/postTypes";
const initialState: PostState = {
    posts: [],
    pending: false,
    deletePending: false,
}
export const postReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(FECTH_POSTS_REQUEST, (state: PostState) => {
           state.pending = true;
        })
        .addCase(FECTH_POSTS_SUCCESS, (state: PostState, action: FecthPostsSuccess) => {
            state.posts = action.payload.posts;
            state.pending = false;
        })
        .addCase(FECTH_POSTS_FAILURE, (state: PostState) => {
            state.pending = false;
            state.posts = []
        })
        .addCase(DELETE_POST_SUCCESS, (state: PostState) => {

        })

})