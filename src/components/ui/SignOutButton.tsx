'use client'
import { FC, useState } from "react";
import Button from "./Button";
import { signOut } from "next-auth/react";
import { toast } from "./Toast";

interface SignOutButtonProps{};

const SignOutButton: FC<SignOutButtonProps> = ({})=> {
    const [isLoading, setIsLoading]= useState<boolean>(false);
    const signUserOut= async() => {
        try {
            setIsLoading(true);
            await signOut();
        } catch(error){
            toast({
                title: "Error Signing Out",
                message: "Please try again",
                type: "error",
            })
        }
    };
    return <Button onClick={signUserOut} isLoading={isLoading}>Sign Out</Button>
}
export default SignOutButton;