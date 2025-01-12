import { Link } from 'react-router-dom';
import { SIMPLE_PRODUCT } from '../../../constant/Index';

const BrowseTheRange = () => {
  return (
    <section className="py-4">
      <div className="container">
        <div className="*:text-center mb-7">
          <h4 className="text-dark text-lg font-bold">Browse The Range</h4>
          <p className="text-grey text-sm">Choose your favourite</p>
        </div>

        {/* Hero Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center content-center">
          {SIMPLE_PRODUCT.map((product) => {
            return (
              <Link to={product.url} key={product.id} className="group">
                <img
                  src={product.img}
                  alt={product.title}
                  width={381}
                  height={480}
                  loading="lazy"
                  className="rounded-lg transition-transform duration-700 ease-in-out transform group-hover:scale-110 group-hover:opacity-80"
                />
                <div className="capitalize text-center mt-4 text-secnodary text-base font-semibold">
                  {product.title}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BrowseTheRange;
