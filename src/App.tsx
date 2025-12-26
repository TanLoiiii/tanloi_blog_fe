import "./App.css";

function App() {
  return (
    <div className="bg-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-slate-900 text-white shadow-lg z-50">
        <nav className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-cyan-400">Portfolio</h2>
          <ul className="flex gap-8 list-none">
            <li>
              <a
                href="#about"
                className="hover:text-cyan-400 transition-colors"
              >
                Giới thiệu
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="hover:text-cyan-400 transition-colors"
              >
                Kỹ năng
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="hover:text-cyan-400 transition-colors"
              >
                Dự án
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-cyan-400 transition-colors"
              >
                Liên hệ
              </a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800 text-white pt-20">
        <div className="text-center px-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Xin chào, tôi là{" "}
            <span className="text-cyan-400">Sinh viên CNTT</span>
          </h1>
          <h2 className="text-3xl md:text-4xl text-cyan-400 mb-4">
            Chuyên ngành Mạng Máy Tính - Năm 3
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Đam mê về hạ tầng mạng, bảo mật và các công nghệ mới
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-4 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg text-lg font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-500/50"
          >
            Liên hệ với tôi
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-slate-900 relative pb-4">
            Giới thiệu về tôi
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-cyan-500"></span>
          </h2>
          <div className="max-w-4xl mx-auto space-y-6">
            <p className="text-lg text-gray-700 text-justify">
              Tôi là sinh viên năm 3 chuyên ngành Mạng Máy Tính với niềm đam mê
              mãnh liệt về việc xây dựng và quản lý hệ thống mạng. Tôi có kiến
              thức vững về các giao thức mạng, bảo mật thông tin và quản trị hệ
              thống.
            </p>
            <p className="text-lg text-gray-700 text-justify">
              Mục tiêu của tôi là trở thành một Network Engineer chuyên nghiệp,
              có khả năng thiết kế và triển khai các giải pháp mạng hiệu quả cho
              doanh nghiệp.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-slate-900 relative pb-4">
            Kỹ năng
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-cyan-500"></span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-50 p-8 rounded-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <h3 className="text-cyan-500 text-xl font-semibold mb-4">
                Mạng & Giao thức
              </h3>
              <ul className="space-y-3">
                <li className="py-2 border-b border-gray-300">
                  TCP/IP, OSI Model
                </li>
                <li className="py-2 border-b border-gray-300">
                  Routing & Switching
                </li>
                <li className="py-2 border-b border-gray-300">VLAN, VPN</li>
                <li className="py-2">DHCP, DNS</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <h3 className="text-cyan-500 text-xl font-semibold mb-4">
                Bảo mật
              </h3>
              <ul className="space-y-3">
                <li className="py-2 border-b border-gray-300">
                  Firewall Configuration
                </li>
                <li className="py-2 border-b border-gray-300">
                  Network Security
                </li>
                <li className="py-2 border-b border-gray-300">
                  Penetration Testing
                </li>
                <li className="py-2">Wireshark Analysis</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <h3 className="text-cyan-500 text-xl font-semibold mb-4">
                Công cụ & Hệ thống
              </h3>
              <ul className="space-y-3">
                <li className="py-2 border-b border-gray-300">
                  Cisco Packet Tracer
                </li>
                <li className="py-2 border-b border-gray-300">
                  Linux Administration
                </li>
                <li className="py-2 border-b border-gray-300">
                  Windows Server
                </li>
                <li className="py-2">Docker & Virtualization</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <h3 className="text-cyan-500 text-xl font-semibold mb-4">
                Lập trình
              </h3>
              <ul className="space-y-3">
                <li className="py-2 border-b border-gray-300">
                  Python (Network Automation)
                </li>
                <li className="py-2 border-b border-gray-300">
                  Bash Scripting
                </li>
                <li className="py-2 border-b border-gray-300">SQL</li>
                <li className="py-2">HTML/CSS/JavaScript</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-slate-900 relative pb-4">
            Dự án
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-cyan-500"></span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <h3 className="text-slate-900 text-xl font-semibold mb-4">
                Thiết kế mạng doanh nghiệp
              </h3>
              <p className="text-gray-600">
                Thiết kế và triển khai mô hình mạng cho doanh nghiệp vừa với
                VLAN, routing protocols.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <h3 className="text-slate-900 text-xl font-semibold mb-4">
                Hệ thống giám sát mạng
              </h3>
              <p className="text-gray-600">
                Xây dựng hệ thống monitoring sử dụng Python để theo dõi hiệu
                suất mạng.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <h3 className="text-slate-900 text-xl font-semibold mb-4">
                VPN Server Configuration
              </h3>
              <p className="text-gray-600">
                Cấu hình VPN server trên Linux để đảm bảo kết nối an toàn cho
                nhân viên remote.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-slate-900 relative pb-4 inline-block">
            Liên hệ
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-cyan-500"></span>
          </h2>
          <p className="text-xl mb-8 text-gray-700">
            Hãy kết nối với tôi qua các kênh sau:
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="mailto:your.email@example.com"
              className="px-8 py-4 bg-slate-900 text-white rounded-lg transition-all duration-300 hover:bg-cyan-500 hover:-translate-y-1"
            >
              📧 Email
            </a>
            <a
              href="https://github.com/yourusername"
              className="px-8 py-4 bg-slate-900 text-white rounded-lg transition-all duration-300 hover:bg-cyan-500 hover:-translate-y-1"
            >
              💻 GitHub
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              className="px-8 py-4 bg-slate-900 text-white rounded-lg transition-all duration-300 hover:bg-cyan-500 hover:-translate-y-1"
            >
              💼 LinkedIn
            </a>
            <a
              href="tel:+84xxxxxxxxx"
              className="px-8 py-4 bg-slate-900 text-white rounded-lg transition-all duration-300 hover:bg-cyan-500 hover:-translate-y-1"
            >
              📱 Điện thoại
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white text-center py-8">
        <p>&copy; 2024 Portfolio. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
