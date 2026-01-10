"use client";

import { useEffect, useState } from "react";

export function Background() {
    const [stars, setStars] = useState<Array<{ id: number; left: string; top: string; delay: string; size: number }>>([]);

    useEffect(() => {
        // Generate stars only on client side
        const generatedStars = Array.from({ length: 40 }, (_, i) => ({
            id: i,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            delay: `${Math.random() * 4}s`,
            size: Math.random() * 2 + 1,
        }));
        setStars(generatedStars);
    }, []);

    return (
        <div className="fixed inset-0 -z-10 overflow-hidden">
            {/* Base dark gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-stone-950 via-stone-950 to-stone-950" />

            {/* Orange ambient glow from center */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-orange-500/20 via-orange-600/5 to-transparent rounded-full blur-3xl animate-pulse-glow" />

            {/* Light beams from center top */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-[60vh] bg-gradient-to-b from-orange-400/60 via-amber-500/30 to-transparent blur-sm" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-[50vh] bg-gradient-to-b from-orange-500/20 via-amber-500/10 to-transparent blur-xl" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-[40vh] bg-gradient-to-b from-orange-400/10 via-transparent to-transparent blur-2xl" />

            {/* Side glow accents */}
            <div className="absolute top-1/4 -left-20 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />

            {/* Bottom wave glow */}
            <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-orange-600/5 via-orange-500/3 to-transparent" />

            {/* Curved light wave at bottom */}
            <svg className="absolute bottom-0 left-0 right-0 w-full h-48 opacity-30" viewBox="0 0 1440 200" preserveAspectRatio="none">
                <defs>
                    <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="rgb(249, 115, 22)" stopOpacity="0" />
                        <stop offset="50%" stopColor="rgb(251, 146, 60)" stopOpacity="0.4" />
                        <stop offset="100%" stopColor="rgb(249, 115, 22)" stopOpacity="0" />
                    </linearGradient>
                </defs>
                <path fill="url(#waveGradient)" d="M0,160 C360,80 1080,200 1440,120 L1440,200 L0,200 Z" />
            </svg>

            {/* Subtle stars with orange tint */}
            {stars.map((star) => (
                <div
                    key={star.id}
                    className="absolute rounded-full bg-amber-200/60"
                    style={{
                        left: star.left,
                        top: star.top,
                        width: `${star.size}px`,
                        height: `${star.size}px`,
                        animation: `twinkle 3s ease-in-out infinite`,
                        animationDelay: star.delay,
                    }}
                />
            ))}

            {/* Noise texture overlay */}
            <div className="absolute inset-0 opacity-[0.015] mix-blend-overlay"
                style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")' }}
            />
        </div>
    );
}
