"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const floatingItems = [
    {
        id: 1,
        type: "button",
        content: "Get Started",
        className: "top-[15%] left-[10%] rotate-[-15deg]",
        delay: 0,
        parallaxFactor: 0.02,
    },
    {
        id: 2,
        type: "card",
        content: "UI",
        className: "top-[20%] right-[12%] rotate-[10deg]",
        delay: 0.5,
        parallaxFactor: 0.03,
    },
    {
        id: 3,
        type: "toggle",
        className: "bottom-[30%] left-[8%] rotate-[5deg]",
        delay: 1,
        parallaxFactor: 0.025,
    },
    {
        id: 4,
        type: "slider",
        className: "bottom-[25%] right-[10%] rotate-[-8deg]",
        delay: 1.5,
        parallaxFactor: 0.015,
    },
    {
        id: 5,
        type: "icon",
        content: "◎",
        className: "top-[40%] left-[5%] rotate-[20deg]",
        delay: 2,
        parallaxFactor: 0.035,
    },
    {
        id: 6,
        type: "badge",
        content: "PRO",
        className: "top-[35%] right-[6%] rotate-[-12deg]",
        delay: 2.5,
        parallaxFactor: 0.02,
    },
];

export function FloatingElements() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            // Normalize mouse position relative to viewport center
            const x = (e.clientX - window.innerWidth / 2) / window.innerWidth;
            const y = (e.clientY - window.innerHeight / 2) / window.innerHeight;
            setMousePosition({ x, y });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {floatingItems.map((item) => (
                <motion.div
                    key={item.id}
                    className={`absolute ${item.className}`}
                    initial={{ opacity: 0, y: 20, scale: 0.8 }}
                    animate={{
                        opacity: [0.6, 0.85, 0.6],
                        y: [0, -15, 0],
                        scale: [1, 1.02, 1],
                        x: mousePosition.x * 100 * item.parallaxFactor,
                    }}
                    transition={{
                        delay: item.delay,
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut",
                        x: { duration: 0.3, ease: "easeOut" },
                    }}
                >
                    {item.type === "button" && (
                        <div className="relative px-6 py-3 rounded-full bg-white/15 backdrop-blur-md border border-white/30 text-white/80 text-sm font-medium shadow-2xl shadow-violet-500/20">
                            {/* Glow effect */}
                            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-500/20 to-blue-500/20 blur-xl -z-10" />
                            {item.content}
                        </div>
                    )}

                    {item.type === "card" && (
                        <div className="relative w-20 h-24 rounded-2xl bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-md border border-white/30 flex items-center justify-center shadow-2xl shadow-blue-500/20">
                            {/* Glow effect */}
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/20 to-violet-500/20 blur-xl -z-10" />
                            <span className="text-white/70 text-2xl font-bold">{item.content}</span>
                        </div>
                    )}

                    {item.type === "toggle" && (
                        <div className="relative w-14 h-8 rounded-full bg-white/15 backdrop-blur-md border border-white/30 p-1 shadow-2xl shadow-green-500/20">
                            {/* Glow effect */}
                            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 blur-xl -z-10" />
                            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-green-400/60 to-emerald-500/60 ml-auto shadow-lg shadow-green-500/30" />
                        </div>
                    )}

                    {item.type === "slider" && (
                        <div className="relative w-32 h-3 rounded-full bg-white/15 backdrop-blur-md border border-white/20 shadow-2xl shadow-cyan-500/20 overflow-hidden">
                            {/* Glow effect */}
                            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 blur-xl -z-10" />
                            <div className="w-1/2 h-full bg-gradient-to-r from-cyan-400/50 to-blue-500/50 rounded-full" />
                        </div>
                    )}

                    {item.type === "icon" && (
                        <div className="relative w-12 h-12 rounded-xl bg-white/15 backdrop-blur-md border border-white/30 flex items-center justify-center text-white/70 text-xl shadow-2xl shadow-purple-500/20">
                            {/* Glow effect */}
                            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 blur-xl -z-10" />
                            {item.content}
                        </div>
                    )}

                    {item.type === "badge" && (
                        <div className="relative px-4 py-1.5 rounded-full bg-gradient-to-r from-violet-500/40 to-blue-500/40 backdrop-blur-md border border-white/30 text-white/90 text-xs font-bold shadow-2xl shadow-violet-500/30">
                            {/* Glow effect */}
                            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-500/30 to-blue-500/30 blur-xl -z-10" />
                            {item.content}
                        </div>
                    )}
                </motion.div>
            ))}
        </div>
    );
}
