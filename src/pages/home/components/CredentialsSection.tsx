import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Variants } from "framer-motion";
import { 
  Award, 
  X, 
  Download, 
  ArrowRight,
  CheckCircle2,
  ShieldCheck
} from "lucide-react";
import { credentialsData } from "../../../data/credentials";
import type { Certificate, Provider } from "../../../data/credentials";

interface ModalCertificate extends Certificate {
  providerName: string;
}

export default function CredentialsSection() {
  const [activeModalCert, setActiveModalCert] = useState<ModalCertificate | null>(null);

  const totalCerts = credentialsData.reduce((acc, p) => acc + p.certificates.length, 0);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.1, delayChildren: 0.1 } 
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 25 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5, ease: "easeOut" } 
    }
  };

  const modalVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95, y: 10 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { duration: 0.25, ease: "easeOut", staggerChildren: 0.08 } 
    },
    exit: { opacity: 0, scale: 0.95, y: 10, transition: { duration: 0.2 } }
  };

  const modalItemVariants: Variants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } }
  };

  return (
    <section id="CredentialsSection" className="py-28 bg-white text-[#1D1D1F] font-['Plus_Jakarta_Sans',sans-serif]">
      <div className="mx-auto px-6 max-w-[960px]">
        
        {/* ================= SECTION HEADER ================= */}
        <motion.div 
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-20"
        >
          <h2 className="text-[40px] md:text-[48px] font-semibold tracking-tight text-[#1D1D1F] mb-4">
            Professional Certifications
          </h2>
          <p className="text-[18px] text-[#86868B] font-normal max-w-2xl leading-relaxed">
            Validated certifications from global tech leaders and top-tier institutions, driving data-backed marketing strategies.
          </p>
        </motion.div>

        {/* ================= STATISTICS ROW ================= */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          className="grid grid-cols-3 gap-4 md:gap-8 pb-16 mb-24 border-b border-[#E5E5EA]"
        >
          <div className="flex flex-col">
            <span className="text-[36px] font-semibold text-[#1D1D1F] tracking-tight mb-1">
              {totalCerts}+
            </span>
            <span className="text-[13px] text-[#86868B] font-medium tracking-wide uppercase">Certifications</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[36px] font-semibold text-[#1D1D1F] tracking-tight mb-1">
              {credentialsData.length}
            </span>
            <span className="text-[13px] text-[#86868B] font-medium tracking-wide uppercase">Providers</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[36px] font-semibold text-[#0066CC] tracking-tight mb-1">
              100%
            </span>
            <span className="text-[13px] text-[#86868B] font-medium tracking-wide uppercase">Verifiable</span>
          </div>
        </motion.div>

        {/* ================= ISSUERS & HORIZONTAL LISTS ================= */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="space-y-24"
        >
          {credentialsData.map((provider: Provider) => (
            <motion.div key={provider.id} variants={itemVariants} className="space-y-6">
              
              {/* Issuer Header */}
              <div className="flex items-center gap-4 pb-2">
                <div className="flex items-center shrink-0">
                  {provider.icon}
                </div>
                <div>
                  <h3 className="text-[20px] font-semibold text-[#1D1D1F] tracking-tight leading-none mb-1">
                    {provider.name}
                  </h3>
                  <p className="text-[13px] text-[#86868B] font-medium">
                    {provider.certificates.length} Professional Certification{provider.certificates.length > 1 ? 's' : ''}
                  </p>
                </div>
              </div>

              {/* Minimalist Horizontal List Items */}
              <div className="space-y-3">
                {provider.certificates.map((cert: Certificate) => (
                  <motion.div 
                    key={cert.id}
                    onClick={() => setActiveModalCert({ ...cert, providerName: provider.name })}
                    whileHover={{ 
                      y: -2,
                      backgroundColor: "#FAFAFC",
                      boxShadow: "0 10px 30px -10px rgba(0, 0, 0, 0.05)"
                    }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    // تم التعديل هنا: تصغير الحواف في الجوال lg:px-8 lg:py-6
                    className="group relative bg-white border border-[#E5E5EA] rounded-[16px] px-5 py-5 lg:px-8 lg:py-6 flex flex-col lg:flex-row lg:items-center justify-between gap-4 lg:gap-6 cursor-pointer overflow-hidden"
                  >
                    {/* Left Blue Accent Line on Hover */}
                    <motion.div 
                      initial={{ scaleY: 0 }}
                      whileHover={{ scaleY: 1 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#0066CC] origin-center"
                    />

                    {/* Left: Certificate Name & Subtitle */}
                    <div className="flex flex-col gap-1 min-w-0 pl-1 flex-1">
                      {/* تم التعديل هنا: تصغير الخط في الجوال lg:text-[17px] */}
                      <h4 className="text-[15px] lg:text-[17px] font-semibold text-[#1D1D1F] tracking-tight">
                        {cert.title}
                      </h4>
                      <p className="text-[13px] lg:text-[14px] text-[#86868B] font-normal group-hover:text-[#0066CC] transition-colors duration-200">
                        {cert.subtitle}
                      </p>
                    </div>

                    {/* Center & Right Meta Elements */}
                    {/* تم التعديل هنا: تقليل المسافات في الجوال lg:gap-14 */}
                    <div className="flex items-center justify-between lg:justify-end gap-3 lg:gap-14 shrink-0 mt-2 lg:mt-0 w-full lg:w-auto">
                      
                      {/* Issued Date */}
                      <div className="w-auto lg:w-[90px] text-left">
                        <span className="text-[10px] lg:text-[11px] text-[#86868B] uppercase tracking-wider lg:hidden block mb-0.5">Issued</span>
                        {/* تم التعديل هنا: تصغير التاريخ في الجوال lg:text-[15px] */}
                        <span className="text-[13px] lg:text-[15px] font-medium text-[#1D1D1F]">
                          {cert.issued}
                        </span>
                      </div>

                      {/* Verified Badge */}
                      <div className="w-auto lg:w-[100px] flex justify-start">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 lg:px-3 lg:py-1 rounded-full text-[11px] lg:text-[12px] font-medium text-[#34C759] border border-[#34C759]/30 bg-[#34C759]/5 whitespace-nowrap">
                          <CheckCircle2 className="w-3.5 h-3.5" /> Verified
                        </span>
                      </div>

                      {/* Preview Action */}
                      <div className="w-auto lg:w-[90px] flex justify-end">
                        <div className="inline-flex items-center gap-1.5 text-[13px] lg:text-[14px] font-medium text-[#0066CC] py-1.5 px-2 lg:px-3 rounded-lg group-hover:bg-[#0066CC]/5 transition-colors duration-200 whitespace-nowrap">
                          <span>Preview</span>
                          <motion.div
                            initial={{ x: 0 }}
                            whileHover={{ x: 4 }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                          >
                            <ArrowRight className="w-3.5 h-3.5 lg:w-4 lg:h-4" />
                          </motion.div>
                        </div>
                      </div>

                    </div>

                  </motion.div>
                ))}
              </div>

            </motion.div>
          ))}
        </motion.div>

        {/* ================= PREVIEW MODAL ================= */}
        <AnimatePresence>
          {activeModalCert && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="absolute inset-0 bg-black/40 backdrop-blur-sm"
                onClick={() => setActiveModalCert(null)}
              />

              {/* Modal Card */}
              <motion.div
                variants={modalVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="relative w-full max-w-[600px] bg-white rounded-[24px] shadow-2xl border border-[#E5E5EA] overflow-hidden z-10 max-h-[90vh] flex flex-col"
              >
                {/* Close Button */}
                <button 
                  onClick={() => setActiveModalCert(null)}
                  className="absolute top-5 right-5 p-2 rounded-full bg-black/5 text-[#86868B] hover:bg-black/10 hover:text-[#1D1D1F] transition-colors z-20"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Scrollable Content */}
                <div className="overflow-y-auto p-8 space-y-8 flex-1">
                  
                  {/* 1. Large Certificate Image */}
                  <motion.div 
                    variants={modalItemVariants}
                    className="w-full aspect-[1.414/1] bg-[#FAFAFC] rounded-[16px] border border-[#E5E5EA] flex flex-col items-center justify-center overflow-hidden relative"
                  >
                    {activeModalCert.imageUrl ? (
                      <img 
                        src={activeModalCert.imageUrl} 
                        alt={activeModalCert.title} 
                        className="w-full h-full object-cover" 
                      />
                    ) : (
                      <div className="text-center text-[#86868B] flex flex-col items-center p-6">
                        <Award className="w-14 h-14 mb-3 opacity-30 stroke-[1.5]" />
                        <span className="font-semibold text-[16px] text-[#1D1D1F] mb-1">{activeModalCert.title}</span>
                        <span className="text-[14px] text-[#86868B]">{activeModalCert.providerName} Official Certificate</span>
                      </div>
                    )}
                  </motion.div>

                  {/* Header info in Modal */}
                  <motion.div variants={modalItemVariants} className="space-y-1">
                    <h3 className="text-[22px] font-semibold text-[#1D1D1F] tracking-tight">
                      {activeModalCert.title}
                    </h3>
                    <p className="text-[15px] text-[#0066CC] font-medium">
                      {activeModalCert.subtitle}
                    </p>
                  </motion.div>

                  {/* 2. Skills Covered */}
                  <motion.div variants={modalItemVariants} className="space-y-3 pb-4">
                    <span className="block text-[12px] font-semibold text-[#86868B] uppercase tracking-wider">
                      Skills Covered
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {activeModalCert.skills.map((skill: string, idx: number) => (
                        <span 
                          key={idx}
                          className="px-3.5 py-1.5 text-[13px] text-[#1D1D1F] font-medium bg-[#FAFAFC] border border-[#E5E5EA] rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.div>

                </div>

                {/* ================= STICKY FOOTER ACTIONS ================= */}
                <motion.div 
                  variants={modalItemVariants}
                  className="sticky bottom-0 left-0 right-0 p-5 bg-white/90 backdrop-blur-md border-t border-[#E5E5EA] flex flex-col z-20"
                >
                  
                  {/* صندوق كود التحقق */}
                  {activeModalCert.verifyCode && (
                    <div className="mb-4 flex flex-col sm:flex-row sm:items-center justify-between bg-[#F8FAFC] border border-[#E2E8F0] rounded-[12px] px-4 py-3 gap-2">
                      <span className="text-[13px] text-[#64748B] font-semibold uppercase tracking-wider">
                        Verification Code:
                      </span>
                      <span className="text-[14px] sm:text-[15px] text-[#0F172A] font-bold font-mono tracking-widest bg-white px-3 py-1.5 rounded-md border border-[#E2E8F0] shadow-sm select-all text-center">
                        {activeModalCert.verifyCode}
                      </span>
                    </div>
                  )}

                  <div className="flex flex-col sm:flex-row gap-3">
                    {/* زر التحقق */}
                    {activeModalCert.verifyUrl && activeModalCert.verifyUrl !== "#" && (
                      <a 
                        href={activeModalCert.verifyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-[12px] bg-[#0066CC] text-white font-semibold text-[15px] hover:bg-[#0055B3] transition-colors shadow-sm"
                      >
                        <ShieldCheck className="w-4 h-4" /> 
                        {activeModalCert.verifyCode ? "Verification Portal" : "Verify Credential"}
                      </a>
                    )}
                    
                    {/* زر التحميل */}
                    {activeModalCert.pdfUrl && activeModalCert.pdfUrl !== "#" && (
                      <a 
                        href={activeModalCert.pdfUrl}
                        target="_blank"
                        download
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-[12px] bg-white border border-[#E5E5EA] text-[#1D1D1F] font-semibold text-[15px] hover:border-[#1D1D1F] transition-colors"
                      >
                        <Download className="w-4 h-4" /> Download Certificate
                      </a>
                    )}
                  </div>
                </motion.div>

              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}