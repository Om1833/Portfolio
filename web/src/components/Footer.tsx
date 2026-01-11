"use client";

import Link from "next/link";
import { personalInfo } from "@/data/content";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="py-12 px-6 border-t border-white/5">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    {/* Logo / Name */}
                    <div className="text-white font-semibold text-lg">
                        Patel Om<span className="text-purple-500">.</span>
                    </div>

                    {/* Social Links */}
                    <div className="flex items-center gap-6">
                        {personalInfo.socials.map((social) => (
                            <Link
                                key={social.name}
                                href={social.href}
                                target="_blank"
                                className="text-white/40 hover:text-purple-400 transition-colors text-sm"
                            >
                                {social.name}
                            </Link>
                        ))}
                    </div>

                    {/* Copyright */}
                    <div className="text-white/30 text-sm">
                        © {currentYear} Patel Om. All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    );
}
