"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { motion } from "framer-motion";
import Button from "./Button";

const bannerVideos = [
    "https://cdn.clinicalvisuals.com/medical/tsi/landingpage/tsi_01.webm",
    "https://cdn.clinicalvisuals.com/medical/tsi/landingpage/tsi_02.webm",
    "https://cdn.clinicalvisuals.com/medical/tsi/landingpage/tsi_03.webm",
    "https://cdn.clinicalvisuals.com/medical/tsi/landingpage/tsi_04.webm",
];

const slides = [
    {
        id: 1,
        title: "Maximize Your Budget,\nMinimize Your Downtime",
        description: "Managing respirator fit testing is now easier, more affordable and hassle-free with TSI Tempo™ Program",
        cta: "Contact",
        href: "/contact",
    },
    {
        id: 2,
        title: "Efficiency Meets Intelligence",
        description: "Introducing the TSI OmniTrak™ Solution – make your job easier wirelessly connecting modules to take measurements, create reports, and analyze the data provided to help improve indoor space conditions.",
        cta: "Learn More",
        href: "/solutions",
    },
    {
        id: 3,
        title: "Stay Safe In the Face of Wildfire Smoke",
        description: "Wildfires occurring in the wildland-urban interface present a major health hazard for local communities not only outside but also inside buildings.",
        cta: "Learn More",
        href: "/solutions",
    }
];

export default function Hero() {
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

    const handleVideoEnd = () => {
        setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % bannerVideos.length);
    };

    return (
        <section
            className="relative w-full overflow-hidden flex items-center justify-center h-screen"
        >
            <div className="absolute inset-0 z-0">
                <video
                    key={currentVideoIndex}
                    src={bannerVideos[currentVideoIndex]}
                    autoPlay
                    muted
                    playsInline
                    onEnded={handleVideoEnd}
                    className="absolute inset-0 w-full h-full object-cover z-0"
                ></video>
            </div>

            {/* Hero Swiper */}
            <Swiper
                modules={[Navigation, Pagination, Autoplay, EffectFade]}
                effect="fade"
                loop={true}
                speed={1000}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                pagination={{ clickable: true, el: '.custom-pagination' }}
                className="h-full w-full z-20"
            >
                {slides.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        {({ isActive }) => (
                            <div className="container mx-auto flex flex-col justify-end pb-40 h-full px-4 md:px-12 w-full text-left text-white">
                                <div className="relative max-w-3xl z-20">
                                    <motion.h1
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                        transition={{ duration: 0.8 }}
                                        className="text-3xl md:text-5xl lg:text-5xl font-bold leading-tight mb-6 whitespace-pre-line"
                                        style={{ textShadow: "1px 2px 8px rgba(0, 0, 0, 0.8)" }}
                                    >
                                        {slide.title}
                                    </motion.h1>
                                    <motion.p
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                        transition={{ duration: 0.8, delay: 0.2 }}
                                        className="text-sm md:text-base mb-8 max-w-lg leading-relaxed"
                                        style={{ textShadow: "1px 2px 6px rgba(0, 0, 0, 0.8)" }}
                                    >
                                        {slide.description}
                                    </motion.p>
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                        transition={{ duration: 0.5, delay: 0.4 }}
                                        className="inline-block"
                                    >
                                        <Button variant="outline" size="sm" radius="sm" className="font-medium px-8 py-2.5" href={slide.href}>
                                            {slide.cta}
                                        </Button>
                                    </motion.div>
                                </div>
                            </div>
                        )}
                    </SwiperSlide>
                ))}

                {/* Custom Pagination at the bottom center */}
                <div className="custom-pagination"></div>
            </Swiper>

            <style jsx global>{`
                .custom-pagination {
                    position: absolute !important;
                    bottom: 4rem !important; /* 64px roughly */
                    left: 0 !important;
                    width: 100% !important;
                    display: flex !important;
                    justify-content: center !important;
                    z-index: 30 !important;
                }
                
                @media (min-width: 768px) {
                    .custom-pagination {
                        bottom: 5rem !important; /* md:bottom-20 */
                    }
                }
                .custom-pagination .swiper-pagination-bullet {
                    width: 7px;
                    height: 7px;
                    background: #ffffff;
                    opacity: 1;
                    border-radius: 50%;
                    transition: all 0.3s ease;
                    margin: 0 10px !important;
                }
                .custom-pagination .swiper-pagination-bullet-active {
                    background: #38bdf8;
                    box-shadow: 0 0 10px rgba(56, 189, 248, 0.6);
                }
            `}</style>
        </section >
    );
}
