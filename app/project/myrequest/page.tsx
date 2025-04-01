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
          <p className="text-3xl ">MyRequestKU Project</p>
          <Link
            className="bg-white rounded-full p-2 hover:scale-95 transition-all"
            href={"https://github.com/Rugsit/MyRequestKU"}
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
            src="/myrequest/myrequest_1.jpg"
            className="rounded-tr-lg rounded-tl-lg"
          />
          <div className="p-7 text-black">
            <p className="">
              <span className="font-bold">Description:</span> The
              program`&apos;s primary objective is to facilitate users in
              managing requests efficiently. It enables users to submit requests
              and access request-related information easily and conveniently.
              The system covers all aspects of the request process, from
              creation to approval or rejection.
            </p>
            <p className="font-bold text-2xl mb-6 mt-6">Tech Stack</p>
            <div className="flex gap-3 flex-wrap">
              <Image
                alt="image"
                src="https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Java_programming_language_logo.svg/1200px-Java_programming_language_logo.svg.png"
                className="h-[50px]"
              />
              <Image
                alt="image"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png"
                className="h-[50px]"
              />
              <Image
                alt="image"
                src="https://upload.wikimedia.org/wikipedia/en/c/cc/JavaFX_Logo.png"
                className="h-[50px]"
              />
              <Image
                alt="image"
                src="https://i0.wp.com/gluonhq.com/wp-content/uploads/2015/02/SceneBuilderLogo.png?fit=781%2C781&ssl=1"
                className="h-[50px]"
              />
            </div>
            <p className="font-bold text-2xl mb-6 mt-11">Application Image</p>
            <div className="flex flex-col gap-4">
              <Image alt="image" src="/myrequest/myrequest_1.jpg" />
              <Image alt="image" src="/myrequest/myrequest_2.jpg" />
              <Image alt="image" src="/myrequest/myrequest_3.jpg" />
              <Image alt="image" src="/myrequest/myrequest_4.jpg" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
