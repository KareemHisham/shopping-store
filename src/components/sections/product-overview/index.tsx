import { IProduct } from '../../../constant/Interfaces';
import ProductImages from './ProductImages';

const ProductOverview = ({ product }: { product: IProduct }) => {
  return (
    <section className="w-full h-[100vh]">
      <div className="container half-flex">
        <ProductImages />
        <div className="w-full  md:w-7/12 bg-fuchsia-900"></div>
      </div>
    </section>
  );
};

export default ProductOverview;
