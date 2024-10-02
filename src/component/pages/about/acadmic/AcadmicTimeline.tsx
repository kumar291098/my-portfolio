import React, { useState } from 'react';
import { useTheme } from '../../../theme-provider/ThemeContext';
import { motion } from 'framer-motion';
import { School, Calendar, Award, ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  link: string;
}

interface AcademicEntry {
  institution: string;
  degree: string;
  duration: string;
  cgpa: string;
  projects: Project[];
}

interface AcademicTimelineProps {
  academicEntries: AcademicEntry[];
}

const AcademicTimeline: React.FC<AcademicTimelineProps> = ({ academicEntries }) => {
  const [expandedEntry, setExpandedEntry] = useState<number | null>(null);
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const toggleExpand = (index: number) => {
    setExpandedEntry(expandedEntry === index ? null : index);
  };

  return (
    <section className={`timeline-section py-12 px-4 sm:px-6 lg:px-8 ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <h2 className={`section-title text-4xl font-bold mb-8 text-center ${isDark ? 'text-blue-400' : 'text-gray-800'}`}>
        Academic Timeline
      </h2>
      <div className="max-w-4xl mx-auto space-y-8">
        {academicEntries.map((entry, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`rounded-xl overflow-hidden shadow-lg transition-all duration-300 transform hover:scale-105 ${
              isDark
                ? 'bg-gray-800 border border-gray-700 hover:bg-gray-750'
                : 'bg-gray-100 border border-gray-300 hover:bg-gray-200'
            }`}
          >
            <div
              className={`p-6 cursor-pointer transition-colors duration-300 ${
                isDark ? 'hover:bg-gray-700' : 'hover:bg-gray-300'
              }`}
              onClick={() => toggleExpand(index)}
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between">
                <div className="flex items-center space-x-4 mb-4 sm:mb-0">
                  <School className={`w-10 h-10 ${isDark ? 'text-blue-400' : 'text-blue-600'}`} />
                  <div>
                    <h3 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-800'}`}>
                      {entry.institution}
                    </h3>
                    <p className={`text-md ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                      {entry.degree}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="text-right">
                    <div className="flex items-center justify-end space-x-2">
                      <Calendar className={`w-4 h-4 ${isDark ? 'text-gray-400' : 'text-blue-500'}`} />
                      <span className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                        {entry.duration}
                      </span>
                    </div>
                    <div className="flex items-center justify-end space-x-2 mt-1">
                      <Award className={`w-4 h-4 ${isDark ? 'text-yellow-400' : 'text-yellow-600'}`} />
                      <span className={`text-sm font-semibold ${isDark ? 'text-yellow-400' : 'text-yellow-600'}`}>
                        CGPA: {entry.cgpa}
                      </span>
                    </div>
                  </div>
                  <motion.div
                    initial={false}
                    animate={{ rotate: expandedEntry === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {expandedEntry === index ? (
                      <ChevronUp className={`w-6 h-6 ${isDark ? 'text-blue-400' : 'text-blue-600'}`} />
                    ) : (
                      <ChevronDown className={`w-6 h-6 ${isDark ? 'text-blue-400' : 'text-blue-600'}`} />
                    )}
                  </motion.div>
                </div>
              </div>
            </div>

            {expandedEntry === index && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className={`p-6 ${isDark ? 'bg-gray-700' : 'bg-gray-200'}`}
              >
                <h4 className={`text-lg font-semibold mb-4 ${isDark ? 'text-blue-300' : 'text-gray-800'}`}>
                  Projects
                </h4>
                <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                  {entry.projects.map((project, projIndex) => (
                    <motion.div
                      key={projIndex}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: projIndex * 0.1 }}
                      className={`p-4 rounded-lg transition-all duration-300 ${
                        isDark
                          ? 'bg-gray-800 hover:bg-gray-750 shadow-md hover:shadow-lg'
                          : 'bg-white hover:bg-gray-100 shadow hover:shadow-md'
                      }`}
                    >
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`text-lg font-medium hover:underline transition-colors duration-300 ${
                          isDark
                            ? 'text-blue-400 hover:text-blue-300'
                            : 'text-blue-700 hover:text-blue-800'
                        }`}
                      >
                        {project.title}
                      </a>
                      <p className={`mt-2 text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                        {project.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default AcademicTimeline;
  