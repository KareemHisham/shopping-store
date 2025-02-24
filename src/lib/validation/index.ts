import { z } from "zod";

export const LoginValidation = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(4, { message: "Password must be at least 4 characters" }),
});

export const RegisterValidation = z.object({
  name: z.coerce
    .string()
    .min(4, { message: "Name must be at least 4 characters" }),
  email: z.coerce.string().email("Invalid email address"),
  password: z.coerce
    .string()
    .min(4, { message: "Password must be at least 4 characters" }),
  phone: z.coerce
    .string({ message: "Please insert Numbers only" })
    .min(4, { message: "Phone number must be at least 4 characters" }),
});

export const ContactValidation = z.object({
  name: z.coerce
    .string()
    .min(4, { message: "Name must be at least 4 characters" }),
  email: z.coerce.string().email("Invalid email address"),
  subject: z.coerce
    .string()
    .min(4, { message: "Subject must be at least 4 characters" }),
  message: z.coerce
    .string()
    .min(4, { message: "Message must be at least 4 characters" }),
});

export const CartValidation = z.object({
  quantity: z.coerce
    .number()
    .min(0, { message: "Quantity must be greater than 1" }),
});

export const CheckoutValidation = z.object({
  firstname: z.coerce
    .string()
    .min(4, { message: "First Name must be at least 4 character" }),
  secondname: z.coerce
    .string()
    .min(4, { message: "Last Name must be at least 4 character" }),
  street: z.coerce
    .string()
    .min(4, { message: "Street must be at least 4 character" }),
  city: z.coerce
    .string()
    .min(4, { message: "City must be at least 4 character" }),
  email: z.coerce.string().email(),
  phone: z.coerce
    .number()
    .min(4, { message: "Phone number must be at least 4 character" }),
});
