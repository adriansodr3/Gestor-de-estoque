import { Outlet } from "react-router-dom"
import Header from "./Header/Header"
import styles from "./RootLayout.module.css"

export default function RootLayout(){
    return (
        <div className={styles.container}>
            <Header />
            <main className={styles.main}>
                <Outlet />
            </main>
            <footer className={styles.footer}>
                Feito com React e React Router
            </footer>
        </div>
    )
}