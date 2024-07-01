import classNames from 'classnames'
import styles from 'components/Button/Button.module.scss'
import globalStyles from 'styles/Globals.module.scss'

export default function Button({
  text,
  style
}: {
  text: string
  style?: string
}) {
  return (
    <button className={classNames(styles.root, globalStyles.title5, style)}>
      {text}
    </button>
  )
}
