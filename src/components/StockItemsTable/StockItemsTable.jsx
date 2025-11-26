import { Link } from "react-router-dom"
import Styles from "./StockItemsTable.module.css"
import ActionButton from "../ActionButton/ActionButton"

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
                                <ActionButton variant="view">Ver</ActionButton>
                            </Link>
                            <Link to={`/items/${item.id}/updtade`}>
                                <ActionButton variant="update">Atualizar</ActionButton>
                            </Link>
                            <Link to={`/items/${item.id}/delete`}>
                                <ActionButton variant="delete">Excluir</ActionButton>
                            </Link>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}
