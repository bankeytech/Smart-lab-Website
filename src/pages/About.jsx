import React from "react";
import { FaBullseye, FaBolt, FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";
import { MdVisibility, MdGroups, MdRocketLaunch, MdEmojiEvents } from "react-icons/md";
import Jpic from "../assets/imag2.jpg";
import Ypic from "../assets/pp1.webp";
import { motion } from "framer-motion";

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
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="bg-gradient-to-br from-[#051F20] to-[#163832] min-h-screen text-[#DAF1DE] overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-6 md:px-10 pt-20 pb-20">
        
        {/* About Intro */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col pt-10 gap-6 justify-center"
        >
          <h3 className="text-xl font-bold text-[#8EB69B] uppercase tracking-widest">About Us</h3>
          <div className="flex flex-col md:flex-row justify-between pt-5 gap-6 md:gap-4 items-start">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight md:w-1/2">
              Shaping the future of <span className="text-[#8EB69B]">Technology</span>
            </h1>
            <p className="text-base md:text-xl text-[#8EB69B] w-full md:max-w-lg lg:max-w-xl leading-relaxed">
              We focus on the details of everything we do. All to help businesses around 
              the world focus on what's most important to them. We take pride in this.
            </p>
          </div>
        </motion.div>

        {/* Mission & Vision */}
        <div className="flex flex-col md:flex-row justify-between items-stretch gap-8 md:gap-12 pt-20 md:pt-32">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2"
          >
            <img src={Jpic} alt="Research Lab" className="rounded-3xl w-full h-full object-cover shadow-2xl border border-white/5" />
          </motion.div>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col gap-6 w-full md:w-1/2 justify-center"
          >
            <motion.div variants={itemVariants} className="p-8 bg-[#DAF1DE] text-[#163832] rounded-[2rem] shadow-xl hover:shadow-2xl transition-shadow border border-[#DAF1DE]/20 group">
              <div className="flex gap-4 items-center pb-6">
                <FaBullseye className="bg-[#163832] text-[#DAF1DE] w-12 h-12 p-3 rounded-2xl group-hover:rotate-12 transition-transform" />
                <h3 className="font-extrabold text-2xl tracking-tight">Our Mission</h3>
              </div>
              <p className="text-lg font-medium leading-relaxed opacity-90">
                To be a profitable tech firm leading innovations & supporting solutions that build and secure the future of Africa.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="p-8 bg-[#DAF1DE] text-[#163832] rounded-[2rem] shadow-xl hover:shadow-2xl transition-shadow border border-[#DAF1DE]/20 group">
              <div className="flex gap-4 items-center pb-6">
                <MdVisibility className="bg-[#163832] text-[#DAF1DE] w-12 h-12 p-3 rounded-2xl group-hover:-rotate-12 transition-transform" />
                <h3 className="font-extrabold text-2xl tracking-tight">Our Vision</h3>
              </div>
              <p className="text-lg font-medium leading-relaxed opacity-90">
                To unlock tomorrow’s technology, today.
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Core Values */}
        <div className="pt-32">
          <motion.h3 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-20"
          >
            Core <span className="text-[#8EB69B]">Values</span>
          </motion.h3>
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12"
          >
            {coreValues.map(({ title, desc, icon: Icon }) => (
              <motion.div 
                variants={itemVariants} 
                key={title} 
                className="flex flex-col group p-6 rounded-2xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/10"
              >
                <Icon className="bg-[#163832] text-[#DAF1DE] w-12 h-12 p-3 rounded-2xl mb-6 group-hover:scale-110 transition-transform shadow-lg" />
                <h3 className="font-bold text-xl mb-3 tracking-tight">{title}</h3>
                <p className="text-[#8EB69B] leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Meet the Team */}
        <div className="pt-32">
          <div className="flex flex-col items-center justify-center text-center mb-20">
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold pb-6"
            >
              Meet our <span className="text-[#8EB69B]">Team</span>
            </motion.h3>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl max-w-2xl text-[#8EB69B] leading-relaxed"
            >
              Our philosophy is simple — hire a team of diverse, passionate people 
              and foster a culture that empowers you to do your best work.
            </motion.p>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12"
          >
            {[
              { name: "Prof. Mrs Folasade Dahunsi", role: "Founder & CEO" },
              { name: "Dahunsi Ayomiku", role: "Lab Manager" },
              { name: "Adegite Adejire", role: "Hardware Team Lead" },
              { name: "Covenant Joshua", role: "Software Team Lead" }
            ].map((member, idx) => (
              <motion.div 
                variants={itemVariants}
                whileHover={{ y: -10 }}
                key={idx} 
                className="flex flex-col items-center group"
              >
                <div className="relative mb-6">
                  <img src={Ypic} className="rounded-full w-40 h-40 object-cover shadow-2xl border-4 border-white/5 group-hover:border-[#8EB69B]/50 transition-all duration-300" alt={member.name} />
                  <div className="absolute inset-0 rounded-full bg-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="font-bold text-xl pt-4 text-center group-hover:text-[#8EB69B] transition-colors">{member.name}</h3>
                <p className="text-[#8EB69B] font-medium mb-4 uppercase tracking-wider text-xs">{member.role}</p>
                <div className="flex gap-6 text-[#8EB69B] opacity-40 group-hover:opacity-100 transition-opacity">
                  <FaTwitter className="hover:text-white cursor-pointer transition-colors" />
                  <FaLinkedin className="hover:text-white cursor-pointer transition-colors" />
                  <FaFacebook className="hover:text-white cursor-pointer transition-colors" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
