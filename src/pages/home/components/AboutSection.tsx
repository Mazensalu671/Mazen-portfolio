import { motion } from "framer-motion";
import { TrendingUp, BarChart3, Target, CheckCircle2 } from "lucide-react";
import type { Variants } from "framer-motion";

export default function AboutSection() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section 
      id="about" 
      className="relative py-16 md:py-[160px] bg-[#F8FAFC] overflow-hidden font-['Plus_Jakarta_Sans',sans-serif]"
    >
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-[#0F172A] to-transparent opacity-[0.02] pointer-events-none" />

      <div className="mx-auto px-4 sm:px-6 max-w-[1200px] relative z-10">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-160px" }}
          className="grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-16"
        >
          
          {/* ================= LEFT COLUMN (Text Content) ================= */}
          <div className="flex flex-col text-center lg:text-start items-center lg:items-start lg:self-start">
            
            {/* About Me Tag */}
            <motion.div variants={itemVariants} className="flex items-center justify-center lg:justify-start gap-3 mb-6">
              <div className="h-px w-8 bg-[#3F7DFF]" />
              <span className="text-[14px] font-bold text-[#3F7DFF] uppercase tracking-[0.2em]">
                About Me
              </span>
            </motion.div>

            {/* العنوان بلون واحد كما طلبت */}
            <motion.h2 variants={itemVariants} className="text-[32px] sm:text-[38px] md:text-[48px] font-bold text-[#0F172A] mb-6 lg:mb-8 tracking-tight leading-[1.15]">
              Transforming Data Into Scalable Growth
            </motion.h2>

            <motion.div variants={itemVariants} className="text-[15px] sm:text-[17px] md:text-[18px] text-[#64748B] leading-relaxed max-w-xl flex flex-col gap-4">
              <p>
                I’m a Performance Marketing Specialist focused on turning digital campaigns into measurable business results.
              </p>
              <p>
                I work across paid media, campaign strategy, marketing analytics, lead generation, and conversion optimization — combining creative thinking with data to understand what works, improve performance, and drive meaningful growth.
              </p>
              <p>
                My background in Information Technology gives me a strong technical foundation that strengthens the way I approach websites, analytics, tracking, and digital systems.
              </p>
              <p>
                I believe effective marketing is not just about launching campaigns — it’s about measuring what matters, learning from the data, and continuously improving performance.
              </p>
            </motion.div>
          </div>

          {/* ================= RIGHT COLUMN (Professional Card Grid) ================= */}
          {/* تمت إضافة lg:mt-16 لإنزال الكروت قليلاً إلى الأسفل */}
          <div className="grid sm:grid-cols-2 gap-6 w-full mt-10 lg:mt-16 lg:self-center">
            
            {/* Card 1: Performance Marketing */}
            <motion.div 
              variants={itemVariants} 
              whileHover={{ y: -6 }}
              className="group bg-[#FFFFFF] p-6 lg:p-7 rounded-[24px] border border-[#E2E8F0] shadow-[0_10px_30px_rgba(15,23,42,0.04)] hover:shadow-[0_20px_40px_rgba(63,125,255,0.08)] transition-all duration-300 text-left"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-[16px] bg-[#EEF4FF] flex items-center justify-center transition-transform group-hover:scale-110 group-hover:rotate-3 duration-300 shrink-0">
                  <TrendingUp className="w-6 h-6 text-[#3F7DFF]" strokeWidth={2} />
                </div>
                <h3 className="text-[18px] sm:text-[19px] font-bold text-[#0F172A] leading-tight">Performance Marketing</h3>
              </div>
              
              <ul className="space-y-3 sm:space-y-4">
                {["Campaign Strategy", "Paid Media", "Lead Generation", "Campaign Optimization"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-[14px] sm:text-[15px] text-[#64748B]">
                    <CheckCircle2 className="w-5 h-5 text-[#3F7DFF] shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Card 2: Marketing Analytics */}
            <motion.div 
              variants={itemVariants}
              whileHover={{ y: -6 }} 
              className="group bg-[#FFFFFF] p-6 lg:p-7 rounded-[24px] border border-[#E2E8F0] shadow-[0_10px_30px_rgba(15,23,42,0.04)] hover:shadow-[0_20px_40px_rgba(63,125,255,0.08)] transition-all duration-300 text-left"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-[16px] bg-[#EEF4FF] flex items-center justify-center transition-transform group-hover:scale-110 group-hover:-rotate-3 duration-300 shrink-0">
                  <BarChart3 className="w-6 h-6 text-[#3F7DFF]" strokeWidth={2} />
                </div>
                <h3 className="text-[18px] sm:text-[19px] font-bold text-[#0F172A] leading-tight">Data-Driven Marketing</h3>
              </div>

              <ul className="space-y-3 sm:space-y-4">
                {["GA4", "GTM", "Looker Studio", "Attribution"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-[14px] sm:text-[15px] text-[#64748B]">
                    <CheckCircle2 className="w-5 h-5 text-[#3F7DFF] shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Card 3: Business ROI - Wide Rectangle */}
            <motion.div 
              variants={itemVariants} 
              whileHover={{ y: -6 }}
              className="group bg-[#FFFFFF] p-6 lg:p-7 rounded-[24px] border border-[#E2E8F0] shadow-[0_10px_30px_rgba(15,23,42,0.04)] hover:shadow-[0_20px_40px_rgba(63,125,255,0.08)] transition-all duration-300 sm:col-span-2 text-left"
            >
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-5">
                <div className="w-12 h-12 rounded-[16px] bg-[#EEF4FF] flex items-center justify-center shrink-0 transition-transform group-hover:scale-110 duration-300">
                  <Target className="w-6 h-6 text-[#3F7DFF]" strokeWidth={2} />
                </div>
                <div>
                  <h3 className="text-[19px] sm:text-[20px] font-bold text-[#0F172A]">Business ROI</h3>
                  <p className="text-[13px] sm:text-[14px] text-[#64748B] mt-0.5">Driving measurable growth and optimizing the funnel.</p>
                </div>
              </div>
              
              <div className="grid sm:grid-cols-2 gap-3 sm:gap-4 mt-4 bg-slate-50/70 rounded-xl p-4 sm:p-5 border border-slate-100">
                {["Lead Generation", "Conversion Optimization", "Campaign Scaling", "Reporting"].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#3F7DFF] shrink-0" />
                    <span className="text-[14px] sm:text-[15px] text-[#475569]">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}