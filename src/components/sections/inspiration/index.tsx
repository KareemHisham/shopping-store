import InspirationHeading from './Left';

const Inspiration = () => {
  return (
    <section className="w-full h-auto  md:h-[50vw] bg-tertiary pt-5">
      <div className="flex h-full">
        <InspirationHeading />
        <div className="flex-1 bg-slate-200">right</div>
      </div>
    </section>
  );
};

export default Inspiration;
