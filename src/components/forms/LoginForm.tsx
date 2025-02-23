import { useNavigate } from "react-router-dom"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { LoginValidation } from "@/lib/validation"

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useToast } from "@/components/hooks/use-toast"
import { CsButton, Loader } from "../Index"
import { useSignInUser } from "@/lib/react-query"
import { useUserContext } from "@/context/AuthContext"

const LoginForm = () => {
    const navigate = useNavigate();
    const { toast } = useToast();
    const { mutateAsync: userLogin, isPending } = useSignInUser()

    const { checkUser } = useUserContext()
    // 1. Define your form.
    const form = useForm<z.infer<typeof LoginValidation>>({
        resolver: zodResolver(LoginValidation),
        defaultValues: {
            email: "",
            password: ""
        },
    })

    // 2. Define a submit handler.
    async function onSubmit(values: z.infer<typeof LoginValidation>) {
        try {
            const user = await userLogin(values);
            if (user) {
                toast({
                    variant: "destructive",
                    className: "bg-green-500 text-white",
                    description: "Logged in successfully",
                });

                form.reset();
                navigate('/')
                checkUser()
            }


        } catch (error) {
            toast({
                variant: "destructive",
                className: "bg-red-600 text-white",
                description: error instanceof Error && error.message,
            })
        }
    }
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="label">Email</FormLabel>
                            <FormControl>
                                <Input type="email"  {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="label">Password</FormLabel>
                            <FormControl>
                                <Input type="password" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <CsButton type="submit" classes="bg-primary text-white text-bases w-full rounded-sm shadow-md p-2" disabled={isPending ? true : false}>
                    {isPending ? <Loader /> : "Login"}
                </CsButton>
            </form>
        </Form>
    )
}

export default LoginForm