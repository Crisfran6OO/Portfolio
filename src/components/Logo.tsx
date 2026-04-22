import { motion } from 'framer-motion';

interface LogoProps {
    size?: 'sm' | 'md' | 'lg' | 'xl';
    glitch?: boolean;
    animated?: boolean;
}

const sizeMap = {
    sm: 'h-8 sm:h-10',
    md: 'h-12 sm:h-14',
    lg: 'h-16 sm:h-20',
    xl: 'h-32 md:h-48',
};

export default function Logo({ size = 'md', glitch = false, animated = false }: LogoProps) {
    const sizeClass = sizeMap[size];

    return (
        <div className={`relative flex items-center justify-center select-none ${glitch ? 'glitch-wrapper' : ''}`}>
            {animated ? (
                <motion.img
                    src="/logo.png"
                    alt="CF Developer Logo"
                    className={`relative z-10 object-contain ${sizeClass} drop-shadow-[0_0_20px_rgba(6,182,212,0.8)]`}
                    animate={{ y: [-8, 8, -8] }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    whileHover={{ scale: 1.05 }}
                />
            ) : (
                <img
                    src="/logo.png"
                    alt="CF Developer Logo"
                    className={`object-contain ${sizeClass} drop-shadow-[0_0_10px_rgba(6,182,212,0.3)] transition-transform hover:scale-105 duration-300`}
                />
            )}
        </div>
    );
}
