import type { ReactNode } from "react";

export type Certificate = {
  id: string;
  title: string;
  subtitle: string;
  issued: string;
  skills: string[];
  imageUrl?: string; 
  verifyUrl: string; 
  verifyCode?: string;
  pdfUrl?: string;   
};

export type Provider = {
  id: string;
  name: string;
  icon: ReactNode;
  certificates: Certificate[];
};

export const credentialsData: Provider[] = [
  {
    id: "google",
    name: "Google",
    icon: (
      // شعار مربع - حجم متناسق
      <svg viewBox="0 0 48 48" className="w-10 h-10 shrink-0">
        <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.7 17.74 9.5 24 9.5z"/>
        <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
        <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
        <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
      </svg>
    ),
    certificates: [
      {
        id: "g-ecommerce-pro",
        title: "Google Digital Marketing & E-commerce Professional",
        subtitle: "E-commerce Growth Strategy",
        issued: "Jan 22, 2026",
        skills: ["E-commerce Strategy", "SEO & SEM", "Email Marketing", "Customer Loyalty", "Marketing Analytics"],
        verifyUrl: "https://www.credly.com/badges/0ca80844-dca5-4bb4-b128-a8611e40c643/print", 
        pdfUrl: "/certificates/Google Digital Marketing & E-commerce/GoogleDigitalMarketingE-commerceProfessionalCertificatev.2.pdf",
        imageUrl: "/certificates/Google Digital Marketing & E-commerce/GoogleDigitalMarketingE-commerceProfessionalCertificatev.2.jpg",
      },
      {
        id: "g-analytics-measurement",
        title: "Assess for Success: Marketing Analytics and Measurement",
        subtitle: "Data Analysis & Optimization",
        issued: "Jan 21, 2026",
        skills: ["Data Analysis", "Campaign Measurement", "A/B Testing", "Reporting", "ROAS Optimization"],
        verifyUrl: "https://coursera.org/verify/9A68GIT9VDF0", 
        pdfUrl: "/certificates/Google Digital Marketing & E-commerce/Assess-for-Success-Marketing-Analytics-and-Measurement.pdf",
        imageUrl: "/certificates/Google Digital Marketing & E-commerce/Assess-for-Success-Marketing-Analytics-and-Measurement.jpg",
      },
      {
        id: "g-attract-engage",
        title: "Attract and Engage Customers with Digital Marketing",
        subtitle: "Search & Display Advertising",
        issued: "Jan 12, 2026",
        skills: ["SEO", "SEM", "Search Ads", "Display Campaigns", "Audience Targeting"],
        verifyUrl: "https://coursera.org/verify/92W2WR8DL9EP", 
        pdfUrl: "/certificates/Google Digital Marketing & E-commerce/Attract-and-Engage-Customers-with-Digital.pdf",
        imageUrl: "/certificates/Google Digital Marketing & E-commerce/Attract-and-Engage-Customers-with-Digital.jpg",
      },
      {
        id: "g-make-sale",
        title: "Make the Sale: Build, Launch, and Manage E-commerce Stores",
        subtitle: "E-commerce & Conversion",
        issued: "Jan 18, 2026",
        skills: ["E-commerce Strategy", "Store Management", "Conversion Rate Optimization", "Shopify"],
        verifyUrl: "http://coursera.org/verify/YCX9FJCNF1XK", 
        pdfUrl: "/certificates/Google Digital Marketing & E-commerce/Make-the-Sale-Build,Launch,and-Manage-Ecommerce-Stores.pdf",
        imageUrl: "/certificates/Google Digital Marketing & E-commerce/Make-the-Sale-Build,Launch,and-Manage-Ecommerce-Stores.jpg",
      },
      {
        id: "g-email-marketing",
        title: "Think Outside the Inbox: Email Marketing",
        subtitle: "Email Campaigns & Automation",
        issued: "Jan 19, 2026",
        skills: ["Email Campaigns", "List Management", "Marketing Automation", "Performance Tracking"],
        verifyUrl: "http://coursera.org/verify/2NWDERWY5F80", 
        pdfUrl: "/certificates/Google Digital Marketing & E-commerce/Think-Outside-the-Inbox-Email-Marketing.pdf",
        imageUrl: "/certificates/Google Digital Marketing & E-commerce/Think-Outside-the-Inbox-Email-Marketing.jpg",
      },
      {
        id: "g-social-leads",
        title: "From Likes to Leads: Interact with Customers Online",
        subtitle: "Social Media Strategies",
        issued: "Jan 14, 2026",
        skills: ["Social Media Marketing", "Audience Engagement", "Social Ads", "Content Strategy"],
        verifyUrl: "https://coursera.org/verify/GX6R8JI04YSW", 
        pdfUrl: "/certificates/Google Digital Marketing & E-commerce/From-Likes-to-Leads-Interact-with-Customers.pdf",
        imageUrl: "/certificates/Google Digital Marketing & E-commerce/From-Likes-to-Leads-Interact-with-Customers.jpg",
      },
      {
        id: "g-customer-loyalty",
        title: "Satisfaction Guaranteed: Develop Customer Loyalty Online",
        subtitle: "Customer Retention & Loyalty",
        issued: "Jan 22, 2026",
        skills: ["Customer Retention", "Loyalty Programs", "Customer Journey", "Relationship Management"],
        verifyUrl: "https://coursera.org/verify/BS9FXAD9MZ0Y", 
        pdfUrl: "/certificates/Google Digital Marketing & E-commerce/Satisfaction-Guaranteed-Develop-Customer-Loyalty-Online.pdf",
        imageUrl: "/certificates/Google Digital Marketing & E-commerce/Satisfaction-Guaranteed-Develop-Customer-Loyalty-Online.jpg",
      },
      {
        id: "g-foundations",
        title: "Foundations of Digital Marketing and E-commerce",
        subtitle: "Digital Strategy Fundamentals",
        issued: "Dec 24, 2025",
        skills: ["Digital Strategy", "E-commerce Basics", "Customer Personas", "Marketing Funnel"],
        verifyUrl: "https://coursera.org/verify/IRNZOY1HWSP0", 
        pdfUrl: "/certificates/Google Digital Marketing & E-commerce/Foundations-of-Digital-Marketing-and-E-commerce.pdf",
        imageUrl: "/certificates/Google Digital Marketing & E-commerce/Foundations-of-Digital-Marketing-and-E-commerce.jpg",
      }
    ]
  },
  {
    id: "meta",
    name: "Meta",
    icon: (
      // لحل مشكلة الضخامة، قمنا بتحديد الارتفاع ليكون صغيراً وأنيقاً
      <img src="/logo/META.png" alt="META" className="h-6 w-auto object-contain shrink-0" />
    ),
    certificates: [
      {
        id: "m-associate",
        title: "Meta Certified Digital Marketing Associate",
        subtitle: "Official Meta Certification",
        issued: "Dec 2025", 
        skills: ["Meta Ads Manager", "Campaign Objectives", "Audience Targeting", "Ad Placements", "Campaign Measurement"],
        verifyUrl: "https://www.credly.com/badges/49f4cfc7-a9c0-44cd-86b7-669a535808cb/public_url", 
        pdfUrl: "/certificates/Meta Social Media Marketing/meta-certified-digital-marketing-associate.png",
        imageUrl: "/certificates/Meta Social Media Marketing/meta-certified-digital-marketing-associate.png",
      },
      {
        id: "m-professional",
        title: "Meta Social Media Marketing Professional Certificate",
        subtitle: "Social Media Strategy & Execution",
        issued: "Dec 22, 2025", 
        skills: ["Social Media Strategy", "Content Creation", "Ad Management", "Performance Tracking", "Meta Business Suite"],
        verifyUrl: "https://www.credly.com/badges/3b14133d-1269-4134-aada-639e3a5e947a/public_url", 
        pdfUrl: "/certificates/Meta Social Media Marketing/MetaSocialMediaMarketingProfessionalCertificatev.2.pdf",
        imageUrl: "/certificates/Meta Social Media Marketing/MetaSocialMediaMarketingProfessionalCertificatev.2.jpg",
      },
      {
        id: "m-measure-optimize",
        title: "Measure and Optimize Social Media Marketing Campaigns",
        subtitle: "Campaign Analytics & Optimization",
        issued: "Nov 11, 2025", 
        skills: ["A/B Testing", "ROI Measurement", "Marketing Analytics", "Campaign Optimization", "Data-Driven Decisions"],
        verifyUrl: "https://coursera.org/verify/WOOAJ2C9BF2S", 
        pdfUrl: "/certificates/Meta Social Media Marketing/Coursera-Measure-and-Optimize-Social-Media-Marketing.pdf",
        imageUrl: "/certificates/Meta Social Media Marketing/Coursera-Measure-and-Optimize-Social-Media-Marketing.jpg",
      },
      {
        id: "m-advertising",
        title: "Advertising with Meta",
        subtitle: "Paid Social & Ad Creation",
        issued: "Dec 14, 2025", 
        skills: ["Meta Ads", "Ad Creative", "Campaign Setup", "Budgeting", "Audience Insights"],
        verifyUrl: "https://coursera.org/verify/OIHO23Z5NP60", 
        pdfUrl: "/certificates/Meta Social Media Marketing/Coursera-Advertising-with-Meta.pdf",
        imageUrl: "/certificates/Meta Social Media Marketing/Coursera-Advertising-with-Meta.jpg",
      },
      {
        id: "m-fundamentals-ads",
        title: "Fundamentals of Social Media Advertising",
        subtitle: "Paid Media Fundamentals",
        issued: "Oct 15, 2025", 
        skills: ["Paid Social Strategy", "Ad Formats", "Targeting Basics", "Performance Marketing"],
        verifyUrl: "https://coursera.org/verify/QT3RWSMQPVFJ", 
        pdfUrl: "/certificates/Meta Social Media Marketing/Course-Certificate-for-Fundamentals-of-Social-Media-Advertising.pdf",
        imageUrl: "/certificates/Meta Social Media Marketing/Course-Certificate-for-Fundamentals-of-Social-Media-Advertising.jpg",
      },
      {
        id: "m-management",
        title: "Social Media Management",
        subtitle: "Community & Content Strategy",
        issued: "Oct 11, 2025", 
        skills: ["Content Calendar", "Community Management", "Brand Identity", "Social Listening"],
        verifyUrl: "https://coursera.org/verify/5R5RLQZY4IS6", 
        pdfUrl: "/certificates/Meta Social Media Marketing/Course-Certificate-for-Social-Media-Management.pdf",
        imageUrl: "/certificates/Meta Social Media Marketing/Course-Certificate-for-Social-Media-Management.jpg",
      },
      {
        id: "m-intro",
        title: "Introduction to Social Media Marketing",
        subtitle: "Social Marketing Basics",
        issued: "Oct 2, 2025", 
        skills: ["Social Media Landscape", "Goal Setting", "Digital Footprint", "Marketing Basics"],
        verifyUrl: "https://coursera.org/verify/PYEDAX1Y6MJW", 
        pdfUrl: "/certificates/Meta Social Media Marketing/Course-Certificate-for-Introduction-to-Social-Media-Marketing.pdf",
        imageUrl: "/certificates/Meta Social Media Marketing/Course-Certificate-for-Introduction-to-Social-Media-Marketing.jpg",
      }
    ]
  },
  {
    id: "aptly",
    name: "Aptly (Google Search Ads)",
    icon: (
      // شعار عريض - تم تعديل الارتفاع ليكون متناسقاً
      <img src="/logo/aptly.png" alt="aptly" className="h-7 w-auto object-contain shrink-0" />
    ),
    certificates: [
      {
        id: "aptly-specialization",
        title: "Search Advertising with Google Specialization",
        subtitle: "Search Ads Mastery",
        issued: "Aug 2, 2026",
        skills: ["Google Ads", "Search Campaigns", "Campaign Strategy", "Performance Measurement"],
        verifyUrl: "https://coursera.org/verify/specialization/1EM6TJ2FD4C2", 
        pdfUrl: "/certificates/Aptly Google Search/Search-Advertising-with-Google.pdf",
        imageUrl: "/certificates/Aptly Google Search/Search-Advertising-with-Google.jpg",
      },
      {
        id: "aptly-implementation",
        title: "Google Search Advertising Implementation",
        subtitle: "Campaign Execution",
        issued: "Jul 30, 2026",
        skills: ["Ad Creation", "Keyword Targeting", "Bidding Strategies", "Campaign Setup"],
        verifyUrl: "https://coursera.org/verify/K7LG9GVB0OVR", 
        pdfUrl: "/certificates/Aptly Google Search/Google-Search-Advertising-Implementation.pdf",
        imageUrl: "/certificates/Aptly Google Search/Google-Search-Advertising-Implementation.jpg",
      },
      {
        id: "aptly-foundations",
        title: "Google Search Advertising Foundations",
        subtitle: "Core Search Strategy",
        issued: "Jul 23, 2026",
        skills: ["Search Network", "Ad Formats", "Digital Advertising Basics", "Quality Score"],
        verifyUrl: "https://coursera.org/verify/CWVQGY0AGA49", 
        pdfUrl: "/certificates/Aptly Google Search/Google-Search-Advertising-Foundations.pdf",
        imageUrl: "/certificates/Aptly Google Search/Google-Search-Advertising-Foundations.jpg",
      },
      {
        id: "aptly-prep",
        title: "Google Ads Search Certification Preparation",
        subtitle: "Certification Readiness",
        issued: "Aug 2, 2026",
        skills: ["Exam Preparation", "Google Ads Proficiency", "Best Practices", "Optimization Scores"],
        verifyUrl: "https://coursera.org/verify/VCMTF2DHWT8J", 
        pdfUrl: "/certificates/Aptly Google Search/Google-Ads-Search-Certification-Preparation.pdf",
        imageUrl: "/certificates/Aptly Google Search/Google-Ads-Search-Certification-Preparation.jpg",
      }
    ]
  },
  {
    id: "hubspot",
    name: "HubSpot Academy",
    icon: (
      // شعار عريض - تم تعديل الارتفاع ليكون متناسقاً
      <img src="/logo/hubspot.png" alt="hubspot" className="h-7 w-auto object-contain shrink-0" />
    ),
    certificates: [
      {
        id: "hs-social-2",
        title: "Social Media Marketing II Certified",
        subtitle: "Advanced Inbound Strategy",
        issued: "Oct 20, 2025",
        skills: ["Strategic Planning", "Social Commerce", "Cookieless Advertising", "Community-Led Growth", "Short-Form Video"],
        verifyUrl: "https://academy.hubspot.com/", 
        verifyCode: "59c98025ccf946aa8f5b9faff91bb233", 
        pdfUrl: "/certificates/hubspot Social Media Marketing/subspot-Social-Media-Certified-2.pdf",
        imageUrl: "/certificates/hubspot Social Media Marketing/subspot-Social-Media-Certified-2.jpg",
      },
      {
        id: "hs-social-1",
        title: "Social Media Certified",
        subtitle: "Inbound Social Fundamentals",
        issued: "Oct 20, 2025",
        skills: ["Inbound Strategy", "Social ROI", "Social Monitoring", "Content Strategy", "Social Policies"],
        verifyUrl: "https://academy.hubspot.com/", 
        verifyCode: "d951bf4e619e4dc984d019693445b739", 
        pdfUrl: "/certificates/hubspot Social Media Marketing/subspot-Social-Media-Certified.pdf",
        imageUrl: "/certificates/hubspot Social Media Marketing/subspot-Social-Media-Certified.jpg",
      }
    ]
  },
  {
    id: "unilever",
    name: "Unilever",
    icon: (
      // شعار مربع - تم ضبطه بشكل ممتاز
      <img src="/logo/Unilever.svg" alt="Unilever" className="h-10 w-auto object-contain shrink-0" />
    ),
    certificates: [
      {
        id: "ul-analyst-pro",
        title: "Unilever Digital Marketing Analyst Professional Certificate",
        subtitle: "Enterprise Marketing Analytics",
        issued: "Jul 19, 2026",
        skills: ["Digital Marketing Analytics", "Enterprise Strategy", "Marketing Software", "Process Improvement"],
        verifyUrl: "https://coursera.org/verify/professional-cert/O9ZHC4WHV8Y2", 
        pdfUrl: "/certificates/Unilever Digital Marketing Analyst/Unilever-Digital-Marketing.pdf",
        imageUrl: "/certificates/Unilever Digital Marketing Analyst/Unilever-Digital-Marketing.jpg",
      },
      {
        id: "ul-advanced-tools",
        title: "Advanced Tools for Digital Marketing Analytics",
        subtitle: "Advanced Analytics Tools",
        issued: "Jul 19, 2026",
        skills: ["Advanced Analytics", "Marketing Automation Tools", "Data Interpretation", "Technical Setup"],
        verifyUrl: "https://coursera.org/verify/ZOV2DLAVA2SF", 
        pdfUrl: "/certificates/Unilever Digital Marketing Analyst/Advanced-Tools-for-Digital-Marketing-Analytics.pdf",
        imageUrl: "/certificates/Unilever Digital Marketing Analyst/Advanced-Tools-for-Digital-Marketing-Analytics.jpg",
      },
      {
        id: "ul-campaign-perf",
        title: "Campaign Performance Reporting, Visualization, & Improvement",
        subtitle: "Reporting & Visualization",
        issued: "Jul 6, 2026",
        skills: ["Performance Reporting", "Data Visualization", "Campaign Optimization", "Actionable Insights"],
        verifyUrl: "https://coursera.org/verify/R4VI16E34VEI", 
        pdfUrl: "/certificates/Unilever Digital Marketing Analyst/Campaign-Performance-Reporting,Visualization,Improvement.pdf",
        imageUrl: "/certificates/Unilever Digital Marketing Analyst/Campaign-Performance-Reporting,Visualization,Improvement.jpg",
      },
      {
        id: "ul-measurement",
        title: "Measurement and Analysis",
        subtitle: "Marketing Measurement",
        issued: "Jun 11, 2026",
        skills: ["Marketing Measurement", "Data Analysis", "KPI Tracking", "Funnel Metrics"],
        verifyUrl: "https://coursera.org/verify/MPHE4F8IM24K", 
        pdfUrl: "/certificates/Unilever Digital Marketing Analyst/Measurement-and-Analysis.pdf",
        imageUrl: "/certificates/Unilever Digital Marketing Analyst/Measurement-and-Analysis.jpg",
      },
      {
        id: "ul-customer-understanding",
        title: "Customer Understanding and Digital Marketing Channels",
        subtitle: "Customer Journeys & Channels",
        issued: "Jun 6, 2026",
        skills: ["Customer Personas", "Digital Channels", "Audience Insights", "Marketing Funnel"],
        verifyUrl: "https://coursera.org/verify/WYX4ZGW2QEJW", 
        pdfUrl: "/certificates/Unilever Digital Marketing Analyst/Customer-Understanding-and-Digital-Marketing-Channels.pdf",
        imageUrl: "/certificates/Unilever Digital Marketing Analyst/Customer-Understanding-and-Digital-Marketing-Channels.jpg",
      }
    ]
  },
  {
    id: "illinois-tech",
    name: "Illinois Tech",
    icon: (
      // شعار عريض 
      <img src="/logo/illinois-tech.jpg" alt="illinois-tech" className="h-7 w-auto object-contain shrink-0" />
    ),
    certificates: [
      {
        id: "it-social-analytics",
        title: "Social Media Marketing Analytics",
        subtitle: "Data-Driven Social Strategy",
        issued: "Apr 13, 2026",
        skills: ["Social Media Analytics", "Performance Tracking", "Data Interpretation", "ROI Measurement"],
        verifyUrl: "https://coursera.org/verify/0KAF9SUJ6JJA", 
        pdfUrl: "/certificates/ILLINOIS TECH Social Media Marketing Analytics/Social-Media-Marketing-Analytics.pdf",
        imageUrl: "/certificates/ILLINOIS TECH Social Media Marketing Analytics/Social-Media-Marketing-Analytics.jpg",
      }
    ]
  },
  {
    id: "upenn",
    name: "University of Pennsylvania",
    icon: (
      // شعار مربع
      <img src="/logo/Peen.png" alt="Peen" className="h-10 w-auto object-contain shrink-0" />
    ),
    certificates: [
      {
        id: "upenn-viral",
        title: "Viral Marketing and How to Craft Contagious Content",
        subtitle: "Consumer Psychology & Virality",
        issued: "Jan 25, 2026",
        skills: ["Viral Marketing", "Consumer Psychology", "Word of Mouth", "Content Strategy", "Brand Awareness"],
        verifyUrl: "https://coursera.org/verify/BHBG4TLSP2NV", 
        pdfUrl: "/certificates/Viral Marketing and How to Craft Contagious Content/Viral-Marketing-and-How-to-Craft-Contagious-Content.pdf",
        imageUrl: "/certificates/Viral Marketing and How to Craft Contagious Content/Viral-Marketing-and-How-to-Craft-Contagious-Content.jpg",
      }
    ]
  },
  {
    id: "emastery",
    name: "eMastery Academy",
    icon: (
      // لحل مشكلة الضخامة، قمنا بتحديد الارتفاع ليكون صغيراً وأنيقاً
      <img src="/logo/Mastery Academy.png" alt="Mastery Academy" className="h-6 w-auto object-contain shrink-0" />
    ),
    certificates: [
      {
        id: "em-ai-ads",
        title: "Creating Advertisements with AI",
        subtitle: "AI in Advertising",
        issued: "May 20, 2026",
        skills: ["AI Tools", "Ad Generation", "Marketing Automation", "Creative Process"],
        verifyUrl: "https://www.emasteryacademy.com/check-certificate", 
        verifyCode: "CGU37RN0JH", 
        pdfUrl: "/certificates/mastrey/Creating-Advertisements-with-AI.pdf",
        imageUrl: "/certificates/mastrey/Creating-Advertisements-with-AI.jpg",
      },
      {
        id: "em-emarketing-basics",
        title: "Basics of E-marketing",
        subtitle: "Digital Marketing Basics",
        issued: "Sep 25, 2025",
        skills: ["Digital Marketing", "E-marketing Strategies", "Online Promotion"],
        verifyUrl: "https://www.emasteryacademy.com/check-certificate",
        verifyCode: "OP5WSWJ7N7",
        pdfUrl: "/certificates/mastrey/Basics-of-E-marketing.pdf",
        imageUrl: "/certificates/mastrey/Basics-of-E-marketing.jpg",
      },
      {
        id: "em-persuasion",
        title: "Persuasion & Influence",
        subtitle: "Sales & Marketing Psychology",
        issued: "Apr 12, 2026",
        skills: ["Persuasion Techniques", "Influencing Skills", "Consumer Psychology", "Negotiation"],
        verifyUrl: "https://www.emasteryacademy.com/check-certificate",
        verifyCode: "WCWSU48OKH",
        pdfUrl: "/certificates/mastrey/Persuasion&Influence.pdf",
        imageUrl: "/certificates/mastrey/Persuasion&Influence.jpg",
      },
      {
        id: "em-communication",
        title: "Effective Communication Skills",
        subtitle: "Professional Soft Skills",
        issued: "Sep 22, 2025",
        skills: ["Active Listening", "Clear Communication", "Business Interaction", "Team Collaboration"],
        verifyUrl: "https://www.emasteryacademy.com/check-certificate",
        verifyCode: "6V26VSHHIP",
        pdfUrl: "/certificates/mastrey/Effective-Communication-Skills.pdf",
        imageUrl: "/certificates/mastrey/Effective-Communication-Skills.jpg",
      },
      {
        id: "em-presentation",
        title: "Presentation Skills",
        subtitle: "Pitching & Presenting",
        issued: "Apr 11, 2026",
        skills: ["Public Speaking", "Slide Design", "Audience Engagement", "Business Pitching"],
        verifyUrl: "https://www.emasteryacademy.com/check-certificate",
        verifyCode: "I6J7846JV3",
        pdfUrl: "/certificates/mastrey/Presentation-Skills.pdf",
        imageUrl: "/certificates/mastrey/Presentation-Skills.jpg",
      }
    ]
  },
];