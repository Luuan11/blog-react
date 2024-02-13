import styles from "./PostModelo.module.css"

export default function PostModelo( { children, FotoCapa, title } ){
    return (
        <main className={styles.postCard}>
          <div className={styles.FotoCapa} />

          <h1>Sobre mim</h1>
          <h2 className={styles.title}>
            {title}
          </h2>

          <div className={styles.PostContainer}>
            {children}
          </div>

        </main>
      )
    }