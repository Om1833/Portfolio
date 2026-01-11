"use client";

import { Section } from "@/components/Section";
import { motion } from "framer-motion";
import { services, skills } from "@/data/content";
import { Code, Palette, Smartphone, Layers, Clock, PenTool } from "lucide-react";

const iconMap: { [key: string]: React.ComponentType<{ className?: string }> } = {
    Code,
    Palette,
    Smartphone,
    Layers,
    Clock,
    PenTool,
};

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
    },
};

export function About() {
    return (
        <Section id="about">
            {/* Section Header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="text-center mb-20"
            >
                <span className="text-sm font-medium text-purple-400 uppercase tracking-widest mb-4 block">
                    About Me
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                    Design is how it works
                </h2>
                <p className="text-lg text-white/50 max-w-2xl mx-auto">
                    I believe great design is invisible. It solves problems, removes friction,
                    and creates experiences that feel natural and effortless.
                </p>
            </motion.div>

            {/* What I Do */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24"
            >
                {services.map((service) => {
                    const Icon = iconMap[service.icon] || Layers;
                    return (
                        <motion.div
                            key={service.title}
                            variants={itemVariants}
                            className="group p-8 glass-card rounded-2xl hover:bg-white/10 transition-all duration-300"
                        >
                            <div className="w-12 h-12 rounded-xl glass-purple flex items-center justify-center mb-6">
                                <Icon className="w-6 h-6 text-purple-400" />
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-3">
                                {service.title}
                            </h3>
                            <p className="text-white/50 leading-relaxed">
                                {service.description}
                            </p>
                        </motion.div>
                    );
                })}
            </motion.div>

            {/* Skills / Design Toolkit */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
            >
                <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-purple-500 mb-6 py-2">
                    Design Toolkit
                </h3>
                <p className="text-xl text-white/50 max-w-2xl mx-auto">
                    The software and technologies I use to bring creative ideas to life
                </p>
            </motion.div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex flex-wrap justify-center gap-8"
            >
                {skills.map((skill) => (
                    <motion.div
                        key={skill.name}
                        variants={itemVariants}
                        className="flex flex-col items-center gap-4 group"
                    >
                        <div className="w-24 h-24 rounded-3xl glass-purple flex items-center justify-center group-hover:scale-110 transition-transform duration-300 ring-1 ring-white/10 group-hover:ring-white/20">
                            <img
                                src={skill.logo}
                                alt={skill.name}
                                className="w-12 h-12 object-contain drop-shadow-lg"
                            />
                        </div>
                        <span className="text-white/80 font-medium text-lg tracking-wide group-hover:text-white transition-colors">{skill.name}</span>
                    </motion.div>
                ))}
            </motion.div>
        </Section>
    );
}
