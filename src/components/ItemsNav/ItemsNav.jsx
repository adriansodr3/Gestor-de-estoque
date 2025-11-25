import { Link } from "react-router-dom"
import Styles from "./ItemsNav.module.css"

export default function ItemsNav({title}) {
    return (
        <>
            <h3 className={Styles.title}>{title}</h3>
            <nav className={Styles.nav}>
                <Link to='/items'>Todos os itens</Link>
                <Link to='/newItem'>Novo Item</Link>
            </nav>
            <hr className={Styles.divider} />
        </>
    )
}
