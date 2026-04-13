import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Lpic from "../assets/smart_lab_logo-X.png"
import { motion, AnimatePresence } from 'framer-motion'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDivisionsOpen, setIsDivisionsOpen] = useState(false);

  return (
    <div>
    <header className="fixed top-0 left-0 right-0 z-50 bg-(--dark-green) text-(--light-mint) ">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-2 sm:px-6 lg:px-8">
            <Link className="block" to="/">
                <span className="sr-only">Home</span>
                <div className='flex items-center gap-1.5 sm:gap-2'>
                    <img src={Lpic} className="w-8 sm:w-10 lg:w-12 rounded-xl sm:rounded-2xl"/>
                    <h1 className='text-[10px] sm:text-xs lg:text-sm font-bold leading-tight'>Smart Systems <br />Research Laboratory</h1>
                </div>
            </Link>

            {/* Centered menu links */}
            <div className="flex flex-1 justify-center md:justify-center">
                <nav aria-label="Global" className="hidden md:block ">
                    <ul className="flex items-center gap-10 text-sm">
                        <li>
                            <Link className="  " to="/"> Home </Link>
                        </li>

                        <li>
                            <Link className=" " to="/projects"> Projects </Link>
                        </li>

                        <li className="relative group">
                            <button className="flex items-end justify-center gap-1"> 
                                Divisions 
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                </svg>
                            </button>
                            {/* Dropdown Menu */}
                            <div className="absolute left-0 mt-2 w-48 bg-(--dark-green) border border-(--light-mint) rounded shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                                <Link to="/divisions/hardware" className="block px-4 py-2 hover:bg-(--soft-green) hover:text-(--dark-green) transition">
                                    Hardware
                                </Link>
                                <Link to="/divisions/software" className="block px-4 py-2 hover:bg-(--soft-green) hover:text-(--dark-green) transition">
                                    Software
                                </Link>
                            </div>
                        </li>

                        <li>
                            <Link className=" " to="/about"> About </Link>
                        </li>

                        <li>
                            <Link className=" " to="/member"> Team </Link>
                        </li>

                        <li>
                            <Link className=" " to="/contact"> Contact </Link>
                        </li>
                    </ul>
                </nav>
            </div>

            {/* <!-- Right aligned login/register buttons --> */}
            <div className="flex items-center gap-2 sm:gap-4">
                <div className="flex sm:gap-4">
                    <Link className="block rounded-md px-3 py-2 sm:px-5 sm:py-2.5 text-xs sm:text-sm font-semibold bg-(--soft-green) text-(--dark-green) hover:bg-(--light-mint) transition" to="/join-us">
                        Join us
                    </Link>
                </div>

                <button 
                    onClick={() => {
                        setIsMenuOpen(!isMenuOpen);
                        setIsDivisionsOpen(false); // Reset dropdown when main menu toggles
                    }}
                    className="block rounded-sm p-2 bg-(--dark-green) text-(--light-mint) transition md:hidden"
                >
                    <span className="sr-only">Toggle menu</span>
                    {isMenuOpen ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    )}
                </button>
            </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
            {isMenuOpen && (
                <motion.div 
                    initial={{ x: '-100%', opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: '-100%', opacity: 0 }}
                    transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                    className="md:hidden fixed inset-0 top-16 z-40 bg-(--dark-green) h-[calc(100vh-64px)] overflow-y-auto"
                >
                    <nav aria-label="Global">
                        <ul className="flex flex-col items-center gap-8 py-8 px-6 text-4xl font-medium text-[#DAF1DE]">
                            <motion.li initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
                                <Link className="block py-2" to="/" onClick={() => setIsMenuOpen(false)}> Home </Link>
                            </motion.li>
                            <motion.li initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}>
                                <Link className="block py-2" to="/projects" onClick={() => setIsMenuOpen(false)}> Projects </Link>
                            </motion.li>
                            <motion.li 
                                initial={{ opacity: 0, x: -40 }} 
                                animate={{ opacity: 1, x: 0 }} 
                                transition={{ delay: 0.6 }}
                                className="text-center w-full"
                            >
                                <button 
                                    onClick={() => setIsDivisionsOpen(!isDivisionsOpen)}
                                    className="flex items-center justify-center gap-1 w-full py-2 focus:outline-none"
                                >
                                    <span>Divisions</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-5 h-5 transition-transform duration-300 ${isDivisionsOpen ? 'rotate-180' : ''}`}>
                                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                    </svg>
                                </button>
                                {isDivisionsOpen && (
                                    <div className="flex flex-col gap-3 bg-[#0a2e2f] py-6 rounded-2xl md:bg-transparent border border-white/5 md:border-none shadow-inner animate-in fade-in slide-in-from-top-4 duration-300">
                                        <Link className="block px-4 py-2 hover:text-(--light-mint) transition-colors text-base" to="/divisions/hardware" onClick={() => setIsMenuOpen(false)}> Hardware </Link>
                                        <Link className="block px-4 py-2 hover:text-(--light-mint) transition-colors text-base" to="/divisions/software" onClick={() => setIsMenuOpen(false)}> Software </Link>
                                    </div>
                                )}
                            </motion.li>
                            <motion.li initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6 }}>
                                <Link className="block py-2" to="/about" onClick={() => setIsMenuOpen(false)}> About </Link>
                            </motion.li>
                            <motion.li initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.8 }}>
                                <Link className="block py-2" to="/member" onClick={() => setIsMenuOpen(false)}> Team </Link>
                            </motion.li>
                            <motion.li initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.0 }}>
                                <Link className="block py-2" to="/contact" onClick={() => setIsMenuOpen(false)}> Contact </Link>
                            </motion.li>
                        </ul>
                    </nav>
                </motion.div>
            )}
        </AnimatePresence>
    </header>

    </div>
  )
}

export default Navbar
