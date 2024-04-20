import { LogoConfig } from "@/components/asset/logo-config";
import { LogoFigma } from "@/components/asset/logo-figma";
import Image from "next/image";

const Logo = () => (
  <a
    className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0 border border-gray-300"
    href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    target="_blank"
    rel="noopener noreferrer"
  >
    By{" "}
    <Image
      src="/vercel.svg"
      alt="Vercel Logo"
      className="dark:invert"
      width={100}
      height={24}
      priority
    />
  </a>
);

const mockFooter = [
  {
    title: "Menu",
    children: [
      { title: "Speakers", link: "#" },
      { title: "Get Tickets", link: "#" },
    ],
  },
  {
    title: "Resources",
    children: [
      {
        title: "Why Attend↗",
        link: "#",
      },
      {
        title: "Faq",
        link: "#",
      },
      {
        title: "Sponsors",
        link: "#",
      },
      {
        title: "Hotels↗",
        link: "#",
      },
      {
        title: "Visa Letters↗",
        link: "#",
      },
      {
        title: "Code Of Conduct↗",
        link: "#",
      },
    ],
  },
  {
    title: "Follow",
    children: [
      {
        title: "X↗",
        link: "#",
      },
      {
        title: "Linkedin↗",
        link: "#",
      },
      {
        title: "Instagram↗",
        link: "#",
      },
      {
        title: "Youtube↗",
        link: "#",
      },
    ],
  },
];

// const Link = props => {
//   <a href={}>
//     Link type
//   </a>
// }

// add the colors

// add the typography

// add the links
// add the buttons

export default function Registration() {
  return (
    <main className="min-h-screen">
      <div className="bg-green-500 py-5 flex flex-row justify-center">
        <div className="flex flex-row justify-between w-full max-w-4xl py-6">
          <LogoConfig />
          <div className="flex items-center">
            <div>speakers</div>
            <div>get tickets</div>
          </div>
        </div>
      </div>
      <footer className="flex min-h-[70vh] flex-col items-center justify-between p-24 bg-[#252525]">
        hello
      </footer>
      <div className="bg-green-500 py-5 flex flex-row justify-center">
        <div className="flex flex-row justify-between w-full max-w-4xl py-6">
          <LogoFigma />
          <div className="flex items-start gap-[60px]">
            {mockFooter.map((group, i) => {
              return (
                <div key={i}>
                  <p className="text--4">{group.title}</p>
                  <ul>
                    {group.children.map((item, j) => (
                      <li key={j}>
                        <a href={item.link}>{item.title}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
}
