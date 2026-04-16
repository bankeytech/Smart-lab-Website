import React from 'react';
import Fcon from '../assets/Frame 1.png';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const FeaturedProject = () => {
  const projects = [
    {
      id: 1,
      type: "Hardware",
      status: "Ongoing",
      title: "Autonomous Drone Swarm",
      description:
        "A coordinated network of micro-drones capable of formation flight and environmental mapping.",
      tags: ["Robotics", "IoT", "C++"]
    },
    {
      id: 2,
      type: "Software",
      status: "Ongoing",
      title: "Campus AI Assistant",
      description:
        "Natural language processing model trained on university data to help students find resources.",
      tags: ["AI/ML", "Python", "React"]
    },
    {
      id: 3,
      type: "Hardware",
      status: "Completed",
      title: "Smart Energy Monitor",
      description:
        "IoT device for real-time energy consumption tracking and anomaly detection in lab equipment.",
      tags: ["IoT", "Embedded", "Data Viz"]
    }
  ];

  return (
    <section className="bg-gradient-to-bl from-[#163832] to-[#051F20] text-[#DAF1DE] py-20">
      <div className="max-w-screen-xl mx-auto px-6 md:px-10">

        {/* Header Section */}
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='flex flex-col gap-6 mb-16'
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="flex flex-col gap-4">
                <span className="text-[#8EB69B] font-bold uppercase tracking-widest text-sm">Portfolio Spotlight</span>
                <h2 className='text-4xl md:text-5xl font-extrabold tracking-tight'>Featured <span className='text-[#8EB69B]'>Projects</span></h2>
                <p className='text-lg md:text-lg text-[#8EB69B] max-w-xl leading-relaxed'>
                    A snapshot of some of the innovative projects currently being developed in our lab.
                </p>
            </div>

            <Link 
                to="/projects" 
                className='inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-[#DAF1DE] text-[#163832] font-extrabold uppercase tracking-widest text-xs hover:bg-white transition-all duration-300 shadow-[0_0_20px_rgba(218,241,222,0.1)] active:scale-95'
            >
              Explore all projects
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className='group bg-gradient-to-br from-[#DAF1DE] to-[#C9E5CD] p-8 rounded-[2.5rem] text-[#163832] relative shadow-2xl flex flex-col justify-between min-h-[420px]'
            >
              <div>
                {/* Header: Type & Status */}
                <div className='flex items-center justify-between mb-10'>
                    <div className="flex items-center gap-2 bg-[#163832]/5 px-4 py-2 rounded-xl border border-[#163832]/10 uppercase text-[10px] font-black tracking-[0.1em]">
                        <img src={Fcon} alt="" className='w-3 h-3 opacity-70' />
                        {project.type}
                    </div>

                    <div className="flex items-center gap-2 px-4 py-2 rounded-xl border border-[#163832]/10 uppercase text-[10px] font-black tracking-[0.1em]">
                        {project.status === "Ongoing" ? (
                            <>
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
                                </span>
                                <span className="text-orange-600">Live</span>
                            </>
                        ) : (
                            <span className="text-teal-700">Completed</span>
                        )}
                    </div>
                </div>

                {/* Content */}
                <div className='space-y-4'>
                    <h3 className='text-2xl font-black leading-tight group-hover:text-emerald-800 transition-colors'>
                    {project.title}
                    </h3>
                    <p className='text-[#163832]/80 leading-relaxed font-medium'>
                    {project.description}
                    </p>
                </div>
              </div>

              {/* Footer: Tags */}
              <div className='mt-10'>
                <div className='flex flex-wrap gap-2 mb-6'>
                    {project.tags.map((tag, i) => (
                    <span
                        key={i}
                        className='bg-[#163832] text-[#DAF1DE] px-3 py-1 rounded-lg text-[10px] font-black tracking-tight shadow-md'
                    >
                        {tag}
                    </span>
                    ))}
                </div>
                
                <div className="w-full h-[1px] bg-[#163832]/10 mb-6" />
                <Link to="/projects" className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest opacity-40 group-hover:opacity-100 transition-opacity">
                    READ CASE STUDY
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </Link>
              </div>

              {/* Decorative Watermark */}
              <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-[0.03] transition-opacity duration-700 pointer-events-none">
                <img src={Fcon} alt="" className="w-40 h-40 rotate-12" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProject;
