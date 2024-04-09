import { Button, Card, CardContent, Container, Typography } from "@mui/material"
import { Link, useParams } from "react-router-dom"
import { PostApi } from "../../../entities/PostItem/api/PostService"
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

export function PostPage() {

  const { postId } = useParams<{ postId?: string }>()

  const { data: post } = PostApi.useFetchPostByIdQuery(Number(postId))

  return (

    post &&

    <Container sx={{
      mt: 2
    }}>
      <Link to={`/`}>
        <Button size="small" variant="contained">
          <ArrowBackIosIcon />
          Home
        </Button>
      </Link>
      <Card sx={{
        mt: 2
      }} >

        <CardContent >
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Post № {post.id}
          </Typography>
          <Typography variant="h5" component="div">
            {post.title}
          </Typography>
          <Typography sx={{ mb: .2 }} color="text.secondary">
            {post.body}
          </Typography>

        </CardContent>

      </Card>
    </Container>


  )
}

