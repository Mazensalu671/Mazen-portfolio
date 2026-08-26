import { useState } from "react";
import { 
  Mail, 
  Linkedin, 
  Briefcase, 
  FileText, 
  ArrowRight,
  Check
} from "lucide-react";

export default function ContactAndFooter() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("mazensalu671@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const contactCards = [
    {
      id: "email",
      icon: Mail,
      title: "Email",
      value: copied ? "Copied to clipboard!" : "mazensalu671@gmail.com",
      description: "Direct line for professional inquiries and opportunities.",
      onClick: handleCopyEmail,
      isExternal: false,
    },
    {
      id: "linkedin",
      icon: Linkedin,
      title: "LinkedIn",
      value: "Connect professionally",
      description: "View my professional background and recommendations.",
      href: "https://www.linkedin.com/in/mazen-saleh-al-madhaji-107983318/",
      isExternal: true,
    },
    {
      id: "availability",
      icon: Briefcase,
      title: "Availability",
      value: "Relocate, Remote & GCC",
      description: "Ready to relocate, open to remote work, and available for roles across the GCC.",
      hideArrow: true, 
      isExternal: false,
    },
    {
      id: "resume",
      icon: FileText,
      title: "Resume",
      value: "Download CV",
      description: "Get a comprehensive overview of my career history.",
      href: "/Mazen_Saleh_CV.pdf", 
      isExternal: true,
    }
  ];

  return (
    <div className="bg-[#FFFFFF] font-['Plus_Jakarta_Sans',sans-serif] text-[#0F172A] selection:bg-[#3F7DFF]/20">
      {/* ================= CONTACT SECTION ================= */}
      <section id="Footer" className="py-16 sm:py-20 md:py-[140px] border-t border-[#F1F5F9]">
        <div className="mx-auto px-5 sm:px-6 max-w-[1200px]">
          
          {/* Top: Professional Headline & Supporting Copy */}
          <div className="max-w-[720px] mb-12 sm:mb-14 md:mb-20 text-center sm:text-left mx-auto sm:mx-0">
            <span className="inline-block text-[12px] sm:text-[13px] font-bold uppercase tracking-[0.2em] text-[#3F7DFF] mb-3">
              Get in Touch
            </span>
            <h2 className="text-[28px] sm:text-[36px] md:text-[48px] font-bold text-[#0F172A] leading-[1.2] md:leading-[1.15] tracking-tight mb-4 md:mb-6">
              Let's discuss how data-driven marketing can scale your growth.
            </h2>
            <p className="text-[15px] sm:text-[16px] md:text-[18px] text-[#64748B] leading-relaxed max-w-[600px] mx-auto sm:mx-0">
              Whether you are looking to strengthen your performance marketing team or build robust analytics tracking frameworks, I am always open to impactful professional discussions.
            </p>
          </div>

          {/* Bottom: Interactive Cards */}
          {/* تم التعديل هنا: 1 موبايل، 2 ايباد وتابلت، 4 شاشات كمبيوتر كبيرة */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
            
            {contactCards.map((card) => {
              const IconComponent = card.id === "email" && copied ? Check : card.icon;
              const isClickable = !!(card.onClick || card.href);

              const cardContent = (
                <div className={`group h-full flex flex-col justify-between p-5 sm:p-6 xl:p-8 rounded-[20px] bg-[#FFFFFF] border border-[#E2E8F0] shadow-[0_4px_20px_rgba(15,23,42,0.03)] transition-all duration-[220ms] ease-out ${isClickable ? 'hover:-translate-y-1.5 hover:bg-[#3F7DFF] hover:border-[#3F7DFF] hover:shadow-[0_16px_35px_rgba(63,125,255,0.2)] cursor-pointer' : 'cursor-default'} relative`}>
                  
                  {/* Top row: Icon and Transition Arrow */}
                  <div className="flex items-center justify-between mb-5 sm:mb-8">
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-[12px] sm:rounded-[14px] bg-[#F8FAFC] border border-[#E2E8F0] flex items-center justify-center transition-all duration-[220ms] ease-out ${isClickable ? 'group-hover:bg-white/10 group-hover:border-white/20' : ''}`}>
                      <IconComponent className={`w-4 h-4 sm:w-5 sm:h-5 text-[#0F172A] transition-colors duration-[220ms] ease-out ${isClickable ? 'group-hover:text-white' : ''}`} />
                    </div>
                    
                    {!card.hideArrow && (
                      <div className="w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-[220ms] ease-out group-hover:translate-x-1">
                        <ArrowRight className="w-4 h-4 text-[#64748B] transition-colors duration-[220ms] ease-out group-hover:text-white" />
                      </div>
                    )}
                  </div>

                  {/* Content block */}
                  <div>
                    <span className={`text-[11px] sm:text-[12px] font-bold uppercase tracking-[0.15em] text-[#64748B] block mb-1.5 sm:mb-2 transition-colors duration-[220ms] ease-out ${isClickable ? 'group-hover:text-white/80' : ''}`}>
                      {card.title}
                    </span>
                    {/* break-all مفيدة جداً هنا لضمان عدم خروج الإيميل عن الشاشة في الهواتف الصغيرة */}
                    <h3 className={`text-[15px] sm:text-[17px] xl:text-[18px] font-bold text-[#0F172A] mb-2 sm:mb-3 transition-colors duration-[220ms] ease-out break-all sm:break-words ${isClickable ? 'group-hover:text-white' : ''}`}>
                      {card.value}
                    </h3>
                    <p className={`text-[13px] sm:text-[14px] text-[#64748B] leading-relaxed transition-colors duration-[220ms] ease-out ${isClickable ? 'group-hover:text-white/80' : ''}`}>
                      {card.description}
                    </p>
                  </div>

                </div>
              );

              if (card.onClick) {
                return (
                  <div key={card.id} onClick={card.onClick} className="h-full">
                    {cardContent}
                  </div>
                );
              }

              if (card.href) {
                return (
                  <a 
                    key={card.id} 
                    href={card.href} 
                    target={card.isExternal ? "_blank" : "_self"}
                    rel={card.isExternal ? "noopener noreferrer" : undefined}
                    className="block h-full"
                  >
                    {cardContent}
                  </a>
                );
              }

              return (
                <div key={card.id} className="h-full">
                  {cardContent}
                </div>
              );
            })}

          </div>

        </div>
      </section>

      {/* ================= MINIMALIST FOOTER ================= */}
      <footer className="border-t border-[#E2E8F0] bg-[#FFFFFF] py-6 sm:py-8">
        <div className="mx-auto px-5 sm:px-6 max-w-[1200px] flex flex-col sm:flex-row items-center justify-between gap-4">
          
          <div className="text-[12px] sm:text-[13px] md:text-[14px] text-[#64748B] font-medium text-center sm:text-left">
            © 2026 Mazen Saleh. All rights reserved.
          </div>

          <div className="flex items-center gap-5 sm:gap-6 text-[12px] sm:text-[13px] md:text-[14px] text-[#64748B] font-medium">
            <a 
              href="https://www.linkedin.com/in/mazen-saleh-al-madhaji-107983318/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-[#3F7DFF] transition-colors duration-200"
            >
              LinkedIn
            </a>
            <a 
              href="mailto:mazensalu671@gmail.com" 
              className="hover:text-[#3F7DFF] transition-colors duration-200"
            >
              Email
            </a>
          </div>

        </div>
      </footer>
    </div>
  );
}