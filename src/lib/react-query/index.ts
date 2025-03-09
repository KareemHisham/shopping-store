import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
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
  getCheckoutProducts,
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
    queryKey: ["producID", { id }],
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
};

// Cart Queries
export const useAddToCart = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({
      productID,
      quantity,
    }: {
      productID: string;
      quantity: number;
    }) => addToCart({ productID, quantity }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cartItems"] }); // Refetch the cart data after adding a product
    },
    onError: (error: Error) => {
      console.error("Error adding product to cart:", error.message);
    },
  });
};

export const useGetCartItems = () => {
  return useQuery({
    queryKey: ["cartItems"],
    queryFn: getCartItems,
    staleTime: 1000 * 60 * 5,
  });
};

export const useUpdateCartItem = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({
      productID,
      quantity,
    }: {
      productID: string;
      quantity: number;
    }) => updateCartItem({ productID, quantity }),
    onSuccess: () => {
     queryClient.invalidateQueries({ queryKey: ["cartItems"] }); // Refetch the cart data after adding a product
    },
    onError: (error: Error) => {
      console.error("Error adding product to cart:", error.message);
    },
  });
};



// export const useUpdateCartItem = () => {
//   const queryClient = useQueryClient();

//   return useMutation({
//     mutationFn: async ({ productID, quantity }: { productID: string; quantity: number }) => {
//       return updateCartItem({ productID, quantity });
//     },
    
//     onMutate: async ({ productID, quantity }) => {
//       await queryClient.cancelQueries({ queryKey: ["cartItems"] }); // Cancel ongoing cart queries

//       const previousCart = queryClient.getQueryData<{ productID: string; quantity: number }[]>(["cartItems"]); // Get current cart state

//       // Optimistically update cart data
//       queryClient.setQueryData(["cartItems"], (oldCart: { productID: string; quantity: number }[] | undefined) => {
//         return oldCart
//           ? oldCart.map((item) =>
//               item.productID === productID ? { ...item, quantity } : item
//             )
//           : [];
//       });

//       return { previousCart }; // Save previous state for rollback in case of error
//     },

//     onError: (_err, _newData, context) => {
//       queryClient.setQueryData(["cartItems"], context?.previousCart); // Rollback on error
//     },

//     onSettled: () => {
//       queryClient.invalidateQueries({ queryKey: ["cartItems"] }); // Ensure the cart syncs with the database
//     },
//   });
// };



export const useCheckoutProducts = () => {
  return useQuery({
    queryKey: ["checkoutProducts"],
    queryFn: getCheckoutProducts,
    staleTime: 1000 * 60 * 5,
    refetchInterval: 1000 * 10,
  });
};
