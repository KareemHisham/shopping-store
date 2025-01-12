import Hero from '../../components/sections/hero/Hero.tsx';

import BrowseTheRange from '../../components/sections/browse-the-range/index.tsx';
import Products from './Products.tsx';
import ShareSetup from '../../components/sections/share-setup/index.tsx';
const HomePage = () => {
  return (
    <>
      <Hero />
      <BrowseTheRange />
      <Products />
      <ShareSetup />
    </>
  );
};

export default HomePage;
