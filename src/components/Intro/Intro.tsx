import classNames from "classnames";
import { Button, Observer } from "components";
import styles from "components/Intro/Intro.module.scss";
import globalStyles from "styles/Globals.module.scss";

export default function Intro() {
    return (
        <div className={styles.root}>
            <div></div>
            <div className={styles.block}>
                <Observer>
                    <h1 className={classNames(globalStyles.title1, styles.title)}>Говорят, никогда не поздно сменить профессию</h1>
                </Observer>
                <Observer>
                    <p className={classNames(globalStyles.text18, styles.text)}>Сделай круто тестовое задание и у тебя получится</p>
                </Observer>
                <Observer>
                    <Button
                        text="Проще простого!"
                        style={styles.btn}
                        onClick={() => {
                            document.querySelector("#form")?.scrollIntoView({ behavior: "smooth" });
                        }}
                    />
                </Observer>
            </div>
        </div>
    );
}
