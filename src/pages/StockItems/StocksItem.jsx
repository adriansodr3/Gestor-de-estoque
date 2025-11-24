import { Link } from "react-router-dom"
import Styles from "./StockItem.module.css"
import StockItemsTable from "../../components/StockItemsTable/StockItemsTable"
import { StockContext } from "../../contexts/StockContext"
import { useContext } from "react"

export default function StockItems(){

    const {items} = useContext(StockContext)

    return (
        <section className={Styles.container}>
            <h3 className={Styles.title}>Stock Items</h3>
            <nav>
                <Link to='/items'>Todos os itens</Link>
                <Link to='/newItem'>Novo Item</Link>
            </nav>
            <hr />
            <StockItemsTable stockItems={items} />
        </section>
    )
}