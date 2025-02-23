import { ICreateUser, INewUser, IProduct } from "@/constant/Interfaces";
import supabase from "./Config";

// Auth APIS

export const CreateNewUser = async (user: ICreateUser) => {
  try {
    const { data, error } = await supabase.auth.signUp({
      email: user.email,
      password: user.password,
    });

    if (error) {
      throw new Error(error.message);
    }
    return data;
  } catch (error) {
    throw new Error(
      error instanceof Error ? error.message : "An unknown error occurred"
    );
  }
};
export const InsertNewUser = async (user: INewUser) => {
  try {
    const { data, error } = await supabase.from("users").insert([
      {
        name: user.name,
        phone: user.phone,
        email: user.email,
        accountID: (await supabase.auth.getUser()).data.user?.id,
      },
    ]);

    if (error) {
      throw new Error(error.message);
    }

    return data;
  } catch (error) {
    throw new Error(
      error instanceof Error ? error.message : "An unknown error occurred"
    );
  }
};
export const SignInUser = async (user: ICreateUser) => {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: user.email,
      password: user.password,
    });

    if (error) {
      throw new Error(error.message);
    }

    return data;
  } catch (error) {
    throw new Error(
      error instanceof Error ? error.message : "An unknown error occurred"
    );
  }
};
export const getCurrentAccount = async () => {
  try {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    const getUserEmail = (await supabase.auth.getUser()).data.user?.email;

    if (user) {
      const { data: users, error } = await supabase
        .from("users")
        .select()
        .eq("email", getUserEmail);

      if (error) {
        throw new Error(error?.message);
      }

      return users[0];
    }

    return user;
  } catch (error) {
    throw new Error(
      error instanceof Error ? error.message : "An unknown error occurred"
    );
  }
};
export const userLoggedout = async () => {
  try {
    const { error } = await supabase.auth.signOut();
    if (error) {
      throw new Error(error.message);
    }
    return true;
  } catch (error) {
    throw new Error(
      error instanceof Error ? error.message : "An unknown error occurred"
    );
  }
};

// Database APIS

export const fetchProducts = async (): Promise<IProduct[]> => {
  try {
    const { data: products, error } = await supabase
      .from("products")
      .select("*");

    if (error) {
      throw new Error(error.message);
    }

    return products;
  } catch (error) {
    throw new Error(
      error instanceof Error ? error.message : "An unknown error occurred"
    );
  }
};
export const fetchProduct = async (id: string): Promise<IProduct[]> => {
  try {
    const { data: product, error } = await supabase
      .from("products")
      .select("*")
      .eq("id", id);

    if (error) {
      throw new Error(error.message);
    }

    return product;
  } catch (error) {
    throw new Error(
      error instanceof Error ? error.message : "An unknown error occurred"
    );
  }
};
export const getNewProducts = async () => {
  try {
    const { data: products, error } = await supabase
      .from("products")
      .select("*")
      .eq("is_new", true);

    if (error) throw new Error(error.message);

    return products;
  } catch (error) {
    throw new Error(
      error instanceof Error ? error.message : "An unknown error occurred"
    );
  }
};

// Cart APIS
export const addToCart = async (payload: {
  productID: string;
  quantity: number;
}) => {
  try {
    const { data, error } = await supabase
      .from("cart")
      .insert([
        {
          userID: (await supabase.auth.getUser()).data.user?.id,
          productID: payload.productID,
          quantity: payload.quantity,
        },
      ])
      .select();

    if (error) throw new Error(error.message);

    return data;
  } catch (error) {
    throw new Error(
      error instanceof Error ? error.message : "An unknown error occurred"
    );
  }
};
