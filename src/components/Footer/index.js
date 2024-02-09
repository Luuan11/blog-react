import styles from "./Footer.module.css";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            Desenvolvidor por 
            <a href="https://www.linkedin.com/in/luan-fernando/" target="_blank">
                Luan Fernando.
            </a>
        </footer>
    )
}