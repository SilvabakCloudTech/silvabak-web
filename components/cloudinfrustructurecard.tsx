"use client";

import { Card, CardBody, CardFooter, CardHeader } from "@heroui/react";
import Image from "next/image";
import cloudinfrustructureimage from "../public/pic6.png";

export default function CloudInfrustructureCard() {
  return (
    <Card className="bg-slate-200 dark:bg-indigo-950 my-1">
      <CardHeader>
        <p className="text-xl font-bold text-slate-700 dark:text-stone-100">
        ☁️ Cloud Services & Infrastructure
        </p>
      </CardHeader>
      <CardBody className="bg-gradient-to-br from-cyan-300 via-blue-300 to-indigo-300">
        <div className="flex flex-row text-blue-950 text-sm">
          <ul>
          <strong>Modernize your IT. Scale with confidence.</strong>
            <li>✅ Cloud Migration & Optimization</li>
            <li>✅ DevOps & CI/CD Automation</li>
            <li>✅ Managed Services (AWS, Azure, GCP)</li>
          <strong>Why It Matters:</strong>
            <li>🚀 Increased agility and scalability</li>
            <li>🔐 Enhanced security and uptime</li>
            <li>💡 Reduced infrastructure overhead</li>
          </ul>
          <Image
            src={cloudinfrustructureimage}
            alt="Cloud infrustructure image"
            className="rounded-lg w-1/2"
          />
        </div>
      </CardBody>
      <CardFooter>
        📌 Build a future-ready business in the cloud.
      </CardFooter>
    </Card>
  );
}
