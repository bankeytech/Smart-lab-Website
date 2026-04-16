import React from 'react'
import Vcon from "../assets/softimg.png"
import Bcon from "../assets/Span2.png"
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const SoftwareDivision = () => {

  const whatWeBuild = [
    {
      title: "Web Applications",
      desc: "Responsive, modern frontend interfaces"
    },
    {
      title: "Backend APIs",
      desc: "Scalable server-side logic and data management"
    },
    {
      title: "AI & Machine Learning",
      desc: "Intelligent models for prediction and automation"
    },
    {
      title: "Automation Tools",
      desc: "Scripts and utilities to streamline workflows"
    },
    {
      title: "Mobile App Development",
      desc: "Native and cross-platform applications for iOS and Android"
    },
    {
      title: "Game Development",
      desc: "Interactive experiences from casual mobile games to immersive worlds"
    },
    {
      title: "3D Design & Development",
      desc: "Modeling, rendering, and real-time 3D experiences"
    }
  ]

  const tools = [
    "React", "TypeScript", "Node.js", "Python", 
    "PostgreSQL", "Docker", "Git", "AWS", 
    "TensorFlow", "Next.js"
  ]

  return (
    <div className="bg-[#051F20] min-h-screen text-[#DAF1DE] relative overflow-hidden selection:bg-[#DAF1DE] selection:text-[#051F20] pt-20">
      {/* Premium Background Accents */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#163832] rounded-full blur-[120px] pointer-events-none" 
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.4, 0.3]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#163832] rounded-full blur-[120px] pointer-events-none" 
      />

      <div className="relative z-10 max-w-screen-xl mx-auto px-6 md:px-10 py-16 md:py-24">

        {/* Header Section */}
        <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl pb-16"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">Software <span className="text-[#8EB69B]">Division</span></h1>
          <p className="text-xl text-[#DAF1DE]/80 leading-relaxed max-w-xl">
            Designing and developing digital systems that power the future. We turn complex algorithms into scalable, user-centric impact.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* What We Build Section */}
          <motion.section 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex gap-4 items-center pb-10 border-b border-[#DAF1DE]/10 mb-10">
              <img src={Bcon} alt="" className="w-8 h-8 object-contain" />
              <h2 className="font-extrabold text-3xl tracking-tight">What We Build</h2>
            </div>

            <div className="grid gap-6">
              {whatWeBuild.map((item, index) => (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  key={index} 
                  className="group flex gap-6 p-6 rounded-3xl hover:bg-[#DAF1DE]/5 transition-all duration-500 border border-transparent hover:border-[#DAF1DE]/10 cursor-default"
                >
                  <div className="flex-shrink-0">
                    <img
                      src={Vcon}
                      alt=""
                      className="w-8 h-8 object-contain opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-[#DAF1DE] mb-2 group-hover:text-[#8EB69B] transition-colors">{item.title}</h3>
                    <p className="text-[#DAF1DE]/60 leading-relaxed group-hover:text-[#DAF1DE]/90 transition-colors">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Side Panel: Tools & CTA */}
          <motion.aside 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-10"
          >
            {/* Tools & Technologies Card */}
            <div className="bg-[#DAF1DE] text-[#163832] p-10 rounded-[2.5rem] shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#163832]/5 rounded-bl-full -mr-10 -mt-10 group-hover:scale-110 transition-transform duration-500" />
              
              <h2 className="font-extrabold text-2xl mb-8 border-b border-[#163832]/10 pb-6 uppercase tracking-wider">
                Tech Stack
              </h2>

              <div className="flex flex-wrap gap-3 mb-10">
                {tools.map((tool, index) => (
                  <motion.span
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    key={index}
                    className="bg-[#163832]/5 border border-[#163832]/10 px-5 py-2 rounded-xl text-sm font-bold
                               hover:bg-[#163832] hover:text-[#DAF1DE] transition-all duration-300 cursor-default shadow-sm"
                  >
                    {tool}
                  </motion.span>
                ))}
              </div>

              {/* Recruitment CTA Section */}
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="bg-[#163832] text-[#DAF1DE] p-8 rounded-3xl shadow-2xl group/cta relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-transparent opacity-0 group-hover/cta:opacity-100 transition-opacity" />
                <h4 className="font-extrabold text-2xl mb-4 relative z-10">Join the Software Team</h4>
                <p className="text-[#DAF1DE]/70 mb-8 leading-relaxed relative z-10 font-medium">
                  Passionate about coding, AI, or system design? We're always looking for brilliant minds to join our lab.
                </p>
                <Link to="/join-us"
                  className="relative z-10 w-full md:w-auto bg-[#DAF1DE] text-[#163832] px-10 py-4 rounded-2xl font-black uppercase tracking-widest text-sm
                             hover:bg-white hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all duration-300 active:scale-95"
                >
                  Apply Now
                </Link>
              </motion.div>
            </div>

            {/* Scientific Lab Note */}
            <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="border border-[#DAF1DE]/10 p-8 rounded-3xl bg-[#163832]/20 backdrop-blur-xl"
            >
              <p className="text-lg italic text-[#DAF1DE]/50 font-medium leading-relaxed">
                "We provide the infrastructure for innovation, bridging the gap between theoretical research and production-ready systems."
              </p>
            </motion.div>
          </motion.aside>

        </div>
      </div>
    </div>
  )
}

export default SoftwareDivision
