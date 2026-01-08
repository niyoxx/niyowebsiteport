import { RevealOnScroll } from "../components/RevealOnScroll"

export const ProjectsPage = () => {

    const projects = [
        {
            title: "Eunoia",
            description: "Developed a full-stack mental health application with a clean, intuitive user interface using React.js and built a scalable and maintainable backend with Java and Spring Boot capable of handling various types of user requests.",
            tech: ["React", "Java", "JavaScript", "SpringBoot", "PostgreSQL"],
            link: "https://github.com/niyoxx",
            gradient: "from-blue-500 to-cyan-400"
        },
        {
            title: "Fixnex",
            description: "Developed a personal finance tracker that can help you manage and save your money. Implemented reusable components and styling using Tailwind CSS for a modern, responsive user experience.",
            tech: ["React", "JavaScript", "Tailwind CSS"],
            link: "https://github.com/niyoxx",
            gradient: "from-cyan-400 to-blue-500"
        }
    ];

    return (
        <section id="projects" className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>
                <div className="max-w-5xl mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                            Featured Projects
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            A showcase of my recent work in full-stack development
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {projects.map((project, index) => (
                            <div
                                key={index}
                                className="group relative p-6 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 hover:-translate-y-2 hover:border-blue-500/30 hover:shadow-[0_8px_30px_rgba(59,130,246,0.15)] transition-all duration-300"
                            >
                                {/* Gradient overlay on hover */}
                                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                                
                                <div className="relative z-10">
                                    {/* Project number badge */}
                                    <div className="mb-4">
                                        <span className="inline-block px-3 py-1 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-400 text-xs font-medium">
                                            Project {index + 1}
                                        </span>
                                    </div>

                                    <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors">
                                        {project.title}
                                    </h3>
                                    
                                    <p className="text-gray-400 mb-6 leading-relaxed">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.tech.map((tech, techIndex) => (
                                            <span
                                                key={techIndex}
                                                className="bg-blue-500/10 text-blue-400 py-1.5 px-3 rounded-full text-sm border border-blue-500/20 hover:bg-blue-500/20 hover:border-blue-400/40 hover:shadow-[0_2px_10px_rgba(59,130,246,0.3)] transition-all duration-200"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex items-center justify-between pt-4 border-t border-white/10">
                                        <a
                                            className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors group/link"
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <span>View Project</span>
                                            <svg
                                                className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </a>

                                        <a
                                            className="w-8 h-8 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-blue-400 hover:border-blue-400/50 hover:bg-blue-500/10 transition-all duration-300"
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label="GitHub"
                                        >
                                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Call to action */}
                    <div className="mt-12 text-center">
                        <a
                            href="https://github.com/niyoxx"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-6 py-3 border-2 border-blue-500/50 text-blue-400 rounded-lg font-medium hover:bg-blue-500/10 hover:border-blue-400 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all duration-300"
                        >
                            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                            </svg>
                            View More on GitHub
                        </a>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    )
}