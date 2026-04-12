import React from 'react'
import Tpic from '../assets/pic.png'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div>
        <section className="bg-gradient-to-br from-[#051F20] to-[#163832] min-h-screen flex flex-col text-white">
            <div className="max-w-screen-xl mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-30">

                {/* Left Content */} 
                <div>
                    <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight mb-6 text-[#DAF1DE]">
                        Building the Future Through Collaborative Engineering
                    </h1>
                    <p className="text-lg text-[#8EB69B] mb-8">
                        We are a student-driven research and innovation lab where hardware and software engineers work together to build real-world solutions.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <Link to="/projects" className="bg-[#8EB69B] px-6 py-3 rounded-lg font-semibold transition hover:bg-[#7aa087]">
                            View Our Projects
                        </Link>
                        <Link to="/join-us" className="border border-[#DAF1DE] px-6 py-3 rounded-lg font-semibold transition hover:bg-[#DAF1DE] hover:text-[#051F20]">
                            Join the Lab
                        </Link>
                    </div>
                </div>

                {/* Right Image */} 
                <div className="flex justify-center">
                    <img src={Tpic} alt="AI Banner" className="w-[55vh] max-w-md rounded-xl shadow-2xl"/>
                </div>
            </div>

            {/* Stats */}
            <div className="mt-15 ">
                <hr className="border-[#DAF1DE]"/>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-screen-xl mx-auto w-full px-6 md:px-10 text-[#DAF1DE] py-10 md:py-15">
                    <div>
                        <h3 className="text-3xl font-bold mb-3">24+</h3>
                        <p>Active Projects</p>
                    </div>
                    <div>
                        <h3 className="text-3xl font-bold mb-3">50+</h3>
                        <p>Lab Members</p>
                    </div>
                    <div>
                        <h3 className="text-3xl font-bold mb-3">12</h3>
                        <p>Research Papers</p>
                    </div>
                    <div>
                        <h3 className="text-3xl font-bold mb-3">100%</h3>
                        <p>Student Driven</p>
                    </div>
                </div>
                <hr className="border-[#DAF1DE]"/>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-start md:items-center py-10 pt-20 gap-6 md:gap-10 lg:gap-32 max-w-screen-xl mx-auto w-full px-6 md:px-10 text-[#DAF1DE]">
                <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight md:w-1/3">Who We Are</h3>
                <p className="text-base sm:text-lg md:text-xl md:w-2/3 lg:max-w-2xl text-left opacity-90">
                    Smart Systems Research Laboratory (a modern tech company) 
                    stands as a pioneering laboratory dedicated to the advancement of 3D fabrications, prototyping, and innovative technology solutions.
                </p>
            </div>
        </section>
    </div>
  )
}

export default Hero