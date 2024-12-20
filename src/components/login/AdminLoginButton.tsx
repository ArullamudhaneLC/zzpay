import React from 'react';
import { motion } from 'framer-motion';
import { Shield } from 'lucide-react';

interface AdminLoginButtonProps {
  onClick: () => void;
}

export function AdminLoginButton({ onClick }: AdminLoginButtonProps) {
  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      onClick={onClick}
      className="absolute bottom-4 right-4 p-3 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white shadow-lg hover:shadow-xl transition-all duration-300 group"
    >
      <Shield className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
    </motion.button>
  );
}