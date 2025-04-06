"use client";
import Link from "next/link";
import { Menu } from "./Icon";
import { useState } from "react";

export default function NavBar() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  return (
    <>
      <div className="flex justify-between p-5 items-center w-full gap-4 relative">
        <Link href={"/"}>
          <p className="font-bold cursor-pointer text-[18px] hover:text-gray-400 transition-colors">
            Rugsit Rungrattanachai
          </p>
        </Link>
        <div className="justify-center items-center flex-wrap gap-5 hidden sm:flex">
          <Link href={"/project"}>
            <button className="cursor-pointer font-bold hover:underline active:opacity-80">
              Projects
            </button>
          </Link>
          <Link href={"/resume.pdf"} target="_blank">
            <button className=" transition-transform font-bold px-8 py-2 bg-blue-400 rounded-lg cursor-pointer hover:scale-90 active:opacity-80">
              Resume
            </button>
          </Link>
        </div>
        <button
          className="block sm:hidden cursor-pointer"
          onClick={() => {
            setIsNavbarOpen(!isNavbarOpen);
          }}
        >
          <Menu width={20} height={20} fill="#ffffff" className="" />
        </button>
        <div
          className={
            `transition-all absolute backdrop-blur-md left-[20px] right-[20px] -bottom-11 flex justify-center items-center gap-6 bg-white/35 rounded-lg py-2 sm:hidden` +
            (!isNavbarOpen ? " opacity-0 pointer-events-none scale-90" : "")
          }
        >
          <Link href={"/project"}>
            <button className="cursor-pointer font-bold hover:underline active:opacity-80">
              Projects
            </button>
          </Link>
          <Link href={"/resume.pdf"} target="_blank">
            <button className=" transition-transform font-bold px-8 py-2 bg-blue-400 rounded-lg cursor-pointer hover:scale-90 active:opacity-80">
              Resume
            </button>
          </Link>
          <button
            onClick={() => {
              document.body.classList.toggle("dark");
            }}
          >
            test
          </button>
        </div>
      </div>
    </>
  );
}
