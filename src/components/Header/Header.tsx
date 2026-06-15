import { Menu } from "../Menu/Menu"
import { useNavigate } from "react-router-dom"
import { Button } from "../Button/Button"
import styles from "./Header.module.css"

export const Header = () => {
    const navigate = useNavigate()
    return (
        <header className={styles.header}>
            <div className={styles.logo}>Aleksandra Ilina</div>
            <Menu />
            <Button onClick={() => navigate('/')} label="Contacts" className={styles.buttonContact} />
        </header>
    )
}