import { ReactNode } from 'react';

const IconBtn = ({ children }: { children: ReactNode }) => {
  return (
    <button className="flex justify-center items-center cursor-pointer">
      {children}
    </button>
  );
};

export default IconBtn;
