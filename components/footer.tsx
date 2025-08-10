"use client";

import React from 'react';
import { Link } from "@heroui/react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-content1 py-6 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <p className="text-sm text-default-500">
            © 2024 Powered by <span className='text-indigo-500'>Silvabak Cloud Tech.</span> All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;