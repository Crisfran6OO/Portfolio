import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ParticlesBackground from '../components/ParticlesBackground';

interface MainLayoutProps {
    children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
    return (
        <div className="min-h-screen relative" style={{ background: '#0a0a0f' }}>
            <ParticlesBackground />
            <Navbar />
            <main className="relative z-10">{children}</main>
            <Footer />
        </div>
    );
}
