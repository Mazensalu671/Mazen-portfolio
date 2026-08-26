import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { 
  Target, 
  MousePointerClick, 
  BarChart3, 
  Magnet, 
  Palette, 
  Check 
} from "lucide-react";

// ================= TYPES =================
interface StackCategory {
  step: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  items: string[];
}

// ================= DATA (Workflow Order) =================
const stackCategories: StackCategory[] = [
  {
    step: "01",
    title: "Campaign Strategy",
    description: "Planning campaigns around objectives, audiences, and search intent",
    icon: <Target className="w-4 h-4 md:w-5 md:h-5" />,
    items: [
      "Google Keyword Planner", 
      "Audience Research", 
      "Campaign Planning"
    ]
  },
  {
    step: "02",
    title: "Paid Media",
    description: "Launching, managing, and optimizing paid campaigns",
    icon: <MousePointerClick className="w-4 h-4 md:w-5 md:h-5" />,
    items: [
      "Meta Ads", 
      "Google Ads", 
      "Meta Business Suite"
    ]
  },
  {
    step: "03",
    title: "Analytics & Measurement",
    description: "Tracking performance and turning data into actionable insights",
    icon: <BarChart3 className="w-4 h-4 md:w-5 md:h-5" />,
    items: [
      "GA4", 
      "Google Tag Manager", 
      "Google Search Console"
    ]
  },
  {
    step: "04",
    title: "Lead Gen & Conversion",
    description: "Building and optimizing the path from traffic to qualified leads",
    icon: <Magnet className="w-4 h-4 md:w-5 md:h-5" />,
    items: [
      "WordPress", 
      "Landing Pages", 
      "Lead Capture", 
      "Conversion Optimization"
    ]
  },
  {
    step: "05",
    title: "Creative & Content",
    description: "Creating campaign assets and messaging built around performance objectives",
    icon: <Palette className="w-4 h-4 md:w-5 md:h-5" />,
    items: [
      "Adobe Photoshop", 
      "Ad Creatives", 
      "Campaign Messaging"
    ]
  }
];

export default function MarketingStackSection() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.08, delayChildren: 0.1 } 
    }
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.3, ease: "easeOut" } 
    }
  };

  return (
    <section id="ToolsSection" className="py-16 md:py-24 bg-[#FAFAFC] text-[#1D1D1F] font-['Plus_Jakarta_Sans',sans-serif]">
      <div className="mx-auto px-5 sm:px-6 max-w-[1200px]">
        
        {/* ================= SECTION HEADER ================= */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="mb-10 md:mb-14 text-center md:text-left"
        >
          <h2 className="text-[28px] sm:text-[34px] md:text-[42px] font-bold md:font-semibold tracking-tight text-[#1D1D1F] mb-3 md:mb-4">
            Performance Marketing Toolkit
          </h2>
          <p className="text-[15px] sm:text-[16px] text-[#86868B] font-normal max-w-xl leading-relaxed mx-auto md:mx-0">
            The platforms, tools, and capabilities I use to plan, launch, measure, and optimize performance marketing campaigns.
          </p>
        </motion.div>

        {/* ================= RESPONSIVE GRID ================= */}
        {/* 1 Col (Mobile) | 2 Cols (iPad) | 3 Cols (Desktop) */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6"
        >
          {stackCategories.map((category, idx) => (
            <motion.div 
              key={idx}
              variants={cardVariants}
              whileHover={{ 
                y: -4,
                boxShadow: "0 14px 35px -10px rgba(0, 102, 204, 0.08)",
                borderColor: "rgba(0, 102, 204, 0.3)"
              }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="group relative bg-white border border-[#E5E5EA] rounded-[16px] md:rounded-[18px] p-5 sm:p-6 md:p-7 flex flex-col justify-start h-full overflow-hidden"
            >
              
              {/* Card Header */}
              <div className="flex items-center gap-2.5 md:gap-3 mb-3">
                <div className="text-[#86868B] group-hover:text-[#0066CC] transition-colors duration-300">
                  {category.icon}
                </div>
                <h3 className="text-[17px] md:text-[19px] font-bold md:font-semibold text-[#1D1D1F] tracking-tight group-hover:text-[#0066CC] transition-colors duration-300">
                  <span className="text-[#86868B] font-light mr-1.5">{category.step} —</span>
                  {category.title}
                </h3>
              </div>

              <p className="text-[13px] md:text-[14px] text-[#86868B] font-normal mb-5 md:mb-6 leading-relaxed line-clamp-2">
                {category.description}
              </p>

              {/* Items List */}
              <div className="space-y-2 mt-auto">
                {category.items.map((item, itemIdx) => (
                  <motion.div 
                    key={itemIdx}
                    whileHover={{ 
                      backgroundColor: "#F8FAFC",
                      x: 3
                    }}
                    transition={{ duration: 0.15, ease: "easeOut" }}
                    className="relative group/row bg-white border border-[#E5E5EA]/70 rounded-[8px] md:rounded-[10px] px-3 py-2 md:px-3.5 md:py-2.5 flex items-center gap-2.5 md:gap-3 overflow-hidden"
                  >
                    {/* Left Blue Accent Line on Row Hover */}
                    <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#0066CC] opacity-0 group-hover/row:opacity-100 transition-opacity duration-150" />

                    <Check className="w-3.5 h-3.5 md:w-4 md:h-4 text-[#C7C7CC] group-hover/row:text-[#0066CC] transition-colors duration-150 shrink-0" />
                    
                    <span className="text-[13px] md:text-[14px] font-semibold text-[#1D1D1F] tracking-tight group-hover/row:text-[#0066CC] transition-colors duration-150 truncate">
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>

            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}