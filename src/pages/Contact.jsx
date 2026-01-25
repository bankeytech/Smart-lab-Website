import React from 'react'
import { MdEmail, MdLocationOn } from "react-icons/md";

const Contact = () => {
  return (
    <div className="bg-[#163832] min-h-screen pt-20 text-[#DAF1DE] flex items-center justify-center">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
        
        <div className="space-y-6 text-xl">
             <div className='flex flex-col items-center gap-2'>
                <MdEmail size={32}/>
                <p>lab@email.com</p>
            </div>
            
             <div className='flex flex-col items-center gap-2'>
                <MdLocationOn size={32}/>
                <p>University Campus Engineering Building, Room 304</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
