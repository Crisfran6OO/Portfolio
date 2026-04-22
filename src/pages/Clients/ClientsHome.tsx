import { FiMail, FiArrowRight } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import MainLayout from '../../layouts/MainLayout';
import SectionHeader from '../../components/SectionHeader';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { personalInfo } from '../../data/personal';
import { services, processSteps, whyMe } from '../../data/services';

const waLink = `https://wa.me/${personalInfo.phone.replace(/\D/g, '')}?text=${encodeURIComponent('Hola Cristian! Me interesa saber más sobre tus servicios.')}`;

const stats = [
    { num: '+10', label: 'Proyectos entregados' },
    { num: '100%', label: 'Clientes satisfechos' },
    { num: '+3', label: 'Años de experiencia' },
    { num: '24/7', label: 'Soporte técnico' },
];

export default function ClientsHome() {
    const [servicesRef, servicesVisible] = useScrollReveal();
    const [whyRef, whyVisible] = useScrollReveal();
    const [processRef, processVisible] = useScrollReveal();
    const [contactRef, contactVisible] = useScrollReveal();

    return (
        <MainLayout>
            {/* ===== HERO ===== */}
            <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
                <div className="w-full max-w-[1200px] mx-auto px-6 text-center z-10">
                    <div className="animate-reveal">
                        <div className="flex w-full justify-start">
                            <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full text-sm text-accent-violet mb-6">
                                <span className="w-2 h-2 rounded-full bg-accent-violet animate-pulse-dot" />
                                Soluciones Digitales
                            </div>
                        </div>

                        <h1 className="font-heading text-[clamp(2.5rem,6vw,4.5rem)] font-extrabold leading-[1.1] mb-6">
                            <span className="block text-text-main">Transformo tu negocio</span>
                            <span className="block gradient-text pb-1">con tecnología</span>
                        </h1>

                        <p className="text-lg text-text-sub leading-relaxed mb-10 max-w-[700px] mx-auto">
                            Desarrollo soluciones digitales que ahorran tiempo, aumentan ventas y profesionalizan tu marca. Sin complicaciones.
                        </p>

                        <div className="flex gap-4 flex-wrap justify-center">
                            <a href={waLink} target="_blank" rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-8 py-4 gradient-primary-bg text-white rounded-full font-heading font-semibold
                  shadow-[0_4px_20px_rgba(6,182,212,0.3)] hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(6,182,212,0.5)] transition-all duration-300">
                                <FaWhatsapp className="text-lg" /> Hablemos de tu proyecto
                            </a>
                            <a href="#servicios"
                                className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-heading font-semibold
                  border border-border-glass-hover text-text-main
                  hover:bg-bg-glass-hover hover:border-accent-violet hover:text-accent-violet hover:-translate-y-0.5 transition-all duration-300">
                                Ver Servicios <FiArrowRight />
                            </a>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-20 max-w-[800px] mx-auto">
                        {stats.map((s) => (
                            <div key={s.label} className="glass rounded-2xl py-5 px-4 text-center hover:-translate-y-1 transition-all duration-300">
                                <div className="font-heading text-3xl font-bold gradient-text">{s.num}</div>
                                <div className="text-xs text-text-muted mt-1">{s.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== SERVICES ===== */}
            <section id="servicios" className="py-24 relative" ref={servicesRef as React.RefObject<HTMLElement>}>
                <div className="w-full max-w-[1200px] mx-auto px-6">
                    <SectionHeader badge="Servicios" title="¿Qué puedo hacer por tu negocio?" subtitle="Soluciones a medida para que tu empresa crezca en el mundo digital." />

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {services.map((s, i) => (
                            <div key={s.title}
                                className={`group glass rounded-2xl p-7 cursor-default relative overflow-hidden
                  hover:bg-bg-glass-hover hover:border-border-glass-hover hover:-translate-y-1 transition-all duration-300
                  before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-[3px]
                  before:bg-gradient-to-r before:from-accent-cyan before:to-accent-violet before:scale-x-0 before:origin-left
                  before:transition-transform before:duration-300 group-hover:before:scale-x-100
                  ${servicesVisible ? 'animate-reveal' : 'opacity-0'}`}
                                style={{ animationDelay: `${i * 0.1}s` }}>
                                <span className="text-4xl mb-4 block">{s.icon}</span>
                                <h3 className="font-heading text-lg font-semibold mb-1 text-text-main">{s.title}</h3>
                                <p className="text-xs font-semibold uppercase tracking-wider text-accent-violet mb-3">{s.subtitle}</p>
                                <p className="text-sm text-text-sub leading-relaxed mb-5">{s.description}</p>
                                <ul className="space-y-2">
                                    {s.features.map((f) => (
                                        <li key={f} className="flex items-center gap-2 text-sm text-text-main">
                                            <span className="text-accent-emerald">✓</span> {f}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== WHY ME ===== */}
            <section className="pb-24 relative" ref={whyRef as React.RefObject<HTMLElement>}>
                <div className="max-w-[1200px] mx-auto px-6">
                    <SectionHeader badge="Diferencial" title="¿Por qué elegirme?" subtitle="No solo escribo código, entiendo tu negocio y creo soluciones a medida que generan resultados." />

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {whyMe.map((item, i) => (
                            <div key={item.title}
                                className={`glass rounded-2xl p-7 hover:bg-bg-glass-hover hover:border-border-glass-hover hover:-translate-y-1 transition-all duration-300
                  ${whyVisible ? 'animate-reveal' : 'opacity-0'}`}
                                style={{ animationDelay: `${i * 0.1}s` }}>
                                <span className="text-3xl mb-3 block">{item.icon}</span>
                                <h3 className="font-heading text-lg font-semibold text-text-main mb-2">{item.title}</h3>
                                <p className="text-sm text-text-sub leading-relaxed">{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== PROCESS ===== */}
            <section id="proceso" className="pb-24 relative" ref={processRef as React.RefObject<HTMLElement>}>
                <div className="max-w-[1200px] mx-auto px-6">
                    <SectionHeader badge="Proceso" title="¿Cómo trabajamos?" />

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {processSteps.map((p, i) => (
                            <div key={p.step}
                                className={`glass rounded-2xl p-7 relative hover:bg-bg-glass-hover hover:border-border-glass-hover hover:-translate-y-1 transition-all duration-300
                  ${processVisible ? 'animate-reveal' : 'opacity-0'}`}
                                style={{ animationDelay: `${i * 0.1}s` }}>
                                <span className="font-heading text-5xl font-black gradient-text opacity-20 absolute top-4 right-5">{p.step}</span>
                                <h3 className="font-heading text-lg font-semibold text-text-main mb-2 mt-4">{p.title}</h3>
                                <p className="text-sm text-text-sub leading-relaxed">{p.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== CONTACT ===== */}
            <section id="contacto" className="pb-24 px-6" ref={contactRef as React.RefObject<HTMLElement>}>
                <div className="max-w-[1200px] mx-auto px-6">
                    <SectionHeader badge="Contacto" title="Hablemos" subtitle="¿Tenés una idea o necesitás una solución digital? Escribime a través de mis canales de contacto directo." />

                    <div className={`mx-auto transition-all duration-700 ${contactVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                        <div className="flex flex-col gap-7 items-center text-center">
                            <div className="w-full max-w-[900px] mx-auto glass rounded-3xl p-10 md:p-14 text-center relative overflow-hidden
                        before:content-[''] before:absolute before:inset-[-1px] before:rounded-[inherit] before:bg-gradient-to-br before:from-accent-cyan before:to-accent-violet before:-z-10 before:opacity-20">
                                <h2 className="font-heading text-[clamp(1.8rem,4vw,2.5rem)] font-bold text-text-main mb-4">
                                    Creemos algo juntos! 🚀
                                </h2>
                                <p className="text-text-sub max-w-[500px] mx-auto mb-8">
                                    Contame tu idea y te armo una propuesta personalizada. Sin compromiso, sin costo inicial.
                                </p>
                                <div className="flex flex-wrap gap-4 justify-center">
                                    <a href={waLink} target="_blank" rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-8 py-4 gradient-primary-bg text-white rounded-full font-heading font-semibold
                                shadow-[0_4px_20px_rgba(6,182,212,0.3)] hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(6,182,212,0.5)] transition-all duration-300">
                                        <FaWhatsapp className="text-lg" /> WhatsApp
                                    </a>
                                    <a href={`mailto:${personalInfo.email}`}
                                        className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-heading font-semibold
                                border border-border-glass-hover text-text-main
                                hover:bg-bg-glass-hover hover:border-accent-cyan hover:-translate-y-0.5 transition-all duration-300">
                                        <FiMail /> Email
                                    </a>
                                </div>
                            </div>

                            <Link to="/profesional" className="text-sm font-semibold text-accent-cyan hover:text-accent-violet transition-colors mt-6">
                                Ver mi Portafolio Completo →
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Floating WhatsApp */}
            <a href={waLink} target="_blank" rel="noopener noreferrer"
                className="fixed bottom-6 right-6 z-50 w-14 h-14 flex items-center justify-center rounded-full
          bg-[#25D366] text-white text-2xl shadow-[0_4px_20px_rgba(37,211,102,0.4)]
          hover:scale-110 hover:shadow-[0_8px_30px_rgba(37,211,102,0.5)] transition-all duration-300">
                <FaWhatsapp />
            </a>
        </MainLayout>
    );
}
