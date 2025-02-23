import { Link } from 'react-router-dom';

import { useFetchProducts } from '@/lib/react-query/index.ts';
import { ProductCard, Spinner } from '@/components/Index.ts';
import { useToast } from "@/components/hooks/use-toast"
const ProductsSection = () => {
  const { data, isPending, error, isError } = useFetchProducts();
  const { toast } = useToast();

  if (error || isError) {
    toast({
      variant: "destructive",
      className: "bg-red-600 text-white",
      description: error.message,
    });
  }

  return (
    <section className="py-4">
      <div className="container">
        <h4 className="text-dark text-lg font-bold text-center capitalize mb-7">
          our products
        </h4>
        {isPending ? <Spinner /> : (
          <div className=" grid grid-cols-1 md:grid-cols-4 gap-3 mb-4">
            {data && data?.slice(0, 4)?.map((product) => {
              return <ProductCard item={product} key={product.id} />;
            })}
          </div>)}


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
