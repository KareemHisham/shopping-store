const ProductImages = () => {
  return (
    <div className="w-full md:w-5/12  flex gap-4 h-2/6 md:h-4/6">
      {/** small imgs */}
      <div className="flex flex-col gap-2 w-[15%]">
        <div className="bg-orange-300 w-[100%] h-[18%] rounded-lg"></div>
        <div className="bg-orange-300 w-[100%] h-[18%] rounded-lg"></div>
        <div className="bg-orange-300 w-[100%] h-[18%] rounded-lg"></div>
        <div className="bg-orange-300 w-[100%] h-[18%] rounded-lg"></div>
      </div>
      {/** active img */}
      <div className="bg-violet-800 w-[70%] h-full rounded-lg"></div>
    </div>
  );
};

export default ProductImages;
