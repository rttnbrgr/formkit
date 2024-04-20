import Image from "next/image";
import { Checkbox } from "@/components/ui/checkbox";
import { Label, LabelWrap } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

/* 2 - Text */
// color: #000;
// font-family: Inter;
// font-size: 24px;
// font-style: normal;
// font-weight: 400;
// line-height: 130%; /* 31.2px */

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-center p-24">
      <div className="flex flex-col gap-4 bg-green-100">
        {/* Label */}
        <div className="flex flex-col gap-4 ">
          <div className="text-blackk font-sans text-lg font-normal leading-snug">
            I consent to Figma sharing my name and company name with Figma’s
            Config sponsors for marketing purposes. Note: You may also choose to
            share your contact information with specific sponsors at Config by
            letting them scan your attendee badge.
          </div>
          <LabelWrap>
            <Checkbox id="terms" />
            <Label htmlFor="terms">Yes</Label>
          </LabelWrap>
          <LabelWrap>
            <Checkbox id="terms" />
            <Label htmlFor="terms">No</Label>
          </LabelWrap>
        </div>
        <div className="flex flex-col gap-4 ">
          <div className="text-blackk font-sans text-lg font-normal leading-snug">
            By filling out this form, you agree that you have read the Config
            FAQ.
          </div>
          <LabelWrap>
            <Checkbox id="terms" />
            <Label htmlFor="terms">Yes</Label>
          </LabelWrap>
        </div>
        {/* Checkbox */}
        <div className="flex flex-col gap-2">
          <div>Checkbox</div>

          <div className="flex items-center space-x-2">
            <Checkbox id="terms" />
            <label
              htmlFor="terms"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Accept terms and conditions
            </label>
          </div>
        </div>

        {/* RadioGroup */}
        <div className="flex flex-col gap-2">
          <div>Radio Group</div>

          <RadioGroup defaultValue="comfortable">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="default" id="r1" />
              <Label htmlFor="r1">Default</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="comfortable" id="r2" />
              <Label htmlFor="r2">Comfortable</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="compact" id="r3" />
              <Label htmlFor="r3">Compact</Label>
            </div>
          </RadioGroup>
        </div>
        <div className="flex flex-col gap-4 ">
          <div className="text-blackk font-sans text-lg font-normal leading-snug">
            I consent to Figma sharing my name and company name with Figma’s
            Config sponsors for marketing purposes. Note: You may also choose to
            share your contact information with specific sponsors at Config by
            letting them scan your attendee badge.
          </div>
          <RadioGroup defaultValue="comfortable">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="default" id="r1" />
              <Label htmlFor="r1">Default</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="comfortable" id="r2" />
              <Label htmlFor="r2">Comfortable</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="compact" id="r3" />
              <Label htmlFor="r3">Compact</Label>
            </div>
          </RadioGroup>
        </div>
      </div>
    </main>
  );
}
