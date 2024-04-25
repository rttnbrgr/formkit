"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormInputWrap,
  FormItem,
  FormLabel,
  FormMessage,
  useFormField,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  firstName: z.string().min(2, {
    message: "First name must be at least 2 characters.",
  }),
  lastName: z.string().min(2, {
    message: "Last name must be at least 2 characters.",
  }),
  email: z.string().min(2, {
    message: "Email must be at least 2 characters.",
  }),
});

export function ContactForm() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <Form {...form}>
      {/* Full */}
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 border border-white w-full rounded-lg py-8 px-4 my-4"
      >
        {/* Container */}
        <div className="flex flex-col gap-4">
          {/* Row 1 */}
          <div className="flex flex-row gap-4 ">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => {
                return (
                  <FormItem className="grow">
                    <FormInputWrap>
                      <FormLabel size="small">First Name</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                    </FormInputWrap>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => {
                return (
                  <FormItem className="grow">
                    <FormInputWrap>
                      <FormLabel size="small">Last Name</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                    </FormInputWrap>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />
            {/* 
            <WrappedInput className="grow" />
          <WrappedInput className="grow" placeholder="Placeholder" /> */}
          </div>
          {/* Row 2 */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormInputWrap>
                    <FormLabel size="small">Email</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                  </FormInputWrap>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
        </div>

        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}

// add all form items
// add dark/light mode
// add modifiers (stylistic, recon vs me)
// add helpers (form inputs for each)
