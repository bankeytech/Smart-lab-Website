import React from 'react'
import { Link } from 'react-router-dom'

const CTA = () => {
  return (
    <section className='bg-gradient-to-bl from-[#163832] to-[#051F20] py-12 md:py-20'>
        <div className='max-w-screen-xl mx-auto px-6 md:px-10'>
             <div className="bg-[#DAF1DE] p-6 sm:p-10 md:p-16 rounded-3xl flex items-center justify-center flex-col">
                <h2 className="text-[#163832] text-2xl sm:text-3xl md:text-5xl font-extrabold text-center mb-4 leading-tight">
                    Want to Build With Us?
                </h2>
                <h3 className='text-[#163832] text-lg sm:text-xl md:text-2xl font-medium text-center mb-8 max-w-3xl opacity-90'>
                    Whether you are passionate about hardware, software, or learning new technologies, there is a place for you in our lab.
                </h3>
                <div className='flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 w-full sm:w-auto'>
                  <Link to="/join-us" className='w-full sm:w-auto text-center text-[#163832] text-sm sm:text-base md:text-xl font-bold px-8 py-3.5 rounded-full border-2 border-[#163832] hover:bg-[#163832] hover:text-[#DAF1DE] transition duration-300 shadow-md'>
                    Join the Lab
                  </Link>
                  <Link to="/projects" className='w-full sm:w-auto text-center text-[#163832] text-sm sm:text-base md:text-xl font-bold px-8 py-3.5 rounded-full border-2 border-[#163832] hover:bg-[#163832] hover:text-[#DAF1DE] transition duration-300 shadow-md'>
                    View All Projects
                  </Link>
                </div>
             </div>
        </div>
    </section>
  )
}

export default CTA