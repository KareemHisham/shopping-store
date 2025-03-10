import { useEffect, useState } from "react";
import { useCheckoutProducts } from "@/lib/react-query"
import { ICheckProduct } from "@/constant/Interfaces"
import { MiniHero, Features, CheckoutForm, NoItemsFound } from "../../components/Index"
import logoIcon from "../../../public/assets/logo/favicon.png"
// import { getCheckoutProducts } from "@/lib/subabase/Api";
const Checkout = () => {
    const [products, setProducts] = useState<ICheckProduct[]>([]);
    const { data } = useCheckoutProducts();

    useEffect(() => {
        if (data) setProducts(data)
    }, [data, products])


    // another Solution
    // useEffect(() => {
    //     const getData = async () => {
    //         setProducts(await getCheckoutProducts())
    //     }
    //     getData()
    // }, [products])

    return (
        <>
            <MiniHero breadcrumbLinks={[{ name: "Home", path: "/" }, { name: "Checkout", path: "" }]}>
                <div className="flex flex-col items-center gap-3">
                    <img src={logoIcon} alt="Logo" width={50} />
                    <h1 className="text-xl font-bold tracking-[5px]">Checkout</h1>
                </div>
            </MiniHero>
            <section className="py-5">
                <div className="md:w-3/5 md:mx-auto">
                    <h2 className="font-semibold text-lg mb-7">Billing details</h2>
                    {!products?.length ? (<NoItemsFound />) : <CheckoutForm cartItems={products} />}

                </div>
            </section>
            <Features />
        </>
    )
}

export default Checkout