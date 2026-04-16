import React, { useState, useEffect, useRef } from 'react';
import { 
  FaLinkedin, 
  FaTwitter, 
  FaGithub, 
  FaChevronLeft, 
  FaChevronRight, 
  FaQuoteLeft,
  FaGlobe,
  FaEnvelope,
  FaMapMarkerAlt,
  FaGraduationCap,
  FaBriefcase
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from 'react-router-dom'

// Alumni Data with enhanced details
const alumniData = [
  {
    id: 1,
    name: "Sodiq Eniola",
    role: "Software Engineer",
    company: "Google",
    batch: "Class of 2022",
    image: "https://kimi-web-img.moonshot.cn/img/heroshotphotography.com/f1ca7bd20109b06d8e11d6336f6c99eefbaec7d7.jpg",
    quote: "The mentorship here transformed my career trajectory completely.",
    linkedin: "#",
    twitter: "#"
  },
  {
    id: 2,
    name: "Victoria Adeyemi",
    role: "Product Manager",
    company: "Microsoft",
    batch: "Class of 2023",
    image: "https://kimi-web-img.moonshot.cn/img/img.freepik.com/c9ad6da0ce9f45cf834cd7d33043c100f2b60aa0.jpg",
    quote: "From intern to PM, this community believed in my potential.",
    linkedin: "#",
    twitter: "#"
  },
  {
    id: 3,
    name: "Isaiah Johnson",
    role: "FullStack Developer",
    company: "Netflix",
    batch: "Class of 2024",
    image: "https://kimi-web-img.moonshot.cn/img/t3.ftcdn.net/0ce9154ac87c256b665af2d220a3a754cb1c95a8.jpg",
    quote: "The network I built here is invaluable to this day.",
    linkedin: "#",
    twitter: "#"
  },
  {
    id: 4,
    name: "Cospis Williams",
    role: "Network Manager",
    company: "Airbnb",
    batch: "Class of 2023",
    image: "https://kimi-web-img.moonshot.cn/img/media.istockphoto.com/7db077bed6fc477947b2176e0ea0bf1731fc68f3.jpg",
    quote: "Design thinking I learned here shapes how I solve problems.",
    linkedin: "#",
    twitter: "#"
  },
  {
    id: 5,
    name: "Emmanuel {Emzy}",
    role: "Roboticist",
    company: "Amazon",
    batch: "Class of 2024",
    image: "https://kimi-web-img.moonshot.cn/img/media.istockphoto.com/db168f1443de7ace6cbb1096e293cedda354b197.jpg",
    quote: "Hands-on experience prepared me for real-world challenges.",
    linkedin: "#",
    twitter: "#"
  },
  {
    id: 6,
    name: "Femi Adeleke",
    role: "Embedded Systems Engineer",
    company: "TechStart Africa",
    batch: "Class of 2024",
    image: "https://kimi-web-img.moonshot.cn/img/www.corporatephotographerslondon.com/05bad0ec0bb60c784975087a8d460b00cf5ed192.jpg",
    quote: "This is where I learned that leadership starts with service.",
    linkedin: "#",
    twitter: "#"
  },
  {
    id: 7,
    name: "Righteous Peters",
    role: "Graphics Designer",
    company: "OpenAI",
    batch: "Class of 2024",
    image: "https://kimi-web-img.moonshot.cn/img/www.shutterstock.com/eabda5207203f2e75c766f78769e18e1179e5b6e.jpg",
    quote: "The AI ethics foundation I got here guides my work daily.",
    linkedin: "#",
    twitter: "#"
  },
  {
    id: 8,
    name: "David Chen",
    role: "Full Stack Developer",
    company: "Stripe",
    batch: "Class of 2022",
    image: "https://kimi-web-img.moonshot.cn/img/thumbs.dreamstime.com/b119ce2b7d35e76d54449ee114abca5aae517d99.jpg",
    quote: "Code reviews here taught me the value of clean architecture.",
    linkedin: "#",
    twitter: "#"
  }
];

// Interns Data
const internsData = [
  { id: 1, name: "Damilol", role: "Frontend Intern", dept: "Engineering", image: "https://kimi-web-img.moonshot.cn/img/img.freepik.com/fbd53cb1c762c79bfe2a79d0e318a62dd283db56.jpg" },
  { id: 2, name: "Bankey", role: "Backend Intern", dept: "Engineering", image: "https://kimi-web-img.moonshot.cn/img/www.shutterstock.com/fd736b5d2ef9b0347086e7b02cdd4c4ed915457e.jpg" },
  { id: 3, name: "Michelle", role: "Design Intern", dept: "Product", image: "https://kimi-web-img.moonshot.cn/img/img.freepik.com/c9ad6da0ce9f45cf834cd7d33043c100f2b60aa0.jpg" },
  { id: 4, name: "Micah", role: "Data Intern", dept: "Analytics", image: "https://kimi-web-img.moonshot.cn/img/t3.ftcdn.net/0ce9154ac87c256b665af2d220a3a754cb1c95a8.jpg" },
  { id: 5, name: "Tessy", role: "Marketing Intern", dept: "Growth", image: "https://kimi-web-img.moonshot.cn/img/img.freepik.com/fbd53cb1c762c79bfe2a79d0e318a62dd283db56.jpg" },
  { id: 6, name: "Mariam", role: "Research Intern", dept: "R&D", image: "https://kimi-web-img.moonshot.cn/img/www.corporatephotographerslondon.com/05bad0ec0bb60c784975087a8d460b00cf5ed192.jpg" },
  { id: 7, name: "Mofifunoluwa", role: "DevOps Intern", dept: "Infrastructure", image: "https://kimi-web-img.moonshot.cn/img/media.istockphoto.com/db168f1443de7ace6cbb1096e293cedda354b197.jpg" },
  { id: 8, name: "Ceejay", role: "Mobile Intern", dept: "Engineering", image: "https://kimi-web-img.moonshot.cn/img/heroshotphotography.com/f1ca7bd20109b06d8e11d6336f6c99eefbaec7d7.jpg" },
  { id: 9, name: "Tomisin", role: "QA Intern", dept: "Engineering", image: "https://kimi-web-img.moonshot.cn/img/media.istockphoto.com/7db077bed6fc477947b2176e0ea0bf1731fc68f3.jpg" },
  { id: 10, name: "Titilayo Ayomide", role: "Content Intern", dept: "Marketing", image: "https://kimi-web-img.moonshot.cn/img/www.shutterstock.com/eabda5207203f2e75c766f78769e18e1179e5b6e.jpg" },
  { id: 11, name: "Job Adejire", role: "Security Intern", dept: "Infosec", image: "https://kimi-web-img.moonshot.cn/img/thumbs.dreamstime.com/b119ce2b7d35e76d54449ee114abca5aae517d99.jpg" },
  { id: 12, name: "Toluwani Joshua", role: "AI/ML Intern", dept: "Research", image: "https://kimi-web-img.moonshot.cn/img/t3.ftcdn.net/0ce9154ac87c256b665af2d220a3a754cb1c95a8.jpg" }
];

// Stats Data
// const stats = [
//   { label: "Active Alumni", value: "500+", icon: FaGraduationCap },
//   { label: "Current Interns", value: "50+", icon: FaBriefcase },
//   { label: "Countries", value: "25+", icon: FaGlobe },
//   { label: "Hiring Partners", value: "100+", icon: FaMapMarkerAlt }
// ];

const Member = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [selectedIntern, setSelectedIntern] = useState(null);
  const [filter, setFilter] = useState("All");
  const carouselRef = useRef(null);

  // Auto-play carousel
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % alumniData.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % alumniData.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + alumniData.length) % alumniData.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  // Filter interns
  const filteredInterns = filter === "All" 
    ? internsData 
    : internsData.filter(intern => intern.dept === filter);

