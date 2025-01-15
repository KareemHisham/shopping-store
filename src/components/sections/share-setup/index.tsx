import { PRODUCTS } from '../../../constant/Index';

const ShareSetup = () => {
  const randomRowSpan = () => Math.ceil(Math.random() * 3);
  const randomColsSpan = () => Math.ceil(Math.random() * 2);
  return (
    <section className="w-full mt-8 ">
      <header className="text-center mb-2">
        <h3 className="text-sm text-gray-500 font-semibold">
          Shape your setup with
        </h3>
        <h2 className="text-xl font-bold leading-8">#FuniroFurniture</h2>
      </header>
      {/** grid */}
      <div
        className={
          'grid grid-cols-[repeat(auto-fill,_minmax(200px,_1fr))] grid-flow-dense auto-rows-[100px] gap-4'
        }
      >
        {PRODUCTS.map((product) => (
          <div
            key={product.id}
            className={`block overflow-hidden`}
            style={{
              gridRowEnd: `span ${randomRowSpan()}`,
              gridColumnEnd: `span ${randomColsSpan()}`,
            }}
          >
            <img
              src={product.img}
              alt={product.description}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ShareSetup;
