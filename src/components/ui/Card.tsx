import { HTMLAttributes } from 'react';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
  padding?: 'none' | 'sm' | 'md' | 'lg';
}

const paddings = { none: '', sm: 'p-3', md: 'p-5', lg: 'p-8' };

export default function Card({ hover = false, padding = 'md', className = '', children, ...props }: CardProps) {
  return (
    <div
      className={`bg-surface-card rounded-xl border border-border shadow-xs ${
        hover ? 'hover:shadow-sm hover:border-border-hover transition-all' : ''
      } ${paddings[padding]} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
