import { Link, useRouteError } from "react-router-dom";
import styles from "@/root/error.module.css";

const { errorContainer, four, zero, screen_reader_text, backHome } = styles;
const Notfound = () => {
    const error = useRouteError();
    console.log(typeof error)
    console.log(error)
    return (
        <section className={errorContainer}>
            <span className={four}>
                <span className={screen_reader_text}>4</span>
            </span>
            <span className={zero}>
                <span className={screen_reader_text}>0</span>
            </span>
            <span className={four}>
                <span className={screen_reader_text}>4</span>
            </span>
            <p>{error.message || error.statusText}</p>
            <Link to="/" replace={true} className={backHome}>
                GO HOME
            </Link>
        </section>
    )
}

export default Notfound