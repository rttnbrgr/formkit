import Image from "next/image";
import { Checkbox } from "@/components/ui/checkbox";
import { Label, LabelWrap } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

import { ProfileForm } from "@/components/form-demo";
import { ContactForm } from "@/components/contact-form";
import { cn } from "@/lib/utils";

const rawShad = [
  "background",
  "foreground",
  "card",
  "card-foreground",
  "popover",
  "popover-foreground",
  "primary",
  "primary-foreground",
  "secondary",
  "secondary-foreground",
  "muted",
  "muted-foreground",
  "accent",
  "accent-foreground",
  "destructive",
  "destructive-foreground",
  "border",
  "input",
  "ring",
];

/* new */
const rawCustom = ["blackk", "grey1", "grey2", "redNew", "blueNew"];

// shad
const shadTailwindColors = [
  "bg-border",
  "bg-input",
  "bg-ring",
  "bg-background",
  "bg-foreground",
  "bg-primary",
  "bg-primary-foreground",
  "bg-secondary",
  "bg-secondary-foreground",
  "bg-destructive",
  "bg-destructive-foreground",
  "bg-muted",
  "bg-muted-foreground",
  "bg-accent",
  "bg-accent-foreground",
  "bg-popover",
  "bg-popover-foreground",
  "bg-card",
  "bg-card-foreground",
];
// prmitive
const customColors = [
  "bg-blackk",
  "bg-grey1",
  "bg-grey2",
  "bg-redNew",
  "bg-blueNew",
  "bg-form",
  "bg-interactive",
  "bg-interactive-foreground",
];

const ColorItem = ({ color }: { color: string }) => (
  <div className="flex gap-2 items-center">
    <div className={cn(["rounded w-4 h-4", color])} />
    <div className={"font-sans text-md"}>{color}</div>
  </div>
);

const ColorItemRaw = ({
  color,
  useHsl = false,
}: {
  color: string;
  useHsl?: boolean;
}) => {
  const varInner = `var(--${color})`;
  const colorVar = useHsl ? `hsl(${varInner})` : varInner;
  return (
    <div className="flex gap-2 items-center">
      <div
        className={cn(["rounded w-4 h-4"])}
        style={{
          backgroundColor: colorVar,
        }}
      />
      <div className={"typography-4"}>{color}</div>
    </div>
  );
};

type ColorDebugProps = {
  showTailwind?: boolean;
  showRaw?: boolean;
  showShad?: boolean;
  showCustom?: boolean;
};

const ColorDebug = ({
  showTailwind = true,
  showRaw = true,
  showShad = true,
  showCustom = true,
}: ColorDebugProps) => {
  //
  return (
    <div className="p-24 border border-red-500 flex gap-16">
      {/* Raw Collection */}
      {showRaw && (
        <div className="flex flex-col gap-8">
          <div className="typography-2">raw</div>
          {/* Colors Row */}
          <div className="flex gap-4">
            {showShad && (
              <div className="flex flex-col gap-2">
                <div className="typography-2">shad</div>
                {rawShad.map((color, i) => (
                  <ColorItemRaw key={i} color={color} useHsl />
                ))}
              </div>
            )}
            {showCustom && (
              <div className="flex flex-col gap-2">
                <div className="typography-2">custom</div>
                {rawCustom.map((color, i) => (
                  <ColorItemRaw key={i} color={color} useHsl={false} />
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Taiwlind Collection */}
      {showTailwind && (
        <div className="flex flex-col gap-8">
          <div className="typography-2">tailwind</div>
          {/* Colors Row */}
          <div className="flex gap-4">
            {showShad && (
              <div className="flex flex-col gap-2">
                <div className="typography-2">shad</div>
                {shadTailwindColors.map((color, i) => (
                  <ColorItem key={i} color={color} />
                ))}
              </div>
            )}
            {showCustom && (
              <div className="flex flex-col gap-2">
                <div className="typography-2">custom</div>
                {customColors.map((color, i) => (
                  <ColorItem key={i} color={color} />
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-center p-24 bg-grey1">
      <ColorDebug showTailwind={false} />
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
        {/* <div className="flex flex-col gap-4 ">
          <WrappedInput />
        </div>
        <div className="flex flex-col gap-4 ">
          <WrappedInput placeholder="Placeholder" />
        </div> */}
        <div className="flex flex-col gap-4 ">
          <input />
        </div>
        <div className="flex flex-col gap-4 ">
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
      {/* foo */}
      <div className="border border-white w-full rounded-lg py-8 px-4 my-4">
        <div className="flex flex-col gap-4">
          <div className="flex flex-row gap-4 ">
            {/* <WrappedInput className="grow" />
            <WrappedInput className="grow" placeholder="Placeholder" /> */}
          </div>
          {/* <WrappedInput /> */}
        </div>
      </div>
      <ProfileForm />
      <div className="mt-8"></div>
      <hr />
      <div className="mt-8"></div>
      <ContactForm />
    </main>
  );
}
