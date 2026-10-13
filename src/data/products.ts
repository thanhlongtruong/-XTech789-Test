import type { Product } from "../models/product";

export const CATEGORIES = [
  "Dresses",
  "Shirts",
  "Jeans",
  "Swimwear",
  "Sleepwear",
  "Sportswear",
  "Jumpsuits",
  "Blazers",
  "Jackets",
  "Shoes",
];

export const MOCK_PRODUCTS: Product[] = [
  {
    id: "1",
    name: "AGELESS SKIN TREATMENT",
    price: "$145.00",
    originalPrice: "$180.00",
    image:
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=500&q=80",
    category: "Skincare",
    isSale: true,
  },
  {
    id: "2",
    name: "ADVANCED HYDRA SERUM",
    price: "$98.00",
    image:
      "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=500&q=80",
    category: "Skincare",
  },
  {
    id: "3",
    name: "LUMI SPA ESSENTIAL",
    price: "$210.00",
    originalPrice: "$250.00",
    image:
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=500&q=80",
    category: "Devices",
    isSale: true,
  },
];
