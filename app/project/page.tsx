"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export type DataObject = {
  link: string;
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
      link: "none",
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
      techStack: ["nuxtjs.png", "tailwind.png", "nodejs.png", "mongo.png"],
      appImagePath: "/deep",
      appImage: 4,
      typeProject: "Website Application",
    },
    {
      link: "none",
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
      link: "none",
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
      link: "https://lazy-vim-web-clone.vercel.app/",
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
      link: "https://customer-management-project.vercel.app/",
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
      link: "none",
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
      link: "https://discord-clone-app-slgy.onrender.com",
      name: "Discord Clone App",
      github: "https://github.com/Rugsit/Discord-Clone-App",
      thumbnail: "/discord/1.jpg",
      description:
        "This project was created to practice using the React library. Available pages: Main page, Download page, and Discover page. It features a fully responsive web design and utilizes React Router DOM.",
      subDescription: [""],
      techStack: ["react.png", "tailwind.png"],
      appImagePath: "/discord",
      appImage: 6,
      typeProject: "Website Application",
    },
    {
      link: "https://dashboard-v2-green.vercel.app/",
      name: "Dashboard V2 Project",
      github: "https://github.com/Rugsit/Dashboard-V2",
      thumbnail: "/dashboard_v2/1.jpg",
      description:
        "This website simulates the display of a dashboard system and was developed to practice using Rechart, a powerful charting library for React. The primary goal is to create and visualize various types of charts and graphs within a web application. Rechart is a lightweight, open-source library that makes it easy to integrate interactive and aesthetically pleasing charts into React-based applications. Its design emphasizes simplicity and responsiveness, allowing developers to quickly build beautiful, data-driven visualizations with minimal effort. The dashboard simulation includes various types of charts, such as pie charts, line graphs, and bar charts, to display data in an engaging and user-friendly way.",
      subDescription: ["It supports responsive design."],
      techStack: ["nextjs.png", "tailwind.png", "recharts.png"],
      appImagePath: "/dashboard_v2",
      appImage: 1,
      typeProject: "Website Application",
    },
    {
      link: "https://dashboard-project-woad.vercel.app/",
      name: "Dashboard V1 Project",
      github: "https://github.com/Rugsit/Dashboard-Project",
      thumbnail: "/dashboard_v1/1.jpg",
      description:
        "This is a website that simulates the display of a Dashboard, developed to practice using Rechart or creating charts within a web application. It utilizes the Rechart library, which is a small and visually appealing library for React.",
      subDescription: ["It supports responsive design."],
      techStack: ["nextjs.png", "tailwind.png", "recharts.png"],
      appImagePath: "/dashboard_v1",
      appImage: 1,
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
        <p className="text-3xl md:text-4xl lg:text-5xl text-center mt-16 mb-6 font-bold">
          Projects 👻
        </p>
        <div className="flex flex-wrap px-14 py-7 justify-center gap-3">
          {dataList.map((item: DataObject, index) => {
            return (
              <Link
                href={{
                  pathname: "/project/eachProject",
                  query: item,
                }}
                key={index}
              >
                <div className="max-w-[400px] w-full dark:bg-white  bg-gray-50 rounded-lg cursor-pointer hover:scale-95 transition-transform">
                  <Image
                    width={1000}
                    height={1000}
                    alt="Project image"
                    src={item.thumbnail}
                    className="rounded-tr-lg rounded-tl-lg w-full h-[250px] object-cover"
                  />
                  <div className="p-3 flex flex-col gap-2">
                    <div className="flex justify-between items-center flex-wrap gap-2">
                      <p className="text-black">{item.name}</p>
                    </div>
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
                    <p
                      className={`py-2 px-4 ${
                        item.typeProject == "Website Application"
                          ? "bg-indigo-400"
                          : item.typeProject == "Desktop Application"
                          ? "bg-purple-400"
                          : "bg-blue-400"
                      } rounded-lg w-fit text-[12px] text-white mt-2`}
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
