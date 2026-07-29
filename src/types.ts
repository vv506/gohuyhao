// Core Types for the Application

export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  longDescription?: string;
  price: number;
  originalPrice?: number;
  images: string[];
  category: string;
  material: string;
  dimensions: string;
  inStock: boolean;
  featured?: boolean;
  bestseller?: boolean;
  sizes?: string[];
  sizePrices?: Record<string, number>;
  colors?: { name: string; value: string }[];
  materials?: string[];
}

export interface SubCategory {
  id: string;
  name: string;
  slug: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  image: string;
  count?: number;
  subcategories?: SubCategory[];
}

export interface CartItem {
  product: Product;
  quantity: number;
}
