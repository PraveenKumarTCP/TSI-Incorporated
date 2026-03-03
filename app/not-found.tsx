"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";
import Button from "./_components/Button";

export default function NotFound() {
    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
            <div className="max-w-md w-full text-center space-y-8" data-aos="zoom-in">
                {/* Visual Element */}
                <div className="relative">
                    <h1 className="text-9xl font-black text-[#1A80C3]/10 select-none">404</h1>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-white p-6 rounded-2xl shadow-xl border-4 border-[#1A80C3]">
                            <span className="text-[#1A80C3] text-3xl font-bold uppercase tracking-widest">Page Lost</span>
                        </div>
                    </div>
                </div>

                {/* Text Content */}
                <div className="space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Knowledge Beyond Measure... but not here.</h2>
                    <p className="text-gray-500 leading-relaxed">
                        The page you are looking for might have been moved, renamed, or is temporarily unavailable.
                    </p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <Button
                        onClick={() => window.history.back()}
                        variant="outline-gray"
                        className="flex-1"
                    >
                        <ArrowLeft size={18} />
                        Go Back
                    </Button>
                    <Button
                        href="/"
                        variant="primary"
                        className="flex-1 shadow-lg"
                    >
                        <Home size={18} />
                        Back to Home
                    </Button>
                </div>
            </div>
        </div>
    );
}
