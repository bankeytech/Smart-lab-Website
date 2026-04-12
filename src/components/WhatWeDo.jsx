import React from 'react'
import { useState, useEffect, useCallback } from 'react';
import Hpic from '../assets/hardware.jpg'
import Spic from '../assets/software.jpg'
import Rpic from '../assets/research.jpg'

const WhatWeDo = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const divisions = [
      {
      id: 'Research',
      title: 'Research and Development',
      description: 'We Explore limitless possibilities with our cutting-edge Research and Development services, to drive innovation and shaping the future of technology solutions.',
      image: Rpic,
      imageAlt: 'Research division',
      focusAreas: ['Technology Research', 'Product Innovation', 'Feasibility Studies', 'Emerging Tech Exploration']
    },
    {
      id: 'hardware',
      title: 'Hardware',
      description: 'We design, build, and test physical systems that interact with the real world. Our hardware team focuses on hands-on engineering, prototyping, and experimentation.',
      image: Hpic,
      imageAlt: 'Hardware division',
      focusAreas: ['Robotics & Prototyping', 'Internet of Things (IoT)', 'Embedded Systems', 'Drone Technology']
    },
    {
      id: 'software',
      title: 'Software',
      description: 'We build intelligent software systems that power modern applications. From user interfaces to backend systems and AI models, our software team turns ideas into scalable solutions.',
      image: Spic,
      imageAlt: 'Software division',
      focusAreas: ['UI/UX Design', 'Frontend & Backend Development', 'Artificial Intelligence & Machine Learning', 'Data Processing & Automation']
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % divisions.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, divisions.length]);

  const goToSlide = useCallback((index) => {
    setCurrentIndex(index);
  }, []);

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + divisions.length) % divisions.length);
  }, [divisions.length]);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % divisions.length);
  }, [divisions.length]);

  // Touch handlers for mobile swipe
  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) goToNext();
    if (isRightSwipe) goToPrevious();
  };
  return (
     <section 
      className="bg-gradient-to-bl from-[#163832] to-[#051F20] py-12 sm:py-16 lg:py-20"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="bg-[#DAF1DE] rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 overflow-hidden">
          
          {/* Header */}
          <h2 className="text-[#163832] text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 sm:mb-12">
            What We Do
          </h2>

          {/* Carousel Container */}
          <div 
            className="relative"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            {/* Slides Container */}
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-out will-change-transform"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {divisions.map((division, index) => (
                  <div 
                    key={division.id}
                    className="w-full flex-shrink-0 px-2 sm:px-4"
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
                      
                      {/* Content - Order changes based on index for visual variety */}
                      <div className={`text-[#163832] ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                        <h3 className="font-semibold text-xl sm:text-2xl lg:text-3xl mb-3 sm:mb-4">
                          {division.title}
                        </h3>
                        <p className="text-sm sm:text-base lg:text-lg mb-4 sm:mb-6 leading-relaxed text-[#163832]/90">
                          {division.description}
                        </p>

                        <div className="bg-white/30 rounded-xl p-4 sm:p-6 backdrop-blur-sm">
                          <p className="font-semibold mb-2 sm:mb-3 text-sm sm:text-base">Focus Areas:</p>
                          <ul className="space-y-1.5 sm:space-y-2">
                            {division.focusAreas.map((area, idx) => (
                              <li 
                                key={idx} 
                                className="flex items-start text-xs sm:text-sm lg:text-base"
                              >
                                <span className="inline-block w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#163832] rounded-full mt-1.5 sm:mt-2 mr-2 sm:mr-3 flex-shrink-0"></span>
                                {area}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Image */}
                      <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                        <div className="relative group">
                          <div className="absolute inset-0 bg-gradient-to-tr from-[#163832]/20 to-transparent rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          <img
                            src={division.image}
                            alt={division.imageAlt}
                            className="w-full h-48 sm:h-64 lg:h-80 object-cover rounded-2xl sm:rounded-3xl shadow-lg sm:shadow-xl transform transition-transform duration-500 group-hover:scale-[1.02]"
                          />
                        </div>
                      </div>

                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows - Desktop */}
            <button
              onClick={goToPrevious}
              className="hidden lg:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 xl:-translate-x-6 w-10 h-10 xl:w-12 xl:h-12 bg-[#DAF1DE] border-2 border-[#163832] shadow-lg rounded-full items-center justify-center text-[#163832] hover:bg-[#163832] hover:text-white transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#163832] focus:ring-offset-2"
              aria-label="Previous slide"
            >
              <svg className="w-5 h-5 xl:w-6 xl:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={goToNext}
              className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 xl:translate-x-6 w-10 h-10 xl:w-12 xl:h-12 bg-[#DAF1DE] border-2 border-[#163832] shadow-lg rounded-full items-center justify-center text-[#163832] hover:bg-[#163832] hover:text-white transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#163832] focus:ring-offset-2"
              aria-label="Next slide"
            >
              <svg className="w-5 h-5 xl:w-6 xl:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Mobile Navigation Arrows */}
            <div className="flex lg:hidden justify-center gap-4 mt-6">
              <button
                onClick={goToPrevious}
                className="w-10 h-10 bg-[#DAF1DE] border-2 border-[#163832] shadow-md rounded-full flex items-center justify-center text-[#163832] active:scale-95 transition-transform"
                aria-label="Previous slide"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={goToNext}
                className="w-10 h-10 bg-[#DAF1DE] border-2 border-[#163832] shadow-md rounded-full flex items-center justify-center text-[#163832] active:scale-95 transition-transform"
                aria-label="Next slide"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 sm:gap-3 mt-6 sm:mt-8">
              {divisions.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`transition-all duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#163832] focus:ring-offset-2 ${
                    index === currentIndex 
                      ? 'w-6 sm:w-8 h-2 sm:h-2.5 bg-[#163832]' 
                      : 'w-2 sm:w-2.5 h-2 sm:h-2.5 bg-[#163832]/30 hover:bg-[#163832]/50'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Progress Bar */}
            <div className="mt-4 sm:mt-6 h-1 bg-[#163832]/10 rounded-full overflow-hidden">
              <div 
                className="h-full bg-[#163832] transition-all duration-300 ease-out"
                style={{ width: `${((currentIndex + 1) / divisions.length) * 100}%` }}
              />
            </div>

            {/* Slide Counter */}
            <div className="text-center mt-3 sm:mt-4">
              <span className="text-[#163832]/60 text-xs sm:text-sm font-medium">
                {currentIndex + 1} / {divisions.length}
              </span>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default WhatWeDo
