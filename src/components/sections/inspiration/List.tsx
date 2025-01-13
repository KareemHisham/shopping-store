import { PRODUCTS } from '../../../constant/Index';

const InspirationList = () => {
  const active = PRODUCTS[0];
  return (
    <div className="flex-1 w-full md:w-7/12 flex gap-2">
      {/** active */}
      <div className="w-[300px] bg-indigo-300 h-5/6 flex-shrink-0"></div>
      {/** remaining */}
      <div className="flex-col overflow-hidden h-5/6 relative">
        {/** icon */}
        <span className="absolute left-[300px] top-1/2 w-4 h-4 bg-primary"></span>
        {/** img list */}
        <div className="flex gap-2 h-5/6">
          <div className="w-[300px] h-full bg-indigo-100 flex-shrink-0"></div>
          <div className="w-[300px] h-full bg-indigo-100 flex-shrink-0"></div>
        </div>
        {/** status */}
        <div className="flex justify-start items-center gap-3 h-1/6 ms-3">
          <span className="w-3 h-3 bg-primary rounded-full outline outline-1 outline-offset-8 outline-primary me-2"></span>

          <span className="w-3 h-3 bg-[#D8D8D8] rounded-full"></span>
          <span className="w-3 h-3 bg-[#D8D8D8] rounded-full"></span>
          <span className="w-3 h-3 bg-[#D8D8D8] rounded-full"></span>
        </div>
      </div>
    </div>
  );
};

export default InspirationList;
