"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ChevronUp, ChevronDown, Play, Pause, SkipForward, Volume2, Sun, Moon, Plus, Minus, Check, Heart, Star, Bookmark, Share2 } from "lucide-react";

interface FloatingUIElement {
    id: number;
    type: 'arrows' | 'slider' | 'toggle' | 'playback' | 'volume' | 'stepper' | 'checkbox' | 'like' | 'rating';
    x: number;
    y: number;
    scale: number;
    opacity: number;
    delay: number;
    blur?: boolean;
}

export function FloatingElements() {
    const [elements, setElements] = useState<FloatingUIElement[]>([]);

    useEffect(() => {
        // Different sizes and opacities for depth effect
        const configs: FloatingUIElement[] = [
            // Far away (small, low opacity, blurred)
            { id: 1, type: 'arrows', x: 3, y: 15, scale: 0.6, opacity: 0.3, delay: 0, blur: true },
            { id: 2, type: 'toggle', x: 90, y: 25, scale: 0.5, opacity: 0.25, delay: 0.2, blur: true },
            { id: 3, type: 'checkbox', x: 5, y: 80, scale: 0.55, opacity: 0.3, delay: 0.4, blur: true },

            // Medium distance
            { id: 4, type: 'slider', x: 8, y: 45, scale: 0.75, opacity: 0.45, delay: 0.6 },
            { id: 5, type: 'volume', x: 85, y: 60, scale: 0.7, opacity: 0.4, delay: 0.8 },
            { id: 6, type: 'like', x: 92, y: 40, scale: 0.8, opacity: 0.5, delay: 1.0 },

            // Closer (larger, more visible)
            { id: 7, type: 'playback', x: 75, y: 18, scale: 0.9, opacity: 0.6, delay: 1.2 },
            { id: 8, type: 'stepper', x: 6, y: 65, scale: 0.85, opacity: 0.55, delay: 1.4 },
            { id: 9, type: 'rating', x: 80, y: 78, scale: 0.9, opacity: 0.6, delay: 1.6 },

            // Very close (large)
            { id: 10, type: 'arrows', x: 2, y: 35, scale: 1.1, opacity: 0.7, delay: 1.8 },
            { id: 11, type: 'slider', x: 88, y: 50, scale: 1.0, opacity: 0.65, delay: 2.0 },
        ];
        setElements(configs);
    }, []);

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {elements.map((el) => (
                <motion.div
                    key={el.id}
                    className="absolute"
                    style={{
                        left: `${el.x}%`,
                        top: `${el.y}%`,
                        filter: el.blur ? 'blur(1px)' : 'none',
                    }}
                    initial={{ opacity: 0, scale: el.scale * 0.8, y: 20 }}
                    animate={{
                        opacity: el.opacity,
                        scale: el.scale,
                        y: [0, -8 * el.scale, 0],
                    }}
                    transition={{
                        opacity: { delay: el.delay, duration: 0.6 },
                        scale: { delay: el.delay, duration: 0.6 },
                        y: { delay: el.delay + 1, duration: 3 + el.id * 0.3, repeat: Infinity, ease: "easeInOut" },
                    }}
                >
                    <UIElement type={el.type} />
                </motion.div>
            ))}
        </div>
    );
}

function UIElement({ type }: { type: FloatingUIElement['type'] }) {
    switch (type) {
        case 'arrows':
            return (
                <div className="glass-card rounded-2xl p-3 flex items-center gap-2">
                    <button className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-white/70">
                        <ArrowLeft className="w-4 h-4" />
                    </button>
                    <button className="w-8 h-8 rounded-lg bg-purple-500 flex items-center justify-center text-white">
                        <ArrowRight className="w-4 h-4" />
                    </button>
                </div>
            );

        case 'slider':
            return (
                <div className="glass-card rounded-2xl p-3 w-32">
                    <div className="text-xs text-white/40 mb-2">Opacity</div>
                    <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full w-2/3 bg-gradient-to-r from-purple-500 to-violet-500 rounded-full" />
                    </div>
                </div>
            );

        case 'toggle':
            return (
                <div className="glass-card rounded-xl p-2 flex items-center gap-2">
                    <Moon className="w-3 h-3 text-white/40" />
                    <div className="w-10 h-5 bg-purple-500 rounded-full p-0.5 flex justify-end">
                        <div className="w-4 h-4 bg-white rounded-full" />
                    </div>
                </div>
            );

        case 'playback':
            return (
                <div className="glass-card rounded-2xl p-2 flex items-center gap-1.5">
                    <button className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center text-white/60">
                        <Pause className="w-3 h-3" />
                    </button>
                    <button className="w-9 h-9 rounded-xl bg-purple-500 flex items-center justify-center text-white">
                        <Play className="w-4 h-4 ml-0.5" />
                    </button>
                    <button className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center text-white/60">
                        <SkipForward className="w-3 h-3" />
                    </button>
                </div>
            );

        case 'volume':
            return (
                <div className="glass-card rounded-xl p-2 flex items-center gap-2">
                    <Volume2 className="w-3 h-3 text-purple-400" />
                    <div className="flex gap-0.5">
                        {[1, 2, 3, 4].map((i) => (
                            <div
                                key={i}
                                className={`w-1 rounded-full ${i <= 2 ? 'bg-purple-500' : 'bg-white/20'}`}
                                style={{ height: `${6 + i * 3}px` }}
                            />
                        ))}
                    </div>
                </div>
            );

        case 'stepper':
            return (
                <div className="glass-card rounded-xl p-2 flex items-center gap-1.5">
                    <button className="w-6 h-6 rounded-md bg-white/10 flex items-center justify-center text-white/60">
                        <Minus className="w-3 h-3" />
                    </button>
                    <span className="w-6 text-center text-white text-sm font-medium">8</span>
                    <button className="w-6 h-6 rounded-md bg-purple-500 flex items-center justify-center text-white">
                        <Plus className="w-3 h-3" />
                    </button>
                </div>
            );

        case 'checkbox':
            return (
                <div className="glass-card rounded-xl p-2 flex items-center gap-2">
                    <div className="w-5 h-5 rounded-md bg-purple-500 flex items-center justify-center">
                        <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-xs text-white/60">Done</span>
                </div>
            );

        case 'like':
            return (
                <div className="glass-card rounded-xl p-2 flex items-center gap-2">
                    <Heart className="w-4 h-4 text-pink-500 fill-pink-500" />
                    <span className="text-xs text-white/60">24</span>
                </div>
            );

        case 'rating':
            return (
                <div className="glass-card rounded-xl p-2 flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                        <Star
                            key={i}
                            className={`w-3 h-3 ${i <= 4 ? 'text-yellow-400 fill-yellow-400' : 'text-white/20'}`}
                        />
                    ))}
                </div>
            );

        default:
            return null;
    }
}
