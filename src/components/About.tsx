import { motion } from 'framer-motion';

const About = () => {


  return (
    <section id="about" className="py-20 bg-gray-50 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-8">
        <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold">Giới thiệu về bản thân</h2>
            <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
                Định hướng và mục tiêu nghề nghiệp
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Side - Avatar Section */}
          <motion.div
            className="flex justify-center relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="relative w-full max-w-xs">
              <div className="aspect-square rounded-xl overflow-hidden shadow-lg bg-gradient-to-br from-primary/20 to-primary/10">
                <img
                  src="avata.jpg"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>

              
            </div>
          </motion.div>

          {/* Right Side - Information Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-6">
              Xin chào, tôi là <span className="text-primary">Tấn Lợi</span>
            </h3>

            <div className="space-y-3 mb-6">
              <p className="text-sm md:text-lg text-gray-700 leading-relaxed">
                Tôi là sinh viên năm 3 chuyên ngành Mạng Máy Tính với niềm đam mê mãnh liệt về việc xây dựng và quản lý hệ thống mạng. Có kiến thức vững về các giao thức mạng, bảo mật thông tin và quản trị hệ thống.
              </p>
              <p className="text-sm md:text-lg text-gray-700 leading-relaxed">
                Mục tiêu của tôi là trở thành một Network Engineer chuyên nghiệp, có khả năng thiết kế và triển khai các giải pháp mạng hiệu quả cho doanh nghiệp.
              </p>
            </div>

   
            
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
