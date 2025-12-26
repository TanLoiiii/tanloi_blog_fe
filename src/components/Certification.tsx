import { motion } from 'framer-motion';
import { useState } from 'react';
import ImageModal from './ImageModal';

interface CertificationItem {
  id: number;
  title: string;
  image: string;
  description?: string;
}

interface CertBoxProps {
  cert: CertificationItem;
  positionClasses: string;
}

const CertBox = ({ cert, positionClasses, onClick }: CertBoxProps & { onClick: () => void }) => (
  <div
    className={`group absolute w-36 h-36 -rotate-45 overflow-hidden shadow-lg z-10 rounded-md ${positionClasses}`}
  >
    <div className="block h-full w-full cursor-pointer" onClick={onClick}>
      <div className="absolute inset-0 rotate-45 scale-[1.5] overflow-hidden">
        <img
          src={cert.image}
          alt={cert.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>
      <div className="absolute inset-0 rotate-45 flex items-center justify-center p-2">
        <div className="text-center">
          {/* <h3 className="text-white font-bold text-sm line-clamp-2">
            {cert.title}
          </h3> */}
        </div>
      </div>
    </div>
  </div>
);

const Certification = () => {
  const [selectedImage, setSelectedImage] = useState<{ url: string; title: string } | null>(null);

  const certifications: CertificationItem[] = [
    {
      id: 7,
      title: 'Hoạt động tình nguyện "Xuân ấm áp - Tết đông dạy"',
      image: '/certification_evidents/chungnhan_1.png',
      description: 'Hoạt động tình nguyện cộng đồng',
    },
    {
      id: 2,
      title: 'Hoạt động tình nguyện "Bao di qua, mua xuân về"',
      image: '/certification_evidents/chungnhan_2.png',
      description: 'Hoạt động tình nguyện cộng đồng',
    },
    {
      id: 3,
      title: 'Vòng chung kết cuộc thi "IT Code War 2025"',
      image: '/certification_evidents/chungnhan_3.png',
      description: 'Cuộc thi lập trình',
    },
    {
      id: 4,
      title: 'Chứng chỉ Cissco CCNA',
      image: '/certification_evidents/chungnhan_4.png',
    },
    {
      id: 5,
      title: 'Chứng chỉ Cissco CCNP',
      image: '/certification_evidents/chungnhan_5.png',
    },
    {
      id: 6,
      title: 'IT ward 2025',
      image: '/certification_evidents/chungnhan_6.png',
    },
    {
      id: 1,
      title: 'Chứng chỉ CompTIA Network+',
      image: '/certification_evidents/chungnhan_7.png',
    },
  ];

  const mainCert = certifications[0];
  const rotatedCerts = certifications.slice(2, 7);
  const videoCert = certifications[1] || mainCert;

  const boxLayouts = [
    {
      index: 0,
      positionClasses: 'bottom-[22%] left-[21%] transform -translate-x-1/2 translate-y-1/2',
    },
    {
      index: 1,
      positionClasses: 'top-[34%] left-[35%] transform -translate-x-1/2 -translate-y-1/2',
    },
    {
      index: 2,
      positionClasses: 'top-[34%] right-[37%] transform translate-x-1/2 -translate-y-1/2',
    },
    {
      index: 3,
      positionClasses: 'bottom-[22%] left-[49%] transform -translate-x-1/2 translate-y-1/2',
    },
    {
      index: 4,
      positionClasses: 'bottom-[22%] right-[23%] transform translate-x-1/2 translate-y-1/2',
    },
  ];

  return (
    <section id="certification" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-8">
        {/* Header */}
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold">Chứng Chỉ & Hoạt Động</h2>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            Các chứng chỉ, giải thưởng và hoạt động tình nguyện
          </p>
        </div>

        {/* Main Layout */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* Left Main Card */}
          <motion.div
            className="w-full md:w-1/3 relative rounded-xl overflow-hidden shadow-md group flex-shrink-0 h-64 md:h-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            onClick={() => setSelectedImage({ url: mainCert.image, title: mainCert.title })}
          >
            <div className="block h-full cursor-pointer">
              <div className="absolute inset-0">
                <img
                  src={mainCert.image}
                  alt={mainCert.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">{mainCert.title}</h3>
              </div>
            </div>
          </motion.div>

          {/* Right Section */}
          <div className="w-full md:w-2/3 flex flex-col gap-6">
            {/* Top Section - Rotated Boxes on Desktop, Grid on Mobile */}
            <div className="w-full">
              {/* Desktop: Rotated boxes layout */}
              <div className="hidden md:block relative h-64">
                {boxLayouts.map((layout) => {
                  const cert = rotatedCerts[layout.index];
                  if (!cert) return null;
                  return (
                    <CertBox
                      key={cert.id}
                      cert={cert}
                      positionClasses={layout.positionClasses}
                      onClick={() => setSelectedImage({ url: cert.image, title: cert.title })}
                    />
                  );
                })}
              </div>

              {/* Mobile: 2x2 Grid layout */}
              <div className="grid grid-cols-2 gap-3 md:hidden">
                {rotatedCerts.slice(0, 4).map((cert, index) => (
                  <motion.div
                    key={cert.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group relative aspect-square overflow-hidden rounded-lg shadow-md"
                    onClick={() => setSelectedImage({ url: cert.image, title: cert.title })}
                  >
                    <div className="block h-full w-full cursor-pointer">
                      <img
                        src={cert.image}
                        alt={cert.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/30"></div>
                      <div className="absolute inset-0 flex justify-center items-center ">
                        <h3 className="text-white font-bold text-sm text-center line-clamp-2">
                          {cert.title}
                        </h3>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Bottom Section with Certification Banner */}
            <motion.div
              className="w-full h-32 relative rounded-xl overflow-hidden shadow-md md:mt-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div
                className="block h-full cursor-pointer"
                onClick={() => setSelectedImage({ url: videoCert.image, title: videoCert.title })}
              >
                <img
                  src={videoCert.image}
                  alt={videoCert.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex items-end">
                  <div className="p-2 md:p-2 text-white">
                    {/* <h3 className="text-lg md:text-2xl font-bold mb-1">
                      {videoCert.title}
                    </h3> */}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Image Modal */}
      <ImageModal
        isOpen={selectedImage !== null}
        onClose={() => setSelectedImage(null)}
        imageUrl={selectedImage?.url || ''}
        title={selectedImage?.title || ''}
      />
    </section>
  );
};

export default Certification;
