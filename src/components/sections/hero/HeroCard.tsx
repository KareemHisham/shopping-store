const HeroCard = () => {
  return (
    <div className="absolute w-9/12   right-[5%] bottom-[10%] lg:w-5/12 ps-6 py-8 bg-[#FFF3E3] text-secnodary rounded-md shadow-sm">
      <h3 className="text-sm ">New Arrival</h3>
      <h1 className=" text-primary text-xl font-bold leading-tight lg:text-xxl ">
        Discover Our <br /> New Collection
      </h1>
      <p className="mt-1 text-sm lg:text-base">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
        repellendus, nemo dignissimos itaque
      </p>
      <button className="bg-primary w-5/12 text-white text-sm lg:text-base p-2 lg:p-4 uppercase mt-4 lg:mt-8">
        buy now
      </button>
    </div>
  );
};

export default HeroCard;
