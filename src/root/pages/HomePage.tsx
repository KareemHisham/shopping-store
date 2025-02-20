import { useEffect, useState } from 'react';
import { fetchProducts } from '../../api/api.ts';

import Hero from '../../components/sections/hero/Hero.tsx';
import BrowseTheRange from '../../components/sections/browse-the-range/index.tsx';
import Products from '../../components/sections/products/index.tsx';
import ShareSetup from '../../components/sections/share-setup/index.tsx';
import Inspiration from '../../components/sections/inspiration/index.tsx';
import { Spinner } from '../../components/Index.ts';
const HomePage = () => {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const getProductsAPI = async () => {
      setIsLoading(true);
      setItems(await fetchProducts());
      setIsLoading(false);
    };
    getProductsAPI()
  }, [])

  if (isLoading) return <Spinner />;
  return (
    <>
      <Hero />
      <BrowseTheRange />
      <Products products={items} />
      <Inspiration />
      <ShareSetup />
    </>
  );
};

export default HomePage;
