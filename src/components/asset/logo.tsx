import Image from "next/image";

export const Logo = () => (
  <Image src="/logo.svg" alt="Formkit Logo" width={228} height={67} priority />
);

// export const Logo = () => (
//   <a
//     className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0 border border-gray-300"
//     href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//     target="_blank"
//     rel="noopener noreferrer"
//   >
//     By{" "}
//     <Image
//       src="/logo.svg"
//       alt="Formkit Logo"
//       // className="dark:invert"
//       width={228}
//       height={67}
//       priority
//     />
//   </a>
// );
