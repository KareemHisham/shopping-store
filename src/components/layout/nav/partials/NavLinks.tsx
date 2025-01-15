import { Link } from "react-router-dom";

const NavLinks = () => {
  return (
    <nav className="w-1/3 hidden md:block">
      <ul className="w-full flex gap-3 justify-between">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/products">Shop</Link>
        </li>
        <li>
        <Link to="/about">About</Link>
        </li>
        <li>
        <Link to="/contact-us">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavLinks;
