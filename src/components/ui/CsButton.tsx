import { IButton } from "../../constant/Interfaces"

const CsButton = ({ children, type = "button", classes, disabled, onClick }: IButton) => {
    return (
        <button className={`flex items-center justify-center ${classes}`} type={type} disabled={disabled} onClick={onClick}>
            {children}
        </button>
    )
}

export default CsButton