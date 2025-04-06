"use client";

import { useState } from "react";

export default function AppImage({
  appImage,
  appImagePath,
}: {
  appImage: number;
  appImagePath: string;
}) {
  const [isImagePopupOpen, setIsImagePopupOpen] = useState({
    status: false,
    url: "none",
  });
  return (
    <div className="flex flex-col gap-4">
      {Array.from({ length: appImage }, (_, index) => {
        return (
          <div key={index}>
            <button
              onClick={() => {
                setIsImagePopupOpen({
                  status: !isImagePopupOpen.status,
                  url: `${appImagePath}/${index + 1}.jpg`,
                });
              }}
            >
              <img
                alt="img"
                src={`${appImagePath}/${index + 1}.jpg`}
                className="transition-all rounded-lg cursor-pointer hover:scale-95"
              />
            </button>
          </div>
        );
      })}
      <button
        onClick={() => {
          console.log("test");
          setIsImagePopupOpen({
            status: !isImagePopupOpen.status,
            url: isImagePopupOpen.url,
          });
        }}
        className={
          " transition-all backdrop-blur-md fixed top-0 bottom-0 left-0 right-0 flex justify-center items-center " +
          (!isImagePopupOpen.status
            ? " opacity-0 pointer-events-none scale-90"
            : "")
        }
      >
        <img
          src={isImagePopupOpen.url}
          className="w-[80%] rounded-lg pointer-events-none "
        />
      </button>
    </div>
  );
}
