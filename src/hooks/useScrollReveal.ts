import { useState, useEffect, useRef } from 'react';

/**
 * Hook that returns [ref, isVisible]. Attach the ref to an element
 * and isVisible becomes true once it enters the viewport.
 */
export function useScrollReveal(): [React.RefObject<HTMLElement | null>, boolean] {
    const ref = useRef<HTMLElement | null>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.1 }
        );

        if (ref.current) observer.observe(ref.current);

        return () => observer.disconnect();
    }, []);

    return [ref, isVisible];
}
