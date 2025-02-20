import { z } from "zod"

export const LoginValidation = z.object({
    email: z.string().email({ message: "Invalid email address" }),
    password: z.string().min(4, { message: "Password must be at least 4 characters" })
})

export const RegisterValidation = z.object({
    name: z.coerce.string().min(4, { message: "Name must be at least 4 characters" }),
    email: z.coerce.string().email("Invalid email address"),
    password: z.coerce.string().min(4, { message: "Password must be at least 4 characters" }),
    phone: z.coerce.string({message:'Please insert Numbers only'}).min(4, { message: "Phone number must be at least 4 characters" })
})