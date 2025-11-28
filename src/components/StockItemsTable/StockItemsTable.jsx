import { Link } from "react-router-dom"
import { useDeleteItem } from "../../hooks/useDeleteItem"
import Styles from "./StockItemsTable.module.css"
import ActionButton from "../ActionButton/ActionButton"

export default function StockResume({stockItems}){
    const handleDelete = useDeleteItem()  // false = não redireciona (já está na lista)

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
                            <Link to={`/items/${item.id}/update`}>
                                <ActionButton variant="update">Atualizar</ActionButton>
                            </Link>
                            <ActionButton
                                variant="delete"
                                onClick={() => handleDelete(item.id, item.nome)}
                            >
                                Excluir
                            </ActionButton>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}
