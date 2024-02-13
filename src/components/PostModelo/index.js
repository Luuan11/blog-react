import styles from "./PostModelo.module.css"

export default function PostModelo( { children, title } ){
    return (
        <main className={styles.postCard}>
          <div> 
            <h1>Sobre mim</h1>

            <p className={styles.title}>
              {title}
            </p>

            <div className={styles.PostContainer}>
              {children}
            </div>
            
          </div>
        </main>
      )
    }