import { useMemo } from "react"

export const useSortedPosts = (posts, sort) => { // формирует массив отсортированных постов
    const sortedPosts = useMemo(() => {
        if (sort) {
          return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]))
        }
        return posts
    }, [sort, posts])

    return sortedPosts
}

export const usePosts = (posts, sort, query) => { // возвращает и отфильтрованный, и отсортированный массив
    const sortedPosts = useSortedPosts(posts, sort)

    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPosts.filter(post => post.title.toLowerCase().includes(query))
    }, [query, sortedPosts])

    return sortedAndSearchedPosts
}