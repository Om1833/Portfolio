
"use client";

import Link from "next/link";
import { Button } from "@/components/Button";
import { HeroScene } from "@/components/3d/HeroScene";
import { FloatingElements } from "@/components/FloatingElements";
import { personalInfo } from "@/data/content";

export function Hero() {
    return (
        <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
            <HeroScene />
            <FloatingElements />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/50 to-zinc-950 pointer-events-none" />

            <div className="z-10 text-center px-4 max-w-5xl mx-auto space-y-8 animate-fade-in relative">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/10 text-sm font-medium text-zinc-300 mb-4 animate-slide-up">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    Available for freelance work
                </div>

                <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white via-white/80 to-transparent pb-4">
                    {personalInfo.name.split(" ")[0]} {personalInfo.name.split(" ")[1]}
                </h1>

                <p className="text-xl md:text-2xl text-zinc-400 max-w-2xl mx-auto leading-relaxed font-light">
                    {personalInfo.role}. <br className="hidden md:block" />
                    {personalInfo.tagline}.
                </p>

                <div className="flex flex-col md:flex-row gap-6 justify-center items-center pt-8">
                    <Link href="#projects">
                        <Button variant="primary" size="lg" className="w-full md:w-auto shadow-lg shadow-white/10">
                            View Work
                        </Button>
                    </Link>
                    <Link href="#contact">
                        <Button variant="outline" size="lg" className="w-full md:w-auto">
                            Contact Me
                        </Button>
                    </Link>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
                <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center p-1">
                    <div className="w-1 h-3 bg-white/50 rounded-full animate-scroll" />
                </div>
            </div>
        </section>
    );
}
