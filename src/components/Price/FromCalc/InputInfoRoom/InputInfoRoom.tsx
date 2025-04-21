import styles from './InputInfoRoom.module.scss'
import {ChangeEvent} from "react";

type Props = {
    type?: string,
    id?: string,
    name?: string,
    placeholder?: string,
    value?: string,
    disabled?: boolean,
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void,
    label?: string,
}

export const InputInfoRoom = ({type, id, name, placeholder, value, disabled, onChange, label}:Props) => {
    return (
        <div className={styles.wrapperInput}>
            <label className={styles.inputLabel} htmlFor={id}>
                {label}
            </label>
            <input
                placeholder={placeholder}
                disabled={disabled}
                className={styles.input}
                type={type}
                id={id}
                name={name}
                onChange={onChange}
                value={value}
            />
        </div>
    )
}