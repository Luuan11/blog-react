import PostModelo from "components/PostModelo";
import styles from "./about.module.css";

import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function About() {
    return (
        <PostModelo 
            about="Sobre mim"
            title="🌟 Sou um desenvolvedor Front-end apaixonado por desenvolver interfaces interativas e atraentes, gosto de praticar criando diversas aplicações, como essa que está acessando, sinta-se livre para entrar em contato caso queira conversar, obrigado pela sua atenção e deixo minhas redes abaixo!">

            <h2 className={styles.myNetwork}>
                Minha rede:
            </h2>

            <div className={styles.socialCards}>
                <a href="https://github.com/Luuan11">
                    <FaGithub />  Github
                </a>

                <a href="https://www.linkedin.com/in/luan-fernando/">
                <   FaLinkedin /> Linkedin
                </a>
            </div>
                
        </PostModelo>
    )
}