import React from 'react';
import { motion } from 'framer-motion';

interface ProgressBarProps {
  name: string;
  percentage: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ name, percentage }) => {
  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">{name}</span>
        <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">{percentage}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 overflow-hidden">
        <motion.div
          className="h-2.5 rounded-full bg-gradient-to-r from-blue-500 to-blue-600"
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;