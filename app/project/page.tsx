"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export type DataObject = {
  name: string;
  github: string;
  thumbnail: string;
  description: string;
  subDescription: string[];
  techStack: string[];
  appImagePath: string;
  appImage: number;
  typeProject: string;
};

export default function Project() {
  const dataList: DataObject[] = [
    {
      name: "Pawpocket Project",
      github: "https://github.com/Rugsit/PawPocket",
      thumbnail: "/Pawpocket.jpg",
      description:
        "This is a mobile application project for pet owners, developed using the Flutter framework. It features pet data management, event recording for pets, and pet sharing within a community.",
      subDescription: [
        "A mobile application for pet owners with key features including pet data management, recording important pet activities, and an in-app community where users can share their pets.",
        "Developed primarily using the Flutter framework, with Firebase Firestore as the database, Firebase Authentication for authentication, and Supabase for storing images.",
        "A full-stack application covering everything from UI design to app deployment.",
      ],
      techStack: ["flutter.png", "firebase.png", "supabase.png"],
      appImagePath: "/pawpocket",
      appImage: 9,
      typeProject: "Mobile Application",
    },
    {
      name: "CNC Recruit Project",
      github: "https://github.com/Rugsit/CNC_Recruit_Frontend",
      thumbnail: "/cnc/1.jpg",
      description:
        "This project was developed for recruiting members into the CNC lab. It facilitates the application process, registration for interviews, conducting interviews, and candidate selection.",
      subDescription: [
        "For the parts I worked on, this website was developed using the Next.js framework and Tailwind CSS for the frontend.",
        "It supports responsive design.",
      ],
      techStack: ["nextjs.png", "tailwind.png", "postgres.png"],
      appImagePath: "/cnc",
      appImage: 6,
      typeProject: "Website Application",
    },
    {
      name: "LazyVim Web Clone Project",
      github: "https://github.com/Rugsit/Lazy-vim-web-clone",
      thumbnail: "/lazy/1.jpg",
      description:
        "This project is designed to provide practice in utilizing modern frontend frameworks and styling layouts with contemporary tools such as Next.js and Tailwind CSS.",
      subDescription: [
        "This project is created for practicing web development and enhancing skills in Next.js, TailwindCSS, Neovim, TypeScript, as well as JavaScript and HTML.",
        "It supports responsive design.",
      ],
      techStack: ["nextjs.png", "tailwind.png"],
      appImagePath: "/lazy",
      appImage: 1,
      typeProject: "Website Application",
    },
    {
      name: "Customer Management Project",
      github: "https://github.com/Rugsit/Customer-Management-Project",
      thumbnail: "/customer/1.jpg",
      description:
        "This project is designed to simulate a customer management system with four main features: Create, Read, Update, and Delete (CRUD).",
      subDescription: [
        "This project is created for practicing web development and enhancing skills in React, TailwindCSS, Neovim, REST APIs, MySQL, Node.js, as well as JavaScript and HTML.This project is created for practicing web development and enhancing skills in React, TailwindCSS, Neovim, REST APIs, MySQL, Node.js, as well as JavaScript and HTML.",
        "It supports responsive design.",
      ],
      techStack: ["react.png", "tailwind.png", "nodejs.png", "mysql.png"],
      appImagePath: "/customer",
      appImage: 2,
      typeProject: "Website Application",
    },
    {
      name: "MyRequestKU Project",
      github: "https://github.com/Rugsit/MyRequestKU",
      thumbnail: "/myrequest/1.jpg",
      description:
        "The program's primary objective is to facilitate users in managing requests efficiently. It enables users to submit requests and access request-related information easily and conveniently. The system covers all aspects of the request process, from creation to approval or rejection.",
      subDescription: [""],
      techStack: ["java.png", "css.png", "javafx.png", "scenebuilder.png"],
      appImagePath: "/myrequest",
      appImage: 4,
      typeProject: "Desktop Application",
    },
    {
      name: "The Deep Project",
      github: "https://github.com/Rugsit/The_Deep_Project",
      thumbnail: "/deep/3.jpg",
      description:
        " About TheDeepGame is an educational word-guessing game designed to help students learn English vocabulary while having fun. Players must fill in the correct words to earn points and extend their playtime. However, incorrect answers will result in losing both time and points.",
      subDescription: [
        "Frontend: Nuxt.js, Vue.js, Tailwind CSS",
        "Backend: Node.js, Express.js",
        "Database: MongoDB",
      ],
      techStack: ["vue.png", "tailwind.png", "nodejs.png", "mongo.png"],
      appImagePath: "/deep",
      appImage: 4,
      typeProject: "Website Application",
    },
  ];
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
          {dataList.map((item, index) => {
            return (
              <Link
                href={{
                  pathname: "/project/eachProject",
                  query: item,
                }}
                key={index}
              >
                <div className="max-w-[400px] w-full bg-white rounded-lg cursor-pointer hover:scale-95 transition-transform">
                  <Image
                    width={1000}
                    height={1000}
                    alt="Project image"
                    src={item.thumbnail}
                    className="rounded-tr-lg rounded-tl-lg w-full h-[250px] object-cover"
                  />
                  <div className="p-3">
                    <div className="flex justify-between items-center flex-wrap gap-2">
                      <p className="text-black">{item.name}</p>
                      <div className="flex gap-2">
                        {item.techStack.map((techStackItem, techStackIndex) => {
                          if (techStackIndex == 3) return;
                          return (
                            <img
                              key={techStackIndex}
                              src={`/logo_tech/${techStackItem}`}
                              alt="Logo image"
                              className="h-[25px]"
                            />
                          );
                        })}
                      </div>
                    </div>
                    <p
                      className={`py-2 px-4 ${
                        item.typeProject == "Website Application"
                          ? "bg-indigo-400"
                          : item.typeProject == "Desktop Application"
                          ? "bg-purple-400"
                          : "bg-blue-400"
                      } rounded-lg w-fit text-[12px] mt-2`}
                    >
                      {item.typeProject}
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}
