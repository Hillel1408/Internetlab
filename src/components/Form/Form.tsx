import { useState } from "react";
import { Input, Button, Checkbox } from "components";
import globalStyles from "styles/Globals.module.scss";
import styles from "components/Form/Form.module.scss";

export default function Form() {
    const initialState = { name: "", tel: "", checkbox: false };

    const [values, setValues] = useState(initialState);
    const [toched, setToched] = useState(false);

    const onSubmit = async () => {
        setToched(true);
        if (values.name && values.tel) {
            try {
                const response = await fetch("", {
                    method: "POST",
                    body: JSON.stringify(values),
                });
                const data = await response.json();
                setValues(initialState);
                setToched(false);
            } catch {
                console.error("Failed");
            }
        }
    };

    return (
        <div className={styles.root}>
            <div className={globalStyles.container}>
                <h2 className={globalStyles.title2}>Отправь форму</h2>
                <div>
                    <Input
                        type="text"
                        label="Имя"
                        value={values.name}
                        onChange={(arg) => {
                            setValues({ ...values, name: arg });
                        }}
                        error={!values.name && toched ? "Поле обязательно к заполнению" : ""}
                        success={values.name}
                    />
                    <Input
                        type="tel"
                        label="Телефон"
                        value={values.tel}
                        onChange={(arg) => {
                            setValues({ ...values, tel: arg });
                        }}
                        error={!values.tel && toched ? "Поле обязательно к заполнению" : ""}
                        success={values.tel}
                    />
                    <Checkbox label="Согласен, отказываюсь" checked={values.checkbox} onChange={() => setValues({ ...values, checkbox: !values.checkbox })} />
                    <Button
                        text="Отправить"
                        style={styles.btn}
                        onClick={() => {
                            onSubmit();
                        }}
                    />
                </div>
            </div>
        </div>
    );
}
