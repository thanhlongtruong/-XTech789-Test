import React, { useState } from "react";
import { Search, ShoppingCart, Heart, Menu } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { SearchController } from "../controllers/searchController";
import { SocialMedia } from "./SocialMedia";
import { MobileMenu } from "./MobileMenu";
import { NAV_LINKS } from "@/data/navigation";

interface HeaderProps {
  cartCount: number;
}

export const Header: React.FC<HeaderProps> = ({ cartCount }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const onSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    SearchController.handleSearch(searchQuery, navigate);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      {/* Top Bar */}
      <div className="bg-[#4A154B] text-white text-xs py-1.5 px-4 flex justify-between items-center">
        <div className="flex gap-4 items-center">
          <a href="#faq" className="hover:underline">
            FAQ
          </a>
          <a href="#faq" className="hover:underline">
            Help
          </a>
          <a href="#support" className="hover:underline">
            Support
          </a>
        </div>
        <SocialMedia />
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="p-1.5 text-gray-700 hover:text-[#4A154B] focus:outline-none">
            <Menu size={24} />
          </button>
        </div>

        <a
          href="/"
          className="text-2xl font-bold tracking-tight text-[#4A154B] flex items-center gap-1">
          <span className="font-extrabold">NU SKIN</span>
        </a>

        <form
          onSubmit={onSearchSubmit}
          className="hidden md:flex flex-1 max-w-md relative">
          <input
            type="text"
            placeholder="Search skincare, devices..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-gray-100 text-sm rounded-full pl-4 pr-10 py-2 focus:outline-none focus:ring-2 focus:ring-[#4A154B]"
          />
          <button
            type="submit"
            className="absolute right-3 top-2.5 text-gray-500 hover:text-[#4A154B]">
            <Search size={18} />
          </button>
        </form>

        {/* Actions (Heart & Cart) */}
        <div className="flex items-center gap-5 md:w-28">
          <button className="hidden sm:flex items-center gap-1 text-gray-700 hover:text-[#4A154B] text-sm">
            <Heart size={20} />
            <span>0</span>
          </button>

          <button className="flex items-center gap-1 text-gray-700 hover:text-[#4A154B] text-sm">
            <ShoppingCart size={20} />
            <span>{cartCount}</span>
          </button>
        </div>
      </div>

      {/* Navigation Links */}
      <nav className="hidden md:flex justify-center border-t border-gray-100 py-2.5 text-sm font-medium text-gray-600 gap-8">
        {NAV_LINKS.map((link, idx) => (
          <a key={idx} href={link.href} className="hover:text-[#4A154B]">
            {link.name}
          </a>
        ))}
      </nav>

      {/* Mobile search bar */}
      <div className="md:hidden px-4 pb-3">
        <form onSubmit={onSearchSubmit} className="relative">
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-gray-100 text-sm rounded-full pl-4 pr-10 py-2 focus:outline-none"
          />
          <button
            type="submit"
            className="absolute right-3 top-2.5 text-gray-500">
            <Search size={18} />
          </button>
        </form>
      </div>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onOpenChange={setIsMobileMenuOpen}
        navLinks={NAV_LINKS}
      />
    </header>
  );
};
