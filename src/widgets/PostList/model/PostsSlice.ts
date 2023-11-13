import { createSlice } from "@reduxjs/toolkit";
import { Post } from "../../../entities/Post/model/types";

const postsState: Post[] = []

export const PostSlice = createSlice({
    name: 'posts',
    initialState: {
        allPosts: postsState
    },
    reducers: {
        setPosts(state, action){
            state.allPosts = action.payload
        }
    }
})

export default PostSlice.reducer
export const {setPosts} = PostSlice.actions