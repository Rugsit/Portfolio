import Link from "next/link";

export default function NavBar() {
  return (
    <>
      <div className="flex justify-between p-5 items-center w-full gap-4">
        <Link href={"/"}>
          <p className="font-bold cursor-pointer text-[18px]">
            Rugsit Rungrattanachai
          </p>
        </Link>
        <div className="flex justify-center items-center flex-wrap gap-5">
          <Link href={"/project"}>
            <button className="cursor-pointer font-bold hover:underline active:opacity-80">
              Projects
            </button>
          </Link>
          <Link href={"cv.pdf"} target="_blank">
            <button className=" transition-transform font-bold px-8 py-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg cursor-pointer hover:scale-90 active:opacity-80">
              Resume
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
