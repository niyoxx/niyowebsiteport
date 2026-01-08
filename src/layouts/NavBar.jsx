import { useState, useEffect } from "react";

export const NavBar = ({ menuOpen, setMenuOpen }) => {
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
    }, [menuOpen]);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);

            // Detect active section
            const sections = ["home", "about", "projects", "contact"];
            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 100 && rect.bottom >= 100) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { href: "#home", label: "Home" },
        { href: "#about", label: "About" },
        { href: "#projects", label: "Projects" },
        { href: "#contact", label: "Contact" }
    ];

    return (
        <nav
            className={`fixed top-0 w-full z-40 transition-all duration-300 ${
                scrolled
                    ? "bg-[rgba(10,10,10,0.95)] backdrop-blur-xl border-b border-white/10 shadow-lg"
                    : "bg-[rgba(10,10,10,0.8)] backdrop-blur-lg border-b border-white/5"
            }`}
        >
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    <a
                        href="#home"
                        className="font-mono text-xl font-bold text-white group relative"
                    >
                        Niyontsinzi{" "}
                        <span className="text-blue-500 group-hover:text-cyan-400 transition-colors">
                            White
                        </span>
                        <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 group-hover:w-full transition-all duration-300"></div>
                    </a>

                    {/* Hamburger Menu Button */}
                    <button
                        className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 hover:border-blue-500/50 hover:bg-blue-500/10 transition-all duration-300 cursor-pointer z-50"
                        onClick={() => setMenuOpen((prev) => !prev)}
                        aria-label="Toggle menu"
                    >
                        <div className="w-5 h-4 relative flex flex-col justify-between">
                            <span
                                className={`w-full h-0.5 bg-white rounded transition-all duration-300 ${
                                    menuOpen ? "rotate-45 translate-y-1.5" : ""
                                }`}
                            ></span>
                            <span
                                className={`w-full h-0.5 bg-white rounded transition-all duration-300 ${
                                    menuOpen ? "opacity-0" : ""
                                }`}
                            ></span>
                            <span
                                className={`w-full h-0.5 bg-white rounded transition-all duration-300 ${
                                    menuOpen ? "-rotate-45 -translate-y-1.5" : ""
                                }`}
                            ></span>
                        </div>
                    </button>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-1">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                                    activeSection === link.href.slice(1)
                                        ? "text-blue-400"
                                        : "text-gray-300 hover:text-white"
                                }`}
                            >
                                <span
                                    className={`absolute inset-0 rounded-lg bg-blue-500/10 transition-opacity duration-300 -z-10 ${
                                        activeSection === link.href.slice(1)
                                            ? "opacity-100"
                                            : "opacity-0 hover:opacity-100"
                                    }`}
                                ></span>
                                {activeSection === link.href.slice(1) && (
                                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-blue-500 rounded-full"></span>
                                )}
                                <span className="relative z-10">{link.label}</span>
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            {/* Progress bar */}
            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-white/5">
                <div
                    className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-300"
                    style={{
                        width: `${
                            (window.scrollY /
                                (document.documentElement.scrollHeight -
                                    window.innerHeight)) *
                            100
                        }%`
                    }}
                ></div>
            </div>
        </nav>
    );
};