import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 60);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const isLanding = location.pathname === '/';
    if (isLanding) return null;

    const isPro = location.pathname === '/profesional';
    const isSrv = location.pathname === '/servicios';

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-2' : 'py-4'
                }`}
            style={{
                background: scrolled ? 'rgba(10, 10, 15, 0.85)' : 'transparent',
                backdropFilter: scrolled ? 'blur(16px)' : 'none',
            }}
        >
            <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
                <Link to="/" className="hover:scale-105 transition-transform duration-200">
                    <Logo size="md" />
                </Link>

                <div className="flex items-center gap-6 text-lg">
                    <Link
                        to="/profesional"
                        className={`font-heading transition-colors ${isPro ? 'text-accent-cyan font-semibold' : 'text-text-sub hover:text-text-main'}`}
                    >
                        Portafolio
                    </Link>
                    <Link
                        to="/servicios"
                        className={`font-heading transition-colors ${isSrv ? 'text-accent-violet font-semibold' : 'text-text-sub hover:text-text-main'}`}
                    >
                        Servicios
                    </Link>

                </div>
            </div>
        </nav>
    );
}
