"use client";

import React from "react";
import { Play } from "lucide-react";
import Button from "./Button";

export default function SplitBanner() {
    return (
        <section className="w-full bg-white py-16 px-4 md:px-12 lg:px-24">
            <div className="container mx-auto space-y-12">

                {/* Row 1: Careers */}
                <div className="flex flex-col lg:flex-row min-h-[400px] overflow-hidden rounded-3xl shadow-2xl" data-aos="fade-right">
                    {/* Video Placeholder */}
                    <div className="lg:w-1/2 bg-black relative flex items-center justify-center p-24">
                        <video
                            src="https://cdn.clinicalvisuals.com/medical/tsi/landingpage/tsi_01.webm"
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="absolute inset-0 w-full h-full object-cover z-0"
                        ></video>
                    </div>
                    {/* Content */}
                    <div className="lg:w-1/2 bg-[#1A80C3] p-6 md:p-10 text-white flex flex-col justify-center items-start">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Careers</h2>
                        <p className="leading-relaxed mb-10 text-justify" >
                            TSI is committed to our researchers around the globe, and solutions are the environment when optimized and performing research and industrial processes. We believe the commitment of each employee is fundamental to our success. At TSI, with passion and skill, what feel the intuitive to exceed the expectation of our customers taking your expertise and experience at TSI to develop products and services that protect people and the environment that contact.
                        </p>
                        <Button href="/careers" variant="white">
                            Discover Your Career At TSI
                        </Button>
                    </div>
                </div>

                {/* Row 2: Service */}
                <div className="flex flex-col lg:flex-row min-h-[400px] overflow-hidden rounded-3xl shadow-2xl" data-aos="fade-left">
                    {/* Content */}
                    <div className="lg:w-1/2 bg-[#1A80C3] p-6 md:p-10 text-white flex flex-col justify-center items-start">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">At Your Service</h2>
                        <p className="leading-relaxed mb-10 text-justify">
                            We provide over our specialized solutions generate and reliable measurement solutions. TSI helps to keep higher quality standards in your daily job. We are committed to provide you excellent, quick environment service, repair and calibration through our regional service centers.
                        </p>
                        <p className="text-sm mb-10 italic">Learn more on how to submit a TSI service request.</p>
                        <Button href="/service-request" variant="white">
                            Learn More
                        </Button>
                    </div>
                    {/* Video Placeholder */}
                    <div className="lg:w-1/2 order-first lg:order-last bg-black relative flex items-center justify-center p-24">
                        <video
                            src="https://cdn.clinicalvisuals.com/medical/tsi/landingpage/tsi_02.webm"
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="absolute inset-0 w-full h-full object-cover z-0"
                        ></video>
                    </div>
                </div>
            </div>
        </section>
    );
}
