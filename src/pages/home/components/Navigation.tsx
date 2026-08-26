import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // تتبع النزول
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20); // 20px يعطي استجابة أسرع وأنعم
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // دالة النزول وإغلاق القائمة
  const scrollToSection = (sectionId: string) => {
    setIsMobileMenuOpen(false); 
    
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 150);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const navItems = [
    { label: 'About', id: 'about' },
    { label: 'Case Studies', id: 'projects' },
    { label: 'Certifications', id: 'CredentialsSection' },
    { label: 'Toolkit', id: 'ToolsSection' },
    { label: 'Contact', id: 'Footer' }
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 font-sans">
        
        {/* ================= 1. الخلفية السحرية (السر في النعومة) ================= */}
        {/* هذه الطبقة مخفية في الأعلى، وتظهر بشفافية ناعمة جداً عند النزول */}
        <div 
          className={`absolute inset-0 z-0 pointer-events-none bg-white/95 backdrop-blur-md border-b border-[#E2E8F0]/80 transition-opacity duration-500 ease-in-out ${
            isScrolled || isMobileMenuOpen ? 'opacity-100 shadow-sm' : 'opacity-0'
          }`}
        />

        {/* ================= 2. محتوى الهيدر (فوق الخلفية) ================= */}
        <div className="relative z-10 container mx-auto px-5 sm:px-6 max-w-[1200px]">
          <div className="flex items-center justify-between h-[72px] md:h-[80px]">
            
            {/* LOGO SECTION */}
            <div className="flex items-center">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  if (location.pathname !== '/') {
                    navigate('/');
                  } else {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }
                }}
                className="flex items-center cursor-pointer select-none text-left group"
              >
                {/* خلفية الشعار تتغير بنعومة بدون تغيير الحجم */}
                <div className={`overflow-hidden rounded-[10px] p-1 transition-all duration-500 ease-in-out ${
                  isScrolled || isMobileMenuOpen 
                    ? 'bg-transparent shadow-none' 
                    : 'bg-white shadow-md shadow-black/10'
                }`}>
                  <img 
                    src="/logo/mazen.png" 
                    alt="Mazen Saleh Logo" 
                    className="w-[34px] h-[34px] sm:w-[40px] sm:h-[40px] object-contain shrink-0 rounded-[6px]" 
                  />
                </div>

                <div className="flex flex-col ml-3 pt-0.5">
                  <div className="flex items-center leading-none mb-1">
                    <span className={`text-[18px] sm:text-[20px] font-black tracking-tight transition-colors duration-500 ease-in-out ${
                      isScrolled || isMobileMenuOpen ? 'text-[#0F172A]' : 'text-white'
                    }`}>
                      Mazen
                    </span>
                    <span className={`text-[18px] sm:text-[20px] font-light tracking-tight ml-1.5 transition-colors duration-500 ease-in-out ${
                      isScrolled || isMobileMenuOpen ? 'text-[#0F172A]' : 'text-white'
                    }`}>
                      Saleh
                    </span>
                  </div>
                  <span className={`text-[8px] sm:text-[9px] font-semibold tracking-[0.1em] transition-colors duration-500 ease-in-out ${
                    isScrolled || isMobileMenuOpen ? 'text-[#64748B]' : 'text-white/80'
                  }`}>
                    Performance Marketing Specialist
                  </span>
                </div>
              </button>
            </div>

            {/* DESKTOP NAVIGATION */}
            <div className="hidden lg:flex items-center space-x-9">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-[13.5px] font-medium tracking-wide transition-all duration-500 ease-in-out hover:-translate-y-0.5 hover:text-[#3B82F6] cursor-pointer whitespace-nowrap ${
                    isScrolled ? 'text-[#48484A]' : 'text-white/90'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* MOBILE MENU BUTTON */}
            <div className="lg:hidden flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`p-2 rounded-md transition-colors duration-500 ease-in-out ${
                  isScrolled || isMobileMenuOpen ? 'text-[#0F172A] hover:bg-gray-100' : 'text-white hover:bg-white/10'
                }`}
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>

        {/* ================= 3. قائمة الجوال ================= */}
        <div className={`lg:hidden relative z-10 overflow-hidden transition-all duration-500 ease-in-out bg-white ${
          isMobileMenuOpen ? 'max-h-[400px] shadow-xl' : 'max-h-0'
        }`}>
          <div className="px-6 py-4 flex flex-col space-y-2 border-t border-[#E2E8F0]/50">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-left text-[15px] font-semibold text-[#0F172A] hover:text-[#3B82F6] py-3 border-b border-gray-100 last:border-none transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* خلفية معتمة للموبايل */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/20 z-40 lg:hidden transition-opacity duration-500"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
}