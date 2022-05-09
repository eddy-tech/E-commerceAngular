import { Item } from './../models/item';
export const nav_items: Item[] = [
  {
    name: 'Home',
    path: '',
  },
  {
    name: 'Products',
    path: '/products',
  },
  {
    name: 'Blog',
    path: '',
  },
  {
    name: 'Contact',
    path: '/contact',
  },
];

export const auth_items: Item[] = [
  {
    name: 'sign in',
    path: '/signin',
  },
  {
    name: 'sign up',
    path: '/signup',
  },
];
