import { useEffect, useRef, useState } from "react"

export const RevealOnScroll = ({ children, delay = 0, direction = "up" }) => {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !isVisible) {
                    setIsVisible(true);
                    // Once visible, stop observing to prevent re-triggering
                    if (ref.current) {
                        observer.unobserve(ref.current);
                    }
                }
            },
            {
                threshold: 0.1,
                rootMargin: "0px 0px -100px 0px"
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [isVisible]);

    // Determine animation direction
    const getTransformClass = () => {
        if (isVisible) return "translate-y-0 translate-x-0";
        
        switch (direction) {
            case "up":
                return "translate-y-12";
            case "down":
                return "-translate-y-12";
            case "left":
                return "translate-x-12";
            case "right":
                return "-translate-x-12";
            default:
                return "translate-y-12";
        }
    };

    return (
        <div
            ref={ref}
            className={`transition-all duration-1000 ease-out ${
                isVisible ? "opacity-100" : "opacity-0"
            } ${getTransformClass()}`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {children}
        </div>
    );
};

// Alternative version with scale animation
export const RevealOnScrollScale = ({ children, delay = 0 }) => {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !isVisible) {
                    setIsVisible(true);
                    if (ref.current) {
                        observer.unobserve(ref.current);
                    }
                }
            },
            {
                threshold: 0.1,
                rootMargin: "0px 0px -100px 0px"
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [isVisible]);

    return (
        <div
            ref={ref}
            className={`transition-all duration-1000 ease-out ${
                isVisible 
                    ? "opacity-100 scale-100" 
                    : "opacity-0 scale-95"
            }`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {children}
        </div>
    );
};

// Version with blur effect
export const RevealOnScrollBlur = ({ children, delay = 0 }) => {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !isVisible) {
                    setIsVisible(true);
                    if (ref.current) {
                        observer.unobserve(ref.current);
                    }
                }
            },
            {
                threshold: 0.1,
                rootMargin: "0px 0px -100px 0px"
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [isVisible]);

    return (
        <div
            ref={ref}
            className={`transition-all duration-1000 ease-out ${
                isVisible 
                    ? "opacity-100 blur-0 translate-y-0" 
                    : "opacity-0 blur-sm translate-y-8"
            }`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {children}
        </div>
    );
};

// Staggered children version
export const RevealOnScrollStagger = ({ children, staggerDelay = 100 }) => {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !isVisible) {
                    setIsVisible(true);
                    if (ref.current) {
                        observer.unobserve(ref.current);
                    }
                }
            },
            {
                threshold: 0.1,
                rootMargin: "0px 0px -100px 0px"
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [isVisible]);

    return (
        <div ref={ref}>
            {Array.isArray(children) ? (
                children.map((child, index) => (
                    <div
                        key={index}
                        className={`transition-all duration-700 ease-out ${
                            isVisible 
                                ? "opacity-100 translate-y-0" 
                                : "opacity-0 translate-y-8"
                        }`}
                        style={{ transitionDelay: `${index * staggerDelay}ms` }}
                    >
                        {child}
                    </div>
                ))
            ) : (
                <div
                    className={`transition-all duration-700 ease-out ${
                        isVisible 
                            ? "opacity-100 translate-y-0" 
                            : "opacity-0 translate-y-8"
                    }`}
                >
                    {children}
                </div>
            )}
        </div>
    );
};