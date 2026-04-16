import React, { useState } from 'react'
import Fcon from '../assets/Frame 1.png'
import Scon from "../assets/Span 1.png"
import { motion, AnimatePresence } from 'framer-motion'

const Projects = () => {
  const [filter, setFilter] = useState("All")

  const projects = [
    {
      id: 1,
      type: "Hardware",
      status: "Ongoing",
      title: "Autonomous Drone Swarm",
      desc: "A coordinated network of micro-drones capable of formation flight and environmental mapping.",
      tags: ["Robotics", "IoT", "C++"]
    },
    {
      id: 2,
      type: "Software",
      status: "Ongoing",
      title: "Campus AI Assistant",
      desc: "Natural language processing model trained on university data to help students find resources.",
      tags: ["AI/ML", "Python", "React"]
    },
    {
      id: 3,
      type: "Hardware",
      status: "Completed",
      title: "Smart Energy Monitor",
      desc: "IoT device for real-time energy consumption tracking and anomaly detection in lab equipment.",
      tags: ["IoT", "Embedded", "Data Viz"]
    },
    {
      id: 4,
      type: "Software",
      status: "Completed",
      title: "Lab Inventory System",
      desc: "Full-stack web application for tracking equipment checkout and maintenance schedules.",
      tags: ["React", "Node.js", "PostgreSQL"]
    },
    {
      id: 5,
      type: "Hardware",
      status: "Ongoing",
      title: "Biometric Access Control",
      desc: "Fingerprint and facial recognition system for secure lab entry logs.",
      tags: ["Embedded", "Security", "C"]
    },
    {
      id: 6,
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
    <div className="bg-gradient-to-br from-[#051F20] to-[#163832] min-h-screen text-[#DAF1DE] overflow-x-hidden pt-24 pb-20">
      <div className="max-w-screen-xl mx-auto px-6 md:px-10">

        {/* Header Section */}
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
            Our <span className="text-[#8EB69B]">Projects</span>
          </h1>
          <p className="text-xl md:text-2xl text-[#8EB69B] max-w-2xl leading-relaxed">
            From autonomous systems to intelligent software architectures — exploring the boundaries of engineering.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex items-center gap-6 mb-12 flex-wrap"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-[#8EB69B]/60">Filter by</span>
          <div className="flex gap-3">
            {["All", "Hardware", "Software"].map(btn => (
                <button
                key={btn}
                onClick={() => setFilter(btn)}
                className={`px-6 py-2 rounded-full border transition-all duration-300 font-medium ${
                    filter === btn
                    ? "bg-[#DAF1DE] text-[#163832] border-[#DAF1DE] shadow-[0_0_20px_rgba(218,241,222,0.3)]"
                    : "border-white/10 text-[#DAF1DE] hover:bg-white/5"
                }`}
                >
                {btn}
                </button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode='popLayout'>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                whileHover={{ y: -8 }}
                className="group bg-gradient-to-br from-[#DAF1DE] to-[#C9E5CD] p-8 rounded-[2.5rem] text-[#163832] relative shadow-xl flex flex-col justify-between min-h-[400px]"
              >
                <div>
                    {/* Header: Type & Status */}
                    <div className="flex justify-between items-start mb-8">
                        <div className="flex items-center gap-2 bg-[#163832]/5 px-4 py-2 rounded-full border border-[#163832]/10">
                            <img src={Fcon} alt="Type" className="w-4 h-4 opacity-70" />
                            <span className="text-xs font-bold uppercase tracking-wider">{project.type}</span>
                        </div>

                        <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-[#163832]/10">
                            {project.status === "Ongoing" ? (
                                <>
                                    <span className="relative flex h-2 w-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
                                    </span>
                                    <span className="text-xs font-bold uppercase tracking-wider text-orange-600">Live</span>
                                </>
                            ) : (
                                <span className="text-xs font-bold uppercase tracking-wider text-teal-700 underline decoration-teal-700/30">Completed</span>
                            )}
                        </div>
                    </div>

                    {/* Content */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-extrabold leading-tight group-hover:text-emerald-800 transition-colors">
                            {project.title}
                        </h3>
                        <p className="text-[#163832]/80 leading-relaxed font-medium">
                            {project.desc}
                        </p>
                    </div>
                </div>

                {/* Footer: Tags */}
                <div className="mt-8">
                    <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag, i) => (
                            <span
                                key={i}
                                className="bg-[#163832] text-[#DAF1DE] px-3 py-1 rounded-lg text-xs font-bold tracking-tight shadow-sm"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                    {/* Subtle Interactive Arrow */}
                    <div className="w-full h-[1px] bg-[#163832]/10 mt-6 mb-4" />
                    <button className="flex items-center gap-2 text-sm font-bold opacity-60 group-hover:opacity-100 transition-opacity">
                        PROJECT DETAILS 
                        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </button>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none">
                    <img src={Fcon} alt="" className="w-32 h-32 rotate-12" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  )
}

export default Projects
