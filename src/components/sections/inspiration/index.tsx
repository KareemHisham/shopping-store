import InspirationHeading from './Left';
import InspirationList from './List';

const Inspiration = () => {
  return (
    <section className="w-full h-[100vh] md:h-[50vw] bg-tertiary py-5">
      <div className="flex h-full flex-col md:flex-row">
        <InspirationHeading />
        <InspirationList />
      </div>
    </section>
  );
};

export default Inspiration;
