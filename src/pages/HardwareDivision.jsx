import React from 'react'
import Vcon from "../assets/Vector1.png"
import Bcon from "../assets/Span2.png"

const HardwareDivision = () => {

  const whatWeBuild = [
    {
      title: "IoT Devices",
      desc: "Connected sensors and smart home appliances"
    },
    {
      title: "Drones & Autonomous Systems",
      desc: "Aerial and ground-based robotic vehicles"
    },
    {
      title: "Embedded Control Systems",
      desc: "Microcontroller-based logic and automation"
    },
    {
      title: "Smart Prototypes",
      desc: "Rapid prototyping of physical product concepts"
    }
  ]

  const tools = [
    "Arduino",
    "ESP32",
    "Raspberry Pi",
    "Sensors",
    "Motors",
    "Flight Controllers",
    "3D Printing",
    "PCB Design",
    "Soldering",
    "CAD Software"
  ]

  return (
    <div className="bg-gradient-to-br from-[#051F20] to-[#163832] min-h-screen text-[#DAF1DE]">
      <div className="max-w-screen-xl mx-auto px-6 md:px-10 pt-20 pb-20">

        {/* Header */}
        <div className="max-w-xl pb-14">
          <h1 className="text-4xl font-bold mb-4">Hardware Division</h1>
          <p>
            The hardware division focuses on building physical systems that sense, move,
            and interact with their environment. We bridge the gap between digital logic
            and physical reality.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* What We Build */}
          <div>
            <div className="flex gap-3 items-center pb-8">
              <img src={Bcon} alt="img"/>
              <h2 className="font-bold text-lg md:text-xl">         
              What We Build
            </h2>
            </div>

            <div className="flex flex-col gap-6">
              {whatWeBuild.map((item, index) => (
                <div key={index} className="flex gap-4">
                  <img
                    src={Vcon}
                    alt="List item icon"
                    className="w-5 h-5 mt-1"
                  />
                  <div>
                    <p className="font-semibold">{item.title}</p>
                    <p className="text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tools & Technologies */}
          <div className="bg-[#DAF1DE] text-[#163832] p-6 rounded-lg">
            <h2 className="font-bold text-lg md:text-xl pb-6">
              Tools & Technologies
            </h2>

            <div className="flex flex-wrap gap-3 pb-6">
              {tools.map((tool, index) => (
                <span
                  key={index}
                  className="border border-[#163832] px-4 py-1 rounded text-sm
                             hover:bg-[#163832] hover:text-[#DAF1DE] transition"
                >
                  {tool}
                </span>
              ))}
            </div>

            {/* CTA */}
            <div className="bg-[#163832]/90 text-[#DAF1DE] p-5 rounded-lg">
              <h5 className="font-bold">Join Hardware Team</h5>
              <p className="text-sm py-2">
                Interested in building physical systems and working with your hands?
              </p>
              <button
                className="border border-[#DAF1DE] px-4 py-2 mt-4 rounded text-sm
                           hover:bg-[#DAF1DE] hover:text-[#163832] transition"
              >
                Apply Now
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default HardwareDivision
