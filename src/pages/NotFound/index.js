import styles from "./NotFound.module.css";

export default function NotFound() {
    return (
        <div className={styles.container}>
            <span className={styles.error}>
                404
            </span>

            <h1 className={styles.title}>
                Página não encontrada.
            </h1>

            <p className={styles.subtitle}>
                Tem certeza que está 
            </p>

        </div>

    )
    
}