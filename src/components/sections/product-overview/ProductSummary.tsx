import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';

const ProductSummary = () => {
  return (
    <div className="flex flex-col gap-2 mt-5 border-t-2 pt-7 border-t-gray-200 text-gray-400 text-sm ">
      <div className="flex gap-3 ">
        <span className="w-[15%]">SKU</span>
        <span>:</span>
        <span className="flex-1">SS01</span>
      </div>
      <div className="flex gap-3">
        <span className="w-[15%]">Category</span>
        <span>:</span>
        <span className="flex-1">Safas</span>
      </div>
      <div className="flex gap-3">
        <span className="w-[15%]">Tags</span>
        <span>:</span>
        <span className="flex-1">Sofs, Chair, Home, Shop</span>
      </div>
      <div className="flex gap-3 items-center">
        <span className="w-[15%]">Share</span>
        <span>:</span>
        <div className="flex gap-2 text-black text-base">
          <FaFacebook />
          <FaLinkedin />
          <FaTwitter />
        </div>
      </div>
    </div>
  );
};

export default ProductSummary;
