"use client";

import { Card, CardBody, CardFooter, CardHeader } from "@heroui/react";
import Image from "next/image";
import digitizationimage from "../public/pic7.png";

export default function DigitizationCard() {
  return (
    <Card className="bg-slate-200 dark:bg-indigo-950 my-1">
      <CardHeader>
        <p className="text-xl font-bold text-slate-700 dark:text-stone-100">
          🧩 Digitization & Legacy Modernization
        </p>
      </CardHeader>
      <CardBody className="bg-gradient-to-br from-cyan-300 via-blue-300 to-indigo-300">
        <div className="flex flex-row text-blue-950 text-sm">
          <ul>
          <strong>Reimagine your business for the digital age.</strong>
            <li>✅ Legacy System Transformation </li>
            <li>✅ Paper-to-Digital Conversion</li>
            <li>✅ Digital Experience Platforms</li>
          <strong>Why It Matters:</strong>
            <li>🌐 Improved user experience</li>
            <li>🛠️ Greater operational efficiency</li>
            <li>🔄 Future-proof technology stack</li>
          </ul>
          <Image
            src={digitizationimage}
            alt="Digitization image"
            className="rounded-lg w-1/2"
          />
        </div>
      </CardBody>
      <CardFooter>
        📌 Say goodbye to outdated systems and hello to digital agility.
      </CardFooter>
    </Card>
  );
}
