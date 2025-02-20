import { useEffect, useState } from 'react';
import { useFetchProducts } from '@/lib/react-query';
import { IProduct } from '../../constant/Interfaces';

import { useToast } from "@/components/hooks/use-toast"
import { MiniHero, Pagination, ProductCard, Features, Spinner } from '../../components/Index';
const Products = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const { toast } = useToast();
  const { data, isPending, error, isError } = useFetchProducts()

  if (error || isError) {
    toast({
      variant: "destructive",
      className: "bg-red-600 text-white",
      description: error.message,
    });
  }

  useEffect(() => {
    const getProductAPI = async () => {
      if (data) {
        setProducts(data);
      }
    };
    getProductAPI();
  }, [data])

  return (
    <>
      <MiniHero breadcrumbLinks={[{ name: 'Home', path: '/' }, { name: "Shop", path: "" }]}>
        <h1 className="text-xl font-bold tracking-[5px]">Shop</h1>
      </MiniHero>

      {isPending && <Spinner />}
      
      {/* Products */}
      <section className="py-4">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-3 mb-4">
            {products && products?.map((product) => {
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
