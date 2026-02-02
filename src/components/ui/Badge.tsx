interface BadgeProps {
  variant?: 'default' | 'green' | 'blue' | 'amber' | 'red' | 'gray';
  children: React.ReactNode;
  className?: string;
}

const colors = {
  default: 'bg-surface-hover text-text-secondary',
  green: 'bg-neon-subtle text-neon',
  blue: 'bg-accent/10 text-accent',
  amber: 'bg-amber-500/10 text-amber-400',
  red: 'bg-red-500/10 text-red-400',
  gray: 'bg-surface-hover text-text-muted',
};

export default function Badge({ variant = 'default', children, className = '' }: BadgeProps) {
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${colors[variant]} ${className}`}>
      {children}
    </span>
  );
}
