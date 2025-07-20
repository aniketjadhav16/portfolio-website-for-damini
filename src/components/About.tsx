"use client";
import Image from "next/image";

export default function About() {
  return (
    <div
      id="about"
      className="flex flex-col max-w-[1000px] bg-gray-200 rounded-xl mx-auto pb-10 mb-10 p-5"
    >
      <h1 className="mx-auto text-5xl font-bold m-10">About Me</h1>

      <div className="flex flex-col lg:flex-row justify-between mx-auto gap-10">
        <div className="flex-1 flex justify-center">
          <Image
            src="/about-section-image.png"
            alt="About section"
            width={240}
            height={240}
            className="object-cover overflow-hidden rounded-xl shadow-xl mb-4"
          />
        </div>
        <p className="flex-1 max-w-120 text-xl">
          To utilize my technical skills for achieving the target and developing
          the best performance in the organization. I would like to implement my
          innovative ideas. Skills and creativity for accomplishing the project.
          My aim is to keep learning new things, expand my knowledge and keep
          growing by facing new challenges.
        </p>
      </div>
    </div>
  );
}
