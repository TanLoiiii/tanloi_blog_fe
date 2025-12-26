import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Giới thiệu', link: '#hero', isHash: true },
    { label: 'Kỹ năng', link: '#skills', isHash: true },
    { label: 'Chứng chỉ', link: '#certification', isHash: true },
    { label: 'Bài viết', link: '/posts', isHash: false },
  ];

  const handleNavClick = (e: React.MouseEvent, item: typeof navItems[0]) => {
    if (item.isHash) {
      e.preventDefault();

      // Nếu đang ở trang khác, về landing page trước
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          const element = document.querySelector(item.link);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 100);
      } else {
        const element = document.querySelector(item.link);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    } else {
      e.preventDefault();
      navigate(item.link);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md shadow-sm py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-8 flex justify-between items-center">
        {/* Logo */}
        <h2
          onClick={() => navigate('/')}
          className={`text-2xl font-bold transition-colors duration-300 cursor-pointer ${
            scrolled ? 'text-primary' : 'text-primary'
          }`}
        >
          Portfolio
        </h2>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-8 list-none">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.link}
                onClick={(e) => handleNavClick(e, item)}
                className={`font-medium transition-colors duration-300 ${
                  scrolled
                    ? 'text-gray-700 hover:text-primary'
                    : 'text-white hover:text-primary'
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-2xl">
          <svg
            className={`w-6 h-6 ${scrolled ? 'text-gray-700' : 'text-white'}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </nav>
    </header>
  );
};

export default Header;
