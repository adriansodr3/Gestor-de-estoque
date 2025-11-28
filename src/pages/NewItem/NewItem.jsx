import StockForms from "../../components/StockForms/StockForms"
import { useContext } from "react"
import { StockContext } from "../../contexts/StockContext"
import { useNavigate } from "react-router-dom"

export default function NewItem(){
    const { addItem } = useContext(StockContext)
    const navigate = useNavigate()

    const handleAddItem = (itemData) => {
        addItem(itemData)
        alert('Item adicionado com sucesso!')
        navigate('/items')  // Redireciona para a lista de itens
    }

    return (
        <StockForms
            title="New Item"
            onSubmit={handleAddItem}
        />
    )
}