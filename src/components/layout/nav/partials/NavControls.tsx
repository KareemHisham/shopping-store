import { CartIcon, IconBtn, LoveIcon, UserIcon } from "../../../Index";

const NavControls = () => {
  return (
    <div className="flex gap-5">
      <IconBtn url="login">
        <UserIcon />
      </IconBtn>
      <IconBtn url="favourite">
        <LoveIcon />
      </IconBtn>
      <IconBtn url="cart">
        <CartIcon />
      </IconBtn>
    </div>
  );
};

export default NavControls;
