import { useState } from "react";
import { RevealOnScroll } from "../components/RevealOnScroll";
import emailjs from 'emailjs-com';

export const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        emailjs
            .sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
            .then((result) => {
                setSubmitStatus('success');
                setFormData({ name: "", email: "", message: "" });
                setTimeout(() => setSubmitStatus(null), 5000);
            })
            .catch(() => {
                setSubmitStatus('error');
                setTimeout(() => setSubmitStatus(null), 5000);
            })
            .finally(() => {
                setIsSubmitting(false);
            });
    };

    return (
        <section
            id="contact"
            className="min-h-screen flex items-center justify-center py-20 relative overflow-hidden"
        >
            {/* Animated background gradient orbs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/3 -left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/3 -right-20 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>

            <RevealOnScroll>
                <div className="px-4 w-full max-w-2xl relative z-10">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                            Get In Touch
                        </h2>
                        <p className="text-gray-400 max-w-xl mx-auto">
                            Have a project in mind or want to collaborate? I'd love to hear from you!
                        </p>
                    </div>

                    <div className="relative">
                        {/* Glow effect behind form */}
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-400/10 rounded-2xl blur-xl"></div>
                        
                        <form 
                            className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 space-y-6 hover:border-blue-500/30 transition-all duration-300"
                            onSubmit={handleSubmit}
                        >
                            {/* Name Input */}
                            <div className="relative group">
                                <label 
                                    htmlFor="name" 
                                    className="block text-sm font-medium text-gray-300 mb-2 group-focus-within:text-blue-400 transition-colors"
                                >
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    value={formData.name}
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 transition-all duration-300 focus:outline-none focus:border-blue-500 focus:bg-blue-500/5 focus:shadow-[0_0_15px_rgba(59,130,246,0.2)]"
                                    placeholder="Your name"
                                    onChange={(e) =>
                                        setFormData({ ...formData, name: e.target.value })
                                    }
                                />
                                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 group-focus-within:w-full transition-all duration-300"></div>
                            </div>

                            {/* Email Input */}
                            <div className="relative group">
                                <label 
                                    htmlFor="email" 
                                    className="block text-sm font-medium text-gray-300 mb-2 group-focus-within:text-blue-400 transition-colors"
                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    value={formData.email}
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 transition-all duration-300 focus:outline-none focus:border-blue-500 focus:bg-blue-500/5 focus:shadow-[0_0_15px_rgba(59,130,246,0.2)]"
                                    placeholder="your.email@example.com"
                                    onChange={(e) =>
                                        setFormData({ ...formData, email: e.target.value })
                                    }
                                />
                                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 group-focus-within:w-full transition-all duration-300"></div>
                            </div>

                            {/* Message Textarea */}
                            <div className="relative group">
                                <label 
                                    htmlFor="message" 
                                    className="block text-sm font-medium text-gray-300 mb-2 group-focus-within:text-blue-400 transition-colors"
                                >
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    rows={6}
                                    value={formData.message}
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 transition-all duration-300 focus:outline-none focus:border-blue-500 focus:bg-blue-500/5 focus:shadow-[0_0_15px_rgba(59,130,246,0.2)] resize-none"
                                    placeholder="Tell me about your project..."
                                    onChange={(e) =>
                                        setFormData({ ...formData, message: e.target.value })
                                    }
                                />
                                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 group-focus-within:w-full transition-all duration-300"></div>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="group w-full bg-gradient-to-r from-blue-500 to-cyan-400 text-white py-3 px-6 rounded-lg font-medium transition-all duration-300 relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_25px_rgba(59,130,246,0.5)] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                            >
                                <span className="relative z-10 flex items-center justify-center">
                                    {isSubmitting ? (
                                        <>
                                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            Send Message
                                            <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg>
                                        </>
                                    )}
                                </span>
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </button>

                            {/* Status Messages */}
                            {submitStatus === 'success' && (
                                <div className="flex items-center justify-center p-4 bg-green-500/10 border border-green-500/30 rounded-lg text-green-400 animate-fade-in">
                                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    Message sent successfully!
                                </div>
                            )}

                            {submitStatus === 'error' && (
                                <div className="flex items-center justify-center p-4 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400 animate-fade-in">
                                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                                    </svg>
                                    Oops! Something went wrong. Please try again.
                                </div>
                            )}
                        </form>
                    </div>

                    {/* Contact Info */}
                    <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="flex items-center p-4 bg-white/5 border border-white/10 rounded-xl hover:border-blue-500/30 hover:bg-blue-500/5 transition-all duration-300 group">
                            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 mr-4 group-hover:scale-110 transition-transform">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-sm font-medium text-gray-400">Email</h3>
                                <p className="text-white">niyontsinziwhite@gmail.com</p>
                            </div>
                        </div>

                        <div className="flex items-center p-4 bg-white/5 border border-white/10 rounded-xl hover:border-blue-500/30 hover:bg-blue-500/5 transition-all duration-300 group">
                            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 mr-4 group-hover:scale-110 transition-transform">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-sm font-medium text-gray-400">GitHub</h3>
                                <a href="https://github.com/niyoxx" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">
                                    github.com/niyoxx
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};