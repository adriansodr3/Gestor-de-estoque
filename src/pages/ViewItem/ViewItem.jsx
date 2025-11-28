import { useLoaderData, Link } from "react-router-dom"
import { useDeleteItem } from "../../hooks/useDeleteItem"
import ItemsNav from "../../components/ItemsNav/ItemsNav"
import ActionButton from "../../components/ActionButton/ActionButton"
import InfoCard from "../../components/InfoCard/InfoCard"
import Styles from "./ViewItem.module.css"

export default function ViewItem(){

    const item = useLoaderData()
    const handleDelete = useDeleteItem(true)  // true = redireciona após deletar
    const dataCadastro = new Date(item.criado_em).toLocaleString('pt-BR')

    return (
        <section>
            <ItemsNav />
            <div className={Styles.resume}>
                <h4 className={Styles.title}>{item.nome}</h4>
                <div className={Styles.buttons}>
                    <Link to={`/items/${item.id}/update`}>
                        <ActionButton variant="update">Atualizar</ActionButton>
                    </Link>
                    <ActionButton
                        variant="delete"
                        onClick={() => handleDelete(item.id, item.nome)}
                    >
                        Excluir
                    </ActionButton> 
                </div>
            </div>
            <div className={Styles.InfoCard}>
                <InfoCard>Categoria: {item.categoria}</InfoCard>
                <InfoCard>Quantidade em estoque: {item.quantidade}</InfoCard>
                <InfoCard>Preco: R$ {item.preco}</InfoCard>
            </div>
            <p>{item.descricao}</p>
            <div className={Styles.infosCadastro}>
                <p>Cadastrado em: {dataCadastro}</p>
                <p>Atualizado em: {}</p>
            </div>
            
        </section>
    )
}