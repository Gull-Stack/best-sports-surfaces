interface BadgeProps {
  variant?: 'default' | 'green' | 'blue' | 'amber' | 'red' | 'gray';
  children: React.ReactNode;
  className?: string;
}

const colors = {
  default: 'bg-gray-100 text-gray-800',
  green: 'bg-brand-light text-brand-hover',
  blue: 'bg-blue-100 text-blue-800',
  amber: 'bg-amber-100 text-amber-800',
  red: 'bg-red-100 text-red-800',
  gray: 'bg-gray-100 text-gray-600',
};

export default function Badge({ variant = 'default', children, className = '' }: BadgeProps) {
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${colors[variant]} ${className}`}>
      {children}
    </span>
  );
}
