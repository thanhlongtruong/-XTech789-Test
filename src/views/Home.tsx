import React from "react";
import { type Product } from "../models/product";
import { ChevronRight, Award, ShieldCheck } from "lucide-react";
import { SectionTitle } from "../components/SectionTitle";
import { CATEGORIES, MOCK_PRODUCTS } from "../data/products";
import { MOCK_NEWS } from "../data/news";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import Autoplay from "embla-carousel-autoplay";
import { ProductCard } from "@/components/ProductsCard";

interface HomeProps {
  onAddToCart: () => void;
}

export const Home: React.FC<HomeProps> = ({ onAddToCart }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-12">
        <div className="hidden lg:block bg-gray-50 rounded-xl border border-gray-100 h-fit">
          <h3 className="font-bold text-[#4A154B] mb-3 text-sm uppercase tracking-wider border-b p-4">
            Categories
          </h3>
          <ul className="space-y-2 text-sm text-gray-600 p-4">
            {CATEGORIES.map((cat, idx) => (
              <li key={idx}>
                <a
                  href={`#${cat.toLowerCase()}`}
                  className="flex items-center justify-between hover:text-[#4A154B] py-1 transition-colors">
                  <span>{cat}</span>
                  <ChevronRight size={14} />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3 flex flex-col gap-4">
          <div className="bg-[#2D1233] text-white rounded-2xl flex flex-col justify-center overflow-hidden p-8 md:p-12 min-h-[320px]">
            <h1 className="text-3xl md:text-5xl font-extrabold mt-3 mb-6">
              Reasonable Price
            </h1>
            <p className="text-gray-400 text-sm md:text-base">
              Discover advanced skincare devices and treatments designed for
              your ultimate beauty routine.
            </p>
            <button className="mt-4 bg-white text-[#4A154B] font-semibold px-6 py-3 rounded-full text-sm hover:bg-gray-100 transition shadow-lg">
              Shop Now
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-purple-50 p-6 rounded-xl border border-purple-100 flex flex-col justify-between">
              <span className="text-xs text-purple-600 font-bold uppercase">
                Winter Collection
              </span>
              <h4 className="font-bold text-lg text-gray-800 my-2">
                Hydrating Essentials
              </h4>
              <a
                href="#shop"
                className="text-sm font-semibold text-[#4A154B] hover:underline flex items-center gap-1">
                Shop Now <ChevronRight size={14} />
              </a>
            </div>
            <div className="bg-purple-50 p-6 rounded-xl border border-purple-100 flex flex-col justify-between">
              <span className="text-xs text-purple-600 font-bold uppercase">
                Special Offer
              </span>
              <h4 className="font-bold text-lg text-gray-800 my-2">
                Anti-Aging Skincare
              </h4>
              <a
                href="#shop"
                className="text-sm font-semibold text-[#4A154B] hover:underline flex items-center gap-1">
                Explore <ChevronRight size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Most Popular Products Section */}
      <section id="popular" className="mb-16 scroll-mt-36">
        <SectionTitle title="Most Popular Products" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {MOCK_PRODUCTS.map((product: Product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>
      </section>

      {/* Award And Recognition Section */}
      <section className="bg-gray-50 py-12 px-6 rounded-2xl mb-16 text-center scroll-mt-20">
        <SectionTitle title="Award And Recognition" />
        <p className="text-gray-500 text-sm mb-8">
          World's #1 Brand for Beauty & Wellness Device Systems.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center justify-center">
          <div className="flex flex-col items-center p-4">
            <Award size={40} className="text-purple-600 mb-2" />
            <span className="font-semibold text-sm text-gray-700">
              Global Innovation Winner
            </span>
          </div>
          <div className="flex flex-col items-center p-4">
            <ShieldCheck size={40} className="text-purple-600 mb-2" />
            <span className="font-semibold text-sm text-gray-700">
              Certified Organic Quality
            </span>
          </div>
          <div className="flex flex-col items-center p-4">
            <Award size={40} className="text-purple-600 mb-2" />
            <span className="font-semibold text-sm text-gray-700">
              Top Skincare Device 2025
            </span>
          </div>
          <div className="flex flex-col items-center p-4">
            <ShieldCheck size={40} className="text-purple-600 mb-2" />
            <span className="font-semibold text-sm text-gray-700">
              Dermatologist Tested
            </span>
          </div>
        </div>
      </section>

      {/* The Nu Skin Way */}
      <section
        className="max-w-7xl mx-auto px-4 py-12 scroll-mt-20 mb-16"
        id="about">
        <SectionTitle title="The Nu Skin Way" />

        <div className="bg-white border border-gray-100 rounded-xl p-8 mb-8 shadow-sm flex flex-col md:flex-row justify-between items-center gap-6">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 max-w-sm">
            Nu Skin, Improving Lives Everyday
          </h3>
          <div className="flex flex-wrap md:flex-nowrap gap-8 md:gap-12 text-center md:text-left justify-center">
            <div>
              <span className="block text-2xl md:text-3xl font-extrabold text-[#4A154B]">
                25+
              </span>
              <span className="text-xs text-gray-500">Years of Giving</span>
            </div>
            <div>
              <span className="block text-2xl md:text-3xl font-extrabold text-[#4A154B]">
                20+
              </span>
              <span className="text-xs text-gray-500">
                Current Social Projects
              </span>
            </div>
            <div>
              <span className="block text-2xl md:text-3xl font-extrabold text-[#4A154B]">
                850M+
              </span>
              <span className="text-xs text-gray-500">
                Meals Donated through
                <br />
                Nourish the Children
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-8 bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm p-6 md:p-8">
          <div className="rounded-lg overflow-hidden h-[300px] bg-gray-100">
            <img
              src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80"
              alt="Being a Force for Good"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="space-y-4">
            <h4 className="text-xl font-bold text-gray-900">
              Being a Force for Good
            </h4>
            <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
              Some call it corporate social responsibility. We call it our
              purpose. Together we're engaged in initiatives
              worldwide—nourishing thousands of hungry children, funding
              pediatric health and wellness services, or striving for a more
              sustainable future. And sometimes, we're simply taking meaningful
              steps to improve our local communities. Whatever we do, we believe
              changing the world begins with a single action.
            </p>
            <a
              href="#projects"
              className="inline-block text-xs font-semibold text-[#4A154B] hover:underline">
              Explore our projects
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm p-6 md:p-8">
          <div className="space-y-4 order-2 md:order-1">
            <h4 className="text-xl font-bold text-gray-900">
              Nature + Science
            </h4>
            <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
              Capturing the best in nature to bring you the best results is our
              personal mission. We combine powerful ingredients with innovative
              science and technology. The result? World-class products that
              deliver real benefits. And even though we've spent more than 30
              years researching aging at the genetic level, Mother Nature
              continually inspires us to push the boundaries of inquiry and
              innovation. We bottle what's best and bring it right to your door.
            </p>
            <a
              href="#discover"
              className="inline-block text-xs font-semibold text-[#4A154B] hover:underline">
              Discover more
            </a>
          </div>
          <div className="rounded-lg overflow-hidden h-[300px] bg-gray-100 order-1 md:order-2">
            <img
              src="https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80"
              alt="Nature and Science"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Nu Skin In The News */}
      <section className="max-w-7xl mx-auto px-4 py-12 scroll-mt-20" id="news">
        <SectionTitle title="Nu Skin In The News" />

        <div className="flex justify-end mb-4">
          <a
            href="#all-news"
            className="text-xs font-semibold text-gray-600 hover:text-[#4A154B] flex items-center gap-1">
            View All &gt;&gt;
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-stretch">
          <div className="lg:col-span-3 relative px-8">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              plugins={[
                Autoplay({
                  delay: 3000,
                  stopOnInteraction: false,
                  stopOnMouseEnter: true,
                }),
              ]}
              className="w-full">
              <CarouselContent className="-ml-4">
                {MOCK_NEWS.map((item, index) => (
                  <CarouselItem
                    key={index}
                    className="pl-4 basis-full sm:basis-1/2 md:basis-1/3">
                    <div className="border border-gray-200 rounded-lg p-4 bg-white flex flex-col items-center text-center shadow-sm hover:shadow-md transition cursor-pointer h-full">
                      <div className="w-full h-44 rounded-md overflow-hidden bg-gray-100 mb-4">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover hover:scale-105 transition duration-300"
                        />
                      </div>
                      <p className="text-xs font-semibold text-gray-800 leading-snug line-clamp-3">
                        {item.title}
                      </p>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
          <div className="relative rounded-lg overflow-hidden min-h-[320px] bg-gray-900 text-white flex items-end p-6 shadow-md">
            <img
              src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=500&q=80"
              alt="News Featured Banner"
              className="absolute inset-0 w-full h-full object-cover opacity-80"
            />
            <div className="relative z-10 space-y-1">
              <h3 className="text-3xl font-extrabold tracking-tight">News</h3>
              <p className="text-xs uppercase font-medium tracking-wider border-b border-white/60 pb-1 inline-block">
                Nu Skin In The News
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
