"use client";

import React from "react";
import categoriesData from "../_data/categories.json";
import { ShoppingCart } from "lucide-react";
import Button from "./Button";

export default function ProductCategories() {
    return (
        <section className="py-16 bg-[#F9F9F9] px-4 md:px-12 lg:px-24">
            <div className="container mx-auto text-center mb-16" data-aos="fade-up">
                <h2 className="text-3xl lg:text-4xl font-bold text-[#1A80C3] mb-5">Product Categories</h2>
                <p className="text-gray-600 text-sm md:text-[15px] font-medium max-w-3xl mx-auto leading-relaxed">
                    At TSI, we stand behind our accurate, reliable and quality instrumentation. Browse our product categories to find the solution you need.
                </p>
            </div>

            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 ">
                {categoriesData.slice(0, 3).map((item, idx) => (
                    <div
                        key={item.id}
                        data-aos="fade-up"
                        data-aos-delay={idx * 150}
                        className="bg-[#1A80C3] p-[14px] rounded-[18px] flex flex-col group shadow-lg"
                    >
                        {/* Image Section - Only image scales on hover */}
                        <div className="bg-white rounded-[12px] overflow-hidden h-[260px] md:h-[280px] w-full flex items-center justify-center p-6 relative cursor-pointer">
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-full object-contain filter transform transition-transform duration-500 group-hover:scale-110"
                            />
                        </div>

                        {/* Title & Cart Bar */}
                        <div className="flex justify-between items-center text-white px-2 pt-5 pb-3">
                            <h3 className="font-semibold text-[14px] md:text-[15px] leading-snug flex-1 pr-4">
                                {item.title}
                            </h3>
                            <button className="w-10 h-10 bg-white rounded-md flex items-center justify-center text-[#1A80C3] hover:bg-gray-100 transition-colors shadow-sm shrink-0">
                                <ShoppingCart size={20} className="text-black" />
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-16 text-center" data-aos="fade-up">
                <Button
                    href="/categories"
                    variant="primary"
                    size="default"
                    radius="md"
                    className="normal-case tracking-normal text-[15px] font-medium shadow-md px-10"
                >
                    View All Categories
                </Button>
            </div>
        </section>
    );
}
