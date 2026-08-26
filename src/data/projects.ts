export interface Project {
  id: string;
  title: string;
  category: string;
  highlightNumber: string;
  highlightLabel: string;
  tags: string[];
  posterUrl: string;
  gallery?: string[];
  documents?: { title: string; url: string }[];
  badge: string;
  industry: string;
  client: string;
  role: string;
  duration: string;
  year: string;
  businessObjective: string;
  challenge: string;
  approach: string;
  execution: { icon: string; title: string; desc: string }[];
  technicalResults: { value: string; label: string }[];
  businessResults: { value: string; label: string }[];
  assets: string[];
  tools: { name: string; tooltip: string }[];
  takeaways: string[];
}

export const projectsData: Project[] = [
  // ================= PROJECT 1: AI Driving License =================
  {
    id: "ai-driving-license-webinar",
    title: "AI Driving License Campaign",
    category: "Lead Generation",
    highlightNumber: "262",
    highlightLabel: "Total Leads Generated",
    tags: ["Social Media", "Email Marketing", "Meta Ads", "B2B"],
    posterUrl: "/projects/AI-webinar.png", 
    gallery: [
      "/projects/AI-EVANT.png", 
    ],
    documents: [
      { title: "IAIDL – International AI Driving License", url: "/projects/IAIDL–International-AI-Driving-License.pdf" }
    ],
    // التعديل هنا: السرعة في جلب العملاء المحتملين
    badge: "Rapid Lead Gen",
    industry: "Training & Consulting",
    client: "Apex Training & Consulting",
    role: "Performance Marketing Specialist",
    duration: "9 Days",
    year: "2025",
    businessObjective: "Generate at least 100 webinar registrations for the 'International AI Driving License' within a highly compressed 9-day period, capturing qualified leads to convert into course customers.",
    challenge: "Operating under a strict 9-day acquisition window with a limited paid media budget, demanding highly precise targeting and flawless channel coordination.",
    approach: "Deployed a synchronized multi-channel strategy (Social Media + Email). Focused on granular audience segmentation, value-driven creatives, and aggressive follow-ups to maximize conversions in a compressed timeframe.",
    execution: [
      { icon: "🎯", title: "Strategic Targeting", desc: "Segmented professionals seeking practical AI skills." },
      { icon: "✍️", title: "Messaging", desc: "Developed urgent, value-driven ad and email copy." },
      { icon: "🚀", title: "Cross-Channel Launch", desc: "Simultaneous execution across Meta and Email." },
      { icon: "⚡", title: "Agile Optimization", desc: "Daily monitoring and direct lead follow-ups." }
    ],
    technicalResults: [
      { value: "1.63%", label: "Estimated CTR" },
      { value: "$0.13", label: "Estimated CPC" },
      { value: "13.7K", label: "Content Views" }
    ],
    businessResults: [
      { value: "142", label: "Webinar Registrations (142% of Goal)" },
      { value: "262", label: "Total Leads Generated" },
      { value: "2", label: "Course Enrollments" }
    ],
    assets: ["Targeted Ad Copy", "Email Campaigns", "Landing Page", "Performance Metrics"],
    tools: [
      { name: "Meta Ads", tooltip: "Paid campaign setup, audience targeting, lead generation." },
      { name: "Email Marketing", tooltip: "Audience outreach and prospect engagement." },
      { name: "Landing Page", tooltip: "Supporting the registration and lead acquisition journey." }
    ],
    takeaways: [
      "Multi-channel synergy (Social + Email) is highly effective for compressing the sales cycle in short-window campaigns.",
      "Tracking full-funnel outcomes (from impressions to course enrollments) proves that micro-budgets can yield tangible business results when properly aligned."
    ]
  },

  // ================= PROJECT 2: Webinar Lead Gen (APEX) =================
  {
    id: "apex-webinar-campaign",
    title: "Webinar Lead Gen & Acquisition",
    category: "Performance Marketing",
    highlightNumber: "112",
    highlightLabel: "Total Leads Generated",
    tags: ["Meta Ads", "Email Marketing", "GA4", "Lead Gen"],
    posterUrl: "/projects/DM.png", 
    gallery: [
      "/projects/DM-1.jpg", 
      "/projects/DM-2.png"  
    ],
    // التعديل هنا: الاستحواذ المبني على البيانات الدقيقة
    badge: "Data-Driven Acquisition",
    industry: "Training & Education",
    client: "Apex Training & Consulting",
    role: "Performance Marketing Specialist",
    duration: "2 Weeks",
    year: "2025",
    businessObjective: "Generate 100 webinar registrations for the 'Institutional Communication' event within a tight two-week window, while building a qualified professional lead base.",
    challenge: "Maximizing registrations under a strict budget and an extremely short acquisition window, requiring zero waste in ad spend and highly precise targeting.",
    approach: "Executed a multi-channel funnel combining Meta Ads and Email Marketing. Directed traffic to a high-converting landing page, meticulously tracked via GTM and GA4 to monitor source performance in real-time.",
    execution: [
      { icon: "🎯", title: "Audience Targeting", desc: "Segmented professionals & corporate employees." },
      { icon: "🎨", title: "Creative & Copy", desc: "Developed ad assets, email copy & landing page." },
      { icon: "🚀", title: "Campaign Launch", desc: "Deployed Meta Ads & emails with GTM/GA4 tracking." },
      { icon: "📈", title: "Optimization", desc: "Monitored traffic, optimized CPC, and followed up." }
    ],
    technicalResults: [
      { value: "0.87%", label: "Meta CTR" },
      { value: "$0.38", label: "Estimated CPC" },
      { value: "5,990", label: "Ad Impressions" }
    ],
    businessResults: [
      { value: "112", label: "Total Leads Captured" },
      { value: "86", label: "Confirmed Registrations" },
      { value: "+5%", label: "Brand Follower Growth" }
    ],
    assets: ["Ad Creatives", "Email Sequence", "Landing Page", "Performance Report"],
    tools: [
      { name: "Meta Ads", tooltip: "Paid campaign setup and audience targeting." },
      { name: "Email Marketing", tooltip: "Audience outreach and additional traffic acquisition." },
      { name: "GA4", tooltip: "Website traffic and user behavior analysis." },
      { name: "GTM", tooltip: "Tracking implementation and campaign measurement." }
    ],
    takeaways: [
      "Multi-channel acquisition (Meta + Email) creates a far more resilient funnel than relying on a single traffic source.",
      "For short-window campaigns, targeting, messaging, and measurement must work in absolute harmony to minimize wasted spend."
    ]
  },

  // ================= PROJECT 3: Innovation Management Webinar =================
  {
    id: "innovation-management-webinar",
    title: "Innovation Management Webinar",
    category: "Webinar Acquisition",
    highlightNumber: "140%+",
    highlightLabel: "Of Attendance Target Achieved",
    tags: ["Social Media", "Email Marketing", "B2B", "GIMI"],
    posterUrl: "/projects/innovation.png", 
    gallery: [
      "/projects/innovation-evant.png"
    ],
    // التعديل هنا: التوسع والوصول لجمهور جديد
    badge: "Audience Expansion",
    industry: "Professional Education",
    client: "Apex Training & Consulting x GIMI",
    role: "Performance Marketing Specialist",
    duration: "7 Days",
    year: "2025",
    businessObjective: "Attract at least 80 professionals to the 'Innovation Management' webinar in collaboration with GIMI, expanding reach beyond the existing audience within a strict 7-day promotional window.",
    challenge: "Generating awareness, driving traffic, and securing attendance within an ultra-short 7-day timeframe, demanding highly relevant targeting to break out of the existing follower base.",
    approach: "Executed a synchronized Social Media and Email Marketing campaign targeting professionals interested in innovation and leadership. Leveraged targeted messaging and continuous monitoring to maximize new audience reach.",
    execution: [
      { icon: "🎯", title: "Audience Targeting", desc: "Identified professionals in innovation, leadership, and business." },
      { icon: "✍️", title: "Creative & Messaging", desc: "Highlighted the GIMI collaboration and professional value." },
      { icon: "🚀", title: "Channel Activation", desc: "Promoted rapidly via Social Media and Email Marketing." },
      { icon: "📊", title: "Monitoring", desc: "Tracked link activity and communicated with prospects." }
    ],
    technicalResults: [
      { value: "94.4%", label: "Views from Non-Followers" },
      { value: "11.9K", label: "Total Content Views" },
      { value: "10.4K", label: "Paid Ad Impressions" }
    ],
    businessResults: [
      { value: "112+", label: "Webinar Attendees" },
      { value: "140%+", label: "Of Original Target Achieved" },
      { value: "121", label: "Total Link Clicks" }
    ],
    assets: ["Promotional Content", "Email Sequence", "Insights Report"],
    tools: [
      { name: "Meta Ads", tooltip: "Paid campaign management, targeting, and reach." },
      { name: "Meta Business Suite", tooltip: "Content views, audience discovery, and link-click analysis." },
      { name: "Email Marketing", tooltip: "Direct audience communication and webinar acquisition." }
    ],
    takeaways: [
      "Achieving 94.4% non-follower reach proves that well-crafted, targeted messaging can effectively break out of existing audience bubbles.",
      "Combining social media and email marketing can drive exceptional attendance (140% of target) even within a highly compressed 7-day window."
    ]
  },

  // ================= PROJECT 4: B2B Email Outreach Campaign =================
  {
    id: "b2b-email-outreach-2026",
    title: "B2B Email Outreach Campaign",
    category: "B2B Direct Outreach",
    highlightNumber: "28+",
    highlightLabel: "Training Programs Requested",
    tags: ["B2B", "Email Marketing", "Lead Gen", "Direct Outreach"],
    posterUrl: "/projects/The-Training-Annual-Plan.jpg", 
    gallery: [],
    documents: [
      { title: "2026 Annual Training Plan", url: "/projects/The-Training-Annual-Plan.pdf" }
    ],
    // هذا الـ Badge ممتاز ويعكس طبيعة المشروع
    badge: "B2B Campaign",
    industry: "Training & Consulting",
    client: "Apex Training & Consulting",
    role: "Performance Marketing Specialist",
    duration: "2 Weeks",
    year: "2026",
    businessObjective: "Promote the 2026 Annual Training Plan directly to organizational decision-makers (HR, T&D, Executives) to generate qualified B2B inquiries and institutional training opportunities.",
    challenge: "Targeting a narrow B2B audience where purchasing decisions involve multiple stakeholders, organizational needs, and longer decision cycles, rather than simple consumer impulse engagement.",
    approach: "Executed a highly targeted B2B email strategy rather than mass advertising. Positioned the full annual training portfolio as a complete solution, followed by structured direct communication to qualify organizational needs and convert interest into quotation requests.",
    execution: [
      { icon: "🎯", title: "B2B Targeting", desc: "Built a targeted list of 250+ key decision-makers across 150+ organizations." },
      { icon: "✉️", title: "Email Preparation", desc: "Distributed the 2026 Annual Plan with e-Mastery Academy access." },
      { icon: "🚀", title: "Direct Outreach", desc: "Executed a 2-week campaign focused on full portfolio positioning." },
      { icon: "🤝", title: "Follow-up & Conversion", desc: "Qualified interest into direct quotation requests and training delivery." }
    ],
    technicalResults: [
      { value: "150+", label: "Organizations Targeted" },
      { value: "250+", label: "Decision-Makers Reached" },
      { value: "12", label: "Organizations Requested Quotes" }
    ],
    businessResults: [
      { value: "4", label: "B2B Clients Converted" },
      { value: "33%", label: "of quotation-requesting organizations converted into training clients so far" },
      { value: "12", label: "Training Programs Delivered So Far" }
    ],
    assets: ["2026 Annual Training Plan", "Prospect Database", "Email Sequences"],
    tools: [
      { name: "Email Marketing", tooltip: "Primary B2B acquisition and communication channel." },
      { name: "Prospect Database", tooltip: "Used for identifying relevant organizational decision-makers." },
      { name: "e-Mastery Academy", tooltip: "Digital touchpoint provided to prospects to explore online offerings." }
    ],
    takeaways: [
      "B2B marketing performance must be measured beyond email engagement, focusing on the quality of pipeline opportunities generated.",
      "A precise value proposition and structured follow-up yielded a 33% quote-to-client conversion rate so far, proving that targeted outreach creates ongoing business value well beyond the initial campaign period."
    ]
  }
];