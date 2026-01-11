"use client";

import { useEffect, useState } from "react";

export function Background() {
    const [stars, setStars] = useState<Array<{ id: number; left: string; top: string; delay: string; size: number }>>([]);

    useEffect(() => {
        // Generate stars only on client side
        const generatedStars = Array.from({ length: 25 }, (_, i) => ({
            id: i,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            delay: `${Math.random() * 4}s`,
            size: Math.random() * 1.5 + 0.5,
        }));
        setStars(generatedStars);
    }, []);

    return (
        <div className="fixed inset-0 -z-10 overflow-hidden">
            {/* Base dark background */}
            <div className="absolute inset-0 bg-stone-950" />

            {/* Main orange glow - top center */}
            <div className="absolute -top-1/4 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-radial from-orange-500/20 via-orange-500/5 to-transparent rounded-full blur-3xl" />

            {/* Center orange ambient */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-radial from-orange-500/12 via-transparent to-transparent rounded-full blur-3xl" />

            {/* Corner orange accents */}
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gradient-radial from-orange-500/10 via-transparent to-transparent rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-radial from-orange-500/10 via-transparent to-transparent rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

            {/* Bottom orange glow */}
            <div className="absolute bottom-0 left-0 right-0 h-80 bg-gradient-to-t from-orange-500/8 via-transparent to-transparent" />

            {/* Subtle orange-tinted stars */}
            {stars.map((star) => (
                <div
                    key={star.id}
                    className="absolute rounded-full bg-orange-300/50"
                    style={{
                        left: star.left,
                        top: star.top,
                        width: `${star.size}px`,
                        height: `${star.size}px`,
                        animation: `twinkle 4s ease-in-out infinite`,
                        animationDelay: star.delay,
                    }}
                />
            ))}

            {/* Noise texture overlay */}
            <div className="absolute inset-0 opacity-[0.02] mix-blend-overlay"
                style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")' }}
            />
        </div>
    );
}
