import { Link } from "react-router-dom";
import { IListItem } from "../../../constant/Interfaces";

const FooterList = ({ items }: { items: IListItem[] }) => {
    return (
        <ul className="footer_list">
            {items.map(link =>
                <li key={link.id}>
                    <Link to={link.url} className="footer_links capitalize">{link.title}</Link>
                </li>)}
        </ul>
    )
}

export default FooterList
