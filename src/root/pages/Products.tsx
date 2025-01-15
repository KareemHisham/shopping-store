import { MiniHero, Pagination, ProductCard, Features } from '../../components/Index';
import { PRODUCTS } from '../../constant/Index';

const Products = () => {
  return (
    <>
      <MiniHero breadcrumbLinks={[{ name: 'Home', path: '/' }]}>
        <h1 className="text-xl font-bold tracking-[5px]">Shop</h1>
      </MiniHero>
      {/* Products */}
      <section className="py-4">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-3 mb-4">
            {PRODUCTS.map((product) => {
              return <ProductCard item={product} />;
            })}
          </div>
          {/* Pagination */}
          <Pagination />
        </div>
        <Features />
      </section>
    </>
  );
};

export default Products;
