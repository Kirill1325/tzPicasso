import React, { useState, useEffect } from 'react'
import { postAPI } from '../../../shared/api/FetchPosts'
import PostItem from '../../../entities/Post/UI/PostItem'
import classes from './PostList.module.css'
import { useDispatch } from 'react-redux'
import { setPosts } from '../model/PostsSlice'
import { Post } from '../../../entities/Post/model/types'

function PostList() {

    const [page, setPage] = useState(1)

    const { data: posts, isFetching, isLoading, error } = postAPI.useFetchAllPostsQuery(page)

    const dispatch = useDispatch()

    useEffect(() => {
        const onScroll = () => {
            const scrolledToBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight
            if (scrolledToBottom && !isFetching) {
                console.log("Fetching...")
                setPage(page + 1)
            }
        }
        console.log(posts)

        document.addEventListener("scroll", onScroll)
        dispatch(setPosts(posts))
        return function () {
            document.removeEventListener("scroll", onScroll)
        }

    }, [page, isFetching])

    return (
        <div className={classes.postList}>
            {posts && posts.map((post: Post, idx) => (
                <PostItem key={idx} post={post} />
            ))}
            {isLoading && <p>...Loading</p>}
            {error && <p>Error</p>}
        </div>
    )
}

export default PostList
