import { useState, useEffect } from 'react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Giới thiệu', link: '#about' },
    { label: 'Kỹ năng', link: '#skills' },
    { label: 'Dự án', link: '#projects' },
    { label: 'Liên hệ', link: '#contact' },
  ];

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
          className={`text-2xl font-bold transition-colors duration-300 ${
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
