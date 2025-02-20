import { useNavigate } from "react-router-dom"

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { useCreateAccount, useInsertUser } from "@/lib/react-query"
import { RegisterValidation } from "@/lib/validation"


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
import { Button, Loader } from "../Index"

const RegisterForm = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const { mutateAsync: CreateNewUser, isPending } = useCreateAccount();
  const { mutateAsync: insertUser } = useInsertUser();

  // 1. Define your form.
  const form = useForm<z.infer<typeof RegisterValidation>>({
    resolver: zodResolver(RegisterValidation),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      phone: "",
    },
  })

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof RegisterValidation>) {
    try {
      const newUser = await CreateNewUser(values);
      const createUser = await insertUser(values);

      if (newUser) {
        toast({
          variant: "destructive",
          className: "bg-green-500 text-white",
          description: "Account has been successfully added",
        });
        form.reset();
        navigate('/')
      }
      return { newUser, createUser }
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
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="label">Full Name</FormLabel>
              <FormControl>
                <Input type="text"  {...field} />
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
                <Input type="email"  {...field} />
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
              <FormLabel className="label">Phone Number</FormLabel>
              <FormControl>
                <Input type="text"  {...field} />
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
        <Button type="submit" classes="bg-primary text-white text-bases w-full rounded-sm shadow-md p-2" disabled={isPending ? true : false}>
          {isPending ? <Loader /> : "Register"}
        </Button>
      </form>
    </Form>
  )
}

export default RegisterForm