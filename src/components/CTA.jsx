import React from 'react'

const CTA = () => {
  return (
    <section className='bg-gradient-to-bl from-[#163832] to-[#051F20] min-h-screen'>
        <div className='max-w-screen-xl mx-auto px-6 md:px-10'>
             <div className="bg-[#DAF1DE] p-8 md:p-12 rounded-3xl flex items-center justify-center flex-col">
                <h2 className="text-[#163832] text-3xl md:text-4xl font-bold text-center mb-6">
                    Want to Build With Us?
                </h2>
                <h3 className='text-[#163832] text-xl md:text-2xl font-semibold text-center mb-6'>Whether you are passionate about hardware, software, or learning new technologies, there is a place for you in our lab.</h3>
                <div className='flex items-center justify-center gap-6'>
                  <button className='text-[#163832] text-[1.4vw] md:text-2xl font-semibold px-6 py-3 rounded-[3vw] border-2 border-[#163832] hover:bg-[#163832] hover:text-[#DAF1DE] transition duration-300 ease-in-out'>
                    Join the Lab
                </button>
                <button className='text-[#163832] text-[1.4vw] md:text-2xl font-semibold px-6 py-3 rounded-[3vw] border-2 border-[#163832] hover:bg-[#163832] hover:text-[#DAF1DE] transition duration-300 ease-in-out'>
                    View All Projects
                </button>
                </div>
             </div>
        </div>
    </section>
  )
}

export default CTA