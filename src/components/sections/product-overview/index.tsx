import { IProduct } from '../../../constant/Interfaces';
import ProductImages from './ProductImages';
import Rating from '../../ui/Rating';
import Sizes from '../../ui/Sizes';
import ProductColors from '../../ui/ProductColors';
import Actions from './ProductActions';
import ProductSummary from './ProductSummary';

const ProductOverview = ({ product }: { product: IProduct }) => {
  return (
    <section className="w-full h-[120vh]">
      <div className="container half-flex">
        <ProductImages />
        <div className="w-full  md:w-7/12 h-full">
          <div className="h-4/6 flex flex-col justify-between">
            {/** heading */}
            <div>
              <h1 className="text-xl font-bold">Asgaard sofa</h1>
              <p className="text-gray-300">Rs. 250,000.00</p>
              <div className="flex items-center content-between gap-2 my-2">
                <Rating rate={3} />
                <span className="text-gray-300">|</span>
                <p className="text-gray-300">5 Customer Review</p>
              </div>
            </div>
            {/**description */}
            <p className="text-sm">
              Setting the bar as one of the loudest speakers in its class, the
              Kilburn is a compact, stout-hearted hero with a well-balanced
              audio which boasts a clear midrange and extended highs for a
              sound.
            </p>
            {/** sizes */}
            <Sizes sizes={['XL', 'L', 'SM']} active="XL" />
            {/** colors */}
            <ProductColors
              colors={['#816DFA', '#000000', '#B88E2F']}
              active="#B88E2F"
            />
            {/** actions */}
            <Actions />
          </div>

          {/** info */}
          <ProductSummary />
        </div>
      </div>
    </section>
  );
};

export default ProductOverview;
