"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [isFirstShowHome, setIsFirstShowHome] = useState(false);

  useEffect(() => {
    setIsFirstShowHome(true);
  }, []);
  return (
    <>
      <div
        className={`w-full flex justify-center items-center flex-col max-w-[600px] mx-auto flex-1 `}
      >
        <div
          className={`transition-all duration-1000 flex justify-center items-center flex-col mx-11 ${
            !isFirstShowHome ? "opacity-0 translate-y-16" : ""
          }`}
        >
          <Image
            width={300}
            height={300}
            alt="Profile image"
            src="/profile.jpg"
            className="object-cover rounded-full mb-10 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-2 hover:scale-110 transition-transform"
          />
          <p className="text-3xl font-bold mb-6">
            Hi, I&apos;m Rugsit Rungrattanachai 👋
          </p>
          <p className="text-[16px]">
            A passionate Software Developer with a keen interest in web and
            application development, as well as everything related to software.
            Currently, I&apos;m pursuing my studies in Computer Science at
            Kasetsart University, Bangkhen Campus.
          </p>
          <div className="flex gap-3 items-center mt-4 text-[16px] flex-wrap justify-center">
            <p>081-916-9452</p>
            <p>rugsit.nest@gmail.com</p>
            <div className="flex gap-3">
              <Link
                href={
                  "https://linkedin.com/in/rugsit-rungrattanachai-a2b549325"
                }
                target="_blank"
              >
                <Image
                  width={30}
                  height={30}
                  alt="Linkin logo"
                  src="/logo_tech/linkin.png"
                  className="rounded-lg"
                />
              </Link>
              <Link
                className="bg-white p-1 rounded-lg w-[30px] h-[30px]"
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
