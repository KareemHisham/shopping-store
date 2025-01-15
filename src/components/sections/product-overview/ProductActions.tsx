const Actions = () => {
  return (
    <div className="flex gap-2 ">
      <div className="flex gap-2 justify-between lg:w-[20%] border-2 border-gray-400 rounded-md p-3 text-sm lg:text-base">
        <span className="cursor-pointer font-bold">-</span>
        <span>1</span>
        <span className="cursor-pointer font-bold">+</span>
      </div>
      <button className="lg:w-[30%] border-2 border-black rounded-md p-3 text-sm lg:text-base">
        Add To Cart
      </button>
      <button className="lg:w-[30%] border-2 border-black rounded-md p-3 text-sm lg:text-base">
        +Compare
      </button>
    </div>
  );
};

export default Actions;
