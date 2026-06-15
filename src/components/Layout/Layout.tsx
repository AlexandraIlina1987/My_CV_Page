import type { PropsWithChildren } from "react"
import { Header } from "../Header/Header"
import { Footer } from "../Footer/Footer"

import styles from "./Layout.module.css"



export const Layout = ({ children }: PropsWithChildren) => {
    return (
        <div className={styles.layout}>
            <Header />
            <main className={styles.main}>
                {children}
            </main>
            <Footer />
        </div>
    )
}
