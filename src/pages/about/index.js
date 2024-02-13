import PostModelo from "components/PostModelo";
import styles from "./about.module.css"

export default function About() {
    return (
        <PostModelo 
        
        title="Sou um desenvolvedor Front-end apaixonado por desenvolver interfaces interativas e atraentes, gosto de praticar criando diversas aplicações, como essa que está acessando, sinta-se livre para entrar em contato caso queira conversar, obrigado pela sua atenção e deixo minhas redes abaixo!">

            <main>

            <div className={styles.socialCards}>
                <a href="#">Github</a>

            </div>
                
            </main>

        </PostModelo>
    )
}