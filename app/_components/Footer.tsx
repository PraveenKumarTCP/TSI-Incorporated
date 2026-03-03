"use client";

import React from "react";
import { Facebook, Twitter, Linkedin, Youtube, Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[#1A80C3] text-white pt-20 pb-10 px-4 md:px-12 lg:px-24">
            <div className="container mx-auto flex flex-col md:flex-row flex-wrap justify-between gap-12 border-b border-white/30 pb-16">

                {/* Logo & Info Section */}
                <div className="flex flex-col gap-8 w-full md:w-1/4">
                    <div className="flex items-center gap-2">
                        <div className="flex flex-col">
                            <img src="/images/logo.svg" alt="" />
                        </div>
                    </div>

                    <div className="space-y-4 text-sm">
                        <div className="flex items-start gap-3">
                            <MapPin size={18} className="shrink-0 mt-1" />
                            <span>500 Cardigan Road,<br />Shoreview, Minnesota 55126 USA</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <MapPin size={18} />
                            <Link href="/locations" className="hover:underline">View all locations</Link>
                        </div>
                        <div className="flex items-center gap-3">
                            <Phone size={18} />
                            <span>800-884-2222 | +1 651-490-2811</span>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <Link href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-white text-[#1A80C3] transition-colors"><Facebook size={20} /></Link>
                        <Link href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-white text-[#1A80C3] transition-colors"><Twitter size={20} /></Link>
                        <Link href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-white text-[#1A80C3] transition-colors"><Linkedin size={20} /></Link>
                        <Link href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-white text-[#1A80C3] transition-colors"><Youtube size={20} /></Link>
                    </div>
                </div>

                {/* Links Grid */}
                <div className="flex-1 grid grid-cols-2 lg:grid-cols-4 gap-10 text-sm">
                    <div className="flex flex-col gap-6">
                        <div className="space-y-6">
                            <h4 className="font-bold border-b border-white/20 pb-2">Products</h4>
                            <ul className="space-y-3 ">
                                <li><Link href="#" className="hover:text-white transition-colors">View Product Categories</Link></li>
                                <li><Link href="#" className="hover:text-white transition-colors">View All Products</Link></li>
                            </ul>
                        </div>

                        <div className="space-y-6">
                            <h4 className="font-bold border-b border-white/20 pb-2">Software</h4>
                            <ul className="space-y-3 ">
                                <li><Link href="#" className="hover:text-white transition-colors">Software and Drivers</Link></li>
                                <li><Link href="#" className="hover:text-white transition-colors">TSI Link Platform</Link></li>
                            </ul>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <h4 className="font-bold border-b border-white/20 pb-2 flex items-center justify-between">Service & Support</h4>
                        <ul className="space-y-3 ">
                            <li><Link href="#" className="hover:text-white transition-colors">Request Repair & Calibration</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Register a Product</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Discontinued and Legacy Products</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Payments, Returns & Exports</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Contact Us</Link></li>
                        </ul>
                    </div>

                    <div className="space-y-6 uppercase">
                        <h4 className="font-bold border-b border-white/20 pb-2">Discover TSI</h4>
                        <ul className="space-y-3  capitalize">
                            <li><Link href="#" className="hover:text-white transition-colors">About our TSI</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Latest News</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Events</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Suspicious Email Alert and Spoofing</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Our Industries</Link></li>
                        </ul>
                    </div>

                    <div className="space-y-6">
                        <h4 className="font-bold border-b border-white/20 pb-2">Other TSI Online</h4>
                        <ul className="space-y-3 ">
                            <li><Link href="#" className="hover:text-white transition-colors">Precision Manufacturing</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Emergency Response & Law</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">TSI Accessories</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Heal Force</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">QUEST and ENMET Brands</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors font-bold text-white">See all Online Properties</Link></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="container mx-auto mt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-xs ">
                <p>Copyright © {currentYear} TSI Inc. All Rights Reserved.</p>
                <div className="flex flex-wrap justify-center gap-6 uppercase">
                    <Link href="#" className="hover:text-white">Privacy Policy</Link>
                    <Link href="#" className="hover:text-white">Terms of Use</Link>
                    <Link href="#" className="hover:text-white">Sitemap</Link>
                    <Link href="#" className="hover:text-white">Accessibility Statement</Link>
                    <button className="bg-white text-[#1A80C3] px-3 py-1 rounded text-[10px] font-bold">Cookie Preferences</button>
                </div>
            </div>
        </footer>
    );
}
