import StockForms from "../../components/StockForms/StockForms"
import { useLoaderData, useNavigate } from "react-router-dom"
import { useContext } from "react"
import { StockContext } from "../../contexts/StockContext"

export default function EditItem(){
    const item = useLoaderData()
    const { updateItem } = useContext(StockContext)
    const navigate = useNavigate()

    const handleUpdateItem = (itemData, itemId) => {
        updateItem(itemId, itemData)
        alert('Item atualizado com sucesso!')
        navigate(`/items/${itemId}`)  // Redireciona para a página de visualização
    }

    return (
        <StockForms
            title={`Atualizar item - ${item.nome}`}
            nome={item.nome}
            quantidade={item.quantidade}
            preco={item.preco}
            categoria={item.categoria}
            descricao={item.descricao}
            onSubmit={handleUpdateItem}
            itemId={item.id}
        />
    )
}