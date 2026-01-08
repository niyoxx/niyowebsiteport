import React from 'react'
import myPhoto from '../assets/propic.jpg'
import { RevealOnScroll } from '../components/RevealOnScroll';

export const HomePage = () => {

    return (
        <section
            id="home"
            className="min-h-screen flex items-center justify-center px-8 relative overflow-hidden"
        >
            {/* Animated background gradient orbs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 -left-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>

            <RevealOnScroll>
                <div className="flex flex-col md:flex-row items-center md:items-start md:justify-between max-w-6xl w-full relative z-10">

                    {/* LEFT - Text */}
                    <div className="md:w-1/2 text-center md:text-left">
                        
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500 bg-clip-text text-transparent leading-tight animate-gradient bg-[length:200%_auto]">
                            Hi, I am Niyo White
                        </h1>

                        <p className="text-gray-300 text-lg mb-4 max-w-lg">
                            An Aspiring <span className='text-blue-500 font-semibold'>Software Developer</span>
                        </p>

                        <p className="text-gray-400 text-base mb-8 max-w-lg">
                            Passionate about creating impactful web applications and bringing ideas to life through code.
                        </p>

                        <div className="flex justify-center md:justify-start space-x-4">
                            <a
                                href="#projects"
                                className="group bg-blue-500 text-white py-3 px-6 rounded-lg font-medium transition-all duration-300 relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_25px_rgba(59,130,246,0.5)]"
                            >
                                <span className="relative z-10">View Projects</span>
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </a>

                            <a
                                href="#contact"
                                className="group border-2 border-blue-500/50 text-blue-400 py-3 px-6 rounded-lg font-medium transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:bg-blue-500/10 hover:border-blue-400"
                            >
                                Contact Me
                            </a>
                        </div>

                        {/* Social links */}
                        <div className="flex justify-center md:justify-start space-x-4 mt-8">
                            <a
                                href="https://github.com/niyoxx"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-blue-400 hover:border-blue-400/50 hover:bg-blue-500/10 transition-all duration-300"
                                aria-label="GitHub"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* RIGHT - Image */}
                    <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
                        <div className="relative">
                            {/* Glow effect behind image */}
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full blur-2xl opacity-20 animate-pulse"></div>
                            
                            {/* Image container */}
                            <div className="relative">
                                <img
                                    src={myPhoto}
                                    alt="Niyo White"
                                    className="w-70 h-80 rounded-full shadow-2xl object-cover border-4 border-white/10 hover:border-blue-500/30 transition-all duration-300 hover:scale-105"
                                />
                                {/* Decorative ring */}
                                <div className="absolute inset-0 rounded-full border-2 border-blue-500/20 animate-ping" style={{ animationDuration: '3s' }}></div>
                            </div>
                        </div>
                    </div>

                </div>
            </RevealOnScroll>
        </section>
    );
};