import { MiniHero, Features, CheckoutForm } from "../../components/Index"
import logoIcon from "../../../public/assets/logo/favicon.png"
const Checkout = () => {
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
                    <CheckoutForm />
                </div>
            </section>
            <Features />
        </>
    )
}

export default Checkout