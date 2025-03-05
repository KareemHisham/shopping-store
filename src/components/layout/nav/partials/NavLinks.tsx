import { useUserContext } from "@/context/AuthContext";
import { Link } from "react-router-dom";

const NavLinks = () => {
  const { isAuthenticated } = useUserContext();
  return (
    <nav className="w-1/3 hidden md:block">
      <ul className="w-full flex justify-between">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/products">Shop</Link>
        </li>
        {isAuthenticated && (<li>
          <Link to="/checkout">Checkout</Link>
        </li>)}

        <li>
          <Link to="/contact-us">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavLinks;
