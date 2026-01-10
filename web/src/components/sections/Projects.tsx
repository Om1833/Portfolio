"use client";

import Link from "next/link";
import { Section } from "@/components/Section";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/content";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
};

export function Projects() {
    return (
        <Section id="projects" className="border-t border-white/5">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="mb-16"
            >
                <h2 className="text-4xl md:text-6xl font-bold mb-6 font-heading tracking-tight">
                    Selected Work
                </h2>
                <p className="text-zinc-400 text-xl max-w-2xl leading-relaxed">
                    A curated collection of projects showcasing my approach to design — solving real problems with thoughtful, user-centered solutions.
                </p>
            </motion.div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="grid md:grid-cols-2 gap-8 md:gap-10"
            >
                {projects.map((project, index) => (
                    <motion.div key={project.id} variants={itemVariants}>
                        {project.link ? (
                            <Link href={project.link} target="_blank" rel="noopener noreferrer" className="group block cursor-pointer">
                                <div className={`aspect-[4/3] bg-gradient-to-br ${project.color} rounded-2xl overflow-hidden mb-6 relative border border-white/5 transition-all duration-500 ease-out group-hover:scale-[1.02] group-hover:border-white/20 group-hover:shadow-2xl group-hover:shadow-white/5`}>
                                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px]" />

                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 bg-zinc-950/60 backdrop-blur-sm">
                                        <span className="flex items-center gap-2 text-white font-medium text-lg">
                                            View Details
                                            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                        </span>
                                    </div>

                                    <div className="absolute bottom-4 left-4 text-7xl font-bold text-white/5 font-heading">
                                        0{index + 1}
                                    </div>
                                </div>
                                <div className="flex justify-between items-start gap-4">
                                    <div>
                                        <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-zinc-300 transition-colors">
                                            {project.title}
                                        </h3>
                                        <p className="text-zinc-500 text-sm leading-relaxed mb-3">{project.description}</p>
                                        <div className="flex gap-2 flex-wrap">
                                            {project.tools.map(tool => (
                                                <span key={tool} className="text-xs px-2 py-1 rounded-full bg-white/5 text-zinc-400 border border-white/5">
                                                    {tool}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="text-right flex-shrink-0">
                                        <span className="block text-xs font-medium text-zinc-400 uppercase tracking-wider">{project.category}</span>
                                    </div>
                                </div>
                            </Link>
                        ) : (
                            <div className="group block cursor-pointer">
                                <div className={`aspect-[4/3] bg-gradient-to-br ${project.color} rounded-2xl overflow-hidden mb-6 relative border border-white/5 transition-all duration-500 ease-out group-hover:scale-[1.02] group-hover:border-white/20 group-hover:shadow-2xl group-hover:shadow-white/5`}>
                                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px]" />

                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 bg-zinc-950/60 backdrop-blur-sm">
                                        <span className="flex items-center gap-2 text-white font-medium text-lg">
                                            View Details
                                            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                        </span>
                                    </div>

                                    <div className="absolute bottom-4 left-4 text-7xl font-bold text-white/5 font-heading">
                                        0{index + 1}
                                    </div>
                                </div>
                                <div className="flex justify-between items-start gap-4">
                                    <div>
                                        <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-zinc-300 transition-colors">
                                            {project.title}
                                        </h3>
                                        <p className="text-zinc-500 text-sm leading-relaxed mb-3">{project.description}</p>
                                        <div className="flex gap-2 flex-wrap">
                                            {project.tools.map(tool => (
                                                <span key={tool} className="text-xs px-2 py-1 rounded-full bg-white/5 text-zinc-400 border border-white/5">
                                                    {tool}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="text-right flex-shrink-0">
                                        <span className="block text-xs font-medium text-zinc-400 uppercase tracking-wider">{project.category}</span>
                                    </div>
                                </div>
                            </div>
                        )}
                    </motion.div>
                ))}
            </motion.div>
        </Section>
    );
}
