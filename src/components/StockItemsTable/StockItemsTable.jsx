import { Link } from "react-router-dom"
import Styles from "./StockItemsTable.module.css"

export default function StockResume({stockItems}){
    return (
        <table className={Styles.table}>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>Em Estoque</th>
                    <th>Categoria</th>
                    <th>Acoes</th>
                </tr>
            </thead>
            <tbody>
                {stockItems.map(item => (
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.nome}</td>
                        <td>{item.quantidade}</td>
                        <td>{item.categoria}</td>
                        <td className={Styles.buttons}>
                            <Link to={`/items/${item.id}`}>
                                <button className={Styles.viewButton}>Ver</button>
                            </Link>
                            <Link to={`/items/${item.id}/updtade`}>
                                <button className={Styles.updateButton}>Atualizar</button>
                            </Link>
                            <Link to={`/items/${item.id}/delete`}>
                                <button className={Styles.deleteButton}>Excluir</button>
                            </Link>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}
