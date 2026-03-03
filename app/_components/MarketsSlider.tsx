"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import marketsData from "../_data/markets.json";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Button from "./Button";

export default function MarketsSlider() {
    return (
        <section className="bg-white py-16 px-4 md:px-12 lg:px-24 overflow-hidden lg:min-h-[90vh] flex flex-col justify-center">
            <div className="container mx-auto text-center mb-8" data-aos="fade-up">
                <h2 className="text-4xl font-bold text-[#1A80C3] mb-6">Learn About the Markets We Serve</h2>
                <p className="max-w-4xl mx-auto leading-relaxed text-[15px]">
                    Around the globe, TSI provides a comprehensive range of solutions with unparalleled reliability and accuracy necessary to accomplish your goals. From workflow management, software services and measurement instrumentation, our complete suite of solutions are tailored to help you make informed, data-driven decisions to get your job done.
                </p>
            </div>

            <div className="container mx-auto relative group pb-6">
                <Swiper
                    modules={[Navigation, EffectFade]}
                    effect="fade"
                    spaceBetween={50}
                    slidesPerView={1}
                    loop={true}
                    navigation={{
                        nextEl: '.markets-next',
                        prevEl: '.markets-prev',
                    }}
                    className="markets-swiper static"
                    data-aos="zoom-in"
                >
                    {marketsData.map((market) => (
                        <SwiperSlide key={market.id}>
                            {({ isActive }) => (
                                <div className={`relative flex items-center  lg:min-h-[700px] w-full pt-6 pb-20 transition-opacity duration-700 ${isActive ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}>

                                    {/* Illustration / Image */}
                                    <div className="hidden lg:block w-full lg:w-[65%] ml-auto lg:h-[600px] rounded-[32px] overflow-hidden shadow-md">
                                        <img
                                            src={market.image}
                                            alt={market.title}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>

                                    {/* Text Content Card + Buttons floating wrapper */}
                                    <div className={`relative lg:absolute lg:left-0 lg:top-1/2 lg:-translate-y-1/2 z-10 w-full lg:w-[45%] flex flex-col gap-6 transition-all duration-700 transform ${isActive ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>

                                        {/* Glassmorphic card */}
                                        <div className="bg-[#2a87c5]/90 backdrop-blur-md text-white p-8 md:p-12 lg:p-14 rounded-[24px] border border-white/10">
                                            <h3 className="text-2xl md:text-4xl font-semibold mb-6">{market.title}</h3>
                                            <p className="text-white leading-relaxed text-justify">
                                                {market.description}
                                            </p>
                                        </div>

                                        {/* Navigation Buttons positioned directly near content */}
                                        <div className="flex gap-4 px-2">
                                            <button className="markets-prev w-[48px] h-[48px] bg-[#1A80C3] text-white rounded-full flex items-center justify-center hover:bg-[#14659b] transition-all shadow-md">
                                                <ArrowLeft size={20} strokeWidth={2.5} />
                                            </button>
                                            <button className="markets-next w-[48px] h-[48px] bg-[#1A80C3] text-white rounded-full flex items-center justify-center hover:bg-[#14659b] transition-all shadow-md">
                                                <ArrowRight size={20} strokeWidth={2.5} />
                                            </button>
                                        </div>

                                    </div>
                                </div>
                            )}
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <div className="mt-4 text-center" data-aos="fade-up">
                <Button variant="primary" size="lg" href="/markets" className="capitalize font-medium shadow-md">
                    View All Our Markets
                </Button>
            </div>
        </section>
    );
}