//   const departments = ["All", ...new Set(internsData.map(i => i.dept))];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#163832] to-[#051F20]  overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative py-20 max-w-screen-xl mx-auto px-6 md:px-10 lg:px-20 text-[#DAF1DE]">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-500 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-600 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-[#DAF1DE]">
              Meet Our Alumni
            </h1>
            <p className="text-xl md:text-2xl text-[#8EB69B] max-w-3xl mx-auto leading-relaxed">
                Success stories from graduates who have gone on to impact the global tech landscape.
            </p>
          </motion.div>

          
          <div className="relative group/carousel mt-16 px-4 md:px-14">
            {/* Navigation Buttons - Left */}
            <button 
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-20 p-4 rounded-full bg-white/5 hover:bg-emerald-500/20 border border-white/10 hover:border-emerald-500/50 transition-all duration-300 group hidden md:flex"
            >
              <FaChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-gray-400 group-hover:text-emerald-400" />
            </button>

            {/* Navigation Buttons - Right */}
            <button 
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-20 p-4 rounded-full bg-white/5 hover:bg-emerald-500/20 border border-white/10 hover:border-emerald-500/50 transition-all duration-300 group hidden md:flex"
            >
              <FaChevronRight className="w-5 h-5 md:w-6 md:h-6 text-gray-400 group-hover:text-emerald-400" />
            </button>

            {/* Carousel Card */}
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0d1f1c] to-[#122923] border border-white/5 p-8 md:p-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="flex flex-col lg:flex-row items-center gap-12"
              >
                {/* Image */}
                <div className="relative w-full lg:w-1/2">
                  <div className="relative aspect-square max-w-md mx-auto">
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-full blur-2xl"></div>
                    <img 
                      src={alumniData[currentSlide].image} 
                      alt={alumniData[currentSlide].name}
                      className="relative w-full h-full object-cover rounded-3xl shadow-2xl border-2 border-white/10"
                    />
                    <div className="absolute -bottom-4 -right-4 bg-emerald-500 text-white px-6 py-2 rounded-full font-semibold shadow-lg">
                      {alumniData[currentSlide].batch}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="w-full lg:w-1/2 text-center lg:text-left">
                  <FaQuoteLeft className="w-12 h-12 text-emerald-500/30 mb-6 mx-auto lg:mx-0" />
                  <p className="text-2xl md:text-3xl font-light italic text-gray-300 mb-8 leading-relaxed">
                    "{alumniData[currentSlide].quote}"
                  </p>
                  <div className="mb-6">
                    <h3 className="text-3xl font-bold text-white mb-2">{alumniData[currentSlide].name}</h3>
                    <p className="text-emerald-400 text-xl mb-1">{alumniData[currentSlide].role}</p>
                    <p className="text-gray-500 text-lg">{alumniData[currentSlide].company}</p>
                  </div>
                  <div className="flex gap-4 justify-center lg:justify-start">
                    <a href={alumniData[currentSlide].linkedin} className="p-3 rounded-full bg-white/5 hover:bg-[#8EB69B] transition-all duration-300 border border-white/10 hover:border-[#8EB69B]">
                      <FaLinkedin className="w-6 h-6" />
                    </a>
                    <a href={alumniData[currentSlide].twitter} className="p-3 rounded-full bg-white/5 hover:bg-[#8EB69B] transition-all duration-300 border border-white/10 hover:border-[#8EB69B]">
                      <FaTwitter className="w-6 h-6" />
                    </a>
                    <a href="#" className="p-3 rounded-full bg-white/5 hover:bg-[#8EB69B] transition-all duration-300 border border-white/10 hover:border-gray-500">
                      <FaGithub className="w-6 h-6" />
                    </a>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-12">
              {alumniData.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => goToSlide(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    idx === currentSlide ? "w-8 bg-emerald-500" : "w-2 bg-white/20 hover:bg-white/40"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
        </div>
      </section>
      

      {/* Interns Section */}
      <section className="py-24 px-6 md:px-10 lg:px-20 bg-gradient-to-br from-[#051F20] to-[#163832]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#DAF1DE]">Our Interns</h2>
            <p className="text-[#8EB69B] text-lg max-w-2xl mx-auto mb-8">
              Meet our current cohort of talented interns bringing fresh perspectives and energy to our mission.
            </p>
            
          </div>

          {/* Interns Grid */}
          <motion.div 
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            <AnimatePresence>
              {filteredInterns.map((intern) => (
                <motion.div
                  key={intern.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  whileHover={{ y: -8 }}
                  onClick={() => setSelectedIntern(intern)}
                  className="group relative bg-gradient-to-br from-[#0d1f1c] to-[#0a1815] rounded-2xl p-6 border border-white/5 hover:border-emerald-500/30 transition-all duration-300 cursor-pointer overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#051F20] to-[#163832] transition-all duration-500"></div>
                  
                  <div className="relative flex flex-col items-center">
                    <div className="relative mb-4">
                      <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white/5 group-hover:border-emerald-500/30 transition-all duration-300 shadow-xl">
                        <img 
                          src={intern.image} 
                          alt={intern.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <div className="absolute bottom-0 right-0 bg-emerald-500 text-white text-xs px-3 py-1 rounded-full font-medium">
                        {intern.dept}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-emerald-400 transition-colors">
                      {intern.name}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4">{intern.role}</p>
                    
                    <div className="flex gap-3 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                      <button className="p-2 rounded-full bg-white/5 hover:bg-[#8EB69B] transition-colors border border-white/10">
                        <FaLinkedin className="w-4 h-4" />
                      </button>
                      <button className="p-2 rounded-full bg-white/5 hover:bg-[#8EB69B] transition-colors border border-white/10">
                        <FaEnvelope className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredInterns.length === 0 && (
            <div className="text-center py-20 text-gray-500">
              No interns found in this department.
            </div>
          )}
        </div>
      </section>

      {/* Join CTA Section */}
        <section className='bg-gradient-to-br from-[#051F20] to-[#163832] py-12 md:py-20 '>
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
                      </div>
                   </div>
              </div>
          </section>

      {/* Intern Detail Modal */}
      <AnimatePresence>
        {selectedIntern && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedIntern(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-gradient-to-br from-[#0d1f1c] to-[#0a1815] rounded-3xl p-8 max-w-md w-full border border-white/10 shadow-2xl relative"
            >
              <button 
                onClick={() => setSelectedIntern(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
              >
                <span className="text-2xl leading-none">&times;</span>
              </button>
              
              <div className="text-center">
                <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-emerald-500/30 mx-auto mb-6 shadow-xl">
                  <img 
                    src={selectedIntern.image} 
                    alt={selectedIntern.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{selectedIntern.name}</h3>
                <p className="text-emerald-400 font-medium mb-1">{selectedIntern.role}</p>
                <p className="text-gray-500 text-sm mb-6">{selectedIntern.dept} Department</p>
                
                <div className="flex gap-4 justify-center mb-6">
                  <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#0077b5] text-white text-sm font-medium hover:opacity-90 transition-opacity">
                    <FaLinkedin className="w-4 h-4" />
                    Connect
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white text-sm font-medium hover:bg-white/20 transition-colors border border-white/20">
                    <FaEnvelope className="w-4 h-4" />
                    Message
                  </button>
                </div>
                
                <p className="text-gray-400 text-sm leading-relaxed">
                  Passionate about creating impactful solutions and learning from industry experts. 
                  Currently contributing to innovative projects in the {selectedIntern.dept} team.
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Member;