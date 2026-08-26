import { MapPin, BadgeCheck, Download, ArrowRight, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

export default function HeroSection() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#030712] font-sans">
      
      {/* ================= PREMIUM DATA-DRIVEN BACKGROUND ================= */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#030712] via-[#080e1a] to-[#030712]" />
        <div 
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.15) 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        />
        <div className="absolute top-[-10%] right-[-5%] h-[400px] w-[400px] md:h-[600px] md:w-[600px] rounded-full bg-blue-500/[0.07] blur-[160px]" />
        <div className="absolute bottom-[10%] left-[-10%] h-[350px] w-[350px] md:h-[500px] md:w-[500px] rounded-full bg-indigo-500/[0.05] blur-[140px]" />
      </div>

      {/* ================= CONTENT CONTAINER ================= */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 min-h-screen flex items-center pt-24 pb-28">
        <div className="grid md:grid-cols-[1.1fr_0.9fr] gap-10 md:gap-14 items-center w-full">
          
          {/* ================= LEFT COLUMN ================= */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col text-center md:text-start items-center md:items-start"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-400 mb-6 w-fit backdrop-blur-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              Available for GCC & MENA
            </motion.div>

            <motion.h1 variants={itemVariants} className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-[1.15] md:leading-[1.1] text-white tracking-tight">
              Performance Marketing <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
                That Delivers
              </span> <br className="hidden sm:inline" />
              Measurable Business Growth
            </motion.h1>

            <motion.p variants={itemVariants} className="mt-5 max-w-xl text-base sm:text-lg md:text-xl leading-relaxed text-slate-200">
              Helping businesses grow through paid media, analytics, and conversion tracking—combining technical expertise with measurable marketing results.
            </motion.p>

            {/* Mobile-only Profile Card placement */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="w-full flex justify-center my-8 md:hidden"
            >
              <div className="relative w-full max-w-[360px] aspect-[3/4] rounded-[28px] border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden bg-slate-900">
                <img
                  src="/images/profile.jpg"
                  alt="Mazen Saleh Al-Madhaji"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-[#030712]/60 to-transparent opacity-95" />
                <div className="absolute bottom-0 left-0 w-full p-5 flex flex-col text-left">
                  <h2 className="text-2xl font-bold text-white tracking-tight">Mazen Saleh Al-Madhaji</h2>
                  <p className="text-[#3F7DFF] font-semibold text-sm mt-1 mb-2">
                    Performance Marketing Specialist
                  </p>
                  <div className="flex items-center gap-1.5 text-slate-200 mb-2">
                    <BadgeCheck className="w-4 h-4 text-[#3F7DFF]" />
                    <span className="text-xs font-bold tracking-wide">Meta Certified • Google Certified</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-300 text-xs mb-3">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    <span>45 Street, Sana'a, Yemen</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {["Paid Media", "Marketing Analytics", "Conversion Tracking"].map((skill) => (
                      <span key={skill} className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] font-medium text-slate-200">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* CTAs */}
            <motion.div variants={itemVariants} className="mt-2 md:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <button
                onClick={() => scrollToSection("projects")}
                className="group flex items-center justify-center gap-2 rounded-xl bg-[#3F7DFF] px-6 py-3.5 font-semibold text-white transition-all hover:bg-blue-600 hover:scale-[1.02] shadow-lg shadow-blue-500/10"
              >
                View Case Studies
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>

              <a
                href="/Mazen_Saleh_CV.pdf"
                download="Mazen_Saleh_CV.pdf"
                className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.02] px-6 py-3.5 font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/5 hover:border-white/20"
              >
                <Download className="w-5 h-5" />
                Download Resume
              </a>
            </motion.div>

            {/* Quick Stats - Updated with Strategic B2B & Performance Metrics */}
            <motion.div variants={itemVariants} className="mt-12 grid grid-cols-3 gap-3 sm:gap-6 border-t border-white/10 pt-8 w-full max-w-xl">
              <div>
                <p className="text-2xl sm:text-3xl font-bold text-white tracking-tight">370+</p>
                <p className="text-[10px] sm:text-xs md:text-sm font-medium text-slate-400 mt-1 leading-snug">Qualified Leads</p>
              </div>
              <div className="border-l border-white/10 pl-3 sm:pl-6">
                <p className="text-2xl sm:text-3xl font-bold text-white tracking-tight">140%+</p>
                <p className="text-[10px] sm:text-xs md:text-sm font-medium text-slate-400 mt-1 leading-snug">Target Achievement</p>
              </div>
              <div className="border-l border-white/10 pl-3 sm:pl-6">
                <p className="text-2xl sm:text-3xl font-bold text-white tracking-tight">33%</p>
                <p className="text-[10px] sm:text-xs md:text-sm font-medium text-slate-400 mt-1 leading-snug">B2B Conversion Rate</p>
              </div>
            </motion.div>
          </motion.div>

          {/* ================= RIGHT COLUMN ================= */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
            className="relative hidden md:flex justify-end"
          >
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-full max-w-[420px] aspect-[3/4] rounded-[32px] border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden group bg-slate-900"
            >
              <img
                src="/images/profile.jpg"
                alt="Mazen Saleh Al-Madhaji"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-[#030712]/60 to-transparent opacity-95" />
              
              <div className="absolute bottom-0 left-0 w-full p-8 flex flex-col text-left">
                <h2 className="text-3xl font-bold text-white tracking-tight">Mazen Saleh Al-Madhaji</h2>
                <p className="text-[#3F7DFF] font-semibold text-base mt-1 mb-4">
                  Performance Marketing Specialist
                </p>
                <div className="flex items-center gap-1.5 text-slate-200 mb-3">
                  <BadgeCheck className="w-5 h-5 text-[#3F7DFF]" />
                  <span className="text-sm font-bold tracking-wide">Meta Certified • Google Certified</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300 text-sm mb-5">
                  <MapPin className="w-4 h-4 text-slate-400" />
                  <span>45 Street, Sana'a, Yemen</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {["Paid Media", "Marketing Analytics", "Conversion Tracking"].map((skill) => (
                    <span key={skill} className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-[13px] font-medium text-slate-200 backdrop-blur-md">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer z-25 hidden sm:flex"
        onClick={() => scrollToSection("case-studies")}
      >
        <span className="text-[10px] text-slate-400 uppercase tracking-[0.2em] font-semibold">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-4 h-4 text-slate-400" />
        </motion.div>
      </motion.div>
    </section>
  );
}