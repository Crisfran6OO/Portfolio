import { Link } from 'react-router-dom';
import { motion, type Variants } from 'framer-motion';
import { FiBriefcase, FiGlobe } from 'react-icons/fi';
import Logo from '../components/Logo';

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.3 } },
    exit: { opacity: 0, transition: { duration: 0.3 } },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function SelectionPage() {
    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
            style={{ background: '#050508' }}
        >
            {/* Grid background */}
            <div className="absolute inset-0 grid-bg opacity-40" />

            {/* Radial glow */}
            <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
                style={{
                    background: 'radial-gradient(circle, rgba(6,182,212,0.06) 0%, rgba(124,58,237,0.04) 40%, transparent 70%)',
                    filter: 'blur(40px)',
                }}
            />

            {/* Floating dots */}
            {[...Array(6)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-1 h-1 rounded-full"
                    style={{
                        background: i % 2 === 0 ? '#06B6D4' : '#7c3aed',
                        top: `${20 + i * 12}%`,
                        left: `${10 + i * 15}%`,
                    }}
                    animate={{ y: [0, -20, 0], opacity: [0.3, 0.7, 0.3] }}
                    transition={{ duration: 3 + i * 0.5, repeat: Infinity, ease: 'easeInOut' }}
                />
            ))}

            {/* Content */}
            <div className="relative z-10 text-center px-6">
                <motion.div variants={itemVariants} className="mb-6">
                    <Logo size="xl" glitch animated />
                </motion.div>

                <motion.p
                    variants={itemVariants}
                    className="text-lg md:text-xl font-light tracking-[0.3em] uppercase mb-2"
                    style={{ color: '#8888a4' }}
                >
                    Cristian Fernández
                </motion.p>

                <motion.p
                    variants={itemVariants}
                    className="text-sm md:text-base mb-10"
                    style={{ color: '#555570' }}
                >
                    Ingeniería en Sistemas & Soluciones Digitales
                </motion.p>

                <motion.div
                    variants={itemVariants}
                    className="w-[80px] h-[1px] mx-auto mb-10"
                    style={{ background: 'linear-gradient(90deg, transparent, #06B6D4, #7c3aed, transparent)' }}
                />

                {/* Two CTAs */}
                <motion.div
                    variants={itemVariants}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
                >
                    <Link
                        to="/profesional"
                        className="group relative w-[280px] rounded-2xl p-[1px] transition-all duration-300 hover:scale-[1.03]"
                        style={{ background: 'linear-gradient(135deg, #06B6D4, #0088aa)' }}
                    >
                        <div
                            className="flex flex-col items-center rounded-2xl px-8 py-6 transition-all duration-300 group-hover:bg-transparent"
                            style={{ background: '#0a0a12' }}
                        >
                            <span className="text-3xl mb-3" style={{ color: '#06B6D4' }}><FiBriefcase /></span>
                            <span className="text-base font-semibold mb-1" style={{ color: '#06B6D4' }}>
                                Portafolio Completo
                            </span>
                            <span className="text-xs" style={{ color: '#8888a4' }}>
                                Para reclutadores y empresas
                            </span>
                        </div>
                    </Link>

                    <Link
                        to="/servicios"
                        className="group relative w-[280px] rounded-2xl p-[1px] transition-all duration-300 hover:scale-[1.03]"
                        style={{ background: 'linear-gradient(135deg, #7c3aed, #4f18a8)' }}
                    >
                        <div
                            className="flex flex-col items-center rounded-2xl px-8 py-6 transition-all duration-300 group-hover:bg-transparent"
                            style={{ background: '#0a0a12' }}
                        >
                            <span className="text-3xl mb-3" style={{ color: '#7c3aed' }}><FiGlobe /></span>
                            <span className="text-base font-semibold mb-1" style={{ color: '#7c3aed' }}>
                                Soluciones Digitales
                            </span>
                            <span className="text-xs" style={{ color: '#8888a4' }}>
                                Servicios para tu negocio
                            </span>
                        </div>
                    </Link>
                </motion.div>
            </div>
        </motion.div>
    );
}
