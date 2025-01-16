import { Button } from "../Index"

const CheckoutForm = () => {
    return (
        <form action="" method="POST" className="flex items-baseline md:justify-between flex-col md:flex-row">
            {/* Left Side */}
            <div className="basis-2/4">
                <div className="flex items-start justify-between">
                    <div className="form-group">
                        <label className="label" htmlFor="fName">First Name</label>
                        <input type="text" id="fName" name="fName" className="form-control h-9" />
                    </div>
                    <div className="form-group">
                        <label className="label" htmlFor="lName">Last Name</label>
                        <input type="text" id="lName" name="lName" className="form-control h-9" />
                    </div>
                </div>

                <div className="form-group">
                    <label className="label" htmlFor="companyName">Company Name (Optional)</label>
                    <input type="text" id="companyName" name="companyName" className="form-control h-9" />
                </div>

                <div className="form-group">
                    <label className="label" htmlFor="address">Street address</label>
                    <input type="text" id="address" name="address" className="form-control h-9" />
                </div>

                <div className="form-group">
                    <label className="label" htmlFor="city">Town / City</label>
                    <input type="text" id="city" name="city" className="form-control h-9" />
                </div>

                <div className="form-group">
                    <label className="label" htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" className="form-control h-9" />
                </div>
                <div className="form-group">
                    <label className="label" htmlFor="phone">Phone</label>
                    <input type="text" id="phone" name="phone" className="form-control h-9" />
                </div>
                <div className="form-group">
                    <label className="label" htmlFor="info">Additional information</label>
                    <textarea id="info" name="info" className="form-control" rows={5}></textarea>
                </div>
            </div>
            {/* Right Side */}
            <div className=" basis-5/12">
                <ul className="border-b border-lightGrey">
                    <li className="flex_wrapper mb-4">
                        <span className="font-medium text-base">Product</span>
                        <span className="font-medium text-base">Subtotal</span>
                    </li>
                    <li className="mb-4">
                        <ol>
                            <li className="flex_wrapper mb-4">
                                <div>
                                    <span className="text-lightGrey">Product 1</span>
                                    <span>X 1</span>
                                </div>
                                <span>Rs. 100,000.00</span>
                            </li>
                        </ol>
                    </li>
                    <li className="flex_wrapper mb-4">
                        <span>Total</span>
                        <span className="text-primary font-bold text-lg">Rs. 250,000.00</span>
                    </li>
                </ul>
                <Button type="submit" classes="rounded-md border border-black text-sm py-1 px-12 mx-auto block mt-9">Place order</Button>
            </div>
        </form>
    )
}

export default CheckoutForm