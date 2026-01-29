import React from 'react'
import Hpic from '../assets/hardware.jpg'
import Spic from '../assets/software.jpg'

const WhatWeDo = () => {
  return (
    <section className="bg-gradient-to-bl from-[#163832] to-[#051F20] py-20 text-white">
      <div className="max-w-screen-xl mx-auto px-6 md:px-10">
        <div className="bg-[#DAF1DE] p-8 md:p-12 rounded-3xl">
          <h2 className="text-[#163832] text-3xl md:text-4xl font-bold text-center mb-12">
            What We Do
          </h2>

          {/* Hardware */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-5">
            <div className="text-[#163832]">
              <h3 className="font-semibold text-xl md:text-2xl mb-4">
                Hardware Division
              </h3>
              <p className="mb-4">
                We design, build, and test physical systems that interact
                with the real world. Our hardware team focuses on hands-on
                engineering, prototyping, and experimentation.
              </p>

              <p className="font-semibold mb-2">Focus Areas:</p>
              <ol className="list-disc pl-6 space-y-1">
                <li>Robotics & Prototyping</li>
                <li>Internet of Things (IoT)</li>
                <li>Embedded Systems</li>
                <li>Drone Technology</li>
              </ol>
            </div>

            <img
              src={Hpic}
              alt="Hardware division"
              className="w-full max-w-md mx-auto rounded-3xl"
            />
          </div>

          {/* Software */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <img
              src={Spic}
              alt="Software division"
              className="w-full max-w-md mx-auto rounded-3xl hidden md:block"
            />

            <div className="text-[#163832]">
              <h3 className="font-semibold text-xl md:text-2xl mb-4">
                Software Division
              </h3>
              <p className="mb-4">
                We build intelligent software systems that power modern
                applications. From user interfaces to backend systems and
                AI models, our software team turns ideas into scalable solutions.
              </p>

              <p className="font-semibold mb-2">Focus Areas:</p>
              <ol className="list-disc pl-6 space-y-1">
                <li>UI/UX Design</li>
                <li>Frontend & Backend Development</li>
                <li>Artificial Intelligence & Machine Learning</li>
                <li>Data Processing & Automation</li>
              </ol>
            </div>

            <img
              src={Spic}
              alt="Software division"
              className="w-full max-w-md mx-auto rounded-3xl md:hidden"
            />
          </div>

        </div>
      </div>
    </section>
  )
}

export default WhatWeDo
