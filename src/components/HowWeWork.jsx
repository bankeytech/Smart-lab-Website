import React from 'react'
import { MdGroups, MdEngineering, MdLightbulb } from "react-icons/md";
import { FaChalkboardTeacher } from "react-icons/fa";


const Fil =
  "text-[15vw] md:text-[6vw] lg:text-[5.5vw] border-2 border-[#235347] p-3 rounded-[2vw] mb-4";


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
    <div className='bg-gradient-to-br from-[#051F20] to-[#163832] '>
        <div className='max-w-screen-xl mx-auto px-6 md:px-10'>
            <h2 className='text-4xl font-bold leading-tight mb-8 text-[#DAF1DE] text-center'>How We Work</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-[#163832]'>
                {CoreHowWeWork.map((item, index) => (
                    <div key={index} className='bg-[#DAF1DE] p-6 rounded-3xl'>
                         {item.icon}
                        <h4 className='font-semibold md:text-2xl mb-1 '>{item.title}</h4>
                        <p className="text-sm leading-relaxed text-[#235347]">
                            {item.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default HowWeWork