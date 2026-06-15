
import { Link } from "react-router-dom";
import { Layout } from "../../components/Layout/Layout"
import { useEffect, useState } from "react"
import type { Post } from "../types"
import type { FC } from "react"


export const BlogPage = () => {
    const [posts, setPosts] = useState<Post[]>([])
    useEffect(() => {
        const getPosts = async() => {
            const posts = await fetch('https://dummyjson.com/quotes/', {
                headers: {
                    "Content-Type": "application/json",
                    //"X-Api-Key": "Tc4Abdg9L6cTQqAe8HclMl7Ud7nVByrAO2ti9DRe"
                }
            })
            const postsData = await posts.json()
            setPosts(postsData.quotes)
        }
        getPosts()
    }, [])
    return (
        <Layout>
            
            <Posts posts={posts} />
        </Layout>
    )
}
interface IPosts {
    posts: Post[]
}
const Posts:FC<IPosts> = ({posts}) =>{
if (posts.length === 0) {
    return <div>Loading...</div>
}
return posts.map((post: Post) => (
    <div key={post.id}>
        <Link to={`/blog/${post.id}`}>
        <h2>Quote #{post.id}: {post.author}</h2>
        <p>{post.quote}</p>
        </Link>
    </div>
))
}