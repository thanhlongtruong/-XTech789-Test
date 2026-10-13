export interface Product {
  id: string;
  name: string;
  price: string;
  originalPrice?: string;
  image: string;
  category: string;
  isSale?: boolean;
}

export interface SearchState {
  keyword: string;
}
