import React from 'react'
import classes from './PostItem.module.css'
import { Post } from '../model/types'
import Button from '../../../shared/UI/button/Button'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setCurrentPost } from '../../../widgets/PostList/model/PostsSlice'

interface PostItemProps {
  post: Post
}

function PostItem({ post }: PostItemProps) {

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleClick = () => {
    navigate(`/${post.id}`)
    dispatch(setCurrentPost(post))
  }

  return (
    <div className={classes.postContainer}>
      <div className={classes.postContent}>
        <p>{post.id}. {post.title}</p>
        <p>{post.body.length > 20 ? post.body.substring(0, 20) + '...' : post.body}</p>
        <Button onClick={handleClick} children='See Details'></Button>
      </div>
    </div>
  )
}

export default PostItem