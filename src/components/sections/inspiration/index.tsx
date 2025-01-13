import InspirationHeading from './Left';
import InspirationList from './List';

const Inspiration = () => {
  return (
    <section className="w-full h-[100vh] md:h-[80vh] bg-tertiary pt-5">
      <div className="flex h-full flex-col md:flex-row gap-5">
        <InspirationHeading />
        <InspirationList />
      </div>
    </section>
  );
};

export default Inspiration;
