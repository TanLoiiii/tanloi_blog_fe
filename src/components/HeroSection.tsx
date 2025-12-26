import type { EmblaOptionsType } from 'embla-carousel';
import useEmblaCarousel from 'embla-carousel-react';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

interface HeroSlide {
  id: number;
  type: 'image' | 'video';
  src: string;
  alt?: string;
  title: string;
  description: string;
}

const HeroSection = () => {
  const heroSlides: HeroSlide[] = [
    {
      id: 1,
      type: 'image',
      src: 'tap_the.jpg',
      alt: 'Network Engineer',
      title: 'Xin chào, Tôi là Tấn Lợi',
      description: 'Chuyên ngành Mạng Máy Tính',
    },
    {
      id: 2,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=600&fit=crop',
      alt: 'Network Skills',
      title: 'Kỹ năng chuyên môn',
      description: 'Các giao thức mạng, bảo mật và quản trị hệ thống',
    },
    {
      id: 3,
      type: 'image',
      src: '/certification_evidents/chungnhan_3.png',
      alt: 'My Projects',
      title: 'Hoạt động và cộng đồng',
      description: 'Tham gia các dự án và hoạt động tình nguyện tăng cường kỹ năng, kinh nghiệm và kết nối.',
    },
  ];

  const [selectedIndex, setSelectedIndex] = useState(0);
  const carouselOptions: Partial<EmblaOptionsType> = {
    loop: false,
    skipSnaps: false,
  };

  const [emblaRef, emblaApi] = useEmblaCarousel(carouselOptions);
  const videoRefs = useRef<{ [key: string]: HTMLVideoElement | null }>({});
  const scrollLocked = useRef(false);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on('select', onSelect);
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi]);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (!emblaApi) return;

      const isLastSlide = selectedIndex === heroSlides.length - 1;
      const isFirstSlide = selectedIndex === 0;

      // Allow normal page scroll when on last slide scrolling down
      if (isLastSlide && e.deltaY > 0) {
        return;
      }

      // Allow normal page scroll when on first slide scrolling up
      if (isFirstSlide && e.deltaY < 0) {
        return;
      }

      e.preventDefault();

      if (scrollLocked.current) return;
      scrollLocked.current = true;

      if (e.deltaY > 0) {
        emblaApi.scrollNext();
      } else if (e.deltaY < 0) {
        emblaApi.scrollPrev();
      }

      setTimeout(() => {
        scrollLocked.current = false;
      }, 300);
    };

    const sectionElement = document.querySelector('[data-hero-section]') as HTMLElement;
    if (sectionElement) {
      (sectionElement as any).addEventListener('wheel', handleWheel, { passive: false });
    }

    return () => {
      if (sectionElement) {
        (sectionElement as any).removeEventListener('wheel', handleWheel);
      }
    };
  }, [emblaApi, selectedIndex, heroSlides.length]);

  const renderMedia = (slide: HeroSlide) => {
    if (slide.type === 'image') {
      return (
        <img
          src={slide.src}
          alt={slide.alt || slide.title}
          className="h-full w-full object-cover"
          loading="eager"
        />
      );
    } else if (slide.type === 'video') {
      return (
        <video
          ref={(el) => {
            videoRefs.current[`video-${slide.id}`] = el;
          }}
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover"
        >
          <source src={slide.src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      );
    }
  };

  return (
    <section
      className="relative h-screen w-full overflow-hidden"
      data-hero-section
      id='hero'
    >
      {/* Top overlay gradient - darker */}
      <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-black/70 via-black/40 to-transparent z-10 pointer-events-none"></div>

      {/* Carousel Container */}
      <div className="h-full w-full" ref={emblaRef}>
        <div className="flex h-full">
          {heroSlides.map((slide) => (
            <div key={slide.id} className="flex-[0_0_100%] h-full relative">
              {renderMedia(slide)}
              {/* Bottom gradient overlay */}
              <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom overlay gradient - darker */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10 pointer-events-none"></div>

      {/* Animated Text Content */}
      {heroSlides.map((slide, index) => (
        <AnimatePresence key={slide.id}>
          {selectedIndex === index && index !== 2 && ( 
            <div className={`absolute inset-0 h-full flex pointer-events-none ${
              index === 0 
                ? 'items-start justify-center pt-32' // Slide 1: giữa màn hình, phía trên
                : 'items-end justify-start pb-20 pl-8 md:pl-20 -top-20' // Slide 2: góc trái dưới
            }`}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className={`max-w-3xl px-8 py-6 pointer-events-auto relative z-20 text-white bg-black/20 rounded-2xl ${
                  index === 0 ? 'text-center' : 'text-left'
                }`}
              >
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  <span className="text-primary">{slide.title.split(' ')[0]}</span>
                  {slide.title.substring(slide.title.indexOf(' '))}
                </h1>
                <p className="text-xl md:text-xl text-gray-200 mb-2">
                  {slide.description}
                </p>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      ))}

      {/* Scroll Indicator */}
      <div className="hidden lg:flex absolute bottom-8 left-20 z-20 flex-col items-center">
        <span className="text-white text-sm mb-2">Scroll to navigate</span>
        <div className="h-16 w-1 bg-white/30 rounded-full overflow-hidden">
          <motion.div
            className="w-full bg-primary rounded-full"
            initial={{ height: '0%' }}
            animate={{
              height: `${((selectedIndex + 1) / heroSlides.length) * 100}%`,
            }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>
      {/* Thumbnail Indicators */}
      <div className="absolute bottom-8 right-20 z-20 flex gap-3">
        {heroSlides.map((slide, index) => (
          <button
            key={index}
            onClick={() => emblaApi?.scrollTo(index)}
            className={`w-16 h-10 overflow-hidden rounded-lg border-2 transition-all duration-300 ${
              selectedIndex === index
                ? 'border-primary scale-110'
                : 'border-white/50 opacity-60 hover:opacity-100'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          >
            {slide.type === 'image' ? (
              <img
                src={slide.src}
                alt={`Thumbnail ${index + 1}`}
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="bg-slate-800 h-full w-full flex items-center justify-center text-white text-xs">
                Video
              </div>
            )}
          </button>
        ))}
      </div>

      
    </section>
  );
};

export default HeroSection;
