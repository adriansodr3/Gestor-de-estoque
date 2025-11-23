import Styles from "./Home.module.css"
import DashboardCard from "../../components/DashboardCard/DashboardCard"
import { useContext } from "react"
import { StockContext } from "../../contexts/StockContext"

export default function Home(){

    const { items } = useContext(StockContext)

    const diversidadeItens = new Set(items.map(item => item.codigo)).size
    const quantidadeTotalItens = items.reduce((acc, item) => acc + item.quantidade, 0)

    const adicionadosNosUltimos10dias = items.filter((item) =>{
        const dataAtual = new Date()
        const dataCriacao = new Date(item.criado_em)
        const diferencasEmdia = (dataAtual - dataCriacao) / (1000 * 60 * 60 * 24)
        return diferencasEmdia <= 10
    }).length

    const itemsComEstoqueMenorQue10 = items.filter((item) => item.quantidade < 10).length

    return  (
        <section className={Styles.container}>
            <h3 className={Styles.title}>Dashboard</h3>
            <ul className={Styles.cards}>
                <DashboardCard title="Diversidade de itens" value={diversidadeItens}/>
                <DashboardCard title="Inventário total" value={quantidadeTotalItens}/>
                <DashboardCard title="Itens recentes" value={adicionadosNosUltimos10dias}/>
                <DashboardCard title="Itens acabando" value={itemsComEstoqueMenorQue10}/>
            </ul>
        </section>
    )
}