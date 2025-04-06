import Link from "next/link";
import { DataObject } from "../page";
import AppImage from "@/app/component/AppImage";

export default async function EachProject({
  searchParams,
}: {
  searchParams: Promise<DataObject>;
}) {
  const {
    link,
    name,
    github,
    thumbnail,
    description,
    subDescription,
    techStack,
    appImage,
    appImagePath,
  } = await searchParams;
  return (
    <>
      <div className="w-full max-w-[700px] mx-auto p-6">
        <Link href={"/project"}>
          <p className="underline cursor-pointer mb-6"> back to projects</p>
        </Link>
        <div className="flex items-center mb-9 gap-8">
          <p className="text-3xl ">{name}</p>
          <Link
            className="bg-white rounded-full p-2 hover:scale-95 transition-all"
            href={github}
            target="_blank"
          >
            <img alt="image" src="/logo_tech/github.png" className="w-[51px]" />
          </Link>
        </div>
        <div className="bg-white rounded-lg flex flex-col mb-8">
          <img
            alt="image"
            src={thumbnail}
            className="rounded-tr-lg rounded-tl-lg"
          />
          <div className="p-7 text-black">
            <p className="leading-7">
              <span className="font-bold">Description:</span> {description}{" "}
            </p>
            <ul className="list-disc list-inside leading-7">
              {subDescription
                ? subDescription.map((item, index) => {
                    return <li key={index}>{item}</li>;
                  })
                : null}
            </ul>
            <p className="font-bold text-2xl mb-6 mt-6">Tech Stack</p>
            <div className="flex gap-2 flex-wrap">
              {techStack.map((item, index) => {
                return (
                  <img
                    key={index}
                    alt="img"
                    src={`/logo_tech/${item}`}
                    className="h-[50px]"
                  />
                );
              })}
            </div>
            {link != "none" ? (
              <div>
                <p className="font-bold text-2xl mb-2 mt-11">
                  Demo Application
                </p>
                <Link
                  href={link}
                  className=" underline text-blue-400 text-[18px]"
                  target="_blank"
                >
                  Click here
                </Link>
              </div>
            ) : (
              ""
            )}
            <p className="font-bold text-2xl mb-6 mt-11">Application Image</p>
            <AppImage appImage={appImage} appImagePath={appImagePath} />
          </div>
        </div>
      </div>
    </>
  );
}
