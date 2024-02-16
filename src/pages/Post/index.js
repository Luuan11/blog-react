import { useParams } from "react-router-dom";

import posts from"json/posts.json";
import PostModelo from "components/PostModelo";

export default function Post(){
    const params = useParams();

    const post = posts.find((post) => {
        return post.id === Number(params.id);
    } )

    return (
        <PostModelo
            about={post.title}
            title={post.texto}
        >

        </PostModelo>
    ) 
    
}