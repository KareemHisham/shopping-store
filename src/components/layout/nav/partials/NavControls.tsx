import IconBtn from '../../../ui/buttons/IconBtn';
import CartIcon from '../../../ui/svg/CartIcon';
import LoveIcon from '../../../ui/svg/LoveIcon';
import SearchIcon from '../../../ui/svg/SearchIcon';
import UserIcon from '../../../ui/svg/UserIcon';

const NavControls = () => {
  return (
    <div className="flex gap-4">
      <IconBtn>
        <UserIcon />
      </IconBtn>
      <IconBtn>
        <SearchIcon />
      </IconBtn>
      <IconBtn>
        <LoveIcon />
      </IconBtn>
      <IconBtn>
        <CartIcon />
      </IconBtn>
    </div>
  );
};

export default NavControls;
