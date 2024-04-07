export type IPost = {
    userId: number,
    id: number,
    title: string,
    body: string
}

export type ListResponse<T> = {
    page: number
    per_page: number
    total: number
    total_pages: number
    data: T[]
}