
"use client";

import { Section } from "@/components/Section";
import { motion } from "framer-motion";
import { Layout, Palette, PenTool, Layers, Users, MessageSquare } from "lucide-react";
// Removed Skills3D import
import { about, services, skills } from "@/data/content";

const iconMap: Record<string, any> = {
    Layout,
    Palette,
    PenTool,
    Layers,
    Users,
    MessageSquare
};

export function About() {
    return (
        <Section id="about" className="bg-zinc-950 relative overflow-hidden border-t border-white/5">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="relative"
            >
                <div className="mb-24">
                    <div className="max-w-3xl mb-16">
                        <h2 className="text-4xl md:text-6xl font-bold font-heading tracking-tight mb-8">
                            About Me
                        </h2>
                        <div className="space-y-6 text-lg text-zinc-400 leading-relaxed">
                            {about.bio.map((paragraph, idx) => (
                                <p key={idx}>{paragraph}</p>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-8">
                        <div>
                            <div className="flex items-center gap-4 mb-8">
                                <h3 className="text-3xl font-bold font-heading">Design Toolkit</h3>
                                <div className="h-px flex-1 bg-white/10" />
                            </div>

                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                                {skills.map((skill, idx) => (
                                    <div
                                        key={idx}
                                        className="group flex flex-col items-center justify-center p-6 rounded-2xl bg-zinc-900/20 border border-white/5 hover:border-white/20 hover:bg-zinc-900/50 transition-all duration-300"
                                    >
                                        <div className="relative w-12 h-12 mb-3 grayscale group-hover:grayscale-0 transition-all duration-300">
                                            {/* We use standard img tag or Next Image if configured. Using img for simplicity with external content logic, but since these are local... */}
                                            <img
                                                src={skill.logo}
                                                alt={skill.name}
                                                className="w-full h-full object-contain drop-shadow-lg"
                                            />
                                        </div>
                                        <span className="text-sm font-medium text-zinc-400 group-hover:text-white transition-colors">
                                            {skill.name}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Experience Section - Full Width */}
                <div className="mb-24">
                    <div className="flex items-center gap-4 mb-10">
                        <h3 className="text-3xl font-bold font-heading">Experience</h3>
                        <div className="h-px flex-1 bg-white/10" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {about.experience.map((exp, i) => (
                            <div key={i} className="group p-6 rounded-3xl bg-zinc-900/50 border border-white/5 hover:border-white/20 hover:bg-zinc-900 transition-all duration-300">
                                <span className="inline-block px-3 py-1 rounded-full bg-white/5 text-xs text-zinc-400 mb-4 group-hover:bg-white/10 group-hover:text-white transition-colors">
                                    {exp.year}
                                </span>
                                <h4 className="text-lg font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">{exp.role}</h4>
                                <div className="text-sm font-medium text-zinc-500 mb-4">{exp.company}</div>
                                <p className="text-zinc-400 text-sm leading-relaxed">{exp.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Services / Skills Grid */}
                <div className="mb-16">
                    <h3 className="text-3xl font-bold mb-10 font-heading text-center">What I Do</h3>
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
                                    className="p-8 rounded-3xl bg-zinc-900/50 border border-white/5 hover:border-white/20 transition-all duration-300 hover:-translate-y-1 group"
                                >
                                    <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:bg-white/10 transition-colors">
                                        <Icon className="w-7 h-7 text-white group-hover:text-zinc-200" />
                                    </div>
                                    <h4 className="text-xl font-bold text-white mb-3">{service.title}</h4>
                                    <p className="text-zinc-400 leading-relaxed text-sm">{service.description}</p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

            </motion.div>
        </Section>
    );
}
