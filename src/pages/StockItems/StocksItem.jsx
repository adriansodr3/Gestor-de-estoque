import Styles from "./StockItem.module.css"
import StockItemsTable from "../../components/StockItemsTable/StockItemsTable"
import ItemsNav from "../../components/ItemsNav/ItemsNav"
import { StockContext } from "../../contexts/StockContext"
import { useContext } from "react"

export default function StockItems(){

    const { items } = useContext(StockContext)

    return (
        <section className={Styles.container}>
            <ItemsNav title="Stock Items" />
            <StockItemsTable stockItems={items} />
        </section>
    )
}