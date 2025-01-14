import Hero from '../../components/sections/hero/Hero.tsx';

import BrowseTheRange from '../../components/sections/browse-the-range/index.tsx';
import Products from '../../components/sections/products/index.tsx';
import ShareSetup from '../../components/sections/share-setup/index.tsx';
import Inspiration from '../../components/sections/inspiration/index.tsx';
const HomePage = () => {
  return (
    <>
      <Hero />
      <BrowseTheRange />
      <Products />
      <Inspiration />
      <ShareSetup />
    </>
  );
};

export default HomePage;
