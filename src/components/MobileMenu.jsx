import { useEffect } from "react";

export const MobileMenu = ({ menuOpen, setMenuOpen }) => {

    const navLinks = [
        { href: "#home", label: "Home", delay: "delay-75" },
        { href: "#about", label: "About", delay: "delay-150" },
        { href: "#projects", label: "Projects", delay: "delay-225" },
        { href: "#contact", label: "Contact", delay: "delay-300" }
    ];

    return (
        <div
            className={`fixed inset-0 bg-[rgba(10,10,10,0.98)] backdrop-blur-xl z-40 flex flex-col items-center justify-center transition-all duration-500 ease-in-out ${
                menuOpen
                    ? "opacity-100 pointer-events-auto"
                    : "opacity-0 pointer-events-none"
            }`}
        >
            {/* Animated background gradient */}
            <div className={`absolute inset-0 overflow-hidden transition-opacity duration-500 ${menuOpen ? 'opacity-100' : 'opacity-0'}`}>
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>

            {/* Close button */}
            <button
                onClick={() => setMenuOpen(false)}
                className="absolute top-6 right-6 w-12 h-12 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-white hover:bg-blue-500/10 hover:border-blue-500/50 hover:text-blue-400 transition-all duration-300 focus:outline-none cursor-pointer group"
                aria-label="Close Menu"
            >
                <svg
                    className="w-6 h-6 transition-transform group-hover:rotate-90"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                    />
                </svg>
            </button>

            {/* Navigation links */}
            <div className="relative z-10 flex flex-col items-center space-y-8">
                {navLinks.map((link, index) => (
                    <a
                        key={link.href}
                        href={link.href}
                        onClick={() => setMenuOpen(false)}
                        className={`group relative text-3xl md:text-4xl font-bold text-white transition-all duration-500 ${link.delay} ${
                            menuOpen
                                ? "opacity-100 translate-y-0"
                                : "opacity-0 translate-y-8"
                        }`}
                        style={{
                            transitionDelay: menuOpen ? `${index * 75}ms` : '0ms'
                        }}
                    >
                        <span className="relative z-10 group-hover:text-blue-400 transition-colors duration-300">
                            {link.label}
                        </span>
                        <span className="absolute -inset-4 bg-gradient-to-r from-blue-500/0 via-blue-500/10 to-blue-500/0 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300"></span>
                        <span className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 group-hover:w-full transition-all duration-300"></span>
                    </a>
                ))}
            </div>

            {/* Social links */}
            <div
                className={`absolute bottom-12 flex space-x-4 transition-all duration-500 delay-300 ${
                    menuOpen
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-8"
                }`}
            >
                <a
                    href="https://github.com/niyoxx"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-blue-400 hover:border-blue-400/50 hover:bg-blue-500/10 transition-all duration-300"
                    aria-label="GitHub"
                >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                </a>
            </div>

            {/* Decorative elements */}
            <div className={`absolute inset-0 pointer-events-none transition-opacity duration-700 ${menuOpen ? 'opacity-100' : 'opacity-0'}`}>
                <div className="absolute top-20 left-10 w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                <div className="absolute top-40 right-20 w-1 h-1 bg-cyan-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                <div className="absolute bottom-32 left-16 w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute bottom-20 right-12 w-1 h-1 bg-cyan-300 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
            </div>
        </div>
    );
};