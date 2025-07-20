"use client";

export default function Education() {
  const education = [
    {
      id: 1,
      qualification: "Diploma",
      fieldOfStudy: "Computer Engineering",
      collegeName: "RASHIKLAL. M. DHARIWAL INSTITUTE OF TECHNOLOGY, PUNE",
      yearOfCompletion: 2021,
    },
    {
      id: 2,
      qualification: "BTech",
      fieldOfStudy: "Computer Engineering",
      collegeName: "D Y Patil University, PUNE",
      yearOfCompletion: 2024,
    },
  ];

  return (
    <div className="flex flex-col max-w-[1000px] mx-auto pb-10">
      <h1 className="mx-auto text-5xl font-bold m-10">Education</h1>
      <div className="flex flex-col gap-4 px-8">
        {education.map((edu) => (
          <div key={edu.id} className="text-xl text-gray-700">
            <span className="font-semibold">
              {edu.qualification}
            </span>{" "}
            in {edu.fieldOfStudy} | {edu.collegeName} |{" "}
            <span className="text-gray-500">{edu.yearOfCompletion}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
