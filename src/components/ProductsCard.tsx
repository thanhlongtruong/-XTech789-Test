import type { Product } from "@/models/product";
import React from "react";

interface ProductCardProps {
  product: Product;
  onAddToCart: () => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onAddToCart,
}) => {
  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition flex flex-col">
      <div className="relative h-64 bg-gray-100 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover hover:scale-105 transition duration-300"
        />
        {product.isSale && (
          <span className="absolute top-3 left-3 bg-purple-600 text-white text-xs px-3 py-1 rounded-full font-medium">
            SALE
          </span>
        )}
      </div>
      <div className="p-4 flex flex-col flex-1 justify-between">
        <div>
          <span className="text-xs text-gray-400 uppercase tracking-wider">
            {product.category}
          </span>
          <h3 className="font-semibold text-gray-800 mt-1 mb-2">
            {product.name}
          </h3>
          <div className="flex items-center gap-2">
            <span className="font-bold text-[#4A154B]">{product.price}</span>
            {product.originalPrice && (
              <span className="text-sm text-gray-400 line-through">
                {product.originalPrice}
              </span>
            )}
          </div>
        </div>
        <button
          onClick={onAddToCart}
          className="mt-4 w-full bg-[#4A154B] text-white py-2.5 rounded-lg text-sm font-medium hover:bg-purple-900 transition active:scale-95">
          Add to cart
        </button>
      </div>
    </div>
  );
};
