import Styles from "./ActionButton.module.css"

export default function ActionButton({ variant = "view", onClick, children }) {
    return (
        <button
            className={`${Styles.button} ${Styles[variant]}`}
            onClick={onClick}
        >
            {children}
        </button>
    )
}