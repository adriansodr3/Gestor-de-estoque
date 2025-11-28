import { useContext } from "react"
import { StockContext } from "../contexts/StockContext"
import { useNavigate } from "react-router-dom"

/**
 * Hook customizado para deletar itens com confirmação
 * @param {boolean} shouldRedirect - Se deve redirecionar após deletar (padrão: false)
 * @returns {function} - Função handleDelete que recebe (itemId, itemNome)
 */
export function useDeleteItem(shouldRedirect = false) {
    const { deleteItem } = useContext(StockContext)
    const navigate = useNavigate()

    const handleDelete = (itemId, itemNome) => {
        const confirmar = window.confirm(
            `Tem certeza que deseja excluir "${itemNome}"?\n\nEsta ação não pode ser desfeita.`
        )

        if (confirmar) {
            deleteItem(itemId)
            alert('Item excluído com sucesso!')

            if (shouldRedirect) {
                navigate('/items')
            }
        }
    }

    return handleDelete
}