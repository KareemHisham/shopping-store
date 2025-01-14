import { IProduct } from '../../../constant/Interfaces';

const ProductOverview = ({ product }: { product: IProduct }) => {
  return (
    <section className="w-full h-[100vh] md:h-[70vh]">
      <div className="container half-flex">
        <div className="w-full md:w-5/12  flex gap-4">
          {/** small imgs */}
          <div className="flex flex-col gap-2 w-[15%]">
            <div className="bg-orange-300 w-[100%] h-[18%] rounded-lg"></div>
            <div className="bg-orange-300 w-[100%] h-[18%] rounded-lg"></div>
            <div className="bg-orange-300 w-[100%] h-[18%] rounded-lg"></div>
            <div className="bg-orange-300 w-[100%] h-[18%] rounded-lg"></div>
          </div>
          {/** active img */}
          <div className="bg-violet-800 w-[70%] h-full rounded-lg"></div>
        </div>
        <div className="w-full  md:w-7/12 bg-fuchsia-900"></div>
      </div>
    </section>
  );
};

export default ProductOverview;
