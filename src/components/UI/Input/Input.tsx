import { useRef } from "react";
import classNames from "classnames";
import styles from "components/UI/Input/Input.module.scss";
import globalStyles from "styles/Globals.module.scss";
import { images } from "assets";
import { InputProps } from "components/UI/Input/Input.props";

export default function Input({ type, label, value, onChange, error, success }: InputProps) {
    const inputRef = useRef<HTMLInputElement>(null);

    return (
        <div>
            <div className={styles.root}>
                <input
                    ref={inputRef}
                    className={classNames(globalStyles.text18, error && styles.error, success && styles.success)}
                    type={type}
                    value={value}
                    onChange={(e) => {
                        onChange(e.target.value);
                    }}
                />
                <label
                    onClick={() => {
                        inputRef.current?.focus();
                    }}
                    className={classNames(value && styles.active)}
                >
                    {label}
                </label>
                {error && <img src={images.cancel} alt="" width="20px" height="20px" />}
                {success && <img src={images.checkCircle} alt="" width="20px" height="20px" />}
            </div>
            {error && <p className={classNames(styles.errorText, globalStyles.text12)}>{error}</p>}
        </div>
    );
}
