import styles from "components/Footer/Footer.module.scss";
import globalStyles from "styles/Globals.module.scss";

export default function Footer() {
    return (
        <footer className={styles.root}>
            <div className={globalStyles.container}>
                <span className={globalStyles.text18}>© 2021 Лаборатория интернет</span>
            </div>
        </footer>
    );
}
