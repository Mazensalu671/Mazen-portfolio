import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { projectsData } from "../../../data/projects";

export default function ProjectsSection() {
  const fadeVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <section id="projects" className="py-16 md:py-[160px] bg-[#F8FAFC] min-h-screen text-[#0F172A] font-['Plus_Jakarta_Sans',sans-serif]">
      <div className="mx-auto px-6 max-w-[1200px]">
        <motion.div
          key="grid-view"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeVariants}
        >
          {/* Section Header */}
          <div className="mb-16">
            <span className="text-[14px] font-bold text-[#3F7DFF] uppercase tracking-[0.1em] block mb-3">
              FEATURED CASE STUDIES
            </span>
            <h2 className="text-[36px] md:text-[48px] font-bold text-[#0F172A] leading-tight tracking-tight">
              Featured Case Studies
            </h2>
            <p className="text-[18px] text-[#64748B] mt-4 max-w-2xl">
              A selection of real-world marketing projects focused on measurable business outcomes.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projectsData.map((project) => (
              <Link to={`/project-details/${project.id}`} key={project.id}>
                <motion.div
                  className="group bg-[#FFFFFF] rounded-[20px] border border-[#E2E8F0] overflow-hidden shadow-[0_10px_30px_rgba(15,23,42,0.08)] cursor-pointer flex flex-col h-full transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(15,23,42,0.12)]"
                >
                  {/* Cover Image */}
                  <div className="relative aspect-[16/10] bg-[#0F172A] overflow-hidden w-full">
                    <div className="absolute top-4 right-4 z-20 bg-[#0F172A]/70 backdrop-blur-md text-[#FFFFFF] text-[12px] font-semibold px-3 py-1 rounded-full border border-white/10">
                      {project.badge}
                    </div>
                    
                    {/* التعديل هنا: إضافة صورة البوستر بدلاً من النص */}
                    <img 
                      src={project.posterUrl} 
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                    />

                    <div className="absolute inset-0 bg-[#0F172A]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-center p-6 backdrop-blur-[2px]">
                      <div className="transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
                        <p className="text-[44px] font-bold text-[#FFFFFF] leading-none mb-1 drop-shadow-md">
                          {project.highlightNumber}
                        </p>
                        <p className="text-[16px] font-semibold text-[#EEF4FF] mb-6 drop-shadow">
                          {project.highlightLabel}
                        </p>
                        <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#3F7DFF] text-[#FFFFFF] rounded-[12px] font-semibold text-[15px] shadow-lg">
                          View Case Study <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Card Content Area */}
                  <div className="p-8 flex flex-col flex-grow">
                    <span className="text-[13px] font-bold text-[#3F7DFF] uppercase tracking-[0.1em] mb-2">
                      {project.category}
                    </span>
                    <h3 className="text-[24px] font-bold text-[#0F172A] mb-4 leading-tight">
                      {project.title}
                    </h3>
                    <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                      {project.tags.map(tag => (
                        <span key={tag} className="px-3.5 py-1 bg-[#F8FAFC] border border-[#E2E8F0] rounded-[999px] text-[13px] font-medium text-[#64748B]">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="border-t border-[#E2E8F0] pt-5 flex items-center justify-between">
                      <span className="text-[15px] font-semibold text-[#0F172A] group-hover:text-[#3F7DFF] transition-colors flex items-center gap-2">
                        View Case Study <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </span>
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}