import { GoArrowRight } from 'react-icons/go';
import { IProgressItem } from '../../../constant/Interfaces';

const ActiveItem = ({ active }: { active: IProgressItem }) => {
  return (
    <div className="w-[40vw] md:w-[25vw] h-5/6 flex-shrink-0 relative">
      <img src={active.img} alt={active.description} className="cover-img" />

      <div className="absolute bottom-[5%] left-[5%] w-[55d%] flex items-end">
        <div className="bg-white bg-opacity-75 px-3 py-6">
          <p className="text-xs lg:text-sm">01 --- Bed Room</p>
          <h2 className="text-sm lg:text-lg font-bold">Inner Peace</h2>
        </div>
        <div className="bg-primary text-white p-1 h-[10%] lg:h-[20%] lg:p-2 ">
          <GoArrowRight />
        </div>
      </div>
    </div>
  );
};

export default ActiveItem;
