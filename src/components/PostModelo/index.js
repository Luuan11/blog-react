import styles from "./PostModelo.module.css"

export default function PostModelo( { title, about } ){
    return (
        <main className={styles.postCard}>
          <div> 
            <h1>
              {about}
            </h1>

            <p className={styles.title}>
              {title}
            </p>

            <div className={styles.socialCards}>
                <a href="https://github.com/Luuan11">Github</a>

            </div>
          </div>
        </main>
      )
    }