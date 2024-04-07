import { Card, CardContent, Typography, CardActions, Button } from "@mui/material"
import { IPost } from "../model/types"
import { Link } from "react-router-dom"

interface PostItemProps {
    post: IPost
}

function PostItem({ post }: PostItemProps) {

    return (
        <Card sx={{
            "&:hover": {
                backgroundColor: 'rgb(227, 227, 227)',

            }
        }}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    Post № {post.id}
                </Typography>
                <Typography variant="h5" component="div">
                    {post.title}
                </Typography>
                <Typography sx={{ mb: .2 }} color="text.secondary">
                    {post.body.substring(0, 150) + '...'}
                </Typography>

            </CardContent>
            <CardActions>
                <Link to={`/${post.id}`}>
                    <Button size="small" variant="contained">Learn More</Button>
                </Link>
            </CardActions>
        </Card>
    )
}

export default PostItem