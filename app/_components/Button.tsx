import React from "react";
import Link from "next/link";

type ButtonProps = {
    children: React.ReactNode;
    variant?: 'primary' | 'white' | 'outline' | 'outline-gray';
    size?: 'default' | 'sm' | 'xs' | 'lg';
    radius?: 'sm' | 'default' | 'md' | 'lg' | 'full';
    className?: string;
    href?: string;
    onClick?: () => void;
    target?: string;
};

export default function Button({
    children,
    variant = 'primary',
    size = 'default',
    radius = 'md',
    className = '',
    href,
    onClick,
    target
}: ButtonProps) {
    // Base styles applied to all buttons
    const baseStyles = "inline-flex items-center justify-center gap-2 font-bold transition-all uppercase tracking-wide";

    // Specific styling per variant
    const variants = {
        primary: "bg-[#1A80C3] text-white hover:bg-[#14659b] shadow-lg",
        white: "bg-white text-[#1A80C3] hover:bg-gray-50 shadow-md",
        outline: "bg-transparent border border-white text-white hover:bg-white hover:text-black",
        "outline-gray": "border-2 border-gray-200 text-gray-600 hover:bg-gray-100",
    };

    // Specific padding/sizing
    const sizes = {
        xs: "px-3 py-1 text-[10px]",
        sm: "px-6 py-2 text-sm",
        default: "px-8 py-3 text-sm",
        lg: "px-10 py-3 text-sm",
    };

    // Border radius options
    const radiuses = {
        sm: "rounded-sm",
        default: "rounded",
        md: "rounded-md",
        lg: "rounded-lg",
        full: "rounded-full",
    };

    const combinedClassName = `${baseStyles} ${variants[variant]} ${sizes[size]} ${radiuses[radius]} ${className}`;

    if (href) {
        return (
            <Link href={href} className={combinedClassName} target={target}>
                {children}
            </Link>
        );
    }

    return (
        <button onClick={onClick} className={combinedClassName}>
            {children}
        </button>
    );
}
