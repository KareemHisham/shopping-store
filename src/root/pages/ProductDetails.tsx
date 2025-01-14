// import { useParams } from 'react-router-dom';
import { MiniHero } from '../../components/Index';
// import { PRODUCTS } from '../../constant/Index';
const ProductDetails = () => {
  // const { id } = useParams();
  // const product = PRODUCTS.find((product) => product.id === 1);
  return (
    <>
      <MiniHero
        breadcrumbLinks={[
          { name: 'Home', path: '/' },
          { name: 'Shop', path: '/products' },
        ]}
      >
        <h1 className="text-xl font-bold tracking-[5px]">Details</h1>
      </MiniHero>
    </>
  );
};

export default ProductDetails;
