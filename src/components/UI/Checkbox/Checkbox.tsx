import classNames from "classnames";
import styles from "components/UI/Checkbox/Checkbox.module.scss";
import globalStyles from "styles/Globals.module.scss";

export default function Checkbox({ label, checked, onChange }: { label: string; checked: boolean; onChange: () => void }) {
    return (
        <label className={classNames(styles.root, globalStyles.text16)}>
            <input type="checkbox" onChange={onChange} checked={checked} />
            {label}
        </label>
    );
}
