"use client";

export default function Skills() {
  const skills = [
    {
      id: 1,
      title: "Programming Languages",
      items: "C, Java, SQL",
    },
    {
      id: 2,
      title: "Web Technogies",
      items: "HTML, CSS",
    },
    {
      id: 3,
      title: "Database",
      items: "Mysql",
    },
    {
      id: 4,
      title: "Networking",
      items: "TCP/IP, OSI Model",
    },
    {
      id: 5,
      title: "API",
      items: "RESTful API, postman",
    },
    {
      id: 6,
      title: "FrameWork",
      items: "Hibernate, Spring core, Springboot",
    },
  ];
  return (
    <div className="flex flex-col justify-center items-center m-10">
      <h1 className="mx-auto text-5xl font-bold m-10">Skills & Technologies</h1>
      {skills.map((skill) => (
        <div key={skill.id} className="flex text-xl text-center">
          <h1 className="font-semibold">
            {skill.title}: <span className="font-normal text-lg">{skill.items}</span>
          </h1>
        </div>
      ))}
    </div>
  );
}
