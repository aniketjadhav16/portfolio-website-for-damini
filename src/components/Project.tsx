"use client"

export default function Project() {
  const projects = [
    {
      id: 1,
      title: "Home Automation Application",
      description:
        "Developed a Java-based application to manage appliances and electrical devices in multiple rooms. Implemented remote control functionality, device status tracking, and power usage monitoring. Utilized JDBC to connect with MySQL for storing device data.",
    },
    {
      id: 2,
      title: "Real Estate Platform",
      description:
        "Developed and maintained backend services for a real estate platform with a unique broker management module. Implemented APIs for property management, subscription services, and user authentication. Optimized database queries and schema for performance and scalability.",
    },
  ]

  return (
    <div id="projects" className="max-w-[1000px] mx-auto p-6 space-y-8 mb-10 bg-gray-200 rounded-xl">
      <div className="text-center m-10">
        <h1 className="text-5xl font-bold mb-2 pb-8">Projects</h1>
      </div>
      <div className="space-y-6 pb-10">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white rounded-lg shadow-md border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-300"
          >
            <h2 className="text-2xl font-semibold mb-3">{project.title}</h2>
            <p className="text-gray-600 leading-relaxed text-lg">{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
