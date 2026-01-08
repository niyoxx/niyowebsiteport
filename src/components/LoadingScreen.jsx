import { useState, useEffect } from "react";

export const LoadingScreen = ({ onComplete }) => {
    const [text, setText] = useState("");
    const [progress, setProgress] = useState(0);
    const fullText = "Niyo White";

    useEffect(() => {
        let index = 0;
        const textInterval = setInterval(() => {
            setText(fullText.substring(0, index));
            index++;

            if (index > fullText.length) {
                clearInterval(textInterval);
                setTimeout(() => {
                    onComplete();
                }, 800);
            }
        }, 100);

        // Progress bar animation
        const progressInterval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(progressInterval);
                    return 100;
                }
                return prev + 2;
            });
        }, 30);

        return () => {
            clearInterval(textInterval);
            clearInterval(progressInterval);
        };
    }, [onComplete]);

    return (
        <div className="fixed inset-0 z-50 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-gray-100 flex flex-col items-center justify-center overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
            </div>

            {/* Decorative dots */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-20 left-20 w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                <div className="absolute top-40 right-32 w-1 h-1 bg-cyan-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                <div className="absolute bottom-32 left-40 w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute bottom-20 right-20 w-1 h-1 bg-cyan-300 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
                <div className="absolute top-1/2 left-10 w-1 h-1 bg-blue-300 rounded-full animate-pulse" style={{ animationDelay: '0.75s' }}></div>
                <div className="absolute top-1/3 right-10 w-2 h-2 bg-cyan-500 rounded-full animate-pulse" style={{ animationDelay: '1.25s' }}></div>
            </div>

            {/* Main content */}
            <div className="relative z-10 flex flex-col items-center">
                {/* Logo/Icon */}
                <div className="mb-8 relative">
                    <div className="w-20 h-20 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 shadow-[0_0_40px_rgba(59,130,246,0.4)] animate-pulse">
                        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                        </svg>
                    </div>
                    <div className="absolute inset-0 rounded-full border-2 border-blue-500/30 animate-ping"></div>
                </div>

                {/* Typewriter text */}
                <div className="mb-8 text-center">
                    <h1 className="text-5xl md:text-7xl font-mono font-bold bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">
                        {text}
                        <span className="animate-blink ml-1 text-blue-500">|</span>
                    </h1>
                    <p className="text-gray-400 text-sm md:text-base mt-4 animate-pulse">
                        Loading portfolio...
                    </p>
                </div>

                {/* Progress bar container */}
                <div className="w-[280px] md:w-[400px] space-y-3">
                    {/* Main progress bar */}
                    <div className="relative">
                        <div className="h-1.5 bg-gray-800 rounded-full relative overflow-hidden">
                            <div 
                                className="h-full bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.6)] transition-all duration-300 ease-out animate-gradient bg-[length:200%_auto]"
                                style={{ width: `${progress}%` }}
                            >
                                <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                            </div>
                        </div>
                        
                        {/* Percentage */}
                        <div className="absolute -top-6 right-0 text-xs font-mono text-blue-400">
                            {progress}%
                        </div>
                    </div>

                    {/* Secondary animated bar */}
                    <div className="h-0.5 bg-gray-800 rounded-full relative overflow-hidden">
                        <div className="absolute inset-0 w-[40%] h-full bg-gradient-to-r from-transparent via-blue-500 to-transparent shadow-[0_0_10px_#3b82f6] animate-loading-bar"></div>
                    </div>
                </div>

                {/* Loading stages */}
                <div className="mt-8 flex items-center space-x-2 text-xs text-gray-500">
                    <div className={`flex items-center transition-all duration-300 ${progress > 33 ? 'text-blue-400' : ''}`}>
                        <div className={`w-2 h-2 rounded-full mr-2 ${progress > 33 ? 'bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.6)]' : 'bg-gray-700'}`}></div>
                        <span>Assets</span>
                    </div>
                    <span className="text-gray-700">•</span>
                    <div className={`flex items-center transition-all duration-300 ${progress > 66 ? 'text-blue-400' : ''}`}>
                        <div className={`w-2 h-2 rounded-full mr-2 ${progress > 66 ? 'bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.6)]' : 'bg-gray-700'}`}></div>
                        <span>Components</span>
                    </div>
                    <span className="text-gray-700">•</span>
                    <div className={`flex items-center transition-all duration-300 ${progress === 100 ? 'text-blue-400' : ''}`}>
                        <div className={`w-2 h-2 rounded-full mr-2 ${progress === 100 ? 'bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.6)]' : 'bg-gray-700'}`}></div>
                        <span>Ready</span>
                    </div>
                </div>
            </div>

            {/* Grid pattern overlay */}
            <div className="absolute inset-0 opacity-[0.02]" style={{
                backgroundImage: `
                    linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
                `,
                backgroundSize: '50px 50px'
            }}></div>
        </div>
    );
};