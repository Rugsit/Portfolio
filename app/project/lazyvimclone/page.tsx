import Image from "next/image";
import Link from "next/link";

export default function CNC() {
  return (
    <>
      <div className="w-full max-w-[700px] mx-auto p-6">
        <Link href={"/project"}>
          <p className="underline cursor-pointer mb-6"> back to projects</p>
        </Link>
        <div className="flex items-center mb-9 gap-8">
          <p className="text-3xl ">LazyVim Web Clone Project</p>
          <Link
            className="bg-white rounded-full p-2 hover:scale-95 transition-all"
            href={"https://github.com/Rugsit/Lazy-vim-web-clone"}
            target="_blank"
          >
            <Image
              alt="image"
              src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
              className="w-[50px]"
            />
          </Link>
        </div>
        <div className="bg-white rounded-lg flex flex-col mb-8">
          <Image
            alt="image"
            src="/lazy.jpg"
            className="rounded-tr-lg rounded-tl-lg"
          />
          <div className="p-7 text-black">
            <p className="">
              <span className="font-bold">Description:</span> This project is
              designed to provide practice in utilizing modern frontend
              frameworks and styling layouts with contemporary tools such as
              Next.js and Tailwind CSS.
            </p>
            <ul className="list-disc list-inside">
              <li>
                This project is created for practicing web development and
                enhancing skills in Next.js, TailwindCSS, Neovim, TypeScript, as
                well as JavaScript and HTML.
              </li>
              <li>It supports responsive design.</li>
            </ul>
            <p className="font-bold text-2xl mb-6 mt-6">Tech Stack</p>
            <div className="flex gap-3 flex-wrap">
              <Image
                alt="image"
                src="https://Image.icons8.com/color/512/nextjs.png"
                className="w-[50px]"
              />
              <Image
                alt="image"
                src="https://seeklogo.com/images/T/tailwind-css-logo-5AD4175897-seeklogo.com.png"
                className="w-[50px]"
              />
            </div>
            <p className="font-bold text-2xl mb-6 mt-11">Application Image</p>
            <div className="flex flex-col gap-4">
              <Image alt="image" src="/lazy.jpg" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
