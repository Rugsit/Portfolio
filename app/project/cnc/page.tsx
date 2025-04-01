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
          <p className="text-3xl ">Pawpocket Project</p>
          <Link
            className="bg-white rounded-full p-2 hover:scale-95 transition-all"
            href={"https://github.com/Rugsit/CNC_Recruit_Frontend"}
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
            src="/cnc/cnc_4.jpg"
            className="rounded-tr-lg rounded-tl-lg"
          />
          <div className="p-7 text-black">
            <p className="">
              <span className="font-bold">Description:</span> This project was
              developed for recruiting members into the CNC lab. It facilitates
              the application process, registration for interviews, conducting
              interviews, and candidate selection.
            </p>
            <ul className="list-disc list-inside">
              <li>
                For the parts I worked on, this website was developed using the
                Next.js framework and Tailwind CSS for the frontend.
              </li>
              <li>It supports responsive design.</li>
            </ul>
            <p className="font-bold text-2xl mb-6 mt-6">Tech Stack</p>
            <div className="flex gap-3 flex-wrap">
              <Image
                alt="image"
                src="https://img.icons8.com/color/512/nextjs.png"
                className="w-[50px]"
              />
              <Image
                alt="image"
                src="https://seeklogo.com/images/T/tailwind-css-logo-5AD4175897-seeklogo.com.png"
                className="w-[50px]"
              />
              <Image
                alt="image"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/640px-Postgresql_elephant.svg.png"
                className="w-[50px]"
              />
            </div>
            <p className="font-bold text-2xl mb-6 mt-11">Application Image</p>
            <div className="flex flex-col gap-4">
              <Image alt="image" src="/cnc/cnc_4.jpg" />
              <Image alt="image" src="/cnc/cnc_5.jpg" />
              <Image alt="image" src="/cnc/cnc_6.jpg" />
              <Image alt="image" src="/cnc/cnc_1.jpg" />
              <Image alt="image" src="/cnc/cnc_2.jpg" />
              <Image alt="image" src="/cnc/cnc_3.jpg" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
