import styles from "./Banner.module.css";

export default function Banner(){
    return (
        <div className={styles.banner}>
            <div className={styles.titles}>
                <h1>
                    Seja bem vindo!
                </h1>

                <p>
                    Sinta se livre para absorver diversos conhecimentos
                </p>
            </div>

            
        </div>
    )
}

