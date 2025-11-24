import { Link } from "react-router-dom"
import Styles from "./StockResume.module.css"

export default function StockResume({h1, h2, recentItems}){
    return (
        <table className={Styles.table}>
            <thead>
                <tr>
                    <th>{h1}</th>
                    <th>{h2}</th>
                </tr>
            </thead>
            <tbody>
                {recentItems.map(item => (
                    <tr key={item.id}>
                        <td>{item.nome}</td>
                        <td>
                            <Link to={`/items/${item.id}`}>
                                <button className={Styles.viewButton}>Ver</button>
                            </Link>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}
