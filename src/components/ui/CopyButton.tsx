'use client'
import { ButtonHTMLAttributes, FC } from "react";
import Button from "./Button";
import { toast } from "./Toast";
import { Copy } from "lucide-react";

interface CopyButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    valueToCopy: string,
}

const CopyButton : FC<CopyButtonProps> = ({valueToCopy ,className, ...props}) => {
    return (<Button {...props} variant='ghost' className={className} onClick={() => {
        navigator.clipboard.writeText(valueToCopy);
        toast({
            title: 'Copied',
            message: 'API Key copied to clipboard',
            type: 'success'
        })
    }}>
        <Copy className="h-5 w-5" />
        </Button>)
}
export default CopyButton;