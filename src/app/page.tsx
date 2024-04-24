import Image from "next/image";
import { Checkbox } from "@/components/ui/checkbox";
import { Label, LabelWrap } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { WrappedInput } from "@/components/ui/input";
import { ProfileForm } from "@/components/form-demo";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-center p-24 bg-grey1">
      <div className="flex flex-col gap-10 ">
        {/* Checkbox */}
        <div>hi</div>
        <div className="flex flex-col gap-4 bg-indigo-500">
          <div className="text-blackk font-sans text-lg font-normal leading-snug">
            By filling out this form, you agree that you have read the Config
            FAQ.
          </div>
          <LabelWrap>
            <Checkbox id="terms" />
            <Label htmlFor="terms">Yes</Label>
          </LabelWrap>
        </div>

        {/* Input */}
        <div>before</div>
        <div className="flex flex-col gap-4 ">
          <WrappedInput />
        </div>
        <div className="flex flex-col gap-4 ">
          <WrappedInput placeholder="Placeholder" />
        </div>
        <div className="flex flex-col gap-4 ">
          <input />
        </div>
        <div className="flex flex-col gap-4 ">
          <Label size="compare">Label</Label>
          <Label size="small">Label</Label>
          <Label size="default">Label</Label>
        </div>

        {/* RadioGroup */}
        <div className="flex flex-col gap-4 ">
          <div className="text-blackk font-sans text-lg font-normal leading-snug">
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
      </div>
      <div className="border border-white w-full rounded-lg py-8 px-4 my-4">
        <div className="flex flex-col gap-4">
          <div className="flex flex-row gap-4 ">
            <WrappedInput className="grow" />
            <WrappedInput className="grow" placeholder="Placeholder" />
          </div>
          <WrappedInput />
        </div>
      </div>
      <ProfileForm />
    </main>
  );
}
