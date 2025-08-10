import CloudInfrustructureCard from "@/components/cloudinfrustructurecard";
import ContactSection from "@/components/contactsection";
import Footer from "@/components/footer";
import { HeroSection } from "@/components/herosection";
import NavbarComponent from "@/components/navbar";
import ServiceCard from "@/components/services";

const services = [
  {
    title: "Cloud Migration & Optimization",
    icon: "lucide:cloud",
    description: "Modernize your IT. Scale with confidence.",
    features: [
      "Cloud Migration & Optimization",
      "DevOps & CI/CD Automation", 
      "Managed Services (AWS, Azure, GCP)"
    ],
    benefits: [
      "Increased agility and scalability",
      "Enhanced security and uptime",
      "Reduced infrastructure overhead"
    ]
  },
  {
    title: "Digitization & Legacy Modernization",
    icon: "lucide:refresh-cw",
    description: "Reimagine your business for the digital age.",
    features: [
      "Legacy System Transformation",
      "Paper-to-Digital Conversion",
      "Digital Experience Platforms"
    ],
    benefits: [
      "Improved user experience",
      "Greater operational efficiency", 
      "Future-proof technology stack"
    ]
  },
  {
    title: "Business Process Automation (BPA)",
    icon: "lucide:settings",
    description: "Streamline operations. Eliminate inefficiencies. Drive productivity.",
    features: [
      "Workflow Automation",
      "Robotic Process Automation (RPA)",
      "System Integration (ERP, CRM, Legacy)"
    ],
    benefits: [
      "Faster turnaround times",
      "Reduced operational costs",
      "Improved compliance and accuracy"
    ]
  },
  {
    title: "Intelligent Document Processing (IDP)",
    icon: "lucide:file-text",
    description: "Turn documents into data. Turn data into decisions.",
    features: [
      "AI-Powered Data Extraction (OCR, NLP)",
      "Document Classification & Routing",
      "Intelligent Validation & Enrichment"
    ],
    benefits: [
      "Eliminate manual data entry",
      "Accelerate document workflows",
      "Enhance data quality and compliance"
    ]
  }
];

export default function Home() {
  return (
        <div className="min-h-screen">
          <NavbarComponent />
          <main>
        <HeroSection />
        <h1 className="text-3xl font-bold text-center mb-8 text-foreground">Our Services</h1>
      <div id="services" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
      <ContactSection />
          </main>
          <Footer />
    </div>
  );
}
