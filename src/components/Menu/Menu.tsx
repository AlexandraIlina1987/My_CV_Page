
import styles from "./Menu.module.css";
import "../../App.css";
import { Link } from "react-router-dom";

export const Menu = () => {
    const menu = [
        { label: 'Home', path: '/' },
        { label: 'My Projects', path: '/projects' },
        { label: 'Feedback', path: '/feedback' },
        { label: 'Blog', path: '/blog' },
    ]

    return(
        <nav>
            <ul className={styles.menu}>
                {menu.map(({label, path}, index) => (
                    <Link key={`${index}-menu-item`} to={path}>{label}</Link>

                ))}
            </ul>
        </nav>
    )   
}
