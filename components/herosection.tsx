import React from "react";

export function HeroSection() {
  return (
    <section className="from-primary-50 to-background bg-linear-to-b relative flex items-center justify-center p-20 overflow-hidden">
      <div className="container relative z-10 mx-auto flex max-w-6xl flex-col items-center gap-8 text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
        <span className="text-primary">AI </span>
        Powered
        <span className="text-purple-600"> Automation </span>
        Unlocked in the 
        <span className="text-indigo-400"> Cloud</span>
        </h1>
        <p className="text-default-600 max-w-2xl text-xl">
              Our expertise in cloud computing, automation, and AI-driven
              technologies enables us to deliver tailored solutions that drive
              efficiency, scalability, and innovation.
        </p>
      </div>
    </section>
  );
}
