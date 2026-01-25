import React, { useState } from 'react'
import Fcon from '../assets/Frame 1.png'
import Scon from "../assets/Span 1.png"

const Projects = () => {
  const [filter, setFilter] = useState("All")

  const projects = [
    {
      type: "Hardware",
      status: "Ongoing",
      title: "Autonomous Drone Swarm",
      desc: "A coordinated network of micro-drones capable of formation flight and environmental mapping.",
      tags: ["Robotics", "IoT", "C++"]
    },
    {
      type: "Software",
      status: "Ongoing",
      title: "Campus AI Assistant",
      desc: "Natural language processing model trained on university data to help students find resources.",
      tags: ["AI/ML", "Python", "React"]
    },
    {
      type: "Hardware",
      status: "Completed",
      title: "Smart Energy Monitor",
      desc: "IoT device for real-time energy consumption tracking and anomaly detection in lab equipment.",
      tags: ["IoT", "Embedded", "Data Viz"]
    },
    {
      type: "Software",
      status: "Completed",
      title: "Lab Inventory System",
      desc: "Full-stack web application for tracking equipment checkout and maintenance schedules.",
      tags: ["React", "Node.js", "PostgreSQL"]
    },
    {
      type: "Hardware",
      status: "Ongoing",
      title: "Biometric Access Control",
      desc: "Fingerprint and facial recognition system for secure lab entry logs.",
      tags: ["Embedded", "Security", "C"]
    },
    {
      type: "Software",
      status: "Ongoing",
      title: "Data Visualization Dashboard",
      desc: "Real-time visualization platform for sensor data collected from various IoT projects.",
      tags: ["D3.js", "TypeScript", "WebSocket"]
    }
  ]

  const filteredProjects = projects.filter(project =>
    filter === "All" ? true : project.type === filter
  )

  return (
    <div className="bg-gradient-to-br from-[#051F20] to-[#163832] min-h-screen text-[#DAF1DE]">
      <div className="max-w-screen-xl mx-auto px-6 md:px-10 pt-20">

        {/* Header */}
        <div>
          <h1 className="text-4xl font-bold mb-4">Our Projects</h1>
          <p className="text-lg md:text-xl">
            Our projects are driven by curiosity, collaboration, and the desire to solve real-world problems.
          </p>
        </div>

        {/* Filters */}
        <div className="flex items-center gap-4 pt-6 flex-wrap">
          <p>Filter:</p>

          {["All", "Hardware", "Software"].map(btn => (
            <button
              key={btn}
              onClick={() => setFilter(btn)}
              className={`px-3 py-1 md:px-5 md:py-2 text-sm md:text-base rounded-full border-2 transition ${
                filter === btn
                  ? "bg-[#DAF1DE] text-[#163832]"
                  : "border-[#DAF1DE] text-[#DAF1DE]"
              }`}
            >
              {btn}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-16 pb-24">

          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="bg-[#DAF1DE] p-6 rounded-lg text-[#163832]"
            >
              {/* Type & Status */}
              <div className="flex justify-between text-sm">
                <h6 className="flex gap-1 items-center border border-[#163832] px-2 py-1 rounded font-semibold">
                  <img src={Fcon} alt="Project type icon" className="w-4 h-4" />
                  {project.type}
                </h6>

                <h6 className="flex gap-1 items-center border border-[#163832] px-2 py-1 rounded font-semibold">
                  {project.status === "Ongoing" && (
                    <img src={Scon} alt="Project status icon" className="w-[0.5vw] h-[0.5vw]" />
                  )}
                  {project.status}
                </h6>
              </div>

              {/* Title & Description */}
              <div className="pt-4">
                <h3 className="font-bold text-lg md:text-xl">
                  {project.title}
                </h3>
                <p className="text-sm md:text-base pt-3">
                  {project.desc}
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-3 pt-6 text-sm text-[#DAF1DE]">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-[#163832] px-2 py-1 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  )
}

export default Projects
