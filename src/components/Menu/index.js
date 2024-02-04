
import styles from "./Menu.module.css";
import MenuLink from "../MenuLink";

export default function Menu() {
    
    return (
        
        <header>
            <nav className={styles.navMenu}>
                <MenuLink to="/">
                    Home
                </MenuLink>

                <MenuLink to="/sobre">
                    Sobre
                </MenuLink>
            </nav>
        </header>

    )
}