import { Link } from "react-router-dom"
import { IProductList } from "../../constant/Interfaces"
const ProductCard = ({ item }: { item: IProductList }) => {
    return (
        <div key={item.id} className='bg-[#F4F5F7] relative group overflow-hidden'>
            <img src={item.img} alt={item.title} width={285} height={301} loading='lazy' className=' w-full object-cover transition-transform duration-700 group-hover:scale-105' />

            <div className='px-2 py-3 *:text-xs'>
                <h3 className='mb-1 text-[#3A3A3A] font-semibold'>{item.title}</h3>
                <p className='text-darkGrey'>{item.description}</p>
                <div className="flex items-center gap-1 mt-2">

                    {item.discount ?
                        <>
                            <span>Rp {(item.price * item.discount) / 100}</span>
                            <span className='text-[#B0B0B0] text-[13px] line-through'>Rp {item.price}</span>
                        </>
                        : (<span>Rp {item.price}</span>)}

                </div>
            </div>
            {/* Floating Labels */}
            {item?.discount && <span className='absolute right-2 top-2 w-7 h-7 bg-[#E97171] text-white rounded-full text-xs flex items-center justify-center'>-{item.discount}</span>}
            {item?.isNew && <span className='absolute right-2 top-2 w-7 h-7 bg-[#2EC1AC] text-white rounded-full text-[10px] flex items-center justify-center'>New</span>}

            {/* Overlay */}
            <div className="absolute inset-0 bg-[#3a3a3ab3] flex items-center justify-center invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-75">
                <Link to={`products/${item.id}`} className="text-primary bg-slate-50 py-2 px-4 rounded-md border-primary border text-xs transition-transform duration-200 -translate-y-7 group-hover:translate-y-0">Add to Cart</Link>
            </div>
        </div>
    )
}
export default ProductCard