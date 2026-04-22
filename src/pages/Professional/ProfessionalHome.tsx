import {
    FiMail, FiArrowRight, FiSend, FiMapPin, FiPhone,
    FiGithub, FiLinkedin, FiCode, FiPenTool, FiCommand
} from 'react-icons/fi';
import MainLayout from '../../layouts/MainLayout';
import Logo from '../../components/Logo';
import SectionHeader from '../../components/SectionHeader';
import SkillTag from '../../components/SkillTag';
import ProjectCard from '../../components/ProjectCard';
import { useTypingEffect } from '../../hooks/useTypingEffect';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { personalInfo } from '../../data/personal';
import { skills } from '../../data/skills';
import { experience } from '../../data/experience';
import { education } from '../../data/education';
import { projects } from '../../data/projects';

const typingWords = [
    'Desarrollador Full Stack',
    'Soluciones web a medida',
    'Ingeniería en Sistemas'
];

export default function ProfessionalHome() {
    const typedText = useTypingEffect(typingWords);
    const [aboutRef, aboutVisible] = useScrollReveal();
    const [skillsRef, skillsVisible] = useScrollReveal();
    const [expRef, expVisible] = useScrollReveal();
    const [eduRef, eduVisible] = useScrollReveal();
    const [projectsRef, projectsVisible] = useScrollReveal();
    const [contactRef, contactVisible] = useScrollReveal();

    return (
        <MainLayout>
            {/* ===== HERO ===== */}
            <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
                <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 items-center gap-16 w-full">
                    <div className="z-10 animate-reveal text-center lg:text-left">
                        <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full text-sm text-accent-cyan mb-6">
                            <span className="w-2 h-2 rounded-full bg-accent-emerald animate-pulse-dot" />
                            Disponible para proyectos
                        </div>

                        <h1 className="font-heading text-[clamp(2.8rem,6vw,4.5rem)] font-extrabold leading-[1.1] mb-2">
                            <span className="block">Cristian</span>
                            <span className="block gradient-text">Fernández</span>
                        </h1>

                        <div className="font-heading text-[clamp(1.2rem,2.5vw,1.8rem)] text-text-sub mb-6 min-h-[2.5rem]">
                            {typedText}
                            <span className="inline-block w-0.5 h-[1.2em] bg-accent-cyan ml-0.5 align-text-bottom animate-blink" />
                        </div>

                        <div className="flex gap-4 flex-wrap justify-center lg:justify-start">
                            <a href="#contact"
                                className="inline-flex items-center gap-2 px-7 py-3.5 gradient-primary-bg text-white rounded-full font-heading font-semibold
                  shadow-[0_4px_20px_rgba(6,182,212,0.3)] hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(6,182,212,0.5)] transition-all duration-300">
                                <FiMail /> Contactar
                            </a>
                            <a href="#projects"
                                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-heading font-semibold
                  border border-border-glass-hover text-text-main
                  hover:bg-bg-glass-hover hover:border-accent-cyan hover:text-accent-cyan hover:-translate-y-0.5 transition-all duration-300">
                                Ver Proyectos <FiArrowRight />
                            </a>
                        </div>

                        <div className="flex gap-10 mt-12 pt-8 border-t border-border-glass justify-center lg:justify-start">
                            {[
                                ['3+', 'Años programando'],
                                ['2+', 'Proyectos profesionales'],
                                ['10+', 'Tecnologías'],
                            ].map(([num, label]) => (
                                <div key={label}>
                                    <div className="font-heading text-3xl font-bold gradient-text">{num}</div>
                                    <div className="text-sm text-text-muted mt-1">{label}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Visual */}
                    <div className="relative flex items-center justify-center z-10 order-first lg:order-last animate-reveal"
                        style={{ animationDelay: '0.3s' }}>
                        <div className="relative w-[280px] h-[280px] lg:w-[380px] lg:h-[380px]">
                            <div className="absolute inset-0 gradient-primary-bg animate-morph-blob opacity-15" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <Logo size="lg" />
                            </div>
                            {[
                                { text: 'React Developer', icon: <FiCode />, pos: 'top-[10%] -right-5', delay: '0s' },
                                { text: 'UI/UX Design', icon: <FiPenTool />, pos: 'bottom-[20%] -left-[30px]', delay: '2s' },
                                { text: 'Full Stack', icon: <FiCommand />, pos: 'bottom-[5%] right-[10%]', delay: '4s' },
                            ].map((card) => (
                                <div key={card.text}
                                    className={`absolute ${card.pos} hidden lg:flex items-center gap-2.5 px-5 py-3.5 glass rounded-xl text-sm text-text-sub whitespace-nowrap animate-float`}
                                    style={{ animationDelay: card.delay }}>
                                    <span className="text-lg text-accent-cyan">{card.icon}</span>
                                    {card.text}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== ABOUT ===== */}
            <section id="about" className="py-24 relative" ref={aboutRef as React.RefObject<HTMLElement>}>
                <div className="w-full max-w-[1200px] mx-auto px-6">
                    <SectionHeader badge="Sobre Mí" title="Conociéndome" />

                    <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center transition-all duration-700 ${aboutVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                        <div className="mx-auto lg:mx-0">
                            <div className="w-full max-w-[300px] aspect-[4/5] glass rounded-3xl overflow-hidden flex items-center justify-center relative
                before:content-[''] before:absolute before:inset-[-2px] before:rounded-[inherit] before:bg-gradient-to-br before:from-accent-cyan before:to-accent-violet before:-z-10 before:opacity-30">
                                <Logo size="lg" />
                            </div>
                        </div>

                        <div className="text-center lg:text-left">
                            <h3 className="font-heading text-2xl font-bold mb-5 text-text-main">Desarrollador & Solucionador de Problemas</h3>
                            <p className="text-text-sub leading-relaxed mb-4">
                                Hola! Soy {personalInfo.name}, un desarrollador de software de 23 años de {personalInfo.location}.
                                Me gradué como Técnico Superior en Desarrollo de Software y actualmente estoy cursando el
                                cuarto año de Ingeniería en Sistemas en la Universidad Abierta Interamericana (UAI).
                            </p>
                            <p className="text-text-sub leading-relaxed mb-7">
                                Mi objetivo es seguir creciendo profesionalmente, adquiriendo conocimientos y experiencia
                                en el mundo del software, enfrentando nuevos desafíos que me permitan seguir aprendiendo día a día.
                            </p>
                            <div className="grid grid-cols-2 gap-4">
                                {[
                                    ['Nombre', personalInfo.name],
                                    ['Rol', personalInfo.role],
                                    ['Email', personalInfo.email],
                                    ['Ubicación', personalInfo.location.split(',')[0]],
                                ].map(([label, value]) => (
                                    <div key={label} className="flex flex-col gap-1">
                                        <span className="text-xs text-text-muted uppercase tracking-wider">{label}</span>
                                        <span className="font-heading font-semibold text-text-main text-sm">{value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== SKILLS ===== */}
            <section id="skills" className="py-24 relative" ref={skillsRef as React.RefObject<HTMLElement>}>
                <div className="max-w-[1200px] mx-auto px-6">
                    <SectionHeader badge="Habilidades" title="Lo Que Hago" subtitle="Combinación de skills técnicos y creativos para ofrecer las mejores soluciones." />

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {skills.map((skill, i) => (
                            <div key={skill.title}
                                className={`group glass rounded-2xl p-7 cursor-default relative overflow-hidden
                  hover:bg-bg-glass-hover hover:border-border-glass-hover hover:-translate-y-1 transition-all duration-300
                  before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-[3px]
                  before:bg-gradient-to-r before:from-accent-cyan before:to-accent-violet before:scale-x-0 before:origin-left
                  before:transition-transform before:duration-300 group-hover:before:scale-x-100
                  ${skillsVisible ? 'animate-reveal' : 'opacity-0'}`}
                                style={{ animationDelay: `${i * 0.1}s` }}>
                                <span className="text-4xl mb-4 block">{skill.icon}</span>
                                <h3 className="font-heading text-lg font-semibold mb-3">{skill.title}</h3>
                                <p className="text-sm text-text-sub leading-relaxed mb-5">{skill.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {skill.tags.map((tag) => (
                                        <SkillTag key={tag} label={tag} />
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== EXPERIENCE ===== */}
            <section id="experience" className="py-24 relative" ref={expRef as React.RefObject<HTMLElement>}>
                <div className="max-w-[1200px] mx-auto px-6">
                    <SectionHeader badge="Trayectoria" title="Experiencia Profesional" />

                    <div className="space-y-6">
                        {experience.map((exp, i) => (
                            <div key={exp.company}
                                className={`glass rounded-2xl p-7 relative overflow-hidden
                  hover:bg-bg-glass-hover hover:border-border-glass-hover transition-all duration-300
                  ${expVisible ? 'animate-reveal' : 'opacity-0'}`}
                                style={{ animationDelay: `${i * 0.15}s` }}>
                                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3 gap-2">
                                    <div>
                                        <h3 className="font-heading text-xl font-semibold text-text-main">{exp.company}</h3>
                                        <p className="text-accent-cyan font-medium text-sm">{exp.role}</p>
                                    </div>
                                    <span className="text-sm text-text-muted font-mono">{exp.period}</span>
                                </div>
                                <p className="text-sm text-text-sub leading-relaxed mb-3">{exp.description}</p>
                                {exp.tags && (
                                    <div className="flex flex-wrap gap-2">
                                        {exp.tags.map((tag) => (
                                            <SkillTag key={tag} label={tag} variant="violet" />
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== EDUCATION ===== */}
            <section className="py-24 relative" ref={eduRef as React.RefObject<HTMLElement>}>
                <div className="max-w-[1200px] mx-auto px-6">
                    <SectionHeader badge="Formación" title="Educación" />

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {education.map((edu, i) => (
                            <div key={edu.degree}
                                className={`glass rounded-2xl p-7 relative overflow-hidden
                  hover:bg-bg-glass-hover hover:border-border-glass-hover hover:-translate-y-1 transition-all duration-300
                  ${eduVisible ? 'animate-reveal' : 'opacity-0'}`}
                                style={{ animationDelay: `${i * 0.1}s` }}>
                                <span className="text-sm text-accent-violet font-mono mb-3 block">{edu.period}</span>
                                <h3 className="font-heading text-lg font-semibold text-text-main mb-2">{edu.degree}</h3>
                                <p className="text-sm text-text-sub mb-2">{edu.institution}</p>
                                <span className="inline-block px-3 py-1 bg-accent-emerald/10 border border-accent-emerald/20 rounded-full text-xs text-accent-emerald font-medium">
                                    {edu.detail}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== PROJECTS ===== */}
            <section id="projects" className="py-24 relative" ref={projectsRef as React.RefObject<HTMLElement>}>
                <div className="max-w-[1200px] mx-auto px-6">
                    <SectionHeader badge="Portafolio" title="Proyectos Destacados" />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
                        {projects.map((project, i) => (
                            <ProjectCard key={project.title} project={project} index={i} isVisible={projectsVisible} />
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== CONTACT ===== */}
            <section id="contact" className="py-24 relative" ref={contactRef as React.RefObject<HTMLElement>}>
                <div className="max-w-[1200px] mx-auto px-6">
                    <SectionHeader badge="Contacto" title="Trabajemos Juntos" subtitle="¿Tenés un proyecto en mente? Me encantaría escuchar tu idea." />

                    <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 transition-all duration-700 ${contactVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                        <div className="flex flex-col gap-7">
                            <div>
                                <h3 className="font-heading text-2xl font-bold mb-2">Hablemos</h3>
                                <p className="text-text-sub leading-relaxed max-w-[400px]">
                                    Estoy disponible para proyectos freelance, posiciones full-time y colaboraciones
                                    interesantes.
                                </p>
                            </div>

                            {[
                                { icon: <FiMail />, text: personalInfo.email, href: `mailto:${personalInfo.email}` },
                                { icon: <FiPhone />, text: personalInfo.phone, href: `tel:${personalInfo.phone.replace(/\s/g, '')}` },
                                { icon: <FiMapPin />, text: personalInfo.location, href: null },
                            ].map((item) => {
                                const Wrapper = item.href ? 'a' : 'div';
                                return (
                                    <Wrapper key={item.text} href={item.href ?? undefined}
                                        className="group flex items-center gap-4 text-text-sub hover:text-accent-cyan transition-colors duration-200 cursor-pointer">
                                        <div className="w-12 h-12 flex items-center justify-center glass rounded-xl text-xl text-accent-cyan shrink-0
                      group-hover:bg-accent-cyan/10 group-hover:border-accent-cyan group-hover:shadow-[0_0_30px_rgba(6,182,212,0.3)] transition-all duration-300">
                                            {item.icon}
                                        </div>
                                        <span>{item.text}</span>
                                    </Wrapper>
                                );
                            })}

                            <div className="flex gap-3 mt-4">
                                {[
                                    { icon: <FiGithub />, label: 'GitHub', href: personalInfo.github },
                                    { icon: <FiLinkedin />, label: 'LinkedIn', href: personalInfo.linkedin },
                                ].map((s) => (
                                    <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                                        className="w-11 h-11 flex items-center justify-center glass rounded-xl text-xl text-text-sub
                      hover:text-accent-cyan hover:border-accent-cyan hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(6,182,212,0.3)]
                      transition-all duration-300">
                                        {s.icon}
                                    </a>
                                ))}
                            </div>
                        </div>

                        <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
                            {['Tu nombre', 'Tu email', 'Asunto'].map((ph) => (
                                <input key={ph} type={ph === 'Tu email' ? 'email' : 'text'} placeholder={ph}
                                    className="w-full px-5 py-4 glass rounded-xl text-text-main placeholder:text-text-muted
                    focus:border-accent-cyan focus:bg-bg-glass-hover focus:ring-[3px] focus:ring-accent-cyan/10
                    transition-all duration-200 outline-none" />
                            ))}
                            <textarea placeholder="Tu mensaje..." rows={5}
                                className="w-full px-5 py-4 glass rounded-xl text-text-main placeholder:text-text-muted resize-y
                  focus:border-accent-cyan focus:bg-bg-glass-hover focus:ring-[3px] focus:ring-accent-cyan/10
                  transition-all duration-200 outline-none" />
                            <button type="submit"
                                className="self-start inline-flex items-center gap-2 px-7 py-3.5 gradient-primary-bg text-white rounded-full font-heading font-semibold
                  shadow-[0_4px_20px_rgba(6,182,212,0.3)] hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(6,182,212,0.5)] transition-all duration-300 cursor-pointer">
                                <FiSend /> Enviar Mensaje
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </MainLayout>
    );
}
