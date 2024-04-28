import Image from "next/image";
import { Checkbox } from "@/components/ui/checkbox";
import { Label, LabelWrap } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

import { ProfileForm } from "@/components/form-demo";
import { ContactForm } from "@/components/contact-form";
import { Button } from "@/components/ui/button";

// add semantic bg colors
// Do you need non-semantic tailwind help?
// md:bg-blue-500 lg:bg-green-500 xl:bg-purple-500
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-start bg-grey1 px-8 py-12 sm:bg-red-500 sm:justify-center ">
      <div className="flex flex-col items-center justify-center gap-12 bg-black/40">
        <div className="flex flex-col items-center justify-center gap-6 max-w-[800px]">
          {/* Logo */}
          <div className="w-[228px] h-'[68px] flex gap-4">
            <div className="h-5 rounded bg-black w-full" />
            <div className="w-5 h-5 rounded bg-pink-500" />
          </div>
          {/* Copy */}
          <div className="typography-2">
            Baby vaporware brunch lomo bodega boys distillery kogi, air plant
            cupping subway tile fingerstache tumeric cardigan tacos +1.
            Farm-to-table bespoke freegan meggings sus lomo four loko. Taxidermy
            polaroid mlkshk salvia ethical. Squid intelligentsia listicle,
            humblebrag fixie drinking vinegar jawn subway tile venmo. Art party
            forage ethical fanny pack grailed beard cardigan wayfarers paleo
            mixtape. aajdkfja;skfjasdk;
          </div>
        </div>
        <div className="flex flex-col gap-4 bg-green-300 w-full max-w-[390px] sm:flex-row sm:w-auto sm:max-w-fit">
          <Button className="w-full">Tell Me More</Button>
          <Button>Get Figma File</Button>
        </div>
      </div>
    </main>
  );
}
