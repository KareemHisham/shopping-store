import { IButton } from "../../constant/Interfaces"

const Button = ({ children, type = "button", classes }: IButton) => {
    return (
        <button className={classes} type={type}>
            {children}
        </button>
    )
}

export default Button