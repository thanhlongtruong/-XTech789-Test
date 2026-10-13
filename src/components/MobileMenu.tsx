import React from "react";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "./ui/sheet";

interface NavLink {
  name: string;
  href: string;
}

interface MobileMenuProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  navLinks: NavLink[];
}

export const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  onOpenChange,
  navLinks,
}) => {
  return (
    <Sheet open={isOpen} onOpenChange={onOpenChange}>
      <SheetContent side="left" className="w-[280px] sm:w-[350px]">
        <SheetHeader>
          <SheetTitle className="text-left text-xl font-bold text-[#4A154B]">
            NU SKIN
          </SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col gap-4">
          {navLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              onClick={() => onOpenChange(false)}
              className="text-base font-semibold text-gray-700 hover:text-[#4A154B] px-4 py-2 border-b border-gray-100 transition-colors">
              {link.name}
            </a>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};
