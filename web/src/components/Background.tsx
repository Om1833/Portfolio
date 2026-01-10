"use client";

export function Background() {
    return (
        <div className="fixed inset-0 -z-50 overflow-hidden bg-zinc-950">
            {/* Primary flowing gradient layers */}
            <div className="absolute inset-0">
                {/* Large flowing wave 1 */}
                <div
                    className="absolute w-[150%] h-[150%] -top-1/4 -left-1/4 opacity-60"
                    style={{
                        background: `radial-gradient(ellipse 80% 50% at 50% 50%, rgba(80, 80, 90, 0.4), transparent)`,
                        animation: 'wave1 15s ease-in-out infinite',
                    }}
                />

                {/* Large flowing wave 2 */}
                <div
                    className="absolute w-[150%] h-[150%] -top-1/4 -right-1/4 opacity-50"
                    style={{
                        background: `radial-gradient(ellipse 60% 80% at 60% 40%, rgba(100, 100, 110, 0.35), transparent)`,
                        animation: 'wave2 18s ease-in-out infinite',
                    }}
                />

                {/* Highlight wave */}
                <div
                    className="absolute w-full h-full opacity-40"
                    style={{
                        background: `radial-gradient(ellipse 40% 60% at 30% 60%, rgba(140, 140, 150, 0.25), transparent)`,
                        animation: 'wave3 12s ease-in-out infinite',
                    }}
                />

                {/* Dark wave for depth */}
                <div
                    className="absolute w-full h-full opacity-70"
                    style={{
                        background: `radial-gradient(ellipse 50% 40% at 70% 30%, rgba(20, 20, 25, 0.6), transparent)`,
                        animation: 'wave4 20s ease-in-out infinite',
                    }}
                />
            </div>

            {/* Subtle grain/noise overlay */}
            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                }}
            />
        </div>
    );
}
