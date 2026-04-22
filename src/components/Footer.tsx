import { Link, useLocation } from 'react-router-dom';
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import { personalInfo } from '../data/personal';

export default function Footer() {
    const location = useLocation();
    if (location.pathname === '/') return null;

    return (
        <footer className="py-10 border-t border-border-glass">
            <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-sm text-text-muted">
                    © {new Date().getFullYear()} — Diseñado y desarrollado por{' '}
                    <span className="gradient-text font-semibold">{personalInfo.name}</span>
                </p>
                <div className="flex items-center gap-4">
                    <a href={personalInfo.github} target="_blank" rel="noopener noreferrer"
                        className="text-text-sub hover:text-accent-cyan transition-colors" aria-label="GitHub">
                        <FiGithub size={18} />
                    </a>
                    <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer"
                        className="text-text-sub hover:text-accent-cyan transition-colors" aria-label="LinkedIn">
                        <FiLinkedin size={18} />
                    </a>
                    <Link to="/" className="text-sm text-text-sub hover:text-text-main transition-colors">
                        Inicio
                    </Link>
                </div>
            </div>
        </footer>
    );
}
