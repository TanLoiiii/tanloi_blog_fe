import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Mạng & Giao thức',
      skills: ['TCP/IP, OSI Model', 'Routing & Switching', 'VLAN, VPN', 'DHCP, DNS'],
    },
    {
      title: 'Bảo mật',
      skills: ['Firewall Configuration', 'Network Security', 'Penetration Testing', 'Wireshark Analysis'],
    },
    {
      title: 'Công cụ & Hệ thống',
      skills: ['Cisco Packet Tracer', 'Linux Administration', 'Windows Server', 'Docker & Virtualization'],
    },
    {
      title: 'Lập trình',
      skills: ['Python (Network Automation)', 'Bash Scripting', 'SQL', 'HTML/CSS/JavaScript'],
    },
  ];

  return (
    <section id="skills" className="py-16 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold">Kỹ năng</h2>
            <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
                Các kỹ năng chuyên môn và công nghệ của tôi
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 p-8 rounded-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 * index }}
              viewport={{ once: true }}
            >
              <h3 className="text-primary text-xl font-semibold mb-4">
                {category.title}
              </h3>
              <ul className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <li
                    key={skillIndex}
                    className={`py-2 ${skillIndex !== category.skills.length - 1 ? 'border-b border-gray-300' : ''}`}
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
