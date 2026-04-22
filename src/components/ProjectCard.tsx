import { FiExternalLink, FiGithub } from 'react-icons/fi';
import type { Project } from '../types';
import SkillTag from './SkillTag';

interface ProjectCardProps {
    project: Project;
    index: number;
    isVisible: boolean;
}

const gradients = [
    'from-accent-cyan/20 to-accent-violet/20',
    'from-accent-violet/20 to-accent-pink/20',
    'from-accent-emerald/20 to-accent-cyan/20',
    'from-accent-pink/20 to-accent-emerald/20',
];

export default function ProjectCard({ project, index, isVisible }: ProjectCardProps) {
    const num = String(index + 1).padStart(2, '0');
    const gradient = gradients[index % gradients.length];

    return (
        <div
            className={`glass rounded-2xl overflow-hidden cursor-default
        hover:-translate-y-1.5 hover:border-border-glass-hover hover:shadow-2xl
        transition-all duration-300
        ${isVisible ? 'animate-reveal' : 'opacity-0'}`}
            style={{ animationDelay: `${index * 0.15}s` }}
        >
            <div className={`w-full h-44 bg-gradient-to-br ${gradient} flex items-center justify-center`}>
                <span className="font-heading text-5xl font-extrabold text-white/8">{num}</span>
            </div>
            <div className="p-6">
                <h3 className="font-heading text-xl font-semibold mb-2.5">{project.title}</h3>
                <p className="text-sm text-text-sub leading-relaxed mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-5">
                    {project.tags.map((tag) => (
                        <SkillTag key={tag} label={tag} variant="violet" />
                    ))}
                </div>
                <div className="flex gap-3">
                    {project.demoUrl && (
                        <a href={project.demoUrl} target="_blank" rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-sm text-accent-cyan font-medium hover:text-accent-violet hover:translate-x-1 transition-all duration-200">
                            <FiExternalLink /> Demo
                        </a>
                    )}
                    {project.codeUrl && (
                        <a href={project.codeUrl} target="_blank" rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-sm text-accent-cyan font-medium hover:text-accent-violet hover:translate-x-1 transition-all duration-200">
                            <FiGithub /> Código
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}
