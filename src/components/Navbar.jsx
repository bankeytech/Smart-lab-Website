import React, { useState } from 'react'
import Lpic from "../assets/smart_lab_logo-X.png"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
    <header className=" bg-[var(--dark-green)] text-[var(--light-mint)] ">
        <div className="mx-auto flex h-16 max-w-7xl items-center gap-8 px-4 sm:px-6 lg:px-8">
            <a className="block" href="#">
                <span className="sr-only">Home</span>
                <img src={Lpic} className="w-12 rounded-2xl"/>
            </a>

            {/* Centered menu links */}
            <div className="flex flex-1 justify-center md:justify-center">
                <nav aria-label="Global" className="hidden md:block ">
                    <ul className="flex items-center gap-10 text-sm">
                        <li>
                            <a className="  " href="#"> Home </a>
                        </li>

                        <li>
                            <a className=" " href="#"> Projects </a>
                        </li>

                        <li>
                            <a className=" " href="#"> Divisions </a>
                        </li>

                        <li>
                            <a className=" " href="#"> About </a>
                        </li>

                        <li>
                            <a className=" " href="#"> Contact </a>
                        </li>
                    </ul>
                </nav>
            </div>

            {/* <!-- Right aligned login/register buttons --> */}
            <div className="flex items-center gap-4">
                <div className="sm:flex sm:gap-4">
                    <a className="block rounded-md px-5 py-2.5 font-semibold bg-[var(--soft-green)] text-[var(--dark-green)] hover:bg-[var(--light-mint)] transition" href="#">
                        Join us
                    </a>
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
                            <a className="block" href="#"> Home </a>
                        </li>
                        <li>
                            <a className="block" href="#"> Projects </a>
                        </li>
                        <li>
                            <a className="block" href="#"> Divisions </a>
                        </li>
                        <li>
                            <a className="block" href="#"> About </a>
                        </li>
                        <li>
                            <a className="block" href="#"> Contact </a>
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