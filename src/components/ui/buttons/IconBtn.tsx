import { Link } from 'react-router-dom';
import { ReactNode } from 'react';

const IconBtn = ({ children, url }: { children: ReactNode, url: string }) => {
  return (
    <Link to={url} className="flex justify-center items-center cursor-pointer">
      {children}
    </Link>
  );
};

export default IconBtn;
