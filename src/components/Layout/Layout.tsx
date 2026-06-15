import type { PropsWithChildren } from "react"
import { Header } from "../Header/Header"
import { Footer } from "../Footer/Footer"



export const Layout = ({ children }: PropsWithChildren) => {
    return (
        <div>
            <Header />
            {children}
            <Footer />
        </div>
    )
}