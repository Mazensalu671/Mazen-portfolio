import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, ZoomIn, X, Grid, FileText } from "lucide-react";
import { projectsData } from "../../data/projects";

const Reveal = ({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.5, delay }}
  >
    {children}
  </motion.div>
);

export default function ProjectDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  
  const currentIndex = projectsData.findIndex(p => p.id === id);
  const activeProject = projectsData[currentIndex];
  
  const prevProject = currentIndex > 0 ? projectsData[currentIndex - 1] : null;
  const nextProject = currentIndex < projectsData.length - 1 ? projectsData[currentIndex + 1] : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    if (lightboxImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [lightboxImage]);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  // دالة العودة للرئيسية والنزول لقسم المشاريع بنعومة
  const handleGoHome = () => {
    navigate('/');
    
    const scrollDown = () => {
      const element = document.getElementById('projects') || document.getElementById('ProjectsSection');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };

    setTimeout(scrollDown, 100);
    setTimeout(scrollDown, 300);
    setTimeout(scrollDown, 600);
  };

  if (!activeProject) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen font-['Plus_Jakarta_Sans',sans-serif]">
        <h2 className="text-2xl font-bold mb-4">Project Not Found</h2>
        <button onClick={handleGoHome} className="text-[#3F7DFF] font-semibold">Go Home</button>
      </div>
    );
  }

  const allAssets = [activeProject.posterUrl, ...(activeProject.gallery || [])];

  return (
    <>
      {/* شريط التحميل العلوي */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-1 bg-[#3F7DFF] origin-left z-50"
      />

      <section className="py-12 sm:py-16 md:py-24 bg-[#F8FAFC] min-h-screen text-[#0F172A] font-['Plus_Jakarta_Sans',sans-serif]">
        <div className="mx-auto px-4 sm:px-6 max-w-[1000px]">
          
          {/* Top Back Navigation */}
          <div className="mb-6 md:mb-8">
            <button 
              onClick={handleGoHome}
              className="flex items-center gap-2 text-[#64748B] hover:text-[#3F7DFF] transition-colors font-semibold text-[14px] sm:text-[15px] md:text-[16px]"
            >
              <ArrowLeft className="w-4 h-4 md:w-5 md:h-5" /> Back to Case Studies
            </button>
          </div>

          <div className="bg-[#FFFFFF] rounded-[20px] md:rounded-[24px] border border-[#E2E8F0] p-5 sm:p-8 md:p-12 shadow-[0_10px_30px_rgba(15,23,42,0.04)] space-y-10 sm:space-y-12 md:space-y-16">
            
            {/* Hero Poster */}
            <div className="relative w-full aspect-[16/10] md:aspect-[16/7] bg-[#1E293B] rounded-[16px] md:rounded-[20px] overflow-hidden group cursor-default shadow-sm">
              <div 
                className="absolute inset-0 transition-transform duration-700 group-hover:scale-[1.02]"
                style={{
                  backgroundImage: `url(${activeProject.posterUrl})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
            </div>

            {/* Header Text */}
            <Reveal>
              <div className="text-left mt-2 md:-mt-4">
                <p className="text-[16px] sm:text-[18px] md:text-[24px] font-bold text-[#3F7DFF] mb-2 md:mb-3">
                  {activeProject.highlightNumber} {activeProject.highlightLabel}
                </p>
                <h1 className="text-[26px] sm:text-[32px] md:text-[46px] font-bold text-[#0F172A] leading-[1.2] md:leading-tight mb-3 md:mb-4 tracking-tight">
                  {activeProject.title}
                </h1>
                <p className="text-[14px] sm:text-[16px] md:text-[18px] text-[#64748B] font-medium leading-relaxed">
                  {activeProject.category} • {activeProject.industry} • {activeProject.year}
                </p>
              </div>
            </Reveal>

            {/* Metadata & Business Objective */}
            <Reveal>
              <div className="space-y-6 border-t border-[#E2E8F0] pt-8 md:pt-12">
                {/* Responsive Grid: 2 Cols Mobile | 3 Cols Tablet | 5 Cols Desktop */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 bg-[#F8FAFC] border border-[#E2E8F0] p-4 sm:p-5 md:p-6 rounded-[16px]">
                  <div>
                    <span className="text-[10px] sm:text-[11px] md:text-[12px] font-bold text-[#64748B] uppercase tracking-[0.1em] block mb-1">Industry</span>
                    <span className="text-[13px] sm:text-[14px] md:text-[15px] font-bold text-[#0F172A] leading-snug break-words">{activeProject.industry}</span>
                  </div>
                  <div>
                    <span className="text-[10px] sm:text-[11px] md:text-[12px] font-bold text-[#64748B] uppercase tracking-[0.1em] block mb-1">Client</span>
                    <span className="text-[13px] sm:text-[14px] md:text-[15px] font-bold text-[#0F172A] leading-snug break-words">{activeProject.client}</span>
                  </div>
                  {/* Role يأخذ مساحة أكبر في الموبايل والتابلت لكي لا يتكسر النص */}
                  <div className="col-span-2 md:col-span-1 lg:col-span-1">
                    <span className="text-[10px] sm:text-[11px] md:text-[12px] font-bold text-[#64748B] uppercase tracking-[0.1em] block mb-1">Role</span>
                    <span className="text-[13px] sm:text-[14px] md:text-[15px] font-bold text-[#0F172A] leading-snug">{activeProject.role}</span>
                  </div>
                  <div>
                    <span className="text-[10px] sm:text-[11px] md:text-[12px] font-bold text-[#64748B] uppercase tracking-[0.1em] block mb-1">Duration</span>
                    <span className="text-[13px] sm:text-[14px] md:text-[15px] font-bold text-[#0F172A] leading-snug">{activeProject.duration}</span>
                  </div>
                  <div>
                    <span className="text-[10px] sm:text-[11px] md:text-[12px] font-bold text-[#64748B] uppercase tracking-[0.1em] block mb-1">Year</span>
                    <span className="text-[13px] sm:text-[14px] md:text-[15px] font-bold text-[#0F172A] leading-snug">{activeProject.year}</span>
                  </div>
                </div>

                <div className="bg-[#EEF4FF] border border-[#3F7DFF]/20 p-5 md:p-6 rounded-[16px]">
                  <h4 className="text-[11px] sm:text-[12px] md:text-[13px] font-bold text-[#3F7DFF] uppercase tracking-[0.1em] mb-2">Business Objective</h4>
                  <p className="text-[15px] sm:text-[18px] md:text-[20px] font-semibold text-[#0F172A] leading-snug">
                    {activeProject.businessObjective}
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Challenge */}
            <Reveal>
              <div>
                <h4 className="text-[17px] sm:text-[18px] md:text-[20px] font-bold text-[#0F172A] mb-3">Challenge</h4>
                <p className="text-[15px] md:text-[18px] text-[#64748B] leading-relaxed max-w-3xl">
                  {activeProject.challenge}
                </p>
              </div>
            </Reveal>

            {/* Approach */}
            <Reveal>
              <div className="bg-[#F8FAFC] border border-[#E2E8F0] p-5 sm:p-6 md:p-8 rounded-[16px] md:rounded-[20px]">
                <h4 className="text-[17px] sm:text-[18px] md:text-[20px] font-bold text-[#0F172A] mb-3">Approach</h4>
                <p className="text-[15px] md:text-[18px] text-[#64748B] leading-relaxed max-w-3xl">
                  {activeProject.approach}
                </p>
              </div>
            </Reveal>

            {/* Execution */}
            <Reveal>
              <div>
                <h4 className="text-[17px] sm:text-[18px] md:text-[20px] font-bold text-[#0F172A] mb-4 md:mb-6">Execution</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                  {activeProject.execution.map((item, idx) => (
                    <motion.div 
                      key={idx}
                      whileHover={{ y: -3 }}
                      className="flex items-start gap-3 md:gap-4 bg-[#FFFFFF] border border-[#E2E8F0] p-4 md:p-5 rounded-[16px] transition-shadow hover:shadow-[0_10px_20px_rgba(15,23,42,0.06)]"
                    >
                      <span className="text-[20px] sm:text-[22px] md:text-[24px] mt-0.5 shrink-0">{item.icon}</span>
                      <div>
                        <h5 className="text-[14px] sm:text-[15px] md:text-[16px] font-bold text-[#0F172A] leading-tight">{item.title}</h5>
                        <p className="text-[13px] sm:text-[14px] md:text-[15px] text-[#64748B] mt-1.5 leading-relaxed">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Separate Business & Technical Results */}
            <Reveal>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 border-t border-[#E2E8F0] pt-8 md:pt-12">
                <div>
                  <h4 className="text-[17px] sm:text-[18px] md:text-[20px] font-bold text-[#0F172A] mb-4 md:mb-6">Business Outcomes</h4>
                  <div className="space-y-3 sm:space-y-4">
                    {activeProject.businessResults?.map((res, i) => (
                      <div key={i} className="border-b border-[#E2E8F0] pb-3 sm:pb-4 last:border-0 last:pb-0">
                        <span className="block text-[22px] sm:text-[26px] md:text-[28px] font-bold text-[#3F7DFF] leading-none mb-1 md:mb-2">{res.value}</span>
                        <span className="block text-[13px] sm:text-[14px] md:text-[15px] font-medium text-[#64748B] leading-snug">{res.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-[17px] sm:text-[18px] md:text-[20px] font-bold text-[#0F172A] mb-4 md:mb-6">Technical Outcomes</h4>
                  <div className="space-y-3 sm:space-y-4">
                    {activeProject.technicalResults?.map((res, i) => (
                      <div key={i} className="border-b border-[#E2E8F0] pb-3 sm:pb-4 last:border-0 last:pb-0">
                        <span className="block text-[22px] sm:text-[26px] md:text-[28px] font-bold text-[#0F172A] leading-none mb-1 md:mb-2">{res.value}</span>
                        <span className="block text-[13px] sm:text-[14px] md:text-[15px] font-medium text-[#64748B] leading-snug">{res.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Campaign Assets (Images & PDFs) */}
            <Reveal>
              <div>
                <h4 className="text-[17px] sm:text-[18px] md:text-[20px] font-bold text-[#0F172A] mb-4 md:mb-6">Campaign Assets</h4>
                
                {/* Gallery */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                  {allAssets.map((img, idx) => (
                    <div 
                      key={idx} 
                      onClick={() => setLightboxImage(img)}
                      className="aspect-video bg-[#F1F5F9] rounded-[12px] md:rounded-[16px] border border-[#E2E8F0] overflow-hidden group cursor-pointer relative shadow-sm"
                    >
                      <img 
                        src={img} 
                        alt={`Asset ${idx + 1}`} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <ZoomIn className="w-6 h-6 md:w-8 md:h-8 text-white" />
                      </div>
                    </div>
                  ))}
                </div>

                {/* PDFs */}
                {activeProject.documents && activeProject.documents.length > 0 && (
                  <div className="mt-4 md:mt-6 flex flex-col sm:flex-row flex-wrap gap-3 md:gap-4">
                    {activeProject.documents.map((doc, idx) => (
                      <a 
                        key={idx}
                        href={doc.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 px-4 py-3 md:px-5 md:py-3.5 bg-[#F8FAFC] border border-[#E2E8F0] rounded-[12px] hover:border-[#3F7DFF] hover:bg-[#EEF4FF] transition-all group shadow-sm hover:shadow-md w-full sm:w-auto"
                      >
                        <div className="w-8 h-8 md:w-10 md:h-10 shrink-0 rounded-full bg-[#E2E8F0] flex items-center justify-center text-[#64748B] group-hover:bg-[#3F7DFF] group-hover:text-white transition-colors">
                          <FileText className="w-4 h-4 md:w-5 md:h-5" />
                        </div>
                        <span className="text-[13px] sm:text-[14px] md:text-[15px] font-bold text-[#0F172A] group-hover:text-[#3F7DFF] transition-colors truncate">
                          {doc.title}
                        </span>
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </Reveal>

            {/* Tools Used */}
            <Reveal>
              <div>
                <h4 className="text-[17px] sm:text-[18px] md:text-[20px] font-bold text-[#0F172A] mb-4 md:mb-6">Tools Used</h4>
                <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4">
                  {activeProject.tools.map((tool, idx) => (
                    <div key={idx} className="group relative">
                      <div className="px-3 py-2 sm:px-4 sm:py-2.5 md:px-5 md:py-3 bg-[#F8FAFC] border border-[#E2E8F0] rounded-[10px] md:rounded-[12px] text-[12px] sm:text-[13px] md:text-[15px] font-bold text-[#0F172A] hover:border-[#3F7DFF] hover:bg-[#EEF4FF] transition-colors cursor-default flex items-center gap-2">
                        <div className="w-4 h-4 md:w-5 md:h-5 bg-[#CBD5E1] rounded-sm flex items-center justify-center text-[8px] md:text-[10px] text-white shrink-0">Logo</div>
                        <span className="truncate">{tool.name}</span>
                      </div>
                      {/* Tooltip مخفي في الموبايل لعدم تداخل الشاشات */}
                      {tool.tooltip && (
                        <div className="hidden lg:block absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-max max-w-[200px] bg-[#0F172A] text-white text-[12px] py-1.5 px-3 rounded-lg opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity z-10 text-center">
                          {tool.tooltip}
                          <div className="absolute top-full left-1/2 -translate-x-1/2 border-[5px] border-transparent border-t-[#0F172A]" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Key Takeaways */}
            <Reveal>
              <div className="bg-[#0F172A] rounded-[16px] md:rounded-[20px] p-5 sm:p-8 md:p-10 text-white">
                <h4 className="text-[17px] sm:text-[18px] md:text-[20px] font-bold mb-4 md:mb-6 flex items-center gap-2">
                  <span>💡</span> Key Takeaways
                </h4>
                <ul className="space-y-3 sm:space-y-4">
                  {activeProject.takeaways.map((takeaway, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-[14px] sm:text-[15px] md:text-[17px] leading-relaxed text-[#CBD5E1]">
                      <span className="text-[#3F7DFF] mt-1 shrink-0">•</span>
                      <span>{takeaway}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

          </div>

          {/* BOTTOM NAVIGATION - نظام متجاوب ذكي جداً */}
          <div className="mt-10 md:mt-16 pb-8 border-t border-[#E2E8F0] pt-8 md:pt-10">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-0 items-center">
              
              {/* Previous */}
              <div className="col-span-1 flex justify-start">
                {prevProject ? (
                  <Link to={`/project-details/${prevProject.id}`} className="group flex flex-col items-start gap-1 w-full pr-2">
                    <span className="text-[11px] md:text-[13px] font-bold text-[#64748B] uppercase tracking-[0.1em] flex items-center gap-1 group-hover:text-[#3F7DFF] transition-colors">
                      <ArrowLeft className="w-3.5 h-3.5 md:w-4 md:h-4" /> Prev
                    </span>
                    <span className="text-[13px] sm:text-[14px] md:text-[16px] font-bold text-[#0F172A] group-hover:text-[#3F7DFF] transition-colors line-clamp-2 md:line-clamp-1 text-left leading-tight">
                      {prevProject.title}
                    </span>
                  </Link>
                ) : <div />}
              </div>

              {/* Home Button (يطفو للسطر الثاني في الموبايل بفضل الـ order-last و col-span-2) */}
              <div className="col-span-2 md:col-span-1 flex justify-center order-last md:order-none mt-2 md:mt-0">
                <button 
                  onClick={handleGoHome}
                  className="group flex w-full sm:w-auto items-center justify-center gap-2.5 sm:gap-3 px-5 py-3 md:px-6 md:py-3.5 bg-[#FFFFFF] border border-[#E2E8F0] rounded-full shadow-[0_4px_20px_rgba(15,23,42,0.03)] hover:shadow-[0_10px_30px_rgba(63,125,255,0.1)] hover:border-[#3F7DFF]/40 transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-[#F8FAFC] group-hover:bg-[#3F7DFF] flex items-center justify-center transition-colors duration-300">
                    <Grid className="w-3.5 h-3.5 md:w-4 md:h-4 text-[#64748B] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <span className="text-[13px] md:text-[14px] font-bold text-[#0F172A] group-hover:text-[#3F7DFF] transition-colors duration-300 sm:pr-2">
                    All Case Studies
                  </span>
                </button>
              </div>

              {/* Next */}
              <div className="col-span-1 flex justify-end text-right">
                {nextProject ? (
                  <Link to={`/project-details/${nextProject.id}`} className="group flex flex-col items-end gap-1 w-full pl-2">
                    <span className="text-[11px] md:text-[13px] font-bold text-[#64748B] uppercase tracking-[0.1em] flex items-center gap-1 group-hover:text-[#3F7DFF] transition-colors">
                      Next <ArrowRight className="w-3.5 h-3.5 md:w-4 md:h-4" />
                    </span>
                    <span className="text-[13px] sm:text-[14px] md:text-[16px] font-bold text-[#0F172A] group-hover:text-[#3F7DFF] transition-colors line-clamp-2 md:line-clamp-1 text-right leading-tight">
                      {nextProject.title}
                    </span>
                  </Link>
                ) : <div />}
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* LIGHTBOX (Image Zoom Modal) */}
      <AnimatePresence>
        {lightboxImage && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-4 md:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setLightboxImage(null)}
              className="absolute inset-0 bg-black/90 backdrop-blur-md cursor-zoom-out"
            />
            
            <button 
              onClick={() => setLightboxImage(null)}
              className="absolute top-4 right-4 md:top-6 md:right-6 z-[101] p-2.5 md:p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            >
              <X className="w-5 h-5 md:w-6 md:h-6" />
            </button>

            <motion.img
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2 }}
              src={lightboxImage}
              alt="Zoomed Asset"
              className="relative z-[101] w-full max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl pointer-events-none"
            />
          </div>
        )}
      </AnimatePresence>
    </>
  );
}