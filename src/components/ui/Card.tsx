import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  animate?: boolean;
  delay?: number;
}

export function Card({ 
  children, 
  className = '', 
  animate = true,
  delay = 0 
}: CardProps) {
  if (!animate) {
    return (
      <div className={`bg-white rounded-xl border border-gray-100 shadow-sm ${className}`}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)' }}
      className={`bg-white rounded-xl border border-gray-100 shadow-sm ${className}`}
    >
      {children}
    </motion.div>
  );
}