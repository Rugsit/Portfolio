"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Call, Mail } from "./component/Icon";

export default function Home() {
  const [isFirstShowHome, setIsFirstShowHome] = useState(false);

  useEffect(() => {
    setIsFirstShowHome(true);
  }, []);
  return (
    <>
      <div
        className={`w-full flex justify-center items-center flex-col max-w-[600px] mx-auto flex-1  `}
      >
        <div
          className={`transition-all duration-1000 flex justify-center items-center flex-col mx-11 my-20 ${
            !isFirstShowHome ? "opacity-0 translate-y-16" : ""
          }`}
        >
          <Image
            width={300}
            height={300}
            alt="Profile image"
            src="/profile.jpg"
            className="object-cover rounded-full mb-10 bg-blue-500 p-2 hover:scale-110 transition-transform"
          />
          <p className="text-3xl font-bold mb-6">
            <span className="text-blue-400">Hi</span>, I&apos;m Rugsit
            Rungrattanachai 👋 A
            <span className="text-blue-400"> Computer Science</span> student
          </p>
          <p className="text-[16px] leading-7">
            A passionate Software Developer with a keen interest in web and
            application development, as well as everything related to software.
            Currently, I&apos;m pursuing my studies in Computer Science at
            Kasetsart University, Bangkhen Campus.
          </p>
          <div className="flex gap-4 items-center mt-4 text-[16px] flex-wrap justify-center">
            <div className="flex items-center dark:bg-white/45 rounded-lg px-5 py-2 gap-2 bg-blue-400">
              <Call width={20} height={20} fill="#ffffff" />
              <p className="text-white ">081-916-9452</p>
            </div>
            <div className="flex items-center dark:bg-white/45 rounded-lg px-5 py-2 gap-2 bg-blue-400">
              <Mail width={20} height={20} fill="#ffffff" />
              <p className="text-white">rugsit.nest@gmail.com</p>
            </div>
            <div className="flex gap-3">
              <Link
                href={
                  "https://linkedin.com/in/rugsit-rungrattanachai-a2b549325"
                }
                target="_blank"
              >
                <Image
                  width={40}
                  height={40}
                  alt="Linkin logo"
                  src="/logo_tech/linkin.png"
                  className="rounded-lg"
                />
              </Link>
              <Link
                className="bg-white p-1 rounded-lg w-[40px] h-[40px]"
                href={"https://github.com/Rugsit"}
                target="_blank"
              >
                <Image
                  width={30}
                  height={30}
                  alt="Github icon image"
                  src="/logo_tech/github.png"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
