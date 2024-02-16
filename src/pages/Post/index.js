import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";

import posts from"json/posts.json";
import PostModelo from "components/PostModelo";

import "./Post.css"

export default function Post(){
    const params = useParams();

    const post = posts.find((post) => {
        return post.id === Number(params.id);
    } )

    return (
        <PostModelo
            about={post.title}

        >
            <div className="posts-markdown">

            <ReactMarkdown>
                {post.texto}
            </ReactMarkdown>

            </div>
            
        </PostModelo>
    ) 
    
}