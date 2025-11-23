import { createContext, useState, useEffect } from "react";

/*
  CONTEXT - Caixa mágica que guarda informações acessíveis em toda aplicação
  PROVIDER - Componente que distribui essas informações para os filhos
  useContext - Hook usado nos componentes para acessar os dados do Context
*/

// 1. Criar o contexto (a caixa mágica vazia)
export const StockContext = createContext()

// 2. Criar o Provider (quem distribui as informações)
// children = todos os componentes que terão acesso aos dados
export function StockContextProvider({children}){
    // Estado que guarda a lista de itens do estoque
    const [items, setItems] = useState([])

    // 3. Carregar dados do localStorage quando o componente montar
    // [] = executa apenas uma vez, quando carregar
    useEffect(() => {
        const storedItems = localStorage.getItem('stock')
        if (storedItems) {
            setItems(JSON.parse(storedItems)) // Transforma texto em array/objeto
        }
    }, [])

    // 4. Salvar no localStorage sempre que items mudar
    // [items] = executa toda vez que items for modificado
    useEffect(() => {
        localStorage.setItem('stock', JSON.stringify(items)) // Transforma array/objeto em texto
    }, [items])

    // 5. Funções para manipular o estoque

    // Adicionar: pega lista antiga [...prev] e adiciona novo item no final
    const addItem = (item) => {
        setItems(prev => [...prev, item])
    }

    // Deletar: filter retorna nova lista SEM o item com aquele id
    const deleteItem = (itemId) => {
        setItems(prev => prev.filter(item => item.id !== itemId))
    }

    // Atualizar: map percorre a lista, se achar o id, mescla as mudanças
    const updateItem = (itemId, updatedItem) => {
        setItems(prev => prev.map(item =>
            item.id === itemId ? { id: itemId, ...updatedItem } : item
        ))
    }

    // 6. O que será compartilhado com os componentes
    const value = {
        items,        // Lista de itens
        addItem,      // Função para adicionar
        deleteItem,   // Função para deletar
        updateItem    // Função para atualizar
    }

    // 7. Retorna o Provider com os valores disponíveis para os filhos
    return (
        <StockContext.Provider value={value}>
            {children}
        </StockContext.Provider>
    )
}

/*
  COMO USAR EM OUTROS COMPONENTES:

  import { useContext } from "react"
  import { StockContext } from "./contexts/StockContext"

  function MeuComponente() {
    const { items, addItem, deleteItem, updateItem } = useContext(StockContext)

    // Agora pode usar:
    // items - para ver a lista
    // addItem({ id: 1, name: "Produto" }) - para adicionar
    // deleteItem(1) - para deletar
    // updateItem(1, { name: "Novo nome" }) - para atualizar
  }
*/