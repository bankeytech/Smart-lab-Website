import React from 'react'
import Mpic from "../assets/mark.png"

const JoinUs = () => {
  return (
    <section className="bg-gradient-to-br from-[#051F20] to-[#163832] min-h-screen text-[#DAF1DE]">
      <div className="max-w-screen-xl mx-auto px-6 md:px-10 pt-20 pb-20">
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
            <div>
                <h1 className='text-4xl font-bold mb-3'>Join the Lab</h1>
                <p className='text-lg'>You do not need to know everything — all you need is the willingness
                     to learn and build. We are looking for passionate students who 
                     want to make an impact.</p>

                <div className='mt-10 flex flex-col gap-2 bg-[#DAF1DE]/90 text-[#163832] rounded-lg p-8 '>
                    <h3 className='text-2xl font-bold mb-3'>Who can Apply</h3>
                    <div className='flex items-center gap-2'>
                        <img src={Mpic} className='w-5 h-5'/>
                        <p>Students interested in technology and engineering</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <img src={Mpic} className='w-5 h-5'/>
                        <p>Beginners willing to learn new skills</p>
                    </div> 
                    <div className='flex items-center gap-2'>
                        <img src={Mpic} className='w-5 h-5'/>
                        <p>Experienced developers looking for real projects</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <img src={Mpic} className='w-5 h-5'/>
                        <p>Designers, thinkers, and problem solvers  </p>
                    </div>
                </div>

                <div className='mt-10 flex flex-col gap-2'>
                    <h3 className='text-2xl font-bold mb-2'>How to Join</h3>
                    <p>Fill out the application form on this page. We review applications on a 
                        rolling basis. Once submitted, a team lead will reach out to schedule a
                         brief chat to get to know you better.</p>
                </div>
            </div>
            <div className='bg-[#DAF1DE]/90 text-[#163832] p-10 rounded-lg font-semibold flex flex-col gap-8'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    <div>
                        <h4>First Name</h4>
                        <input type="text" className='w-full placeholder:text-[#163832]/50 placeholder:pl-4 outline-none' placeholder='Jane' />
                     </div>
                    <div>
                        <h4>Last Name</h4>
                        <input type="text" className='w-full placeholder:text-[#163832]/50 placeholder:pl-4 outline-none' placeholder='Doe' />
                    </div>
                </div>
                <div className='mt-4'>
                    <h4>University Email</h4>
                    <input type="email" className='w-full placeholder:text-[#163832]/50 placeholder:pl-4 outline-none' placeholder='jane.doe@university.edu' />
                </div>
                <div className='mt-4'>
                    <h4>Area of Interest</h4>
                    <select className='w-full bg-[#DAF1DE]/90 text-[#163832] outline-none'>
                        <option value="">Software</option>
                        <option value="">Hardware</option>
                    </select>
                </div>
                <div className='mt-4'>
                    <h4>Why do you want to join?</h4>
                    <textarea placeholder='Tell us about your projects or what you want to learn...' className='w-full placeholder:text-[#163832]/50 placeholder:pl-4 h-20 outline-none'></textarea>
                </div>
                <button className='bg-[#163832] text-[#DAF1DE] px-4 py-2 rounded-lg w-full'>Submit Application</button>
            </div>
        </div>
      </div>
    </section>
  )
}

export default JoinUs