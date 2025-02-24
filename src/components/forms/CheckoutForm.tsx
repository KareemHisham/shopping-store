import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

// import { useGetCartItems } from "@/lib/react-query"
import { CheckoutValidation } from "@/lib/validation"

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

import { CsButton } from "../Index"
import { getCartItems } from "@/lib/subabase/Api"
import { useEffect } from "react"

const CheckoutForm = () => {

    useEffect(() => {
        const getCheckItem = async () => {
            const cartItems = await getCartItems();
            console.log(cartItems);


        }
        getCheckItem();
    }, [])



    // 1. Define your form.
    const form = useForm<z.infer<typeof CheckoutValidation>>({
        resolver: zodResolver(CheckoutValidation),
        defaultValues: {
            firstname: "",
            secondname: "",
            street: "",
            city: "",
            email: "",
            phone: Number(),
        },
    })

    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof CheckoutValidation>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
    }


    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex items-baseline md:justify-between flex-col md:flex-row" autoComplete="off">
                <div className="basis-2/4">
                    <div className="flex items-start justify-between gap-3">
                        <FormField
                            control={form.control}
                            name="firstname"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="label">First name</FormLabel>
                                    <FormControl>
                                        <Input type="text" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="secondname"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="label">Last name</FormLabel>
                                    <FormControl>
                                        <Input type="text" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>


                    <FormField
                        control={form.control}
                        name="street"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="label">Street</FormLabel>
                                <FormControl>
                                    <Input type="text" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="city"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="label">City</FormLabel>
                                <FormControl>
                                    <Input type="text" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="label">Email</FormLabel>
                                <FormControl>
                                    <Input type="email" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="label">Phone</FormLabel>
                                <FormControl>
                                    <Input type="text" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>

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
                    <CsButton type="submit" classes="bg-primary text-white text-bases w-full rounded-sm shadow-md p-2">
                        Place Order
                    </CsButton>
                </div>

            </form>
        </Form>
    )
}

export default CheckoutForm


