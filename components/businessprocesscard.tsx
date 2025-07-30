"use client";

import { Card, CardBody, CardFooter, CardHeader } from "@heroui/react";
import Image from "next/image";
import businessprocessimage from "../public/pic8.png";

export default function BusinessProcessCard() {
  return (
    <Card className="bg-slate-200 dark:bg-indigo-950 my-1">
      <CardHeader>
        <p className="text-xl font-bold text-slate-700 dark:text-stone-100">
        🔄 Business Process Automation (BPA)
        </p>
      </CardHeader>
      <CardBody className="bg-gradient-to-br from-cyan-300 via-blue-300 to-indigo-300">
        <div className="flex flex-row text-blue-950 text-sm">
          <ul>
          <strong>Streamline operations. Eliminate inefficiencies. Drive productivity.</strong>
            <li>✅ Workflow Automation</li>
            <li>✅ Robotic Process Automation (RPA)</li>
            <li>✅ System Integration (ERP, CRM, Legacy)</li>
          <strong>Why It Matters:</strong>
            <li>⏱️ Faster turnaround times</li>
            <li>💰 Reduced operational costs</li>
            <li>📊 Improved compliance and accuracy</li>
          </ul>
          <Image
            src={businessprocessimage}
            alt="Business Process Automation image"
            className="rounded-lg w-1/2"
          />
        </div>
      </CardBody>
      <CardFooter>
        📌 Let your teams focus on what matters—leave the repetitive tasks to automation.
      </CardFooter>
    </Card>
  );
}
