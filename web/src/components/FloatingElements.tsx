"use client";

import { motion } from "framer-motion";

const floatingItems = [
    {
        id: 1,
        type: "button",
        content: "Get Started",
        className: "top-[15%] left-[10%] rotate-[-15deg]",
        delay: 0,
    },
    {
        id: 2,
        type: "card",
        content: "UI",
        className: "top-[20%] right-[12%] rotate-[10deg]",
        delay: 0.5,
    },
    {
        id: 3,
        type: "toggle",
        className: "bottom-[30%] left-[8%] rotate-[5deg]",
        delay: 1,
    },
    {
        id: 4,
        type: "slider",
        className: "bottom-[25%] right-[10%] rotate-[-8deg]",
        delay: 1.5,
    },
    {
        id: 5,
        type: "icon",
        content: "◎",
        className: "top-[40%] left-[5%] rotate-[20deg]",
        delay: 2,
    },
    {
        id: 6,
        type: "badge",
        content: "PRO",
        className: "top-[35%] right-[6%] rotate-[-12deg]",
        delay: 2.5,
    },
];

export function FloatingElements() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {floatingItems.map((item) => (
                <motion.div
                    key={item.id}
                    className={`absolute ${item.className}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{
                        opacity: [0.3, 0.5, 0.3],
                        y: [0, -15, 0],
                    }}
                    transition={{
                        delay: item.delay,
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                >
                    {item.type === "button" && (
                        <div className="px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/60 text-sm font-medium shadow-xl shadow-black/20">
                            {item.content}
                        </div>
                    )}

                    {item.type === "card" && (
                        <div className="w-20 h-24 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 flex items-center justify-center shadow-xl shadow-black/20">
                            <span className="text-white/50 text-2xl font-bold">{item.content}</span>
                        </div>
                    )}

                    {item.type === "toggle" && (
                        <div className="w-14 h-8 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 p-1 shadow-xl shadow-black/20">
                            <div className="w-6 h-6 rounded-full bg-white/40 ml-auto" />
                        </div>
                    )}

                    {item.type === "slider" && (
                        <div className="w-32 h-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 shadow-xl shadow-black/20 overflow-hidden">
                            <div className="w-1/2 h-full bg-white/30 rounded-full" />
                        </div>
                    )}

                    {item.type === "icon" && (
                        <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white/50 text-xl shadow-xl shadow-black/20">
                            {item.content}
                        </div>
                    )}

                    {item.type === "badge" && (
                        <div className="px-3 py-1 rounded-full bg-gradient-to-r from-violet-500/30 to-blue-500/30 backdrop-blur-sm border border-white/20 text-white/70 text-xs font-bold shadow-xl shadow-black/20">
                            {item.content}
                        </div>
                    )}
                </motion.div>
            ))}
        </div>
    );
}
