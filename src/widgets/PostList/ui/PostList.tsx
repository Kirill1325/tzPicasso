import { PostApi } from "../../../entities/PostItem"
import { PostItem } from "../../../entities/PostItem"
import { useCallback, useState } from "react"
import { Virtuoso } from "react-virtuoso"

export function PostList() {

    const [page, setPage] = useState(1)

    const { data: posts, isLoading } = PostApi.useFetchAllPostsQuery(page)

    const loadMore = useCallback(() => {
        return setTimeout(() => {
            setPage((prevPage) => prevPage + 1)
        }, 500)
    }, [setPage])

    if (isLoading) {
        return <div>Loading</div>
    }

    if (!posts) {
        return <div>No posts :(</div>
    }

    return (
        <Virtuoso
            useWindowScroll
            data={posts}
            endReached={loadMore}
            increaseViewportBy={200}
            itemContent={(index, post) => {
                return <PostItem key={post.id} post={post} />
            }}

        />
    )
}

