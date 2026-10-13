export interface NewsItem {
  id: string;
  title: string;
  image: string;
  date?: string;
  source?: string;
}

export const MOCK_NEWS: NewsItem[] = [
  {
    id: "1",
    title: "38 New Beauty Products Our Editors Are Loving This December",
    image:
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=400&q=80",
    date: "Dec 2025",
  },
  {
    id: "2",
    title: "The Ultimate Skincare Devices for Daily Facial Renewal",
    image:
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=400&q=80",
    date: "Jan 2026",
  },
  {
    id: "3",
    title: "Top Anti-Aging Breakthroughs Featured in Global Beauty Press",
    image:
      "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=400&q=80",
    date: "Feb 2026",
  },
  {
    id: "4",
    title: "Dermatologist-Approved Hydration Formulas for Sensitive Skin",
    image:
      "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=400&q=80",
    date: "Mar 2026",
  },
  {
    id: "5",
    title: "Revolutionary Cleansing Routines Transforming Modern Beauty",
    image:
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=400&q=80",
    date: "Apr 2026",
  },
];
