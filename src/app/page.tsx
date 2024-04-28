import { Button } from "@/components/ui/button";
import { Logo } from "@/components/asset/logo";

const debugResponsive =
  "sm:bg-red-500 md:bg-blue-500 lg:bg-green-500 xl:bg-purple-500";

// add semantic bg colors
// Do you need non-semantic tailwind help?
// add CTA => Email
// add CTA => Figma Link
// write copy
// remove old pages
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-start bg-grey1 px-8 py-12 sm:justify-center">
      <div className="flex flex-col items-center justify-center gap-12 ">
        <div className="flex flex-col items-center justify-center gap-6 max-w-[800px]">
          {/* Logo */}
          <Logo />
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
