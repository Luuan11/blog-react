import styles from "./PostModelo.module.css"

export default function PostModelo( { children, FotoCapa, titulo } ){
    return (
        <article className={styles.PostModeloContainer}>
          <div className={styles.FotoCapa} 
            style={{backgroundImage: `url(${FotoCapa})`}}
          />

          <h2 className={styles.título}>
            {titulo}
        </h2>

          <div className={styles.PostContainer}>
            {children}
        </div>

        </article>
      )
    }