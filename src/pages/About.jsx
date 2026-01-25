import React from "react";
import { FaBullseye, FaBolt } from "react-icons/fa";
import { MdVisibility, MdGroups, MdRocketLaunch, MdEmojiEvents } from "react-icons/md";

const coreValues = [
  {
    title: "Collaboration",
    desc: "We believe that the best solutions come from diverse minds working together.",
    icon: MdGroups,
  },
  {
    title: "Curiosity",
    desc: "We ask questions, explore the unknown, and never stop learning.",
    icon: FaBolt,
  },
  {
    title: "Innovation",
    desc: "We challenge the status quo and build things that haven't been built before.",
    icon: MdRocketLaunch,
  },
  {
    title: "Excellence",
    desc: "We strive for quality in our code, our designs, and our interactions.",
    icon: MdEmojiEvents,
  },
];

const About = () => {
  return (
    <div className="bg-gradient-to-br from-[#051F20] to-[#163832] min-h-screen text-[#DAF1DE]">
      <div className="max-w-screen-xl mx-auto px-6 md:px-10 pt-20 pb-20">
        {/* About Intro */}
        <div className="flex flex-col gap-6 items-center justify-center">
          <h3 className="text-4xl font-bold">About The Lab</h3>
          <p className="text-lg max-w-2xl text-center">
            The lab was created to provide students with a collaborative space to explore
            technology beyond the classroom. It serves as a hub for innovation, experimentation,
            and teamwork.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-20">
          <div className="p-5 bg-[#DAF1DE] text-[#163832] rounded-xl">
            <div className="flex gap-3 items-center pb-4">
              <FaBullseye className="bg-[#163832] text-[#DAF1DE] w-9 h-9 p-2 rounded-lg" />
              <h3 className="font-bold text-xl">Our Mission</h3>
            </div>
            <p>
              To empower students to build impactful engineering solutions through collaboration
              and hands-on learning. We bridge the gap between academic theory and real-world
              application.
            </p>
          </div>

          <div className="p-5 bg-[#DAF1DE] text-[#163832] rounded-xl">
            <div className="flex gap-3 items-center pb-4">
              <MdVisibility className="bg-[#163832] text-[#DAF1DE] w-9 h-9 p-2 rounded-lg" />
              <h3 className="font-bold text-xl">Our Vision</h3>
            </div>
            <p>
              To become a leading student-driven research and innovation lab where the next
              generation of engineers and creators are forged.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="pt-20">
          <h3 className="text-4xl font-bold text-center">Core Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pt-20">
            {coreValues.map(({ title, desc, icon: Icon }) => (
              <div key={title} className="flex flex-col">
                <Icon className="bg-[#163832] text-[#DAF1DE] w-9 h-9 p-2 rounded-lg mb-3" />
                <h3 className="font-bold text-lg">{title}</h3>
                <p className="text-sm md:text-base">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
