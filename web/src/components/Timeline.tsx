"use client";

import { motion } from "framer-motion";
import { timeline } from "@/data/content";

export function Timeline() {
    return (
        <div className="relative">
            {/* Section Header */}
            <div className="flex items-center gap-4 mb-16">
                <h3 className="text-3xl font-bold font-heading text-orange-100">My Journey</h3>
                <div className="h-px flex-1 bg-gradient-to-r from-orange-500/30 to-transparent" />
            </div>

            {/* Timeline Container */}
            <div className="relative">
                {/* Center Line - Hidden on mobile, shown on md+ */}
                <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-orange-500/30 to-transparent transform -translate-x-1/2" />

                {/* Mobile Line - Left aligned */}
                <div className="md:hidden absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-orange-500/30 to-transparent" />

                {/* Timeline Items */}
                <div className="space-y-8 md:space-y-0">
                    {timeline.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`relative flex items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                                }`}
                        >
                            {/* Content Card - Mobile: full width with left padding, Desktop: alternating */}
                            <div className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12 md:text-left"
                                } pl-12 md:pl-0`}>
                                <div className="group p-6 rounded-2xl bg-stone-900/50 border border-orange-500/10 hover:border-orange-500/30 hover:bg-stone-900/70 transition-all duration-500">
                                    {/* Year Badge */}
                                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-3 ${item.type === "current"
                                        ? "bg-orange-500/20 text-orange-300 border border-orange-500/30 shadow-lg shadow-orange-500/20"
                                        : item.type === "work"
                                            ? "bg-amber-500/20 text-amber-300 border border-amber-500/30"
                                            : "bg-stone-800/50 text-orange-200/60 border border-orange-500/10"
                                        }`}>
                                        {item.year}
                                    </span>

                                    {/* Title */}
                                    <h4 className="text-lg font-semibold text-orange-100 mb-2 group-hover:text-orange-50 transition-colors">
                                        {item.title}
                                    </h4>

                                    {/* Description */}
                                    <p className="text-sm text-orange-200/50 leading-relaxed group-hover:text-orange-200/70 transition-colors">
                                        {item.description}
                                    </p>
                                </div>
                            </div>

                            {/* Center Dot - Desktop only */}
                            <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-4 h-4 items-center justify-center">
                                <div className={`w-3 h-3 rounded-full transition-all duration-300 ${item.type === "current"
                                    ? "bg-orange-500 shadow-lg shadow-orange-500/50"
                                    : item.type === "work"
                                        ? "bg-amber-500 shadow-lg shadow-amber-500/30"
                                        : "bg-stone-600"
                                    }`} />
                                <div className={`absolute w-6 h-6 rounded-full animate-ping opacity-20 ${item.type === "current" ? "bg-orange-500" : "bg-transparent"
                                    }`} />
                            </div>

                            {/* Mobile Dot - Left aligned */}
                            <div className="md:hidden absolute left-4 transform -translate-x-1/2 w-4 h-4 flex items-center justify-center">
                                <div className={`w-2.5 h-2.5 rounded-full ${item.type === "current"
                                    ? "bg-orange-500 shadow-lg shadow-orange-500/50"
                                    : item.type === "work"
                                        ? "bg-amber-500"
                                        : "bg-stone-600"
                                    }`} />
                            </div>

                            {/* Empty space for alternating layout on desktop */}
                            <div className="hidden md:block w-1/2" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
