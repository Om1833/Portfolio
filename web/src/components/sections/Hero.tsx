"use client";

import { Section } from "@/components/Section";
import { Button } from "@/components/Button";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowDown } from "lucide-react";
import { SparklesCore } from "@/components/ui/sparkles";
import { FloatingElements } from "@/components/FloatingElements";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2,
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
        <Section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
            {/* Sparkles background */}
            <div className="absolute inset-0 w-full h-full">
                <SparklesCore
                    id="hero-sparkles"
                    background="transparent"
                    minSize={0.4}
                    maxSize={1.4}
                    particleDensity={60}
                    className="w-full h-full"
                    particleColor="#a855f7"
                    speed={0.6}
                />
            </div>

            {/* Floating UI Elements */}
            <FloatingElements />

            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="relative z-10 text-center max-w-4xl mx-auto px-6"
            >
                {/* Name - Simple & Bold */}
                <motion.h1
                    variants={itemVariants}
                    className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-purple-500 mb-8"
                >
                    Patel Om
                </motion.h1>

                {/* Sparkle line under name */}
                <motion.div variants={itemVariants} className="w-[30rem] max-w-full h-12 relative mx-auto mb-12">
                    <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-purple-500 to-transparent h-[2px] w-3/4 blur-sm" />
                    <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-purple-500 to-transparent h-px w-3/4" />
                    <SparklesCore
                        background="transparent"
                        minSize={0.4}
                        maxSize={1}
                        particleDensity={600}
                        className="w-full h-full"
                        particleColor="#FFFFFF"
                    />
                    <div className="absolute inset-0 w-full h-full bg-[#0a0a0f] [mask-image:radial-gradient(300px_100px_at_top,transparent_20%,white)]"></div>
                </motion.div>

                {/* CTAs */}
                <motion.div
                    variants={itemVariants}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <Button
                        variant="primary"
                        size="lg"
                        onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                        View Projects
                        <ArrowUpRight className="w-5 h-5 ml-2" />
                    </Button>
                    <Button
                        variant="outline"
                        size="lg"
                        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                        Get in Touch
                    </Button>
                </motion.div>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 0.8 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2"
            >
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="flex flex-col items-center gap-2 text-white/40"
                >
                    <span className="text-xs uppercase tracking-widest">Scroll</span>
                    <ArrowDown className="w-4 h-4" />
                </motion.div>
            </motion.div>
        </Section>
    );
}
