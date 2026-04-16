import React from 'react'
import { MdGroups, MdEngineering, MdLightbulb } from "react-icons/md";
import { FaChalkboardTeacher } from "react-icons/fa";
import { motion } from 'framer-motion'


const Fil =
  "text-[15vw] md:text-[6vw] lg:text-[5.5vw] border-2 border-[#235347] p-3 rounded-[2vw] mb-4 overflow-hidden";


const HowWeWork = () => {
    const CoreHowWeWork = [
        {
            icon: <MdGroups className={Fil}/>,
            title: "Collaborative Teams",
            description: "Students work in small cross-functional teams to solve real engineering problems."
        },
        {
            icon: <MdEngineering className= {Fil}/>,
            title: "Learning by Building",
            description: "We believe the best way to learn is by doing — every project is hands-on."
        },
        {
            icon: <MdLightbulb className={Fil}/>,
            title: "Research & Innovation",
            description: "We explore new technologies, experiment boldly, and document our findings."
        },
        {
            icon: <FaChalkboardTeacher className={Fil}/>,
            title: "Mentorship & Growth",
            description: "Senior members and mentors guide new members throughout their journey."
        }
    ]
  return (
    <div className='bg-gradient-to-br from-[#051F20] to-[#163832] py-20 overflow-hidden'>
        <div className='max-w-screen-xl mx-auto px-6 md:px-10 '>
            <motion.h2 
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className='leading-tight mb-12 text-[#DAF1DE] text-center text-4xl md:text-5xl font-extrabold tracking-tight'
            >
                How We <span className='text-[#8EB69B]'>Work</span>
            </motion.h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-[#163832]'>
                {CoreHowWeWork.map((item, index) => (
                    <motion.div 
                        key={index}
                        initial={{ opacity: 0, y: -100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ 
                            duration: 0.8, 
                            delay: index * 0.3,
                            type: "spring",
                            stiffness: 100,
                            damping: 12
                        }}
                        whileHover={{ y: -10 }}
                        className='bg-[#DAF1DE] p-6 rounded-3xl shadow-xl border border-[#DAF1DE]/20 hover:shadow-2xl transition-shadow cursor-default group'
                    >
                         <div className="group-hover:scale-110 group-hover:text-[#163832] transition-transform duration-300">
                            {item.icon}
                         </div>
                        <h4 className='font-semibold md:text-2xl mb-1 '>{item.title}</h4>
                        <p className="text-sm leading-relaxed text-[#235347]">
                            {item.description}
                        </p>
                    </motion.div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default HowWeWork
