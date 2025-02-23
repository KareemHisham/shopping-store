import React, { ReactNode } from "react";

export interface IButton {
  type: "submit" | "button";
  children: React.ReactNode;
  classes?: string;
  disabled?: boolean;
  onClick?: () => void;
}
export interface IListItem {
  id: number;
  title: string;
  url: string;
}
export interface IProduct {
  category: string;
  id: number | string;
  image: string;
  images: Array<string>;
  title: string;
  description: string;
  price: number;
  rating: number;
  reviewCount: number;
  stock: number;
  discount: number | null;
  is_new: boolean;
  url: string;
  sizes: Array<string>;
  colors: Array<string>;
  sku: string;
  tags: Array<string>;
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
export interface ICreateUser {
  email: string;
  password: string;
}
export interface INewUser {
  name: string;
  phone: string;
  email: string | undefined;
  accountID?: string;
}
export interface IContextState {
  user: INewUser;
  setUser: React.Dispatch<React.SetStateAction<INewUser>>;
  isLoading: boolean;
  isAuthenticated: boolean;
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
  checkUser: () => Promise<boolean>;
}
export interface ICartItems {
  userID: string | number;
  productID: string | number;
  quantity: string | number;
}
