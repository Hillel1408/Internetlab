import { Button } from "components";
import styles from "components/Intro/Intro.module.scss";
import globalStyles from "styles/Globals.module.scss";

export default function Intro() {
    return (
        <div className={styles.root}>
            <div></div>
            <div className={styles.block}>
                <h1 className={globalStyles.title1}>Говорят, никогда не поздно сменить профессию</h1>
                <p className={globalStyles.text18}>Сделай круто тестовое задание и у тебя получится</p>
                <Button
                    text="Проще простого!"
                    style={styles.btn}
                    onClick={() => {
                        document.querySelector("#form")?.scrollIntoView({ behavior: "smooth" });
                    }}
                />
            </div>
        </div>
    );
}
