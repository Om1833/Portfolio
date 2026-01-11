"use client";

export function Background() {
    return (
        <div className="fixed inset-0 -z-10 overflow-hidden">
            {/* Dark base */}
            <div className="absolute inset-0 bg-[#0a0a0f]" />

            {/* Purple gradient glow - top center */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-radial from-purple-600/30 via-purple-900/10 to-transparent rounded-full blur-3xl animate-glow-pulse" />

            {/* Purple/violet side glows */}
            <div className="absolute top-1/3 -left-40 w-[500px] h-[500px] bg-gradient-radial from-violet-600/20 via-transparent to-transparent rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 -right-40 w-[600px] h-[600px] bg-gradient-radial from-purple-500/15 via-transparent to-transparent rounded-full blur-3xl" />

            {/* Bottom warm accent */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-gradient-radial from-orange-500/10 via-pink-500/5 to-transparent rounded-full blur-3xl" />

            {/* Subtle grid overlay */}
            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                                      linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                    backgroundSize: '60px 60px'
                }}
            />

            {/* Noise texture */}
            <div
                className="absolute inset-0 opacity-[0.02]"
                style={{
                    backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")'
                }}
            />
        </div>
    );
}
