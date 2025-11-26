import Styles from "./InfoCard.module.css"

export default function InfoCard({children}){
    return (
        <div className={Styles.containerInfo}>
            <p>{children}</p>
        </div>
    )
}