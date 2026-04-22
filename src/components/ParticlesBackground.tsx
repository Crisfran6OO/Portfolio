import { useMemo } from 'react';

export default function ParticlesBackground() {
    const particles = useMemo(
        () =>
            Array.from({ length: 20 }, (_, i) => ({
                id: i,
                left: `${Math.random() * 100}%`,
                size: Math.random() * 3 + 1,
                duration: Math.random() * 10 + 10,
                delay: Math.random() * 10,
                opacity: Math.random() * 0.3 + 0.1,
            })),
        []
    );

    return (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
            {particles.map((p) => (
                <div
                    key={p.id}
                    className="absolute rounded-full"
                    style={{
                        left: p.left,
                        bottom: '-10px',
                        width: `${p.size}px`,
                        height: `${p.size}px`,
                        background: p.id % 2 === 0 ? '#06B6D4' : '#7c3aed',
                        opacity: p.opacity,
                        animation: `particle-float ${p.duration}s linear ${p.delay}s infinite`,
                    }}
                />
            ))}
        </div>
    );
}
