
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/Button";
import { HeroScene } from "@/components/3d/HeroScene";
import { FloatingElements } from "@/components/FloatingElements";
import { personalInfo } from "@/data/content";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.3,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
    },
};

export function Hero() {
    return (
        <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
            <HeroScene />
            <FloatingElements />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-stone-950/50 to-stone-950 pointer-events-none" />

            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="z-10 text-center px-4 max-w-5xl mx-auto space-y-8 relative"
            >
                <motion.div
                    variants={itemVariants}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-orange-500/20 text-sm font-medium text-orange-200/80 mb-4"
                >
                    <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse shadow-lg shadow-orange-500/50" />
                    Available for freelance work
                </motion.div>

                <motion.h1
                    variants={itemVariants}
                    className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-orange-100 via-amber-100 to-orange-300/50 pb-4"
                >
                    {personalInfo.name.split(" ")[0]} {personalInfo.name.split(" ")[1]}
                </motion.h1>

                <motion.p
                    variants={itemVariants}
                    className="text-xl md:text-2xl text-orange-200/60 max-w-2xl mx-auto leading-relaxed font-light"
                >
                    {personalInfo.role}. <br className="hidden md:block" />
                    {personalInfo.tagline}.
                </motion.p>

                <motion.div
                    variants={itemVariants}
                    className="flex flex-col md:flex-row gap-6 justify-center items-center pt-8"
                >
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
                </motion.div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 0.8 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce"
            >
                <div className="w-6 h-10 rounded-full border-2 border-orange-500/30 flex justify-center p-1">
                    <div className="w-1 h-3 bg-orange-400/60 rounded-full animate-scroll" />
                </div>
            </motion.div>
        </section>
    );
}

