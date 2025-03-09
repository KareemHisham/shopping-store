import { useEffect, useState } from "react";
import { deleteItemCart } from "@/lib/subabase/Api";
import { useCheckoutProducts, useUpdateProductStock } from "@/lib/react-query";
import { ICheckProduct } from "@/constant/Interfaces";
import { useToast } from "@/components/hooks/use-toast"
import { MiniHero, Features, NoItemsFound, CartTable, Spinner } from "../../components/Index"
import logoIcon from "../../../public/assets/logo/favicon.png"


const Cart = () => {
    const { toast } = useToast();
    const { data, isPending } = useCheckoutProducts();
    const { mutateAsync: updateProductStock } = useUpdateProductStock();
    const [products, setProducts] = useState<ICheckProduct[]>([]);
    const [total, setTotal] = useState(0);
    const [totalQuantity, setTotalQuantity] = useState(0);

    useEffect(() => {
        setProducts(data as ICheckProduct[])
    }, [data])

    useEffect(() => {
        if (products) {
            setTotal(products?.reduce((acc, item) => acc + (item.products.price * item.quantity), 0)); // calculate total price
            setTotalQuantity(products?.reduce((acc, item) => acc + item.quantity, 0)); // calculate total quantity
        }
    }, [products]);

    const deleteItem = async (id: number) => {
        await deleteItemCart(id);

        // update Product Stock
        const product = products.find((item) => item.products.id === id);
        if (product) {
            updateProductStock({ stock: (product.products.stock + product.quantity), id: product.products.id.toString() });
        }

        toast({
            variant: "destructive",
            className: "bg-green-500 text-white",
            description: "Item has been deleted ",
        });
    }
    return (
        <>
            <MiniHero breadcrumbLinks={[{ name: "Home", path: "/" }, { name: "Cart", path: "" }]}>
                <div className="flex flex-col items-center gap-3">
                    <img src={logoIcon} alt="Logo" width={50} />
                    <h1 className="text-xl font-bold tracking-[5px]">Cart</h1>
                </div>
            </MiniHero>
            {products?.length == 0 ? <NoItemsFound /> : isPending ? <Spinner /> : <CartTable products={products} total={total} totalQuantity={totalQuantity} deleteItem={deleteItem} />}
{}

            <Features />
        </>
    )
}

export default Cart