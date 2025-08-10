"use client";
import React from 'react';
import { Card, CardBody, CardHeader, CardFooter, Button, Tooltip } from "@heroui/react";
import { Icon } from "@iconify/react";

interface ServiceCardProps {
  title: string;
  icon: string;
  description: string;
  features: string[];
  benefits: string[];
}

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

const ServiceCard: React.FC<ServiceCardProps> = ({ title, icon, description, features, benefits }) => {
  return (
    <Card 
      className="bg-content1 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
      isHoverable
    >
      <CardHeader className="flex gap-3">
        <Icon icon={icon} className="text-primary text-3xl" />
        <div className="flex flex-col">
          <p className="text-md font-semibold">{title}</p>
          <p className="text-small text-default-500">{description}</p>
        </div>
      </CardHeader>
      <CardBody>
        <h4 className="font-semibold mb-2 text-sm">Key Features:</h4>
        <ul className="list-none space-y-1">
          {features.map((feature, index) => (
            <li key={index} className="text-sm flex items-center">
              <Icon icon="lucide:check" className="text-success mr-2" />
              {feature}
            </li>
          ))}
        </ul>
      </CardBody>
      <CardFooter>
        <Tooltip content="View detailed benefits and learn more">
          <Button color="primary" variant="flat" fullWidth>
            Learn More
          </Button>
        </Tooltip>
      </CardFooter>
    </Card>
  );
};

export { services };
export default ServiceCard;