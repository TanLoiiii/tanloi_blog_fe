import { motion } from 'framer-motion';
import { useRef } from 'react';

interface SubjectProps {
  id?: string;
}

const Subject = ({ id }: SubjectProps) => {
  const skills = [
    { id: 1, logo: '/logo/cisco.png' },
    { id: 2, logo: '/logo/html.png' },
    { id: 3, logo: '/logo/java.png' },
    { id: 4, logo: '/logo/javascript.png' },
    { id: 5, logo: '/logo/openvpn.svg' },
    { id: 6, logo: '/logo/Rsa_logo.png' },
    { id: 7, logo: '/logo/virtualbox.png' },
    { id: 8, logo: '/logo/vps.png' },
  ];

  const marqueeRef = useRef<HTMLDivElement>(null);

  return (
    <section id={id} className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">
        
        <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold">Kỹ Năng & Công Nghệ</h2>
            <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
                Các ngôn ngữ lập trình, framework và ứng dụng
            </p>
        </div>
        {/* Skills Section - Logo Only */}
        <div className="relative overflow-hidden rounded-lg" ref={marqueeRef}>
          <motion.div
            className="flex whitespace-nowrap"
            animate={{
              x: [0, -1200],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: 'loop',
                duration: 30,
                ease: 'linear',
              },
            }}
          >
            {[...skills, ...skills].map((skill, index) => (
              <motion.div
                key={`skill-${index}`}
                className="flex items-center justify-center w-44 h-22 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 mx-4 flex-shrink-0"
                whileHover={{ scale: 1.1, boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}
              >
                <img
                  src={skill.logo}
                  alt={`logo-${skill.id}`}
                  className="h-20 w-28 object-contain"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Subject;
