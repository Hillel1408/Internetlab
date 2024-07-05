import { Observer } from "components";
import styles from "components/Block3/Block3.module.scss";
import globalStyles from "styles/Globals.module.scss";
import { images } from "assets";
import classNames from "classnames";

export default function Block3() {
    return (
        <div className={styles.root} id="block3">
            <div className={globalStyles.container}>
                <div className={styles.grid}>
                    <div>
                        <Observer>
                            <h2 className={classNames(globalStyles.title3, styles.title)}>Круто, ты дошел до третьего блока</h2>
                        </Observer>
                        <Observer>
                            <p className={classNames(globalStyles.text16, styles.text)}>
                                63% опрошенных пользовались кредитами из-за того, что не могли покрыть непредвиденные расходы свыше 15 000 ₽.
                            </p>
                        </Observer>
                        <Observer>
                            <p className={classNames(globalStyles.text16, styles.text)}>
                                Доступ к заработанным деньгам помогает отказаться от кредитов и экономить деньги на процентах и штрафах.
                            </p>
                        </Observer>
                    </div>
                    <div>
                        <img src={images.block3} alt="" width="" height="" />
                    </div>
                </div>
            </div>
        </div>
    );
}
