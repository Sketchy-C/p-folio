import React, { useState, useRef, useEffect } from 'react';
import './Slide.css';
import { NextIcon } from '../../../UI/Icons';
import { useNavigate } from 'react-router-dom';

function Slide() {
    const nav = useNavigate();
    const [showTooltip, setShowTooltip] = useState(false);
    const hoverTimeout = useRef(null);

    useEffect(() => {
        console.log("Tooltip triggered:", showTooltip);
    }, [showTooltip]);


    const handleMouseEnter = () => {
        hoverTimeout.current = setTimeout(() => {
            setShowTooltip(true)
                ;
        }, 1000); // Show tooltip after 2 seconds
    };

    const handleMouseLeave = () => {
        clearTimeout(hoverTimeout.current);
        setShowTooltip(false);
    };

    return (
        <div className="w-full px-6 py-20 sm:py-6" onClick={() => nav('/skills')}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {/* Tech Stack Label */}
            <div className="max-w-6xl mx-auto">
                <p className="bg-gray-500/20 text-left text-sm md:text-base italic py-1 px-6 rounded-2xl inline-block hover:text-orange-500 cursor-pointer">
                    Tech_stack Exp <NextIcon className="inline ml-5" />
                </p>
            </div>
            {showTooltip && (
                <div className="custom-tooltip absolute z-30 left-1/2 transform -translate-x-1/2 mb-2 bg-orange-500/90 text-white text-sm px-3 py-1 rounded-2xl shadow-lg animate-fadeIn max-w-60">
                    Click to redirect to skills page, See all technologies I work with
                </div>
            )}


            {/* Logo Container */}
            <div className="relative overflow-hidden w-full py-4 max-w-6xl mx-auto bg-black/10 mt-2 rounded-lg">
                {/* Gradient overlays */}
                <div className="absolute left-0 top-0 h-full w-[120px] bg-gradient-to-r from-black to-transparent z-20 pointer-events-none" />
                <div className="absolute right-0 top-0 h-full w-[120px] bg-gradient-to-l from-black to-transparent z-20 pointer-events-none" />


                {/* Logo Track */}
                <div
                    className="slide-track flex gap-10 items-center cursor-pointer px-4 logo-gray"
                >
                    {[...Array(2)].map((_, i) => (
                        <React.Fragment key={i}>
                            <img src="./logos/django.png" alt="Django" className="logo" />
                            <img src="./logos/react.png" alt="React" className="logo" />
                            <img src="./logos/Zebra.webp" alt="Zebra" className="logo" />
                            <img src="./logos/jointech.webp" alt="Jointech" className="logo" />
                            <img src="./logos/nginx.png" alt="Nginx" className="logo" />
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Slide;
