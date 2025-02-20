import { ICreateUser, INewUser } from "@/constant/Interfaces"
import supabase from "./Config"

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
        throw new Error(error instanceof Error ? error.message : "An unknown error occurred");
    }
}


export const InsertNewUser = async (user: INewUser) => {
    try {
        const { data, error } = await supabase.from("users").insert([{
            name: user.name,
            phone: user.phone,
            email: user.email,
            accountID: (await supabase.auth.getUser()).data.user?.id,
        }]);

        if (error) {
            throw new Error(error.message);
        }

        return data
    } catch (error) {
        throw new Error(error instanceof Error ? error.message : "An unknown error occurred")
    }
}
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
        throw new Error(error instanceof Error ? error.message : "An unknown error occurred")
    }
}

export const getCurrentAccount = async () => {
    try {

        const { data: { user } } = await supabase.auth.getUser();
        const getUserEmail = (await supabase.auth.getUser()).data.user?.email;

        if (user) {
            const { data: users, error } = await supabase
                .from('users')
                .select()
                .eq('email', getUserEmail);

            if (error) {
                throw new Error(error?.message);
            }

            return users[0];
        }

        return user;

    } catch (error) {
        throw new Error(error instanceof Error ? error.message : "An unknown error occurred")
    }
}

export const userLoggedout = async () => {
    try {
        const { error } = await supabase.auth.signOut();
        if (error) {
            throw new Error(error.message);
        }
        return true;

    } catch (error) {
        throw new Error(error instanceof Error ? error.message : "An unknown error occurred")
    }
}