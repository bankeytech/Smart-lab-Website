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
    "Arduino", "ESP32", "Raspberry Pi", "Sensors", 
    "Motors", "Flight Controllers", "3D Printing", 
    "PCB Design", "Soldering", "CAD Software"
  ]

  return (
    <div className="bg-[#051F20] min-h-screen text-[#DAF1DE] relative overflow-hidden selection:bg-[#DAF1DE] selection:text-[#051F20]">
      {/* Premium Background Accents */}
      <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#163832] rounded-full blur-[120px] opacity-40 animate-pulse" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#163832] rounded-full blur-[120px] opacity-40 animate-pulse" />

      <div className="relative z-10 max-w-screen-xl mx-auto px-6 md:px-10 py-16 md:py-24">

        {/* Header Section with Fade-in */}
        <div className="max-w-2xl pb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Hardware Division</h1>
          <p className="text-lg text-[#DAF1DE]/80 leading-relaxed">
            The hardware division focuses on building physical systems that sense, move,
            and interact with their environment. We bridge the gap between digital logic
            and physical reality through engineering and rapid prototyping.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* What We Build Section */}
          <section className="animate-in fade-in slide-in-from-left-4 duration-700 delay-200">
            <div className="flex gap-4 items-center pb-10 border-b border-[#DAF1DE]/10 mb-10">
              <img src={Bcon} alt="" className="w-8 h-8 object-contain" />
              <h2 className="font-bold text-2xl md:text-3xl tracking-tight">What We Build</h2>
            </div>

            <div className="grid gap-8">
              {whatWeBuild.map((item, index) => (
                <div 
                  key={index} 
                  className="group flex gap-5 p-4 rounded-xl hover:bg-[#DAF1DE]/5 transition-all duration-300 border border-transparent hover:border-[#DAF1DE]/10"
                >
                  <div className="flex-shrink-0">
                    <img
                      src={Vcon}
                      alt=""
                      className="w-6 h-6 object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-[#DAF1DE] mb-1 group-hover:translate-x-1 transition-transform">{item.title}</h3>
                    <p className="text-[#DAF1DE]/70 leading-snug group-hover:text-[#DAF1DE]/90 transition-colors">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Side Panel: Tools & CTA */}
          <aside className="space-y-10 animate-in fade-in slide-in-from-right-4 duration-700 delay-300">
            {/* Tools & Technologies Card */}
            <div className="bg-[#DAF1DE] text-[#163832] p-8 md:p-10 rounded-2xl shadow-2xl relative overflow-hidden group">
              {/* Subtle Decorative Element */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#163832]/5 rounded-bl-full -mr-10 -mt-10 group-hover:scale-110 transition-transform duration-500" />
              
              <h2 className="font-bold text-2xl mb-8 border-b border-[#163832]/10 pb-4">
                Tools & Technologies
              </h2>

              <div className="flex flex-wrap gap-3 mb-10">
                {tools.map((tool, index) => (
                  <span
                    key={index}
                    className="border border-[#163832]/20 px-4 py-1.5 rounded-full text-sm font-medium
                               hover:bg-[#163832] hover:text-[#DAF1DE] hover:border-[#163832] 
                               hover:shadow-lg active:scale-95 transition-all duration-200 cursor-default"
                  >
                    {tool}
                  </span>
                ))}
              </div>

              {/* Recruitment CTA Section */}
              <div className="bg-[#163832] text-[#DAF1DE] p-6 md:p-8 rounded-xl shadow-inner group/cta">
                <h4 className="font-bold text-xl mb-3">Join Our Hardware Team</h4>
                <p className="text-[#DAF1DE]/80 mb-6 leading-relaxed">
                  Interested in building physical systems and working with your hands? We're looking for makers and engineers.
                </p>
                <button
                  className="w-full md:w-auto bg-transparent border-2 border-[#DAF1DE] px-8 py-3 rounded-lg font-bold
                             hover:bg-[#DAF1DE] hover:text-[#163832] transition-all duration-300 
                             focus:ring-2 focus:ring-offset-2 focus:ring-[#DAF1DE] active:scale-[0.98]"
                >
                  Apply Now
                </button>
              </div>
            </div>

            {/* Scientific Lab Note (Bonus Detail) */}
            <div className="border border-[#DAF1DE]/20 p-6 rounded-xl bg-[#163832]/30 backdrop-blur-sm">
              <p className="text-sm italic text-[#DAF1DE]/60">
                "We transform blueprints into prototypes, ensuring that our hardware solutions are as robust as the software that drives them."
              </p>
            </div>
          </aside>

        </div>
      </div>
    </div>
  )
}

export default HardwareDivision
