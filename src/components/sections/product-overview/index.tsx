import { IProduct } from '../../../constant/Interfaces';
import ProductImages from './ProductImages';
import Rating from '../../ui/Rating';
import Sizes from '../../ui/Sizes';
import ProductColors from '../../ui/ProductColors';
import Actions from './ProductActions';
import ProductSummary from './ProductSummary';

const ProductOverview = ({ product }: { product: IProduct }) => {
  console.log(product);
  
  return (
    <section className="w-full h-[180vh] md:h-[120vh] py-4">
      <div className="container half-flex">
        <ProductImages img={product.image} imgs={product.images} />
        <div className="w-full  md:w-7/12 h-4/6 md:h-full">
          <div className="h-4/6 flex flex-col md:justify-between gap-2 md:gap-0">
            <div>
              <h1 className="text-xl font-bold">{product.title}</h1>
              <p className="text-darkGrey">Rs. {product.price}</p>
              <div className="flex items-center content-between gap-2 my-2">
                <Rating rate={product.rating} />
                <span className="text-gray-300">|</span>
                <p className="text-darkGrey">{product.reviewCount} Customer Review</p>
              </div>
            </div>
            <p className="text-sm">
              {product.description}
            </p>

            <Sizes sizes={product.sizes} active={"SM"} />

            <ProductColors
              colors={product.colors}
              active="#B88E2F"
            />
            <Actions />
          </div>
          <ProductSummary sku={product.sku} category={product.category} tags={product.tags} />
        </div>
      </div>
    </section>
  );
};

export default ProductOverview;
