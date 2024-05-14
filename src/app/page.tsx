import { Button } from "@/components/ui/button";
import { Logo } from "@/components/asset/logo";
import Link from "next/link";

const debugResponsive =
  "sm:bg-red-500 md:bg-blue-500 lg:bg-green-500 xl:bg-purple-500";

// add semantic bg colors
// Do you need non-semantic tailwind help?
// add CTA => Email
// add CTA => Figma Link
// write copy
// remove old pages
export default function Home() {
  const figmaLink = process.env.NEXT_PUBLIC_LINK_FIGMA;
  const mailLink = process.env.NEXT_PUBLIC_LINK_MAIL;

  if (!mailLink || !figmaLink) {
    return;
  }

  figmaLink;

  return (
    <main className="flex min-h-screen flex-col justify-start px-8 py-12 sm:justify-center">
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
            mixtape. aajdkfja;skfjasdk; c
          </div>
        </div>
        <div className="flex flex-col gap-4 w-full max-w-[390px] sm:flex-row sm:w-auto sm:max-w-fit">
          <Button className="w-full" variant="outline" asChild>
            <Link
              target="_blank"
              href={`${mailLink}?subject=Tell me more about Formkit! 🚀`}
            >
              Tell Me More
            </Link>
          </Button>
          <Button asChild>
            <Link href={figmaLink}>Get Figma File</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
