import { configureStore, combineReducers, getDefaultMiddleware } from "@reduxjs/toolkit";
import { postAPI } from "../shared/api/FetchPosts";
import PostsSlice from "../widgets/PostList/model/PostsSlice";

const rootReducer = combineReducers({
    [postAPI.reducerPath]: postAPI.reducer,
    PostsSlice
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(postAPI.middleware)
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']