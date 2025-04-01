import Link from "next/link";

export default function CNC() {
  return (
    <>
      <div className="w-full max-w-[700px] mx-auto p-6">
        <Link href={"/project"}>
          <p className="underline cursor-pointer mb-6"> back to projects</p>
        </Link>
        <div className="flex items-center mb-9 gap-8">
          <p className="text-3xl ">The Deep Project</p>
          <Link
            className="bg-white rounded-full p-2 hover:scale-95 transition-all"
            href={"https://github.com/Rugsit/The_Deep_Project"}
            target="_blank"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
              className="w-[50px]"
            />
          </Link>
        </div>
        <div className="bg-white rounded-lg flex flex-col mb-8">
          <img src="/deep/deep_3.jpg" className="rounded-tr-lg rounded-tl-lg" />
          <div className="p-7 text-black">
            <p className="">
              <span className="font-bold">Description:</span> About TheDeepGame
              is an educational word-guessing game designed to help students
              learn English vocabulary while having fun. Players must fill in
              the correct words to earn points and extend their playtime.
              However, incorrect answers will result in losing both time and
              points.
            </p>
            <ul className="list-disc list-inside">
              <li>Frontend: Nuxt.js, Vue.js, Tailwind CSS</li>
              <li>Backend: Node.js, Express.js</li>
              <li>Database: MongoDB</li>
            </ul>
            <p className="font-bold text-2xl mb-6 mt-6">Tech Stack</p>
            <div className="flex gap-2 flex-wrap">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1184px-Vue.js_Logo_2.svg.png"
                className="h-[50px]"
              />
              <img
                src="https://seeklogo.com/images/T/tailwind-css-logo-5AD4175897-seeklogo.com.png"
                className="h-[50px]"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png"
                className="h-[50px]"
              />
              <img
                src="https://www.helenjoscott.com/wp-content/uploads/2022/01/mongodb_standard.png"
                className="h-[50px]"
              />
            </div>
            <p className="font-bold text-2xl mb-6 mt-11">Application Image</p>
            <div className="flex flex-col gap-4">
              <img src="/deep/deep_1.jpg" />
              <img src="/deep/deep_2.jpg" />
              <img src="/deep/deep_3.jpg" />
              <img src="/deep/deep_4.jpg" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
