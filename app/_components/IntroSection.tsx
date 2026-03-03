"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import Button from "./Button";

export default function IntroSection() {
    return (
        <section className="bg-[#F9F9F9] py-20 px-4 md:px-12 lg:px-24">
            <div className="container mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
                {/* Text Content */}
                <div className="lg:w-1/2" data-aos="fade-right">
                    <h2 className="text-4xl font-bold text-[#1A80C3] mb-6">Knowledge Beyond Measure</h2>
                    <div className="space-y-4 leading-relaxed mb-8 text-justify border-b border-gray-200 pb-8">
                        <p>
                            TSI Incorporated, headquartered in Shoreview, Minnesota, is a global leader in precision measurement instrumentation, software services, and workflow management, for more than 50 years. We have been designing and manufacturing cutting-edge solutions that address critical needs in industries such as environmental monitoring, health and safety, HVAC testing, aerosol science, and industrial hygiene.
                        </p>
                        <p>
                            At TSI, we are committed to advancing technology, ensuring our solutions remain at the forefront of the industry. Our customers rely on us not just for our accurate and reliable equipment but also for unparalleled expertise and professional support. With a proven history of trust and innovation, TSI helps you make informed, data-driven decisions to get your job done.
                        </p>
                    </div>
                    <Button href="/about" variant="primary" className="group">
                        LEARN MORE
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </Button>
                </div>

                {/* Image Content */}
                <div className="lg:w-1/2 relative" data-aos="fade-left">
                    <img
                        src="/images/home/abt.jpg"
                        alt="Expert in industrial setting"
                        className="w-full object-cover rounded-2xl shadow-md"
                    />
                </div>
            </div>
        </section>
    );
}
