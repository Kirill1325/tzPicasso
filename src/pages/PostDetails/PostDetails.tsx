import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useAppSelector } from '../../shared/model/hooks/typedHooks'
import Button from '../../shared/UI/button/Button'
import classes from '../../entities/Post/UI/PostItem.module.css'

function PostDetails() {

    const param = useParams()
    const navigate = useNavigate()

    const { allPosts } = useAppSelector(state => state.PostsSlice)

    const [post] = allPosts.filter(p => p.id === Number(param.id))

    return (
        <div className={classes.postContainer}>
            <div className={classes.postContent}>
                <p>{post.id}. {post.title}</p>
                <p>{post.body}</p>
                <Button onClick={() => navigate(`/`)}>Return</Button>
            </div>
        </div>
    )
}

export default PostDetails