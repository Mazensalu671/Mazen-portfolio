import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Variants } from "framer-motion";
import { ArrowRight, X } from "lucide-react";

type StoryKey = "card1" | "card2" | "card3" | "card4";

interface StoryDetail {
  title: string;
  metric: string;
  metricLabel: string;
  category: string;
  challenge: string;
  approach: string[];
  outcomeNumber: string;
  outcomeText: string;
}

export default function ProofOfImpactSection() {
  const [activeStory, setActiveStory] = useState<StoryDetail | null>(null);

  useEffect(() => {
    if (activeStory) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [activeStory]);

  // البيانات الجديدة للمشاريع الأربعة
  const stories: Record<StoryKey, StoryDetail> = {
    card1: {
      title: "Multi-Channel Lead Generation",
      category: "Multi-Channel Acquisition",
      metric: "262",
      metricLabel: "LEADS GENERATED",
      challenge: "Generate qualified interest for a professional AI webinar within a short 9-day campaign window.",
      approach: ["Social Media", "Email Marketing", "Audience Targeting", "Lead Follow-up"],
      outcomeNumber: "262",
      outcomeText: "Total Leads Generated. 142 webinar registrations generated within 9 days."
    },
    card2: {
      title: "Webinar Attendance Growth",
      category: "7-Day Webinar Campaign",
      metric: "140%+",
      metricLabel: "TARGET ACHIEVEMENT",
      challenge: "Attract at least 80 attendees to the Innovation Management webinar within a short 7-day promotional period.",
      approach: ["Social Media", "Email Marketing", "Audience Targeting", "Campaign Monitoring"],
      outcomeNumber: "112+",
      outcomeText: "Webinar Attendees. Achieved more than 140% of the original attendance target."
    },
    card3: {
      title: "B2B Demand Generation",
      category: "B2B Demand Generation",
      metric: "28+",
      metricLabel: "PROGRAMS REQUESTED",
      challenge: "Reach relevant organizational decision-makers and generate qualified institutional training opportunities.",
      approach: ["Account Targeting", "B2B Email Outreach", "Direct Follow-up"],
      outcomeNumber: "28+",
      outcomeText: "Training Programs Requested. 12 organizations requested quotations following the outreach."
    },
    card4: {
      title: "B2B Client Conversion",
      category: "Business Conversion",
      metric: "4",
      metricLabel: "B2B CLIENTS",
      challenge: "Convert qualified institutional interest into real training opportunities and active client relationships.",
      approach: ["Lead Qualification", "Quotation Follow-up", "Client Communication"],
      outcomeNumber: "4",
      outcomeText: "Organizations Converted into Training Clients. 12 training programs delivered so far."
    }
  };

  const containerFade: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.4 } }
  };

  const modalVariants: Variants = {
    hidden: { opacity: 0, y: 15, scale: 0.98 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.3, ease: "easeOut" } },
    exit: { opacity: 0, y: 10, scale: 0.98, transition: { duration: 0.2 } }
  };

  return (
    <section id="SkillsSection" className="py-16 md:py-24 lg:py-[160px] bg-[#F8FAFC] text-[#0F172A] font-['Plus_Jakarta_Sans',sans-serif]">
      <div className="mx-auto px-4 sm:px-6 max-w-[1200px]">
        
        {/* Section Header */}
        <div className="mb-12 md:mb-16 text-center md:text-left">
          <h2 className="text-[32px] sm:text-[38px] md:text-[48px] font-bold text-[#0F172A] leading-tight tracking-tight">
            Proof of Impact
          </h2>
          <p className="text-[16px] sm:text-[18px] text-[#64748B] mt-3 md:mt-4 max-w-2xl mx-auto md:mx-0">
            Real business outcomes backed by measurable results.
          </p>
        </div>

        {/* Highlight Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {(Object.keys(stories) as StoryKey[]).map((key) => (
            <motion.div
              key={key}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={containerFade}
              whileHover={{ y: -12 }}
              className="bg-[#FFFFFF] rounded-[24px] border border-[#E2E8F0] p-6 lg:p-8 shadow-[0_10px_30px_rgba(15,23,42,0.03)] hover:shadow-[0_25px_50px_rgba(63,125,255,0.12)] hover:border-[#3F7DFF]/40 transition-all duration-300 flex flex-col justify-between group cursor-pointer"
              onClick={() => setActiveStory(stories[key])}
            >
              <div>
                <p className="text-[40px] md:text-[48px] font-bold text-[#3F7DFF] tracking-tight leading-none mb-3">
                  {stories[key].metric}
                </p>
                <p className="text-[12px] md:text-[13px] font-semibold text-[#64748B] uppercase tracking-[0.1em] mb-3">
                  {stories[key].metricLabel}
                </p>
                {/* تم استخدام الـ category هنا ليتطابق مع الـ Capability Label في الواجهة الخارجية كما طلبت */}
                <h3 className="text-[16px] md:text-[17px] font-medium text-[#0F172A] leading-snug mb-6">
                  {stories[key].category}
                </h3>
              </div>
              
              <div className="mt-4 flex items-center gap-2 text-[14px] md:text-[15px] font-semibold text-[#3F7DFF] group-hover:text-[#2F6AE6] transition-colors duration-300">
                View Story 
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-2" strokeWidth={2} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Compact Modal */}
        <AnimatePresence>
          {activeStory && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="absolute inset-0 bg-[#0F172A]/40 backdrop-blur-sm"
                onClick={() => setActiveStory(null)}
              />

              {/* Modal Container */}
              <motion.div
                variants={modalVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="relative w-full max-w-[650px] bg-[#FFFFFF] rounded-[24px] shadow-2xl overflow-hidden z-10 flex flex-col pb-4"
              >
                {/* Header */}
                <div className="flex items-center justify-between px-5 md:px-7 py-5 border-b border-[#E2E8F0] bg-[#FFFFFF]">
                  <h3 className="text-[18px] md:text-[22px] font-bold text-[#0F172A]">
                    {activeStory.title}
                  </h3>
                  <button 
                    onClick={() => setActiveStory(null)}
                    className="w-9 h-9 flex items-center justify-center rounded-[12px] bg-[#F8FAFC] text-[#64748B] hover:bg-[#EEF4FF] hover:text-[#3F7DFF] transition-colors shrink-0 ml-4"
                  >
                    <X className="w-5 h-5" strokeWidth={2} />
                  </button>
                </div>

                {/* Body Content */}
                <div className="p-5 md:p-7 space-y-5 md:space-y-6">
                  
                  {/* Challenge */}
                  <div>
                    <h4 className="text-[11px] md:text-[12px] uppercase tracking-[0.12em] font-bold text-[#64748B] mb-1.5 md:mb-2">
                      Challenge
                    </h4>
                    <p className="text-[15px] md:text-[16px] text-[#0F172A] font-medium leading-snug">
                      {activeStory.challenge}
                    </p>
                  </div>

                  <div className="h-px bg-[#E2E8F0]" />

                  {/* Approach Chips */}
                  <div>
                    <h4 className="text-[11px] md:text-[12px] uppercase tracking-[0.12em] font-bold text-[#64748B] mb-2 md:mb-3">
                      Approach
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {activeStory.approach.map((chip, index) => (
                        <span 
                          key={index}
                          className="bg-[#F8FAFC] text-[#475569] text-[13px] md:text-[14px] font-medium px-3.5 py-1.5 rounded-full border border-[#E2E8F0]"
                        >
                          {chip}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="h-px bg-[#E2E8F0]" />

                  {/* Outcome Card */}
                  <div>
                    <h4 className="text-[11px] md:text-[12px] uppercase tracking-[0.12em] font-bold text-[#64748B] mb-2 md:mb-3">
                      Outcome
                    </h4>
                    <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-[16px] p-4 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                      <span className="text-[28px] md:text-[32px] font-bold text-[#3F7DFF] tracking-tight">
                        {activeStory.outcomeNumber}
                      </span>
                      <span className="text-[14px] md:text-[15px] font-semibold text-[#64748B] leading-snug">
                        {activeStory.outcomeText}
                      </span>
                    </div>
                  </div>

                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}