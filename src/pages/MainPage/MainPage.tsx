import { useState } from "react"
import { Layout } from "../../components/Layout/Layout"
import { Button } from "../../components/Button/Button"
import styles from "../../components/Button/Button.module.css"
import { ConnectForm } from "../../components/ConnectForm/ConnectForm"
import BasicModal from "../../components/BasicModal/BasicModal"

export const MainPage = () => {
    const [showForm, setShowForm] = useState(false)

    return (
        <Layout>
            <h1>Main Page</h1>
            <BasicModal />
            <Button onClick={() => setShowForm(true)} label="Connect With Me" className={styles.buttonConnect } />
            {showForm && <ConnectForm />}
        </Layout>
    )
}