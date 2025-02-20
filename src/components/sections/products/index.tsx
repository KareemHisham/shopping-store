import { Link } from 'react-router-dom';
import { ProductCard } from '../../../components/Index.ts';
import { IProduct } from '../../../constant/Interfaces.ts';
const ProductsSection = ({ products }: { products: IProduct[] }) => {
  return (
    <section className="py-4">
      <div className="container">
        <h4 className="text-dark text-lg font-bold text-center capitalize mb-7">
          our products
        </h4>
        <div className=" grid grid-cols-1 md:grid-cols-4 gap-3 mb-4">
          {products?.slice(0,4)?.map((product) => {
            return <ProductCard item={product} />;
          })}
        </div>

        <Link
          to="/products"
          className="text-primary bg-slate-50 py-2 px-16 rounded-md border-primary border text-xs block w-fit mx-auto"
        >
          See More
        </Link>
      </div>
    </section>
  );
};

export default ProductsSection;
