"use client";

import { Card, CardBody, CardFooter, CardHeader } from "@heroui/react";
import Image from "next/image";
import mainimage from "../public/pic10.webp";
import processimage from "../public/pic11.png";
// The above import for processimage is not used in this component, but it can be used
import { use } from "react";

export default function MainCard() {
  return (
    <Card className="bg-slate-200 dark:bg-indigo-950 my-1">
      <CardHeader>
        <p className="text-xl font-bold text-slate-700 dark:text-stone-100">
          Accelerate your Digital Transformation with Cloud
        </p>
      </CardHeader>
      <CardBody className="bg-gradient-to-br from-cyan-300 via-blue-300 to-indigo-300">
        <div className="flex md:flex-row md:items-center sm:flex-col">
          <div className="flex flex-col text-blue-950 text-sm w-1/2">
            <p>
              At Silvabak Cloud Tech, we specialize in providing cutting-edge
              cloud solutions that empower businesses to thrive in the digital
              age.
            </p>
            <p>
              Our expertise in cloud computing, automation, and AI-driven
              technologies enables us to deliver tailored solutions that drive
              efficiency, scalability, and innovation.
            </p>
          </div>
          <Image
            src={mainimage}
            alt="Main image"
            className="rounded-lg w-1/2"
          />
        </div>
      </CardBody>
      <CardFooter className="bg-slate-50">
          <Image
            src={processimage}
            alt="Process image"
          />
       </CardFooter> 
    </Card>
  );
}
