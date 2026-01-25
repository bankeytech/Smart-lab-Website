import React from 'react'
import { FaGithubAlt, FaTwitter, FaLinkedinIn, } from "react-icons/fa";
import { MdEmail, MdLocationOn } from "react-icons/md";

const Footer = () => {
  return (
    <section className='bg-[#163832] text-[#DAF1DE]'>
        <div className='max-w-screen-xl mx-auto px-6 md:px-10'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-12'>
                <div>
                    <h2 className='text-2xl font-bold mb-4'>Smart Lab</h2>
                    <p className='text-sm'>Building the future through collaborative engineering and student-driven innovation.</p>
                    <div className='flex space-x-4 mt-4'>
                        <FaGithubAlt />
                        <FaLinkedinIn />
                        <FaTwitter />                 
                    </div>
                </div>  
                <div>
                    <h2 className='text-2xl font-bold mb-4'>Division</h2>
                    <ul className='space-y-2'>
                        <li><a href='#'>Hardware Division</a></li>
                        <li><a href='#'>Software Division</a></li>
                        <li>All Project</li>
                    </ul>
                </div>
                <div className='space-y-4'>
                    <h2 className='text-2xl font-bold mb-4'>Lab</h2>
                    <p className='text-sm'>About Us</p>
                    <p className='text-sm'>Our Team</p>
                    <p className='text-sm'>Join The Lab</p>
                </div>
                <div>
                    <h2 className='text-2xl font-bold mb-4'>Contact</h2>
                    <div className='flex flex-col space-y-4'>
                        <a href='#' className='text-[#DAF1DE] hover:text-[#DAF1DE] transition duration-300 ease-in-out flex gap-2'>
                            <MdEmail/>
                            <p className='text-sm'>lab@email.com</p>
                        </a>
                        <a href='#' className='text-[#DAF1DE] hover:text-[#DAF1DE] transition duration-300 ease-in-out flex gap-2'>
                            <MdLocationOn/>
                            <p className='text-sm'>University Campus Engineering Building, Room 304</p>
                        </a>
                    </div>
                </div>
            </div>

            <div className="flex flex-col md:flex-row items-left justify-between gap-4 py-4 text-[10px]">
  
                <h6 className="text-left">
                    © 2026 Smart Lab. All rights reserved.
                </h6>

                <div className="flex gap-6">
                    <p className="cursor-pointer hover:underline">Privacy Policy</p>
                    <p className="cursor-pointer hover:underline">Terms & Conditions</p>
                </div>

            </div>

        </div>
    </section>
  )
}

export default Footer