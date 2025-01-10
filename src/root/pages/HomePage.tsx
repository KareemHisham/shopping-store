import { Link } from 'react-router-dom';
import Hero from '../../components/hero/Hero';
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
          <div className=' grid grid-cols-4 gap-3'>
            {PRODUCTS.map(product => {
              return (
                <Link to={product.url} key={product.id} className='bg-[#F4F5F7] relative'>
                  <img src={product.img} alt={product.title} width={285} height={301} loading='lazy' />

                  <div>
                    <h3>{product.title}</h3>
                    <p>{product.description}</p>
                  </div>
                  {product?.discount && <span className='absolute right-2 top-2 w-7 h-7 bg-[#E97171] text-white rounded-full text-xs flex items-center justify-center'>-{product.discount}</span>}
                  {product?.isNew && <span className='absolute right-2 top-2 w-7 h-7 bg-[#2EC1AC] text-white rounded-full text-[10px] flex items-center justify-center'>New</span>}
                </Link>

              )
            })}
          </div>

        </div>
      </section>
    </>
  );
};

export default HomePage;
