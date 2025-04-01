import Link from "next/link";

export default function Pawpocket() {
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
            href={"https://github.com/Rugsit/PawPocket"}
            target="_blank"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
              className="w-[50px]"
            />
          </Link>
        </div>
        <div className="bg-white rounded-lg flex flex-col mb-8">
          <img src="/Pawpocket.jpg" className="rounded-tr-lg rounded-tl-lg" />
          <div className="p-7 text-black">
            <p className="">
              <span className="font-bold">Description:</span> This is a mobile
              application project for pet owners, developed using the Flutter
              framework. It features pet data management, event recording for
              pets, and pet sharing within a community.
            </p>
            <ul className="list-disc list-inside">
              <li>
                A mobile application for pet owners with key features including
                pet data management, recording important pet activities, and an
                in-app community where users can share their pets.
              </li>
              <li>
                Developed primarily using the Flutter framework, with Firebase
                Firestore as the database, Firebase Authentication for
                authentication, and Supabase for storing images.
              </li>
              <li>
                A full-stack application covering everything from UI design to
                app deployment.
              </li>
            </ul>
            <p className="font-bold text-2xl mb-6 mt-6">Tech Stack</p>
            <div className="flex gap-3 flex-wrap">
              <img
                src="https://cdn.prod.website-files.com/6047a9e35e5dc54ac86ddd90/63018720eab248248ff88ee3_1bd86e15.png"
                className="h-[50px]"
              />
              <img
                src="https://brandeps.com/logo-download/F/Firebase-logo-02.png"
                className="h-[50px]"
              />
              <img
                src="https://elest.io/images/softwares/284/logo.png"
                className="h-[50px]"
              />
            </div>
            <p className="font-bold text-2xl mb-6 mt-11">Application Image</p>
            <div className="flex flex-col gap-4">
              <img src="/pawpocket/1.jpg" />
              <img src="/pawpocket/2.jpg" />
              <img src="/pawpocket/3.jpg" />
              <img src="/pawpocket/4.jpg" />
              <img src="/pawpocket/5.jpg" />
              <img src="/pawpocket/6.jpg" />
              <img src="/pawpocket/7.jpg" />
              <img src="/pawpocket/8.jpg" />
              <img src="/pawpocket/9.jpg" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
