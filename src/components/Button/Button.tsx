import classNames from "classnames";
import styles from "components/Button/Button.module.scss";
import globalStyles from "styles/Globals.module.scss";
import { ButtonProps } from "components/Button/Button.props";

export default function Button({ text, style, onClick }: ButtonProps) {
    return (
        <button className={classNames(styles.root, globalStyles.title5, style)} onClick={onClick}>
            {text}
        </button>
    );
}
