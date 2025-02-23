import { Link } from "react-router-dom"
import { MiniHero, Features, CsButton } from "../../components/Index"
import logoIcon from "../../../public/assets/logo/favicon.png"
import cartImg from "../../../public/assets/collection/cart_item.png"

import { FaTrash } from "react-icons/fa";

const Cart = () => {
    return (
        <>
            <MiniHero breadcrumbLinks={[{ name: "Home", path: "/" }, { name: "Cart", path: "" }]}>
                <div className="flex flex-col items-center gap-3">
                    <img src={logoIcon} alt="Logo" width={50} />
                    <h1 className="text-xl font-bold tracking-[5px]">Cart</h1>
                </div>
            </MiniHero>
            <section className="py-4">
                <div className="container">
                    <div className="flex items-start gap-3 flex-col md:flex-row overflow-x-auto">
                        {/* Cart Items */}
                        <div className="table basis-full md:basis-[70%]">
                            <div className="table-row bg-lightPink py-3">
                                <span className="table-cell font-medium">Product</span>
                                <span className="table-cell font-medium">Price</span>
                                <span className="table-cell font-medium">Items</span>
                                <span className="table-cell font-medium">Total</span>
                                <span className="table-cell font-medium">Action</span>
                            </div>
                            <div className="table-row">
                                <div className="table-cell">
                                    <img src={cartImg} alt="cart" width={80} className=" inline-block mr-1" />
                                    <span className="text-lightGrey text-xs">Asgaard sofa</span>
                                </div>
                                <div className="table-cell text-lightGrey text-xs">Rs. 250,000.00</div>
                                <div className="table-cell">
                                    <span className="border-lightGrey border rounded-md py-1 px-2">1</span>
                                </div>
                                <div className="table-cell text-xs">Rs. 250,000.00</div>
                                <div className="table-cell">
                                    <CsButton type="button" classes="text-primary"><FaTrash /></CsButton>
                                </div>
                            </div>
                        </div>
                        {/* Cart Summary */}
                        <div className="bg-lightPink p-7 rounded-sm basis-[30%] text-center w-full">
                            <h4 className="md:text-lg font-semibold mb-6">Cart Totals</h4>
                            <ul className="mb-5 flex flex-col justify-around w-full">
                                <li className="flex items-baseline mb-4 justify-center">
                                    <span className="basis-3/5">Total Items</span>
                                    <span className="text-lightGrey">4</span>
                                </li>
                                <li className="flex items-baseline justify-center">
                                    <span className="basis-3/5">
                                        Total
                                    </span>
                                    <span className="text-primary text-xs">
                                        RS 250,0000
                                    </span>
                                </li>
                            </ul>
                            <Link to="/checkout" className="rounded-md border border-black text-sm py-1 px-4"> CheckOut</Link>
                        </div>
                    </div>
                </div>
            </section>

            <Features />
        </>
    )
}

export default Cart