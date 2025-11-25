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
    const [items, setItems] = useState(() => {
        // Inicializa o estado diretamente do localStorage
        const storedItems = localStorage.getItem('stock')
        return storedItems ? JSON.parse(storedItems) : []
    })

    // 3. Salvar no localStorage sempre que items mudar
    // [items] = executa toda vez que items for modificado
    useEffect(() => {
        localStorage.setItem('stock', JSON.stringify(items))
    }, [items])

    // 5. Funções para manipular o estoque

    // Adicionar: pega lista antiga [...prev] e adiciona novo item no final
    const addItem = (item) => {
        const itemWithId = {
            id: crypto.randomUUID(),
            ...item,
            criado_em: new Date().toISOString()
        }
        setItems(prev => [...prev, itemWithId])
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