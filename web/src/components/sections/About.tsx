
"use client";

import { Section } from "@/components/Section";
import { motion } from "framer-motion";
import { Layout, Palette, PenTool, Layers, Users, MessageSquare, Clock } from "lucide-react";
import { Timeline } from "@/components/Timeline";
import { about, services, skills } from "@/data/content";

const iconMap: Record<string, any> = {
    Layout,
    Palette,
    PenTool,
    Layers,
    Users,
    MessageSquare,
    Clock
};

export function About() {
    return (
        <Section id="about" className="bg-stone-950 relative overflow-hidden border-t border-orange-500/10">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#f9731612_1px,transparent_1px),linear-gradient(to_bottom,#f9731612_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="relative"
            >
                <div className="mb-24">
                    <div className="max-w-3xl mb-16">
                        <h2 className="text-4xl md:text-6xl font-bold font-heading tracking-tight mb-8 bg-clip-text text-transparent bg-gradient-to-r from-orange-100 to-amber-200">
                            About Me
                        </h2>
                        <div className="space-y-6 text-lg text-orange-200/60 leading-relaxed">
                            {about.bio.map((paragraph, idx) => (
                                <p key={idx}>{paragraph}</p>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-8">
                        <div>
                            <div className="flex items-center gap-4 mb-10">
                                <h3 className="text-3xl font-bold font-heading text-orange-100">Design Toolkit</h3>
                                <div className="h-px flex-1 bg-gradient-to-r from-orange-500/30 to-transparent" />
                            </div>

                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-50px" }}
                                variants={{
                                    hidden: { opacity: 0 },
                                    visible: {
                                        opacity: 1,
                                        transition: { staggerChildren: 0.1 }
                                    }
                                }}
                                className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
                            >
                                {skills.map((skill, idx) => (
                                    <motion.div
                                        key={idx}
                                        variants={{
                                            hidden: { opacity: 0, y: 30, scale: 0.8 },
                                            visible: {
                                                opacity: 1,
                                                y: 0,
                                                scale: 1,
                                                transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
                                            }
                                        }}
                                        whileHover={{ scale: 1.05, y: -5 }}
                                        className="group relative"
                                    >
                                        {/* Glow effect behind card */}
                                        <div
                                            className="absolute -inset-1 rounded-3xl opacity-0 group-hover:opacity-60 blur-xl transition-all duration-500"
                                            style={{ backgroundColor: skill.color }}
                                        />

                                        {/* Gradient border on hover */}
                                        <div
                                            className="absolute -inset-[1px] rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                            style={{
                                                background: `linear-gradient(135deg, ${skill.color}80, transparent 50%, ${skill.color}40)`
                                            }}
                                        />

                                        {/* Card content */}
                                        <div className="relative flex flex-col items-center justify-center p-8 rounded-3xl bg-stone-900/80 backdrop-blur-sm border border-orange-500/10 group-hover:border-transparent transition-all duration-300">
                                            {/* Icon container with glow */}
                                            <div className="relative mb-4">
                                                <div
                                                    className="absolute inset-0 blur-2xl opacity-0 group-hover:opacity-40 transition-opacity duration-500 scale-150"
                                                    style={{ backgroundColor: skill.color }}
                                                />
                                                <div className="relative w-14 h-14 grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-110">
                                                    <img
                                                        src={skill.logo}
                                                        alt={skill.name}
                                                        className="w-full h-full object-contain drop-shadow-2xl"
                                                    />
                                                </div>
                                            </div>

                                            {/* Tool name */}
                                            <span className="text-sm font-semibold text-orange-200/60 group-hover:text-orange-100 transition-colors duration-300">
                                                {skill.name}
                                            </span>

                                            {/* Subtle shine effect */}
                                            <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none overflow-hidden">
                                                <div className="absolute -inset-full bg-gradient-to-r from-transparent via-orange-300/5 to-transparent skew-x-12 group-hover:animate-shimmer" />
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>
                    </div>
                </div>

                {/* Experience Section - Full Width */}
                <div className="mb-24">
                    <div className="flex items-center gap-4 mb-10">
                        <h3 className="text-3xl font-bold font-heading text-orange-100">Experience</h3>
                        <div className="h-px flex-1 bg-gradient-to-r from-orange-500/30 to-transparent" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {about.experience.map((exp, i) => (
                            <div key={i} className="group p-6 rounded-3xl bg-stone-900/50 border border-orange-500/10 hover:border-orange-500/30 hover:bg-stone-900/70 transition-all duration-300">
                                <span className="inline-block px-3 py-1 rounded-full bg-orange-500/10 text-xs text-orange-300/70 mb-4 group-hover:bg-orange-500/20 group-hover:text-orange-200 transition-colors">
                                    {exp.year}
                                </span>
                                <h4 className="text-lg font-bold text-orange-100 mb-1 group-hover:text-orange-50 transition-colors">{exp.role}</h4>
                                <div className="text-sm font-medium text-orange-300/50 mb-4">{exp.company}</div>
                                <p className="text-orange-200/50 text-sm leading-relaxed">{exp.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Timeline Section */}
                <div className="mb-24">
                    <Timeline />
                </div>

                {/* Services / Skills Grid */}
                <div className="mb-16">
                    <h3 className="text-3xl font-bold mb-10 font-heading text-center bg-clip-text text-transparent bg-gradient-to-r from-orange-100 to-amber-200">What I Do</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {services.map((service, idx) => {
                            const Icon = iconMap[service.icon];
                            return (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="group relative p-8 rounded-3xl bg-stone-900/50 border border-orange-500/10 hover:border-orange-500/30 transition-all duration-300 hover:-translate-y-1 overflow-hidden"
                                >
                                    {/* Glow effect on hover */}
                                    <div className="absolute -inset-1 bg-gradient-to-r from-orange-500/0 via-orange-500/10 to-amber-500/0 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />

                                    <div className="relative">
                                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-500/20 to-amber-500/10 flex items-center justify-center mb-6 group-hover:from-orange-500/30 group-hover:to-amber-500/20 transition-all border border-orange-500/20">
                                            <Icon className="w-7 h-7 text-orange-300 group-hover:text-orange-200" />
                                        </div>
                                        <h4 className="text-xl font-bold text-orange-100 mb-3">{service.title}</h4>
                                        <p className="text-orange-200/50 leading-relaxed text-sm">{service.description}</p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

            </motion.div>
        </Section>
    );
}
