import InspirationHeading from './Left';
import InspirationList from './List';

const Inspiration = () => {
  return (
    <section className="w-full h-[100vh] md:h-[80vh] bg-tertiary pt-5">
      <div className="half-flex">
        <InspirationHeading />
        <InspirationList />
      </div>
    </section>
  );
};

export default Inspiration;
