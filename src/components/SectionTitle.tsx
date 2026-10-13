import React from "react";

interface SectionTitleProps {
  title: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ title }) => {
  return (
    <div className="flex justify-center my-8">
      <div className="bg-[#4A154B] text-white font-bold text-xs md:text-sm px-6 py-2 rounded-full flex items-center gap-3 w-fit shadow-sm">
        <div className="w-8 md:w-12 h-[1px] bg-white/60"></div>
        <span className="uppercase tracking-wider">{title}</span>
        <div className="w-8 md:w-12 h-[1px] bg-white/60"></div>
      </div>
    </div>
  );
};
