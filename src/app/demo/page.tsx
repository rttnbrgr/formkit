import Image from "next/image";
import { Checkbox } from "@/components/ui/checkbox";
import { Label, LabelWrap } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

import { ProfileForm } from "@/components/form-demo";
import { ContactForm } from "@/components/contact-form";
import { ColorDebug } from "@/components/color-debug";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-center p-24">
      <ColorDebug />
      <div className="flex flex-col gap-10 ">
        {/* RadioGroup */}
        <div className="flex flex-col gap-4 ">
          <div className="font-sans text-lg font-normal leading-snug">
            I consent to Figma sharing my name and company name with Figma’s
            Config sponsors for marketing purposes. Note: You may also choose to
            share your contact information with specific sponsors at Config by
            letting them scan your attendee badge.
          </div>
          <RadioGroup defaultValue="comfortable">
            <LabelWrap>
              <RadioGroupItem value="default" id="r1" />
              <Label htmlFor="r1">Yes</Label>
            </LabelWrap>
            <LabelWrap>
              <RadioGroupItem value="comfortable" id="r2" />
              <Label htmlFor="r2">No</Label>
            </LabelWrap>
          </RadioGroup>
        </div>
        {/* Checkbox */}
        <div className="flex flex-col gap-4 ">
          <div className="font-sans text-lg font-normal leading-snug">
            By filling out this form, you agree that you have read the Config
            FAQ.
          </div>
          <LabelWrap>
            <Checkbox id="terms" />
            <Label htmlFor="terms">Yes</Label>
          </LabelWrap>
        </div>
      </div>
      <div className="mt-8"></div>
      <hr />
      <div className="mt-8"></div>
      <ContactForm />
    </main>
  );
}
