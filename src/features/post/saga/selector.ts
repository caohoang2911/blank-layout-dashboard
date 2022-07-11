import { RootState } from "~/app/store";

export const postsSelector = (state: RootState) => state.post.posts || [];
export const pendingSelector = (state: RootState) => state.post.pending;

