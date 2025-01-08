interface IButton {
    type: "submit" | "button",
    children: React.ReactNode,
}
const Button = ({ children, type = "button" }: IButton) => {
    return (
        <button className="bg-primary text-white text-bases w-full rounded-sm shadow-md p-2" type={type}>
            {children}
        </button>
    )
}

export default Button