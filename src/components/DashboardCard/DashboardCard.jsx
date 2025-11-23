import Styles from "./DashboardCard.module.css"

export default function DashboardCard({title, value}){
    return (
        <div className={Styles.card}>
            <h4 className={Styles.header}>{title}</h4>
            <p className={Styles.content}>{value}</p>
        </div>
    )
}