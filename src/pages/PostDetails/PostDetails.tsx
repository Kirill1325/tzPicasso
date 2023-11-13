import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppSelector } from '../../shared/model/hooks/typedHooks'
import Button from '../../shared/UI/button/Button'
import classes from '../../entities/Post/UI/PostItem.module.css'


function PostDetails() {

    const navigate = useNavigate()

    const { currentPost } = useAppSelector(state => state.PostsSlice)
    console.log(currentPost)

    return (
        <div className={classes.postContainer}>
            {currentPost &&
                <div className={classes.postContent}>
                    <p>{currentPost['id']}. {currentPost['title']}</p>
                    <p>{currentPost['body']}</p>
                    <Button onClick={() => navigate(`/`)}>Return</Button>
                </div>
            }
        </div>
    )
}

export default PostDetails