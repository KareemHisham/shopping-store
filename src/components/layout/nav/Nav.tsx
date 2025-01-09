import logo from '../../../../public/assets/logo/logo.svg';
import NavControls from './partials/NavControls';
import NavLinks from './partials/NavLinks';
const NavBar = () => {
  return (
    <header className=" p-4 bg-white shadow-sm">
      <div className="container flex justify-between ">
        {/** logo */}
        <div className="flex items-end gap-1">
          <img src={logo} alt="website logo" />
          <h2 className="text-lg font-bold">Furniro</h2>
        </div>
        <NavLinks />
        <NavControls />
      </div>
    </header>
  );
};

export default NavBar;
