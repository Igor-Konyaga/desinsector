import styles from './InputTypeRoom.module.scss'
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
    defaultChecked?: boolean,
}

export const InputTypeRoom = ({type, id, name, placeholder, value, disabled, onChange, label,  defaultChecked}:Props) => {
    return (
    <div className={styles.inputWrapper}>
        <input
            defaultChecked={defaultChecked}
            onChange={onChange}
            disabled={disabled}
            type={type}
            id={id}
            name={name}
            value={value}
        />
        <label htmlFor={id}>{label}</label>
    </div>
)
}