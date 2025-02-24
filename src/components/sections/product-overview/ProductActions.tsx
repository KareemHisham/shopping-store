import { useState, useEffect } from "react";
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { useUserContext } from "@/context/AuthContext";
import { useAddToCart, useUpdateCartItem, useGetCartItems, useUpdateProductStock } from "@/lib/react-query";
import { CartValidation } from "@/lib/validation";
import { IProduct, ICartItems } from "@/constant/Interfaces";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { CsButton, Loader } from "@/components/Index";
import { useToast } from "@/components/hooks/use-toast"

import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";

const Actions = ({ product }: { product: IProduct }) => {
  const { toast } = useToast();
  const [quantity, setQuantity] = useState(1);
  const [cartItems, setCartItems] = useState<ICartItems[]>([]);
  const { isAuthenticated } = useUserContext();

  const { mutateAsync: addCart, isPending: addCartPending } = useAddToCart();
  const { mutateAsync: updateCart, isPending: updateCartPending } = useUpdateCartItem();
  const { mutateAsync: updateProductStock } = useUpdateProductStock();
  const { data } = useGetCartItems()

  useEffect(() => {
    setCartItems(data as ICartItems[])
  }, [data])

  // 1. Define your form.
  const form = useForm<z.infer<typeof CartValidation>>({
    resolver: zodResolver(CartValidation),
    defaultValues: {
      quantity: quantity
    },
  })

  // Submit Function
  async function onSubmit(values: z.infer<typeof CartValidation>) {

    // Check user Auth
    if (!isAuthenticated) {
      toast({
        variant: "destructive",
        className: "bg-red-600 text-white",
        description: "You must be logged in",
      });
    }

    // update Product Stock
    updateProductStock({ stock: (product.stock - quantity), id: product.id.toString() })

    // check Product Quantity
    if (product.stock < quantity || product.stock == 0) {
      toast({
        variant: "destructive",
        className: "bg-red-600 text-white",
        description: "Insufficient quantity",
      });
      return;
    }

    // Add/Update Cart Item
    try {
      // Check cart length and update item
      if (cartItems.length) {
        const item = cartItems.find(item => item.productID === product.id)
        if (item) {
          item.quantity = quantity
          const updatedItem = await updateCart({ ...values, quantity: quantity, productID: product.id.toString() })

          toast({
            variant: "destructive",
            className: "bg-yellow-400 text-white",
            description: "Quantity has been updated",
          })
          return updatedItem
        }
      }

      // Insert New Item
      const newProduct = await addCart({ ...values, quantity, productID: product.id.toString() });
      toast({
        variant: "destructive",
        className: "bg-green-500 text-white",
        description: "Item has been added ",
      })



      return newProduct;

    } catch (error) {
      toast({
        variant: "destructive",
        className: "bg-red-600 text-white",
        description: error instanceof Error && error.message,
      })
    }

  }

  const handleQuantityDecreament = () => {
    if (quantity <= 1) return;
    setQuantity(prev => prev - 1);
  }
  const handleQuantityIncreament = () => {
    setQuantity(prev => prev + 1);
  }

  return (
    <div className="flex gap-2 ">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex items-start justify-start gap-3">
          <CsButton type="button" classes="border border-primary rounded-[5px] p-3 text-sm" onClick={handleQuantityDecreament}>
            <FaMinus />
          </CsButton>

          <FormField
            control={form.control}
            name="quantity"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input type="text"  {...field} disabled value={quantity} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <CsButton type="button" classes="border border-primary rounded-[5px] p-3 text-sm" onClick={handleQuantityIncreament}>
            <FaPlus />
          </CsButton>

          <CsButton type="submit" classes="border border-primary rounded-[5px] p-3 text-sm font-bold" disabled={addCartPending || updateCartPending ? true : false}>
            {addCartPending || updateCartPending ? <Loader btnColor="text-primary" /> : "Add To Cart"}
          </CsButton>
        </form>
      </Form>
    </div>
  );
};

export default Actions;
