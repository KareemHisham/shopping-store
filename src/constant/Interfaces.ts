import { ReactNode } from 'react';

export interface IButton {
  type: 'submit' | 'button';
  children: React.ReactNode;
  classes: string;
}
export interface IListItem {
  id: number;
  title: string;
  url: string;
}
export interface IProductList {
  id: number;
  img: string;
  title: string;
  description: string;
  price: number;
  discount: number | null;
  isNew: boolean;
  url: string;
}

export interface IProgressItem {
  id: number;
  img: string;
  description: string;
}
export interface IMiniHero {
  children: ReactNode;
  breadcrumbLinks: { name: string; path: string }[];
}
