import classNames from 'classnames'
import globalStyles from 'styles/Globals.module.scss'
import styles from 'components/Header/Header.module.scss'
import { images } from 'assets/images'

export default function Header() {
  const navList = [
    { text: 'Как это работает', href: '#' },
    { text: '3-й блок', href: '#' },
    { text: 'Вопросы и ответы', href: '#' },
    { text: 'Форма', href: '#' }
  ]

  return (
    <header className={classNames(globalStyles.container, styles.root)}>
      <div className={classNames(styles.logo, globalStyles.title5)}>
        <img src={images.logo} alt="" width="37px" height="24px" />
        <span>testLab</span>
      </div>
      <nav>
        <ul className={styles.navList}>
          {navList.map((item, index) => (
            <li key={index}>
              <a href={item.href} className={globalStyles.text16}>
                {item.text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
