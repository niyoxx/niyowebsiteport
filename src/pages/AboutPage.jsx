import { RevealOnScroll } from "../components/RevealOnScroll"

export const AboutPage = () => {

    const frontendSkills = [
        { name: "React", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "HTML", level: 95 },
        { name: "CSS", level: 90 }
    ]

    const backendSkills = [
        { name: "Java", level: 85 },
        { name: "SpringBoot", level: 80 },
        { name: "Node.JS", level: 75 },
        { name: "Python", level: 70 },
        { name: "PostgreSQL", level: 80 }
    ]

    const toolsSkills = [
        "Vite",
        "VSCode",
        "Eclipse",
        "Bootstrap",
        "Git",
        "Tailwind CSS"
    ]

    const certSkills = [
        {
            title: "Introduction to Front-End Development",
            org: "Coursera",
            year: "2024"
        },
        {
            title: "Introduction to Software Engineering",
            org: "Coursera",
            year: "2024"
        }
    ]

    return (
        <section 
            id="about" 
            className="min-h-screen flex items-center justify-center py-20 relative overflow-hidden"
        >
            {/* Animated background gradient orbs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>

            <RevealOnScroll>
                <div className="max-w-4xl mx-auto px-4 relative z-10">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                            About Me
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Passionate developer dedicated to creating impactful solutions
                        </p>
                    </div>

                    {/* Introduction Card */}
                    <div className="relative mb-12 group">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-400/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all"></div>
                        <div className="relative rounded-2xl p-8 border border-white/10 bg-white/5 backdrop-blur-sm hover:border-blue-500/30 hover:-translate-y-1 transition-all duration-300">
                            <div className="flex items-start mb-4">
                                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 mr-4 flex-shrink-0">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2 text-white">Extremely Passionate Developer</h3>
                                    <p className="text-gray-300 leading-relaxed">
                                        I'm willing to learn and impact the world with technology. My journey in software development 
                                        is driven by curiosity and a desire to create meaningful solutions that make a difference.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Skills Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                        {/* Frontend Skills */}
                        <div className="relative group">
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent rounded-2xl blur-xl"></div>
                            <div className="relative rounded-2xl p-6 border border-white/10 bg-white/5 backdrop-blur-sm hover:border-blue-500/30 hover:-translate-y-1 transition-all duration-300">
                                <div className="flex items-center mb-6">
                                    <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-blue-500/10 border border-blue-500/30 text-blue-400 mr-3">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-bold text-white">Frontend</h3>
                                </div>
                                <div className="space-y-4">
                                    {frontendSkills.map((skill, index) => (
                                        <div key={index}>
                                            <div className="flex justify-between mb-2">
                                                <span className="text-sm font-medium text-gray-300">{skill.name}</span>
                                                <span className="text-sm text-blue-400">{skill.level}%</span>
                                            </div>
                                            <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                                                <div 
                                                    className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full transition-all duration-1000 ease-out"
                                                    style={{ width: `${skill.level}%` }}
                                                ></div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Backend Skills */}
                        <div className="relative group">
                            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-transparent rounded-2xl blur-xl"></div>
                            <div className="relative rounded-2xl p-6 border border-white/10 bg-white/5 backdrop-blur-sm hover:border-blue-500/30 hover:-translate-y-1 transition-all duration-300">
                                <div className="flex items-center mb-6">
                                    <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-blue-500/10 border border-blue-500/30 text-blue-400 mr-3">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-bold text-white">Backend</h3>
                                </div>
                                <div className="space-y-4">
                                    {backendSkills.map((skill, index) => (
                                        <div key={index}>
                                            <div className="flex justify-between mb-2">
                                                <span className="text-sm font-medium text-gray-300">{skill.name}</span>
                                                <span className="text-sm text-blue-400">{skill.level}%</span>
                                            </div>
                                            <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                                                <div 
                                                    className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full transition-all duration-1000 ease-out"
                                                    style={{ width: `${skill.level}%` }}
                                                ></div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Tools & Frameworks */}
                        <div className="relative group">
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent rounded-2xl blur-xl"></div>
                            <div className="relative rounded-2xl p-6 border border-white/10 bg-white/5 backdrop-blur-sm hover:border-blue-500/30 hover:-translate-y-1 transition-all duration-300">
                                <div className="flex items-center mb-6">
                                    <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-blue-500/10 border border-blue-500/30 text-blue-400 mr-3">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-bold text-white">Tools & Frameworks</h3>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {toolsSkills.map((tool, index) => (
                                        <span 
                                            key={index} 
                                            className="bg-blue-500/10 text-blue-400 py-2 px-4 rounded-full text-sm border border-blue-500/20 hover:bg-blue-500/20 hover:border-blue-400/40 hover:shadow-[0_2px_10px_rgba(59,130,246,0.3)] hover:-translate-y-0.5 transition-all duration-200"
                                        >
                                            {tool}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Certifications */}
                        <div className="relative group">
                            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-transparent rounded-2xl blur-xl"></div>
                            <div className="relative rounded-2xl p-6 border border-white/10 bg-white/5 backdrop-blur-sm hover:border-blue-500/30 hover:-translate-y-1 transition-all duration-300">
                                <div className="flex items-center mb-6">
                                    <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-blue-500/10 border border-blue-500/30 text-blue-400 mr-3">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-bold text-white">Certifications</h3>
                                </div>
                                <div className="space-y-3">
                                    {certSkills.map((cert, index) => (
                                        <div 
                                            key={index} 
                                            className="p-3 bg-white/5 border border-white/10 rounded-lg hover:border-blue-500/30 hover:bg-blue-500/5 transition-all duration-200"
                                        >
                                            <h4 className="text-sm font-semibold text-white mb-1">{cert.title}</h4>
                                            <p className="text-xs text-gray-400">{cert.org} • {cert.year}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Education Section */}
                    <div className="relative group">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-400/10 rounded-2xl blur-xl"></div>
                        <div className="relative p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:border-blue-500/30 hover:-translate-y-1 transition-all duration-300">
                            <div className="flex items-center mb-6">
                                <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-blue-500/10 border border-blue-500/30 text-blue-400 mr-3">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-white">Education</h3>
                            </div>
                            <div className="space-y-4">
                                <div className="flex items-start">
                                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                                    <div>
                                        <h4 className="text-lg font-semibold text-white mb-1">
                                            B.S. in Computer Science
                                        </h4>
                                        <p className="text-gray-400 mb-2">St. John's University, Queens, NY</p>
                                        <p className="text-sm text-gray-500">2023 - Present</p>
                                    </div>
                                </div>
                                <div className="pl-6 border-l-2 border-white/10">
                                    <p className="text-sm font-medium text-gray-300 mb-2">Relevant Coursework:</p>
                                    <p className="text-sm text-gray-400 leading-relaxed">
                                        Computer Programming Fundamentals I & II, Data Structures and Algorithms, 
                                        Software Design Methods, Networking, Theory of Programming Language, 
                                        Data Security & Cryptography, Advanced Data Structures
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    )
}