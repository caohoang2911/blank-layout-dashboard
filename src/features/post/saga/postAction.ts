import { FECTH_POSTS_FAILURE, FECTH_POSTS_REQUEST, FECTH_POSTS_SUCCESS } from "../types/actionTypes";
import { FecthPostsFailure, FecthPostsRequest, FecthPostsSuccess, FecthPostsSuccessPayload } from "../types/postTypes";


export const fetchPostsRequest = (): FecthPostsRequest => ({
    type: FECTH_POSTS_REQUEST
})

export const fetchPostsSuccess = (payload : FecthPostsSuccessPayload): FecthPostsSuccess => ({
    type: FECTH_POSTS_SUCCESS,
    payload
})

export const fetchPostsFailure = (): FecthPostsFailure => ({
    type: FECTH_POSTS_FAILURE,
    
})



export type PostActions =
  | FecthPostsRequest
  | FecthPostsSuccess
  | FecthPostsFailure;