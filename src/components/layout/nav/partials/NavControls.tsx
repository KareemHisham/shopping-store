import { INITIAL_USER, useUserContext } from "@/context/AuthContext";
import { CsButton, CartIcon, IconBtn, LoveIcon, UserIcon } from "../../../Index";
import { MdLogout } from "react-icons/md";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { useToast } from "@/components/hooks/use-toast"
import { useLoggedout } from "@/lib/react-query";


const NavControls = () => {
  const { toast } = useToast();
  const { isAuthenticated, setIsAuthenticated, setUser } = useUserContext();
  const { mutateAsync } = useLoggedout()

  const handleLogout = async () => {
    const isLoggedout = await mutateAsync();
    if (isLoggedout) {
      toast({
        variant: "destructive",
        className: "bg-green-500 text-white",
        description: "Logged out successfully",
      });
    }
    setUser(INITIAL_USER)
    setIsAuthenticated(false)

  };

  return (
    <div className="flex gap-5">
      {/* Login */}
      {!isAuthenticated &&
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <IconBtn url="login">
                <UserIcon />
              </IconBtn>
            </TooltipTrigger>
            <TooltipContent>
              <p>Login</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      }
      {/* favourite */}
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <IconBtn url="favourite">
              <LoveIcon />
            </IconBtn>
          </TooltipTrigger>
          <TooltipContent>
            <p>Favourite</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      {/* Cart */}
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <IconBtn url="cart">
              <CartIcon />
            </IconBtn>
          </TooltipTrigger>
          <TooltipContent>
            <p>Cart</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      {/* Logout */}
      {isAuthenticated && (
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <CsButton type="button" onClick={handleLogout}>
                <MdLogout size={25} />
              </CsButton>
            </TooltipTrigger>
            <TooltipContent>
              <p>Logout</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      )}
    </div>
  );
};

export default NavControls;

