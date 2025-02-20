import { useMutation } from "@tanstack/react-query"
import { CreateNewUser, InsertNewUser, SignInUser, userLoggedout } from "../subabase/Api"
import { ICreateUser, INewUser } from "@/constant/Interfaces"

export const useCreateAccount = () => {
    return useMutation({
        mutationFn: (user: ICreateUser) => CreateNewUser(user)
    })
}

export const useInsertUser = () => {
    return useMutation({
        mutationFn: (user: INewUser) => InsertNewUser(user)
    })
}

export const useSignInUser = () => {
    return useMutation({
        mutationFn: (user: ICreateUser) => SignInUser(user)
    })
}

export const useLoggedout = () => {
    return useMutation({
        mutationFn: () => userLoggedout()
    })
}