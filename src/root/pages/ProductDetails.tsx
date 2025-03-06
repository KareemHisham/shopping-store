import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useFetchProduct } from '@/lib/react-query';

import { MiniHero, Spinner } from '../../components/Index';
import { useToast } from "@/components/hooks/use-toast"

import ProductOverview from '../../components/sections/product-overview';
import { IProduct } from '../../constant/Interfaces';

const ProductDetails = () => {
  const { id } = useParams() as { id: string };
  const [product, setProduct] = useState<IProduct | null>(null);
  const { data, isPending, error, isError } = useFetchProduct(id)
  const { toast } = useToast();

  // Handle errors
  useEffect(() => {
    if (error || isError) {
      toast({
        variant: "destructive",
        className: "bg-red-600 text-white",
        description: error.message,
      });
    }
  }, [error, isError, toast]);

  useEffect(() => {
    if (data) {
      const matchedProduct = data.find((item) => item.id == id);

      if (matchedProduct) {
        setProduct(matchedProduct);
      } else {
        setProduct(null); // No matching product found
        toast({
          variant: "destructive",
          className: "bg-red-600 text-white",
          description: "No matching product found",
        });
      }
    }
  }, [id, data, toast]);

  return (
    <>
      <MiniHero
        breadcrumbLinks={[
          { name: 'Shop', path: '/products' }, { name: "product Details", path: "" }
        ]}
      >
        <h1 className="text-xl font-bold tracking-[5px]">Details</h1>
      </MiniHero>
      {product && <ProductOverview product={product} />}
      {isPending && <Spinner />}
    </>
  );
};

export default ProductDetails;
