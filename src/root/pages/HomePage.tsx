import Hero from '@/components/sections/hero/Hero.tsx';
import BrowseTheRange from '@/components/sections/browse-the-range/index.tsx';
import Products from '@/components/sections/products/index.tsx';
import ShareSetup from '@/components/sections/share-setup/index.tsx';
import { NewProducts } from '@/components/Index.ts';
const HomePage = () => {
  return (
    <>
      <Hero />
      <BrowseTheRange />
      <Products />
      <NewProducts />
      <ShareSetup />
    </>
  );
};

export default HomePage;
