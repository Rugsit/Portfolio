"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Project() {
  const [isFirstShowHome, setIsFirstShowHome] = useState(false);
  useEffect(() => {
    setIsFirstShowHome(true);
  });
  return (
    <>
      <div
        className={`transition-all duration-1000 w-full ${
          !isFirstShowHome ? "opacity-0 translate-y-16" : ""
        }`}
      >
        <p className="text-3xl md:text-4xl lg:text-5xl text-center my-5">
          Projects 👻
        </p>
        <div className="flex flex-wrap px-14 py-7 justify-center gap-3">
          <Link href={"/project/pawpocket"}>
            <div className="max-w-[400px] w-full bg-white rounded-lg cursor-pointer hover:scale-95 transition-transform">
              <img
                src="/Pawpocket.jpg"
                className="rounded-tr-lg rounded-tl-lg w-full h-[250px] object-cover"
              />
              <div className="p-3">
                <div className="flex justify-between items-center flex-wrap gap-2">
                  <p className="text-black">Pawpocker Project</p>
                  <div className="flex gap-1">
                    <img
                      src="https://cdn.prod.website-files.com/6047a9e35e5dc54ac86ddd90/63018720eab248248ff88ee3_1bd86e15.png"
                      className="h-[30px] "
                    />
                    <img
                      src="https://brandeps.com/logo-download/F/Firebase-logo-02.png"
                      className="h-[30px]"
                    />
                    <img
                      src="https://elest.io/images/softwares/284/logo.png"
                      className="h-[30px] "
                    />
                  </div>
                </div>
                <p className="py-2 px-4 bg-blue-400 rounded-lg w-fit text-[12px] mt-2">
                  Mobile Application
                </p>
              </div>
            </div>
          </Link>

          <Link href={"/project/cnc"}>
            <div className="max-w-[400px] w-full bg-white rounded-lg cursor-pointer hover:scale-95 transition-transform">
              <img
                src="/cnc/cnc_4.jpg"
                className="rounded-tr-lg rounded-tl-lg w-full h-[250px] object-cover"
              />
              <div className="p-3">
                <div className="flex justify-between items-center flex-wrap gap-2">
                  <p className="text-black">CNC Recruit</p>
                  <div className="flex gap-1">
                    <img
                      src="https://img.icons8.com/color/512/nextjs.png"
                      className="w-[30px]"
                    />
                    <img
                      src="https://seeklogo.com/images/T/tailwind-css-logo-5AD4175897-seeklogo.com.png"
                      className="w-[30px]"
                    />
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/640px-Postgresql_elephant.svg.png"
                      className="w-[30px]"
                    />
                  </div>
                </div>
                <p className="py-2 px-4 bg-indigo-400 rounded-lg w-fit text-[12px] mt-2">
                  Website Application
                </p>
              </div>
            </div>
          </Link>

          <Link href={"/project/lazyvimclone"}>
            <div className="max-w-[400px] w-full bg-white rounded-lg cursor-pointer hover:scale-95 transition-transform">
              <img
                src="/lazy.jpg"
                className="rounded-tr-lg rounded-tl-lg w-full h-[250px] object-cover"
              />
              <div className="p-3">
                <div className="flex justify-between items-center flex-wrap gap-2">
                  <p className="text-black">LazyVim Web Clone Project</p>
                  <div className="flex gap-1">
                    <img
                      src="https://img.icons8.com/color/512/nextjs.png"
                      className="w-[30px]"
                    />
                    <img
                      src="https://seeklogo.com/images/T/tailwind-css-logo-5AD4175897-seeklogo.com.png"
                      className="w-[30px]"
                    />
                  </div>
                </div>
                <p className="py-2 px-4 bg-indigo-400 rounded-lg w-fit text-[12px] mt-2">
                  Website Application
                </p>
              </div>
            </div>
          </Link>

          <Link href={"/project/customer"}>
            <div className="max-w-[400px] w-full bg-white rounded-lg cursor-pointer hover:scale-95 transition-transform">
              <img
                src="/customer/customer_1.jpg"
                className="rounded-tr-lg rounded-tl-lg w-full h-[250px] object-cover"
              />
              <div className="p-3">
                <div className="flex justify-between items-center flex-wrap gap-2">
                  <p className="text-black">Customer Management Project</p>
                  <div className="flex gap-1">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1150px-React-icon.svg.png"
                      className="h-[30px]"
                    />
                    <img
                      src="https://seeklogo.com/images/T/tailwind-css-logo-5AD4175897-seeklogo.com.png"
                      className="h-[30px]"
                    />
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1280px-Node.js_logo.svg.png"
                      className="h-[30px]"
                    />
                  </div>
                </div>
                <p className="py-2 px-4 bg-indigo-400 rounded-lg w-fit text-[12px] mt-2">
                  Website Application
                </p>
              </div>
            </div>
          </Link>

          <Link href={"/project/myrequest"}>
            <div className="max-w-[400px] w-full bg-white rounded-lg cursor-pointer hover:scale-95 transition-transform">
              <img
                src="/myrequest/myrequest_1.jpg"
                className="rounded-tr-lg rounded-tl-lg w-full h-[250px] object-cover"
              />
              <div className="p-3">
                <div className="flex justify-between items-center flex-wrap gap-2">
                  <p className="text-black">MyRequestKU</p>
                  <div className="flex gap-3">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Java_programming_language_logo.svg/1200px-Java_programming_language_logo.svg.png"
                      className="h-[30px]"
                    />
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png"
                      className="h-[30px]"
                    />
                    <img
                      src="https://upload.wikimedia.org/wikipedia/en/c/cc/JavaFX_Logo.png"
                      className="h-[30px]"
                    />
                  </div>
                </div>
                <p className="py-2 px-4 bg-orange-400 rounded-lg w-fit text-[12px] mt-2">
                  Desktop Application
                </p>
              </div>
            </div>
          </Link>

          <Link href={"/project/deep"}>
            <div className="max-w-[400px] w-full bg-white rounded-lg cursor-pointer hover:scale-95 transition-transform">
              <img
                src="/deep/deep_3.jpg"
                className="rounded-tr-lg rounded-tl-lg w-full h-[250px] object-cover"
              />
              <div className="p-3">
                <div className="flex justify-between items-center flex-wrap gap-2">
                  <p className="text-black">The Deep Project</p>
                  <div className="flex gap-1">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1184px-Vue.js_Logo_2.svg.png"
                      className="h-[30px]"
                    />
                    <img
                      src="https://seeklogo.com/images/T/tailwind-css-logo-5AD4175897-seeklogo.com.png"
                      className="h-[30px]"
                    />
                    <img
                      src="https://www.helenjoscott.com/wp-content/uploads/2022/01/mongodb_standard.png"
                      className="h-[30px]"
                    />
                  </div>
                </div>
                <p className="py-2 px-4 bg-indigo-400 rounded-lg w-fit text-[12px] mt-2">
                  Website Application
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
