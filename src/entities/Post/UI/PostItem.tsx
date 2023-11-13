import React from 'react'
import classes from './PostItem.module.css'
import { Post } from '../model/types'
import Button from '../../../shared/UI/button/Button'
import { useNavigate } from 'react-router-dom'

interface PostItemProps {
  post: Post
}

function PostItem({ post }: PostItemProps) {

  const navigate = useNavigate()

  return (
    <div className={classes.postContainer}>
      <div className={classes.postContent}>
        <p>{post.id}. {post.title}</p>
        <p>{post.body.length > 20 ? post.body.substring(0, 20) + '...' : post.body}</p>
        <Button onClick={() => navigate(`/${post.id}`)} children='See Details'></Button>
      </div>
    </div>
  )
}

export default PostItem