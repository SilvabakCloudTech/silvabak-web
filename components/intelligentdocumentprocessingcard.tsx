"use client";

import { Card, CardBody, CardFooter, CardHeader } from "@heroui/react";
import Image from "next/image";
import ocrimage from "../public/pic2.png";

export default function IntelligentDocumentProcessingCard() {
  return (
    <Card className="bg-slate-200 dark:bg-indigo-950 my-1">
      <CardHeader>
        <p className="text-xl font-bold text-slate-700 dark:text-stone-100">
        📄 Intelligent Document Processing (IDP)
        </p>
      </CardHeader>
      <CardBody className="bg-gradient-to-br from-cyan-300 via-blue-300 to-indigo-300">
        <div className="flex flex-row text-blue-950 text-sm">
          <ul>
          <strong>Turn documents into data. Turn data into decisions.</strong>
            <li>✅ AI-Powered Data Extraction (OCR, NLP)</li>
            <li>✅ Document Classification & Routing</li>
            <li>✅ Intelligent Validation & Enrichment</li>
          <strong>Why It Matters:</strong>
            <li>🧠 Eliminate manual data entry</li>
            <li>⚡ Accelerate document workflows</li>
            <li>🔍 Enhance data quality and compliance</li>
          </ul>
          <Image
            src={ocrimage}
            alt="Digitization image"
            className="rounded-lg w-1/2"
          />
        </div>
      </CardBody>
      <CardFooter>
        📌 From invoices to contracts—automate it all with precision.
      </CardFooter>
    </Card>
  );
}
