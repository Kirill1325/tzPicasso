import { createSlice } from "@reduxjs/toolkit";
import { Post } from "../../../entities/Post/model/types";

const postsState: Post[] = []
const postState: Post | null = null

export const PostSlice = createSlice({
    name: 'posts',
    initialState: {
        allPosts: postsState,
        currentPost: postState
    },
    reducers: {
        setPosts(state, action) {
            state.allPosts = action.payload
        },
        setCurrentPost(state, action) {
            state.currentPost = action.payload
        }
    }
})

export default PostSlice.reducer
export const { setPosts, setCurrentPost } = PostSlice.actions