import styles from "./Post.module.css";

export default function Post( {post} ) {
    return (
        <div className={styles.post}>
            <img className={styles.capa} 
                src={`/assets/posts/${post.id}/capa.png`}
                alt="Capa da postagem"
            />

            <h2 className={styles.title}>
                {post.title}
            </h2>

            <button className={styles.btnread}>
                Ler mais
            </button>
        </div>
    )
}