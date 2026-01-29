import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Lpic from "../assets/smart_lab_logo-X.png"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
    <header className=" bg-[var(--dark-green)] text-[var(--light-mint)] ">
        <div className="mx-auto flex h-16 max-w-7xl items-center gap-8 px-4 sm:px-6 lg:px-8">
            <Link className="block" to="/">
                <span className="sr-only">Home</span>
                <img src={Lpic} className="w-12 rounded-2xl"/>
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
                            <div className="absolute left-0 mt-2 w-48 bg-[var(--dark-green)] border border-[var(--light-mint)] rounded shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                                <Link to="/divisions/hardware" className="block px-4 py-2 hover:bg-[var(--soft-green)] hover:text-[var(--dark-green)] transition">
                                    Hardware
                                </Link>
                                <Link to="/divisions/software" className="block px-4 py-2 hover:bg-[var(--soft-green)] hover:text-[var(--dark-green)] transition">
                                    Software
                                </Link>
                            </div>
                        </li>

                        <li>
                            <Link className=" " to="/about"> About </Link>
                        </li>

                        <li>
                            <Link className=" " to="/contact"> Contact </Link>
                        </li>
                    </ul>
                </nav>
            </div>

            {/* <!-- Right aligned login/register buttons --> */}
            <div className="flex items-center gap-4">
                <div className="sm:flex sm:gap-4">
                    <Link className="block rounded-md px-5 py-2.5 font-semibold bg-[var(--soft-green)] text-[var(--dark-green)] hover:bg-[var(--light-mint)] transition" to="/join-us">
                        Join us
                    </Link>
                </div>

                <button 
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="block rounded-sm p-2.5 bg-[var(--dark-green)] text-[var(--light-mint)] transition md:hidden"
                >
                    <span className="sr-only">Toggle menu</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
            <div className="md:hidden border-t border-gray-700 bg-[var(--dark-green)]">
                <nav aria-label="Global">
                    <ul className="flex flex-col items-center gap-6 py-4 text-sm">
                        <li>
                            <Link className="block" to="/" onClick={() => setIsMenuOpen(false)}> Home </Link>
                        </li>
                        <li>
                            <Link className="block" to="/projects" onClick={() => setIsMenuOpen(false)}> Projects </Link>
                        </li>
                        <li className="text-center w-full">
                            <span className="block text-gray-400 mb-2">Divisions</span>
                            <div className="flex flex-col gap-2 bg-[#0a2e2f] py-2 rounded">
                                <Link className="block hover:text-[var(--light-mint)]" to="/divisions/hardware" onClick={() => setIsMenuOpen(false)}> Hardware </Link>
                                <Link className="block hover:text-[var(--light-mint)]" to="/divisions/software" onClick={() => setIsMenuOpen(false)}> Software </Link>
                            </div>
                        </li>
                        <li>
                            <Link className="block" to="/about" onClick={() => setIsMenuOpen(false)}> About </Link>
                        </li>
                        <li>
                            <Link className="block" to="/contact" onClick={() => setIsMenuOpen(false)}> Contact </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        )}
    </header>

    </div>
  )
}

export default Navbar
