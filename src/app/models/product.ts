import { Category } from './category';
export interface Product {
  _id: number;
  slug?: string;
  name: string;
  description: string;
  additional_vendor?: string;
  vendor_info?: string;
  reviews?: string;
  categories: Array<Category>;
  imageUrl: string[];
  color: string[];
  size: string[];
  stock?: string[];
  solde_price: number;
  regular_price: number;
  createdAt: string;
  UpdatedAt?: string;
}
