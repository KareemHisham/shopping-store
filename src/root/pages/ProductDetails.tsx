import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { MiniHero, Spinner } from '../../components/Index';

import ProductOverview from '../../components/sections/product-overview';
import ProductSpecs from '../../components/sections/product-specs/Index';
import { fetchProductDetails } from '../../api/api';
import { IProduct } from '../../constant/Interfaces';

const ProductDetails = () => {
  const { id } = useParams() as { id: string };
  const [product, setProduct] = useState<IProduct>({} as IProduct);
  const [isLoading, setIsLoading] = useState(false);
  console.log(id);

  useEffect(() => {
    const getProductInfo = async () => {
      setIsLoading(true);
      setProduct(await fetchProductDetails(parseInt(id)));
      setIsLoading(false);
    };
    getProductInfo()
  }, [id])

  if (isLoading) return <Spinner />;
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
      {/* Product Specs */}
      <ProductSpecs />
    </>
  );
};

export default ProductDetails;
