import React from 'react'
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa'

function Hero() {
    return (
        <div className='z-10 flex flex-col-reverse md:flex-row justify-between items-center max-w-6xl mx-auto w-full px-6 min-h-[70vh] gap-10'>
            {/* Left: Text Content */}
            
            <div className="max-w-xl text-left">
                <h1 className="text-4xl font-bold leading-snug text-white flex flex-wrap gap-x-2">
                    <span className="text-orange-500 text-md">Wilson Samuel</span>
                    <span className="font-semibold text-5xl text-white">— Software Engineer</span>
                </h1>
                <p className="text-2xl mt-4 text-white">
                    Turning ideas into impactful software solutions that solve real-world problems.
                </p>

                {/* Buttons */}
                <div className="mt-6 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                    <button className="bg-orange-500 hover:bg-orange-600 font-semibold py-3 px-6 rounded-lg transition duration-300 w-full sm:w-auto">
                        Latest Focus
                    </button>
                    <button className="bg-white hover:bg-gray-200 font-semibold py-3 px-6 rounded-lg transition duration-300 w-full sm:w-auto">
                        View My Work
                    </button>
                </div>

                {/* Social Links */}
                <div className="sm:text-sm text-white mt-6 flex flex-col items-start gap-2">
                    <p>Trace my signals:</p>
                    <div className="flex gap-4">
                        <a href="https://github.com/Sketchy-C" target="_blank" rel="noopener noreferrer">
                            <FaGithub className="text-white text-2xl hover:text-orange-400 transition duration-300" />
                        </a>
                        <a href="https://www.linkedin.com/in/wilson-sam-63b539343/" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin className="text-white text-2xl hover:text-orange-400 transition duration-300" />
                        </a>
                        <a href="https://x.com/Sketchy_C_001" target="_blank" rel="noopener noreferrer">
                            <FaTwitter className="text-white text-2xl hover:text-orange-400 transition duration-300" />
                        </a>
                    </div>
                </div>
            </div>

            {/* Right: Profile Image */}
            <div className="relative group mt-6 md:mt-0">
                <div className="rounded-full border-4 border-orange-500 border-solid group-hover:border-gray-400 group-hover:border-dashed transition duration-500">
                    <img
                        src="./images/wilson.jpg"
                        alt="Wilson Samuel"
                        className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full filter grayscale group-hover:grayscale-0 transition duration-500"
                    />
                </div>
                <div className="absolute inset-0 rounded-full bg-orange-500 opacity-0 group-hover:opacity-10 blur-md transition duration-500"></div>
            </div>
        </div>
    )
}

export default Hero
