import { DELETE_POST_REQUEST, FECTH_POSTS_FAILURE, FECTH_POSTS_REQUEST, FECTH_POSTS_SUCCESS } from "./actionTypes";

export interface Post{
    id: string;
    title: string;
}

export interface PostState  {
    posts: Post[],
    pending: boolean;
    deletePending: boolean;
}

// Fecth ActionTypes



export type  FecthPostsRequest = {
    type : typeof FECTH_POSTS_REQUEST
}

export type FecthPostsFailure={
    type : typeof FECTH_POSTS_FAILURE
}

export type FecthPostsSuccess={
    type : typeof FECTH_POSTS_SUCCESS,
    payload: FecthPostsSuccessPayload
}
export interface FecthPostsSuccessPayload{
    posts: Post[],
}

// Delete actionTypes



export type DeletePostRequest = {
    type: typeof DELETE_POST_REQUEST,
    payload: DeletePostRequestPayload
} 
export interface DeletePostRequestPayload{
    id: string
}


