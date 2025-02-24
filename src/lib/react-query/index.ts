import { useMutation, useQuery } from "@tanstack/react-query";
import {
  addToCart,
  CreateNewUser,
  fetchProduct,
  fetchProducts,
  getNewProducts,
  getCartItems,
  InsertNewUser,
  SignInUser,
  updateCartItem,
  userLoggedout,
  updateProduct,
} from "../subabase/Api";
import { ICreateUser, INewUser } from "@/constant/Interfaces";

// Auth Queries
export const useCreateAccount = () => {
  return useMutation({
    mutationFn: (user: ICreateUser) => CreateNewUser(user),
  });
};

export const useInsertUser = () => {
  return useMutation({
    mutationFn: (user: INewUser) => InsertNewUser(user),
  });
};

export const useSignInUser = () => {
  return useMutation({
    mutationFn: (user: ICreateUser) => SignInUser(user),
  });
};

export const useLoggedout = () => {
  return useMutation({
    mutationFn: () => userLoggedout(),
  });
};

// Products Queries
export const useFetchProducts = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
    staleTime: 1000 * 60 * 5,
  });
};

export const useFetchProduct = (id: string) => {
  return useQuery({
    queryKey: ["producID"],
    queryFn: () => fetchProduct(id),
    staleTime: 1000 * 60 * 5,
  });
};

export const useFetchNewProducts = () => {
  return useQuery({
    queryKey: ["newProducts"],
    queryFn: getNewProducts,
    staleTime: 1000 * 60 * 5,
  });
};

export const useUpdateProductStock = () => {
  return useMutation({
    mutationFn: ({ stock, id }: { stock: number; id: string }) =>
      updateProduct({ stock, id }),
  });
}

// Cart Queries
export const useAddToCart = () => {
  return useMutation({
    mutationFn: ({
      productID,
      quantity,
    }: {
      productID: string;
      quantity: number;
    }) => addToCart({ productID, quantity }),
  });
};

export const useGetCartItems = ()=>{
  return useQuery({queryKey:['cartItems'],queryFn:getCartItems,staleTime:1000*60*5})
}

export const useUpdateCartItem = () => {
  return useMutation({
    mutationFn: ({
      productID,
      quantity,
    }: {
      productID: string;
      quantity: number;
    }) => updateCartItem({ productID, quantity }),
  });
};
