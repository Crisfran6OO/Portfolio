interface SkillTagProps {
    label: string;
    variant?: 'cyan' | 'violet' | 'emerald';
}

const variantMap = {
    cyan: 'bg-accent-cyan/10 border-accent-cyan/20 text-accent-cyan',
    violet: 'bg-accent-violet/10 border-accent-violet/20 text-accent-violet',
    emerald: 'bg-accent-emerald/10 border-accent-emerald/20 text-accent-emerald',
};

export default function SkillTag({ label, variant = 'cyan' }: SkillTagProps) {
    return (
        <span className={`px-3 py-1 border rounded-full text-xs font-medium ${variantMap[variant]}`}>
            {label}
        </span>
    );
}
