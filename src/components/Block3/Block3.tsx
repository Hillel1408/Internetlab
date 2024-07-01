import styles from 'components/Block3/Block3.module.scss'
import globalStyles from 'styles/Globals.module.scss'
import { images } from 'assets'

export default function Block3() {
  return (
    <div className={styles.root}>
      <div className={globalStyles.container}>
        <div className={styles.grid}>
          <div>
            <h2 className={globalStyles.title3}>
              Круто, ты дошел до третьего блока
            </h2>
            <p className={globalStyles.text16}>
              63% опрошенных пользовались кредитами из-за того, что не могли
              покрыть непредвиденные расходы свыше 15 000 ₽.
            </p>
            <p className={globalStyles.text16}>
              Доступ к заработанным деньгам помогает отказаться от кредитов и
              экономить деньги на процентах и штрафах.
            </p>
          </div>
          <img src={images.block3} alt="" width="" height="" />
        </div>
      </div>
    </div>
  )
}
