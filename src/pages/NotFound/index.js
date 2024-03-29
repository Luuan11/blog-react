import styles from "./NotFound.module.css";

export default function NotFound() {
    return (
        <div className={styles.container}>
            
            <span className={styles.error}>
                404
            </span>

            <h1 className={styles.title}>
                Sua página não foi encontrada :C
            </h1>

            <p className={styles.subtitle}>
                Tem certeza que está com o link correto? 
            </p>

        </div>

    )
    
}