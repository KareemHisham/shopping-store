import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { ContactValidation } from "@/lib/validation"

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

import { CsButton } from "../Index"

const ContactForm = () => {
    // 1. Define your form.
    const form = useForm<z.infer<typeof ContactValidation>>({
        resolver: zodResolver(ContactValidation),
        defaultValues: {
            name: "",
            email: "",
            subject: "",
            message: ""
        },
    })
    // 2. Define a submit handler.
    async function onSubmit(values: z.infer<typeof ContactValidation>) {
        console.log(values);
    }
    return (
        <Form {...form}>
            <form action="" method="POST" onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="label">Your name</FormLabel>
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
                    name="subject"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="label">Subject</FormLabel>
                            <FormControl>
                                <Input type="text"  {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="label">Message</FormLabel>
                            <FormControl>
                                <Textarea placeholder="Type your message here." id="message" rows={3} {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <CsButton type="submit" classes="bg-primary text-white rounded-sm px-10 py-1 w-full md:w-fit mt-3"> Submit</CsButton>
            </form>
        </Form>
    )
}

export default ContactForm