"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Hero() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center gap-12 max-w-[1000px] mx-auto">
      <div className="flex flex-col items-center gap-8">
        <h1 className="text-5xl font-bold text-center">
          Hi, I&apos;m <span className="text-violet-600">Damini Pawar</span>
        </h1>
        <p className="text-2xl font-medium text-center">
          Full-Stack Developer passionate about building scalable,
          high-performance web applications and seamless user experiences.
        </p>
      </div>

      <div className="flex gap-6 text-lg">
        <button
          className="border-2 border-gray-500 bg-black text-white rounded-lg cursor-pointer p-2"
          onClick={() => {
            const projectsSection = document.getElementById("projects");
            if (projectsSection) {
              projectsSection.scrollIntoView({ behavior: "smooth" });
            }
          }}
        >
          View My Work
        </button>
        <button
          className="border-2 border-gray-500 rounded-lg cursor-pointer p-2"
          onClick={() =>
            window.open(
              "https://drive.google.com/file/d/12JkkHW9MQMTONLsnO_XU6JcbG65tXKuO/view?usp=drivesdk",
              "_blank"
            )
          }
        >
          Download Resume
        </button>
      </div>

      <div className="flex gap-6">
        <a
          href="https://github.com/daminipawar28"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
        <a
          href="https://www.linkedin.com/in/damini-pawar-3120aa2b7"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
        <a href="mailto:daminipawar2805@gmail.com">
          <FontAwesomeIcon icon={faEnvelope} size="2x" />
        </a>
      </div>

      <button
        className="animate-bounce text-3xl bg-transparent border-none cursor-pointer"
        aria-label="Scroll Down"
        onClick={() => {
          const aboutSection = document.getElementById("about");
          if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: "smooth" });
          }
        }}
      >
        ↓
      </button>
    </div>
  );
}
