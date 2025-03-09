import { Link } from "react-router-dom"
import { CsButton } from "@/components/Index"
import { FaTrash } from "react-icons/fa";
import { ICheckProduct } from "@/constant/Interfaces";
const CartTable = ({ products, total, totalQuantity, deleteItem }: {
    products: ICheckProduct[],
    total: number,
    totalQuantity: number,
    deleteItem: (productId: number) => void,
}) => {
    return (
        <section className="py-4">
            <div className="container">
                <div className="flex items-start gap-3 flex-col md:flex-row overflow-x-auto">
                    {/* Cart Items */}
                    <div className="table basis-full md:basis-[70%]">
                        <div className="table-row bg-lightPink py-3">
                            <span className="table-cell font-medium">Product</span>
                            <span className="table-cell font-medium">Price</span>
                            <span className="table-cell font-medium">Quantity</span>
                            <span className="table-cell font-medium">Total</span>
                            <span className="table-cell font-medium">Action</span>
                        </div>
                        {products?.length > 0 && products?.map(product => {
                            return (
                                <div key={product.products.id} className="table-row">
                                    <div className="table-cell">
                                        <img src={product.products.image} alt="cart" width={80} className=" inline-block mr-1" />
                                        <span className="text-lightGrey text-xs">{product.products.title}</span>
                                    </div>
                                    <div className="table-cell text-lightGrey text-xs">Rs. {product.products.price}</div>
                                    <div className="table-cell">
                                        <span className="border-lightGrey border rounded-md py-1 px-2">{product.quantity}</span>
                                    </div>
                                    <div className="table-cell text-xs">Rs. {product.quantity * product.products.price}</div>
                                    <div className="table-cell">
                                        <CsButton type="button" classes="text-primary" onClick={() => deleteItem(product.products.id)}><FaTrash /></CsButton>
                                    </div>
                                </div>

                            )
                        })}
                    </div>
                    {/* Cart Summary */}
                    <div className="bg-lightPink p-7 rounded-sm basis-[30%] text-center w-full">
                        <h4 className="md:text-lg font-semibold mb-6">Cart Totals</h4>
                        <ul className="mb-5 flex flex-col justify-around w-full">
                            <li className="flex items-baseline mb-4 justify-center">
                                <span className="basis-3/5">Total Items</span>
                                <span className="text-lightGrey">{totalQuantity}</span>
                            </li>
                            <li className="flex items-baseline justify-center">
                                <span className="basis-3/5">
                                    Total
                                </span>
                                <span className="text-primary text-xs">
                                    RS {total}
                                </span>
                            </li>
                        </ul>
                        <Link to="/checkout" className="rounded-md border border-black text-sm py-1 px-4"> CheckOut</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CartTable