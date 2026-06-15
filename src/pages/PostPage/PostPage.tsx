import { useParams } from "react-router-dom"
import { Layout } from "../../components/Layout/Layout"
import type { Post } from "../types"
import { useEffect, useState } from "react"



export const PostPage = () => {


    const params = useParams()
   // console.log({params})


     const [post, setPost] = useState<Post | null>(null)
        useEffect(() => {
            const getPostById = async(id: string | undefined) => {
                const post = await fetch(`https://dummyjson.com/quotes/${id}`, {
                    headers: {
                        "Content-Type": "application/json",
                    
                    }
                })
                const postData = await post.json()
                setPost(postData)
            }
            getPostById(params.id)
        }, [params.id])

    return (
        <Layout>
            {post? (
                <div>{post?.quote}</div>
            ) : (
                <div>Loading...</div>
            )}
        </Layout>
    )
}