import { Container, List } from "@mui/material"
import { PostApi } from "../../../entities/PostItem"
import { PostItem } from "../../../entities/PostItem"
import { useEffect, useState } from "react"

export function PostList() {

    const [page, setPage] = useState(1)

    const { data: posts, isLoading, isFetching } = PostApi.useFetchAllPostsQuery(page)

    useEffect(() => {
        const onScroll = () => {
            const scrolledToBottom =
                window.innerHeight + window.scrollY >= document.body.offsetHeight;
            const scrolledToTop = window.scrollY === 0;

            if (scrolledToBottom && !isFetching) {
                setPage((prevPage) => prevPage + 1);
            }

            if (scrolledToTop && !isFetching && page > 1) {
                setPage((prevPage) => prevPage - 1);
            }
        };

        document.addEventListener("scroll", onScroll);

        return function () {
            document.removeEventListener("scroll", onScroll);
        };
    }, [isFetching]);

    if (isLoading) {
        return <div>Loading</div>
    }

    if (!posts) {
        return <div>No posts :(</div>
    }

    return (
        <Container>
            <List sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                gap: '1em',
                mb: 2
            }}>
                {posts && !isLoading && posts.map(post =>
                    <PostItem key={post.id} post={post} />
                )}
            </List>
        </Container>
    )
}

