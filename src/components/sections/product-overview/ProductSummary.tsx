import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';

const ProductSummary = ({ sku, category, tags }: { sku: string, category: string, tags: Array<string> }) => {
  return (
    <div className="flex flex-col gap-2 mt-5 border-t-2 pt-7 border-t-gray-200 text-gray-400 text-xs ">
      <div className="flex gap-3 ">
        <span className="w-[15%]">SKU</span>
        <span>:</span>
        <span className="flex-1">{sku}</span>
      </div>
      <div className="flex gap-3">
        <span className="w-[15%]">Category</span>
        <span>:</span>
        <span className="flex-1">{category}</span>
      </div>
      <div className="flex gap-3">
        <span className="w-[15%]">Tags</span>
        <span>:</span>
        <span className='capitalize'>{tags?.join(" , ")}</span>

      </div>
      <div className="flex gap-3 items-center">
        <span className="w-[15%]">Share</span>
        <span>:</span>
        <div className="flex gap-2 text-black text-base">
          <a href=""className='text-darkGrey'>
            <FaFacebook />
          </a>
          <a href=""className='text-darkGrey'>
            <FaLinkedin />
          </a>
          <a href=""className='text-darkGrey'>
            <FaTwitter />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductSummary;
