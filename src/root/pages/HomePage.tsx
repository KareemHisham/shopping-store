import { Link } from 'react-router-dom';
import Hero from '../../components/hero/Hero';
import { ProductCard } from '../../components/Index.ts';
import { SIMPLE_PRODUCT, PRODUCTS } from "../../constant/Index"
const HomePage = () => {
  return (
    <>
      <Hero />
      {/* Browse The Range */}
      <section className='py-4'>
        <div className="container">

          <div className='*:text-center mb-7'>
            <h4 className='text-dark text-lg font-bold'>Browse The Range</h4>
            <p className='text-grey text-sm'>Choose your favourite</p>
          </div>

          {/* Hero Cards */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center content-center'>
            {SIMPLE_PRODUCT.map(product => {
              return (
                <Link to={product.url} key={product.id} className='group'>
                  <img src={product.img} alt={product.title} width={381} height={480} loading='lazy' className='rounded-lg transition-transform duration-700 ease-in-out transform group-hover:scale-110 group-hover:opacity-80' />
                  <div className='capitalize text-center mt-4 text-secnodary text-base font-semibold'>{product.title}</div>
                </Link>

              )
            })}

          </div>
        </div>
      </section>
      {/* Products */}
      <section className='py-4'>
        <div className="container">
          <h4 className='text-dark text-lg font-bold text-center capitalize mb-7'>our products</h4>
          <div className=' grid grid-cols-1 md:grid-cols-4 gap-3 mb-4'>
            {PRODUCTS.map(product => {
              return (
                <ProductCard item= {product} />
              )
            })}
          </div>

          <Link to="/products" className='text-primary bg-slate-50 py-2 px-16 rounded-md border-primary border text-xs block w-fit mx-auto'>See More</Link>

        </div>
      </section>
    </>
  );
};

export default HomePage;
