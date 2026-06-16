import { Layout } from "../../components/Layout/Layout"
import { Button } from "../../components/Button/Button"
import styles from "../../components/Button/Button.module.css"

export const MainPage = () => {
    return (
        <Layout>
            <h1>Main Page</h1>
            <Button onClick={() => {}} label="Connect With Me" className={styles.buttonConnect } />
        </Layout>
    )
}