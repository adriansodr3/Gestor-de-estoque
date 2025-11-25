import Styles from "./StockForms.module.css"
import ItemsNav from "../ItemsNav/ItemsNav"
import { useState, useContext } from "react"
import { StockContext } from "../../contexts/StockContext"

export default function StockForms({title, nome, quantidade, preco, categoria, descricao}){
    
    const [name, setName] = useState()
    const [quantity, setQuantity] = useState()
    const [price, setPrice] = useState()
    const [category, setCategory] = useState()
    const [description, setDescription] = useState()
    
    const { addItem } = useContext(StockContext)

    function addItemOnStorage(e){
        e.preventDefault()

         // Validação
        if (!name?.trim() || !quantity || !price || !category?.trim()) {
            alert('Preencha todos os campos obrigatórios!')
            return
        }
        
        // Validar números
        if (Number(quantity) <= 0 || Number(price) <= 0) {
            alert('Quantidade e preço devem ser maiores que zero!')
            return
        }

        const newItem = {
            nome: name,
            quantidade: Number(quantity),
            preco: Number(price),
            categoria: category,
            descricao: description || ""
        }
        
        addItem(newItem)
        alert('Item adicionado com sucesso!')

        // Limpar campos
        setName('')
        setQuantity('')
        setPrice('')
        setCategory('')
        setDescription('')
    }


    return (
        <section>
            <ItemsNav title={title} />
            <form onSubmit={addItemOnStorage}>
            <div className={Styles.linhaInput1}>
                <div>
                    <label htmlFor="name">Nome</label>
                    <input type="text" id="name" value={name} onChange={e => setName(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="quantity">Quantidade</label>
                    <input type="number" id="quantity" value={quantity} onChange={e => setQuantity(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="price">Preco</label>
                    <input type="number" id="name" step="0.01" value={price} onChange={e => setPrice(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="category">Categoria</label>
                    <input type="text" id="category" value={category} onChange={e => setCategory(e.target.value)}/>
                </div>
            </div>
            <div>
                <label htmlFor="description" className="description">Descricao</label>
                <textarea id="description" value={description} onChange={e => setDescription(e.target.value)}></textarea>
            </div>
            <button type="submit">Salvar</button>
        </form>
        </section>
        
    )
}