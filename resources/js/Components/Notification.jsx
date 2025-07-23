import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Notification({ message, type, onClose }) {
  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => {
        onClose();
      }, 5000); // Auto-close after 5 seconds
      return () => clearTimeout(timer);
    }
  }, [notification]);

  let bgColor;
  let textColor;

  switch (type) {
    case 'success':
      bgColor = 'bg-green-500';
      textColor = 'text-white';
      break;
    case 'error':
      bgColor = 'bg-red-500';
      textColor = 'text-white';
      break;
    case 'warning':
      bgColor = 'bg-yellow-500';
      textColor = 'text-gray-800';
      break;
    default:
      bgColor = 'bg-gray-500';
      textColor = 'text-white';
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-5 right-5 z-50 rounded-md p-4 shadow-lg ${bgColor} ${textColor}`}
      >
        <div className="flex items-center justify-between">
          <p className="text-sm font-medium">{message}</p>
          <button onClick={onClose} className={`ml-4 ${textColor === 'text-white' ? 'text-white' : 'text-gray-800'} hover:opacity-75`}>
            &times;
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}