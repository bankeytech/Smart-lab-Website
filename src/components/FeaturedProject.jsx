import React from 'react';
import Fcon from '../assets/Frame 1.png';
import Scon from "../assets/Span 1.png";

const FeaturedProject = () => {
  const projects = [
    {
      type: "Hardware",
      status: "Ongoing",
      title: "Autonomous Drone Swarm",
      description:
        "A coordinated network of micro-drones capable of formation flight and environmental mapping.",
      tags: ["Robotics", "IoT", "C++"]
    },
    {
      type: "Software",
      status: "Ongoing",
      title: "Campus AI Assistant",
      description:
        "Natural language processing model trained on university data to help students find resources.",
      tags: ["AI/ML", "Python", "React"]
    },
    {
      type: "Hardware",
      status: "Completed",
      title: "Smart Energy Monitor",
      description:
        "IoT device for real-time energy consumption tracking and anomaly detection in lab equipment.",
      tags: ["IoT", "Embedded", "Data Viz"]
    }
  ];

  return (
    <section className="bg-gradient-to-bl from-[#163832] to-[#051F20] min-h-screen text-[#DAF1DE] mt-24">
      <div className="max-w-screen-xl mx-auto px-6 md:px-10 pt-8 pb-24">

        {/* Header */}
        <div className='flex flex-col gap-2 mb-10'>
          <h2 className='text-4xl font-bold mb-5'>Featured Projects</h2>

          <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4'>
            <p>
              A snapshot of some of the innovative projects currently being developed.
            </p>

            <button className='flex items-center gap-2 font-semibold hover:underline'>
              View All Projects →
            </button>
          </div>
        </div>

        {/* Projects Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-15'>
          {projects.map((project, index) => (
            <div
              key={index}
              className='bg-[#DAF1DE] p-6 rounded-lg text-[#163832] flex flex-col justify-between hover:shadow-lg transition'
            >
              {/* Type & Status */}
              <div className='flex items-center justify-between text-sm'>
                <span className='flex items-center gap-2 border border-[#163832] px-3 py-1 rounded font-semibold'>
                  <img
                    src={Fcon}
                    alt="project type icon"
                    className='w-4 h-4'
                  />
                  {project.type}
                </span>

                <span className='flex items-center gap-2 border border-[#163832] px-3 py-1 rounded font-semibold'>
                  <img
                    src={Scon}
                    alt="project status icon"
                    className='w-3 h-3'
                  />
                  {project.status}
                </span>
              </div>

              {/* Content */}
              <div className='pt-4'>
                <h3 className='font-bold text-lg md:text-xl'>
                  {project.title}
                </h3>

                <p className='text-sm md:text-base pt-3'>
                  {project.description}
                </p>
              </div>

              {/* Tags */}
              <div className='flex flex-wrap gap-3 pt-6 text-sm text-[#DAF1DE]'>
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className='bg-[#163832] px-3 py-1 rounded'
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProject;
