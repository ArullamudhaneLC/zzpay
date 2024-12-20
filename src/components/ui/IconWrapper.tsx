import React from 'react';
import { LucideIcon } from 'lucide-react';

interface IconWrapperProps {
  icon: LucideIcon;
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
}

export function IconWrapper({ 
  icon: Icon, 
  variant = 'primary',
  size = 'md' 
}: IconWrapperProps) {
  const variants = {
    primary: 'bg-primary-50 text-primary-500',
    secondary: 'bg-secondary-50 text-secondary-500',
  };

  const sizes = {
    sm: 'p-2',
    md: 'p-3',
    lg: 'p-4',
  };

  const iconSizes = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
  };

  return (
    <div className={`rounded-xl ${variants[variant]} ${sizes[size]}`}>
      <Icon className={iconSizes[size]} />
    </div>
  );
}