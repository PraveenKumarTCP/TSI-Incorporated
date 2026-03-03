"use client";

import React from "react";
import { Shield, CheckCircle, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const features = [
    {
        id: 1,
        icon: <Shield className="text-white" size={26} strokeWidth={1.5} />,
        title: "Our Policies",
        description: "Read our Privacy, Quality, Terms & Conditions, and other TSI policies",
        link: "/policies"
    },
    {
        id: 2,
        icon: <CheckCircle className="text-white" size={26} strokeWidth={1.5} />,
        title: "Quality Management Systems",
        description: "Continually improving our processes, products, and services.",
        link: "/quality"
    },
    {
        id: 3,
        icon: <Shield className="text-white" size={26} strokeWidth={1.5} />,
        title: "Engineered Excellence for 50+ Years",
        description: "TSI's history goes all the way back to 1961 and as far away as Mars!",
        link: "/history"
    },
    {
        id: 4,
        icon: <Shield className="text-white" size={26} strokeWidth={1.5} />,
        title: "Login for Calibration or Service",
        description: "Register or login to request service or calibration for your TSI instrument",
        link: "/login"
    }
];

export default function FeatureCards() {
    return (
        <section className="bg-white py-20 px-4 md:px-12 lg:px-24">
            <div className="container mx-auto flex flex-wrap lg:flex-nowrap justify-center gap-4 md:gap-6">
                {features.map((feature, idx) => (
                    <Link
                        key={feature.id}
                        href={feature.link}
                        data-aos="fade-up"
                        data-aos-delay={idx * 100}
                        className="group relative bg-[#f1f6fa] p-8 w-full sm:w-[calc(50%-0.75rem)] lg:w-1/4 flex flex-col items-start min-h-[260px] cursor-pointer"
                    >
                        {/* Hover bottom border animation (loads from left to right) */}
                        <div className="absolute left-0 bottom-0 h-[3px] bg-[#1A80C3] w-0 group-hover:w-full transition-all duration-500 ease-out"></div>

                        {/* Icon Container */}
                        <div className="mb-8 flex items-center justify-center w-[52px] h-[52px] bg-[#1A80C3] rounded-full shadow-[0_4px_10px_rgba(18,119,176,0.3)] border-2 border-white ring-2 ring-gray-100/50">
                            {feature.icon}
                        </div>

                        {/* Top-Right Arrow */}
                        <ArrowUpRight
                            className="absolute top-8 right-8 text-[#1A80C3] transform translate-y-2 -translate-x-2 opacity-0 group-hover:translate-y-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300"
                            size={20}
                            strokeWidth={2}
                        />
                        <ArrowUpRight
                            className="absolute top-8 right-8 text-[#1A80C3] opacity-100 group-hover:opacity-0 group-hover:translate-y-[-8px] group-hover:translate-x-[8px] transition-all duration-300"
                            size={20}
                            strokeWidth={2}
                        />

                        {/* Text Content */}
                        <h3 className="text-[20px] font-bold text-[#1A80C3] mb-3 leading-tight pr-6">
                            {feature.title}
                        </h3>
                        <p className=" text-[15px] leading-relaxed">
                            {feature.description}
                        </p>
                    </Link>
                ))}
            </div>
        </section>
    );
}
