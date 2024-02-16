import { FaLongArrowAltRight } from "react-icons/fa";
import styles from "./PostCard.module.css";

export default function PostCard( { post } ) {
    return (
        <div className={styles.post}>
            <img className={styles.capa} 
                src={`/assets/posts/${post.id}/capa.png`}
                alt="Capa da postagem"
            />

            <h2 className={styles.title}>
                {post.title}
            </h2>

            <div className={styles.btnFlex}>
                <button className={styles.btnread}>
                    Saiba mais <FaLongArrowAltRight />
                </button>
            </div>
        </div>
    )
}