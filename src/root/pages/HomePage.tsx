import Hero from '../../components/sections/hero/Hero.tsx';

import BrowseTheRange from '../../components/sections/browse-the-range/index.tsx';
import Products from './Products.tsx';
const HomePage = () => {
  return (
    <>
      <Hero />
      {/* Browse The Range */}
      <BrowseTheRange />
      {/* Products */}
      <Products />
    </>
  );
};

export default HomePage;
