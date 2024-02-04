import { Link, useLocation} from "react-router-dom";
import styles from "./MenuLink.module.css";

export default function MenuLink({children, to}) {
    const localiton = useLocation();

    return(
        <Link className={`
            ${localiton.pathname === to ? styles.textMarked : ""}
            `} to={to}>
                {children}
        </Link>
    )
}