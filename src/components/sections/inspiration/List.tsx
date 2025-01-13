import { PRODUCTS } from '../../../constant/Index';
import { IoIosArrowForward } from 'react-icons/io';
import { GoArrowRight } from 'react-icons/go';

const InspirationList = () => {
  const active = PRODUCTS[0];
  return (
    <div className="flex-1 w-full md:w-7/12 flex gap-2">
      {/** active */}
      <div className="w-[40vw] md:w-[25vw] h-5/6 flex-shrink-0 relative">
        <img src={active.img} alt={active.description} className="cover-img" />

        <div className="absolute bottom-[5%] left-[5%] w-[55d%] flex items-end">
          <div className="bg-white bg-opacity-75 px-3 py-6">
            <p className="text-sm">01 --- Bed Room</p>
            <h2 className="text-lg font-bold">Inner Peace</h2>
          </div>
          <div className="bg-primary text-white p-2 h-[20%] ">
            <GoArrowRight />
          </div>
        </div>
      </div>
      {/** remaining */}
      <div className="flex-col overflow-hidden h-5/6 relative">
        {/** icon */}
        <span className="absolute left-[calc(40vw-20px)] md:left-[calc(25vw-20px)] top-1/2 w-10 h-10 bg-white shadow-md rounded-full flex justify-center items-center cursor-pointer">
          <IoIosArrowForward className="text-primary" />
        </span>
        {/** img list */}
        <div className="flex gap-2 h-5/6">
          {PRODUCTS.slice(1).map((product) => (
            <div
              key={product.id}
              className="w-[40vw] md:w-[25vw] h-full flex-shrink-0"
            >
              <img
                src={product.img}
                alt={product.description}
                className="cover-img"
              />
            </div>
          ))}
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
