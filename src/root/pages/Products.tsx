import { useEffect, useState } from 'react';
import { MiniHero, Pagination, ProductCard, Features, Spinner } from '../../components/Index';
import { fetchProducts } from '../../api/api';
import { IProduct } from '../../constant/Interfaces';
const Products = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getProductAPI = async () => {
      setIsLoading(true);
      setProducts(await fetchProducts());
      setIsLoading(false);
    };
    getProductAPI();
  }, [])

  if (isLoading) return <Spinner />;
  return (
    <>
      <MiniHero breadcrumbLinks={[{ name: 'Home', path: '/' }, { name: "Shop", path: "" }]}>
        <h1 className="text-xl font-bold tracking-[5px]">Shop</h1>
      </MiniHero>
      {/* Products */}
      <section className="py-4">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-3 mb-4">
            {products.map((product) => {
              return <ProductCard item={product} key={product.id} />;
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
