interface SectionHeaderProps {
    badge: string;
    title: string;
    subtitle?: string;
}

export default function SectionHeader({ badge, title, subtitle }: SectionHeaderProps) {
    return (
        <div className="mb-8">
            <span className="font-heading text-sm font-semibold tracking-[3px] uppercase gradient-text inline-block mb-3">
                {badge}
            </span>
            <h2 className="font-heading text-[clamp(2rem,4vw,3rem)] font-bold text-text-main leading-tight">
                {title}
            </h2>
            {subtitle && (
                <p className="text-lg text-text-sub  leading-relaxed mt-4">
                    {subtitle}
                </p>
            )}
        </div>
    );
}
