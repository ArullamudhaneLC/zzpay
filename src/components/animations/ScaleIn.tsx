import { motion } from 'framer-motion';
import React from 'react';

interface ScaleInProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
}

export function ScaleIn({ 
  children, 
  delay = 0,
  duration = 0.5 
}: ScaleInProps) {
  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
    >
      {children}
    </motion.div>
  );
}