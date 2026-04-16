import React from 'react'
import Tpic from '../assets/pic.png'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <div>
        <section className="bg-gradient-to-br from-[#051F20] to-[#163832] min-h-screen flex flex-col text-[#DAF1DE] overflow-hidden">
            <div className="max-w-screen-xl mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-30">

                {/* Left Content */} 
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-4xl lg:text-5xl font-extrabold leading-tight mb-6 text-[#DAF1DE]"
                    >
                        Building the Future Through Collaborative Engineering
                    </motion.h1>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-lg text-[#8EB69B] mb-8"
                    >
                        We are a student-driven research and innovation lab where hardware and software engineers work together to build real-world solutions.
                    </motion.p>
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="flex flex-wrap gap-4"
                    >
                        <Link to="/projects" className="bg-[#8EB69B] px-6 py-3 rounded-lg font-semibold transition hover:bg-[#7aa087] text-[#051F20]">
                            View Our Projects
                        </Link>
                        <Link to="/join-us" className="border border-[#DAF1DE] px-6 py-3 rounded-lg font-semibold transition hover:bg-[#DAF1DE] hover:text-[#051F20]">
                            Join the Lab
                        </Link>
                    </motion.div>
                </motion.div>

                {/* Right Image */} 
                <motion.div 
                    initial={{ opacity: 0, scale: 0.8, rotate: 2 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="flex justify-center relative"
                >
                    <motion.div
                        animate={{ y: [0, -15, 0] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        className="relative z-10"
                    >
                        <img src={Tpic} alt="AI Banner" className="w-[55vh] max-w-md rounded-xl shadow-2xl"/>
                    </motion.div>
                    {/* Background Glow */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#8EB69B]/10 blur-3xl rounded-full" />
                </motion.div>
            </div>

            {/* Stats */}
            <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="mt-15"
            >
                <hr className="border-[#DAF1DE]/20"/>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-screen-xl mx-auto w-full px-6 md:px-10 text-[#DAF1DE] py-10 md:py-15">
                    {[
                        { val: "24+", label: "Active Projects" },
                        { val: "50+", label: "Lab Members" },
                        { val: "12", label: "Research Papers" },
                        { val: "100%", label: "Student Driven" }
                    ].map((stat, i) => (
                        <motion.div 
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                        >
                            <h3 className="text-3xl font-bold mb-3">{stat.val}</h3>
                            <p className="text-[#8EB69B]">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>
                <hr className="border-[#DAF1DE]/20"/>
            </motion.div>

            {/* Who We Are */}
            <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="flex flex-col md:flex-row justify-between items-start md:items-center py-10 pt-20 pb-20 gap-6 md:gap-10 lg:gap-32 max-w-screen-xl mx-auto w-full px-6 md:px-10 text-[#DAF1DE]"
            >
                <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight md:w-1/3">Who We <span className='text-[#8EB69B]'>Are</span></h3>
                <p className="text-base sm:text-lg md:text-xl md:w-2/3 lg:max-w-2xl text-left opacity-90 text-[#8EB69B]">
                    Smart Systems Research Laboratory (a modern tech company) 
                    stands as a pioneering laboratory dedicated to the advancement of 3D fabrications, prototyping, and innovative technology solutions.
                </p>
            </motion.div>
        </section>
    </div>
  )
}

export default Hero
