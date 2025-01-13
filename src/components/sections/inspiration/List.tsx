import { PRODUCTS } from '../../../constant/Index';
import InspirationProgress from './Progress';
import ActiveItem from './Active';
import Controls from './Controls';
import BackItems from './BackItems';

const InspirationList = () => {
  const active = PRODUCTS[0];
  const handleArrowClick = () => {
    /** code for right arrow click */
  };
  return (
    <div className="flex-1 w-full md:w-7/12 flex gap-2">
      <ActiveItem active={active} />
      <div className="flex-col overflow-hidden h-5/6 relative">
        {/** right arrow */}
        <Controls onClick={handleArrowClick} />
        {/** in active itmes */}
        <BackItems items={PRODUCTS.slice(1)} />
        {/** active and in active indicator */}
        <InspirationProgress />
      </div>
    </div>
  );
};

export default InspirationList;
