import styles from "./PostModelo.module.css"

export default function PostModelo( { title, about, children } ){
    return (
        <main className={styles.postCard}>
          <div> 

            <h1>
              {about}
            </h1>

            <p className={styles.title}>
              {title}
            </p>

            <div >
              {children}
            </div>

          </div>
        </main>
    )
}