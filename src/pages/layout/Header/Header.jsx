import { Link } from "react-router-dom"
import Styles from "./Header.module.css"

export default function Header(){
    return(
        <header className={Styles.headerContainer}>
            <h3 className={Styles.title}>
                REACT STOCK
            </h3>
            <nav className={Styles.navItems}>
                <Link to="/">Início</Link>
                <Link to="/items">Items</Link>
            </nav>
        </header>
    )
}