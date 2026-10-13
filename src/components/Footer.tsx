import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#4A154B] text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        <div>
          <h3 className="font-bold text-lg mb-4">NU SKIN</h3>
          <p className="text-sm text-gray-300 leading-relaxed">
            Providing premium e-commerce tech platforms and advanced skincare
            solutions for global businesses.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-3 text-sm tracking-wider uppercase">
            Quick Links
          </h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <a href="/" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#shop" className="hover:underline">
                Products
              </a>
            </li>
            <li>
              <a href="#about" className="hover:underline">
                About Us
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3 text-sm tracking-wider uppercase">
            Customer Care
          </h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <a href="#faq" className="hover:underline">
                Help Center
              </a>
            </li>
            <li>
              <a href="#shipping" className="hover:underline">
                Shipping & Returns
              </a>
            </li>
            <li>
              <a href="#policy" className="hover:underline">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 border-t border-white/10 pt-6 text-center text-xs text-gray-400">
        © 2026 XTech789 Corporation. All rights reserved. Designed by Trương
        Thành Long.
      </div>
    </footer>
  );
};
