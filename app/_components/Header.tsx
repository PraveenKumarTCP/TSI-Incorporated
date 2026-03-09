"use client";

import React, { useState, useEffect } from "react";
import { Phone, MapPin, Globe, ShoppingCart, User, Search, ChevronDown } from "lucide-react";
import Link from "next/link";
import Button from "./Button";

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Check if we've scrolled past the full original header height (~120px)
            if (window.scrollY > 150) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        // Initial check
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className="w-full relative z-50">
            {/* Top Bar */}
            <div className="bg-white text-gray-600 h-[35px] md:h-10 shrink-0 relative z-40">
                <div className="container mx-auto h-full px-4 md:px-12 flex justify-between items-center text-[11px] md:text-sm">
                    <div className="flex items-center gap-8">
                        <div className="flex items-center gap-2">
                            <Phone size={16} className="text-[#1A80C3]" />
                            <span className="font-medium text-gray-800">800-680-1220</span>
                        </div>
                        <div className="hidden md:flex items-center gap-2 cursor-pointer hover:text-[#1A80C3] transition-colors">
                            <MapPin size={16} className="text-[#1A80C3]" />
                            <span className="font-medium">Check Our Locations</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-1 cursor-pointer hover:text-[#1A80C3] transition-colors">
                            <Globe size={16} className="text-[#1A80C3]" />
                            <ChevronDown size={14} className="text-gray-800" />
                        </div>
                        <Link href="/cart" className="relative cursor-pointer hover:opacity-80 transition-opacity">
                            <ShoppingCart size={18} className="text-[#1A80C3]" />
                        </Link>
                        <Link href="/login" className="cursor-pointer hover:opacity-80 transition-opacity">
                            <User size={18} className="text-[#1A80C3]" />
                        </Link>
                    </div>
                </div>
            </div>

            {/* Main Navbar Placeholder (prevents layout jumping when position becomes fixed) */}
            <div className="h-[75px] md:h-[80px] w-full bg-[#1A80C3] relative z-40">
                {/* Main Navbar */}
                <nav className={`bg-[#1A80C3] text-white shadow-md w-full transition-all duration-300 ease-in-out ${isScrolled ? 'fixed top-0 left-0 animate-in slide-in-from-top-full z-50' : 'absolute top-0 left-0 z-40'}`}>
                    <div className="container mx-auto h-[75px] md:h-[80px] px-4 md:px-12 flex justify-between items-center">
                        <div className="flex items-center gap-2">
                            <Link href="/" className="flex items-center h-full">
                                <img src="/images/logo.svg" alt="TSI Logo" className="h-10 md:h-12 object-contain" />
                            </Link>
                        </div>

                        {/* Desktop Menu */}
                        <div className="hidden lg:flex items-center space-x-8 font-medium">
                            <Link href="/" className="hover:text-blue-200 transition-colors">Home</Link>
                            <Link href="/markets" className="hover:text-blue-200 transition-colors">Markets</Link>
                            <Link href="/products" className="hover:text-blue-200 transition-colors">Products</Link>
                            <Link href="/software" className="hover:text-blue-200 transition-colors">Software</Link>
                            <Link href="/service" className="hover:text-blue-200 transition-colors">Service</Link>
                            <Link href="/learn" className="hover:text-blue-200 transition-colors">Learn</Link>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex items-center gap-6">
                            <Search className="text-white cursor-pointer hover:text-blue-200 hidden md:block transition-colors" size={20} />
                            <Button
                                href="/contact"
                                variant="outline"
                                size="sm"
                                radius="md"
                                className="bg-white text-[#1A80C3]! border-transparent hover:bg-gray-100 transform active:scale-95 shadow-sm font-medium"
                            >
                                Contact
                            </Button>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
}
