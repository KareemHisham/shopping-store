import { Link } from 'react-router-dom';
import { FaAngleRight } from 'react-icons/fa';
import { IMiniHero } from '../../../constant/Interfaces';

const MiniHero = ({ children, breadcrumbLinks }: IMiniHero) => {
  return (
    <div className="py-4 bg-mini-hero bg-no-repeat bg-center bg-cover h-[40vh]">
      <div className="flex items-center justify-center flex-col gap-3 h-full">
        {children}
        <ul className="flex items-center justify-center gap-1">
          {breadcrumbLinks.map((link, index) => (
            <li
              key={index}
              className={
                link.path ? 'text-[16px] font-medium' : 'text-xs font-light'
              }
            >
              {link.path ? (
                <Link to={link.path} className="flex items-center gap-1">
                  <span className="hover:text-primary transition-colors duration-300 font-semibold">
                    {link.name}
                  </span>
                  <span>
                    <FaAngleRight />
                  </span>
                </Link>
              ) : (
                link.name
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MiniHero;
