"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormInputWrap,
  FormItem,
  FormLabel,
  FormMessage,
  useFormField,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Label, LabelWrap } from "./ui/label";

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
  new: z.enum(
    ["ui-design", "frontend-dev", "design-systems", "creating-content", "all"],
    {
      required_error: "You need to select a notification type.",
    }
  ),
  type: z.enum(["yes", "no"], {
    required_error: "You need to select an INPUT HERE.",
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
          {/* Row 1 - Name*/}
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
          {/* Row 2 - Email */}
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
          {/* Row 3 - Consent */}
          <FormField
            control={form.control}
            name="type"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormDescription>
                  I consent to Figma sharing my name and company name with
                  Figma’s Config sponsors for marketing purposes. Note: You may
                  also choose to share your contact information with specific
                  sponsors at Config by letting them scan your attendee badge.
                </FormDescription>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex flex-col space-y-1"
                  >
                    <FormItem>
                      <LabelWrap>
                        <FormControl>
                          <RadioGroupItem value="yes" />
                        </FormControl>
                        <FormLabel>Yes</FormLabel>
                      </LabelWrap>
                    </FormItem>
                    <FormItem>
                      <LabelWrap>
                        <FormControl>
                          <RadioGroupItem value="no" />
                        </FormControl>
                        <FormLabel>No</FormLabel>
                      </LabelWrap>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Row 4 - Interests */}
          <FormField
            control={form.control}
            name="type"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormDescription>
                  I am most interested in the following types of content.
                  (Select all that apply)
                </FormDescription>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex flex-col space-y-1"
                  >
                    <FormItem>
                      <LabelWrap>
                        <FormControl>
                          <RadioGroupItem value="ui-design" />
                        </FormControl>
                        <FormLabel>UI Design</FormLabel>
                      </LabelWrap>
                    </FormItem>
                    <FormItem>
                      <LabelWrap>
                        <FormControl>
                          <RadioGroupItem value="frontend-dev" />
                        </FormControl>
                        <FormLabel>Frontend Development</FormLabel>
                      </LabelWrap>
                    </FormItem>
                    <FormItem>
                      <LabelWrap>
                        <FormControl>
                          <RadioGroupItem value="design-systems" />
                        </FormControl>
                        <FormLabel>Design Systems</FormLabel>
                      </LabelWrap>
                    </FormItem>
                    <FormItem>
                      <LabelWrap>
                        <FormControl>
                          <RadioGroupItem value="creating-content" />
                        </FormControl>
                        <FormLabel>Creating Content</FormLabel>
                      </LabelWrap>
                    </FormItem>
                    <FormItem>
                      <LabelWrap>
                        <FormControl>
                          <RadioGroupItem value="all" />
                        </FormControl>
                        <FormLabel>All of the Above</FormLabel>
                      </LabelWrap>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
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

//   return (
//     <Form {...form}>
//       <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
//         <FormField
//           control={form.control}
//           name="type"
//           render={({ field }) => (
//             <FormItem className="space-y-3">
//               <FormLabel>Notify me about...</FormLabel>
//               <FormControl>
//                 <RadioGroup
//                   onValueChange={field.onChange}
//                   defaultValue={field.value}
//                   className="flex flex-col space-y-1"
//                 >
//                   <FormItem className="flex items-center space-x-3 space-y-0">
//                     <FormControl>
//                       <RadioGroupItem value="all" />
//                     </FormControl>
//                     <FormLabel className="font-normal">
//                       All new messages
//                     </FormLabel>
//                   </FormItem>
//                   <FormItem className="flex items-center space-x-3 space-y-0">
//                     <FormControl>
//                       <RadioGroupItem value="mentions" />
//                     </FormControl>
//                     <FormLabel className="font-normal">
//                       Direct messages and mentions
//                     </FormLabel>
//                   </FormItem>
//                   <FormItem className="flex items-center space-x-3 space-y-0">
//                     <FormControl>
//                       <RadioGroupItem value="none" />
//                     </FormControl>
//                     <FormLabel className="font-normal">Nothing</FormLabel>
//                   </FormItem>
//                 </RadioGroup>
//               </FormControl>
//               <FormMessage />
//             </FormItem>
//           )}
//         />
//         <Button type="submit">Submit</Button>
//       </form>
//     </Form>
//   );
// }

// ui vs form pattern => integrated
