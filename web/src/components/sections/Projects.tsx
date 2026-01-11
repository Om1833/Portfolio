"use client";

import { Section } from "@/components/Section";
import { motion } from "framer-motion";
import { projects } from "@/data/content";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

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

export function Projects() {
    return (
        <Section id="projects">
            {/* Section Header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="text-center mb-20"
            >
                <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-purple-500 mb-6 py-2">
                    Featured Work
                </h2>
                <p className="text-xl text-white/50 max-w-2xl mx-auto">
                    Develop visually stunning designs, collaborate with brands and startups,
                    and measure impact through meaningful work.
                </p>
            </motion.div>

            {/* Project List */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex flex-col gap-24 max-w-7xl mx-auto px-4"
            >
                {projects.map((project, index) => (
                    <motion.div key={project.id} variants={itemVariants}>
                        <ProjectRow project={project} index={index} />
                    </motion.div>
                ))}
            </motion.div>
        </Section>
    );
}

function ProjectRow({ project, index }: { project: typeof projects[0], index: number }) {
    const isEven = index % 2 === 0;

    return (
        <div className={`flex flex-col lg:flex-row items-center gap-10 lg:gap-20 ${!isEven ? 'lg:flex-row-reverse' : ''}`}>
            {/* Image Side */}
            <div className="w-full lg:w-[60%] group cursor-pointer relative">
                <div className="relative aspect-[16/10] rounded-3xl overflow-hidden border border-white/5 bg-[#121217] shadow-2xl shadow-purple-900/10">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {project.image ? (
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 group-hover:rotate-1"
                        />
                    ) : (
                        <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-8xl font-bold text-white/5">0{project.id}</span>
                        </div>
                    )}

                    {/* Glassmorphic Hover Overlay Button */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                        {project.link && (
                            <Link
                                href={project.link}
                                target="_blank"
                                className="group/btn relative px-8 py-4 rounded-full overflow-hidden bg-white/10 backdrop-blur-md border border-white/20 shadow-xl transition-all duration-300 hover:bg-white/20 hover:scale-105 hover:border-white/40"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500" />
                                <span className="relative flex items-center gap-3 text-white font-medium text-lg">
                                    View Project <ArrowUpRight className="w-5 h-5 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                                </span>
                            </Link>
                        )}
                    </div>
                </div>

                {/* Decorative Elements around image */}
                <div className={`absolute -z-10 top-1/2 -translate-y-1/2 w-full h-[80%] bg-purple-500/20 blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 ${isEven ? '-left-20' : '-right-20'}`} />
            </div>

            {/* Content Side */}
            <div className="w-full lg:w-[40%] flex flex-col gap-6 text-left">
                <div>
                    <span className="text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 uppercase tracking-widest mb-4 block">
                        {project.category}
                    </span>
                    <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight group-hover:text-purple-200 transition-colors duration-300">
                        {project.title}
                    </h3>
                    <p className="text-lg text-white/60 leading-relaxed">
                        {project.description}
                    </p>
                </div>

                <div className="flex flex-wrap gap-3 my-2">
                    {project.tools.map((tool) => (
                        <span
                            key={tool}
                            className="px-4 py-2 text-sm font-medium rounded-xl bg-white/5 text-white/70 border border-white/5 hover:border-white/10 hover:bg-white/10 hover:text-white transition-all duration-300 cursor-default"
                        >
                            {tool}
                        </span>
                    ))}
                </div>

                {project.link && (
                    <div className="mt-4">
                        <Link
                            href={project.link}
                            target="_blank"
                            className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors text-lg font-medium group/link border-b border-transparent hover:border-purple-500 pb-1"
                        >
                            View Design
                            <ArrowUpRight className="w-5 h-5 group-hover/link:-translate-y-1 group-hover/link:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
}
