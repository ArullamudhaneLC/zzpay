import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, AlertCircle, Info, AlertTriangle } from 'lucide-react';
import { ToastType } from '../../../types/toast';

interface ToastProps {
  id: string;
  message: string;
  type: ToastType;
  onClose: (id: string) => void;
}

const icons = {
  success: CheckCircle,
  error: AlertCircle,
  info: Info,
  warning: AlertTriangle,
};

const variants = {
  success: 'bg-primary-50 border-primary-200 text-primary-600',
  error: 'bg-red-50 border-red-200 text-red-600',
  info: 'bg-blue-50 border-blue-200 text-blue-600',
  warning: 'bg-yellow-50 border-yellow-200 text-yellow-600',
};

export function Toast({ id, message, type, onClose }: ToastProps) {
  const Icon = icons[type];

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className={`flex items-center gap-3 p-4 rounded-lg border ${variants[type]} shadow-lg`}
    >
      <Icon className="w-5 h-5 flex-shrink-0" />
      <p className="text-sm flex-grow">{message}</p>
      <button
        onClick={() => onClose(id)}
        className="p-1 hover:bg-black/5 rounded-full transition-colors"
      >
        <X className="w-4 h-4" />
      </button>
    </motion.div>
  );
}