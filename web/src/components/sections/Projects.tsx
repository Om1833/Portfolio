"use client";

import Link from "next/link";
import { Section } from "@/components/Section";
import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { projects } from "@/data/content";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
    },
};

export function Projects() {
    return (
        <Section id="projects" className="border-t border-orange-500/10">
            {/* Section Header */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="mb-20"
            >
                <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold font-heading tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-orange-100 to-amber-200">
                    Selected Work
                </h2>
                <p className="text-orange-200/60 text-lg md:text-xl max-w-2xl leading-relaxed">
                    A curated collection of projects showcasing my approach to design — solving real problems with thoughtful, user-centered solutions.
                </p>
            </motion.div>

            {/* Projects Grid */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="space-y-16 md:space-y-24"
            >
                {projects.map((project, index) => (
                    <motion.div
                        key={project.id}
                        variants={itemVariants}
                        className="group"
                    >
                        {project.link ? (
                            <Link
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block"
                            >
                                <ProjectCard project={project} index={index} />
                            </Link>
                        ) : (
                            <ProjectCard project={project} index={index} />
                        )}
                    </motion.div>
                ))}
            </motion.div>
        </Section>
    );
}

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
    const isEven = index % 2 === 0;

    return (
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}>
            {/* Image */}
            <div className={`relative ${!isEven ? 'lg:order-2' : ''}`}>
                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-zinc-900 border border-white/5 group-hover:border-white/20 transition-all duration-500">
                    {project.image ? (
                        <>
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-zinc-950/20 group-hover:bg-zinc-950/0 transition-colors duration-500" />
                        </>
                    ) : (
                        <div className={`absolute inset-0 bg-gradient-to-br ${project.color}`}>
                            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px]" />
                            {/* Project number */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <span className="text-[12rem] md:text-[16rem] font-bold text-white/[0.03] font-heading select-none leading-none">
                                    0{index + 1}
                                </span>
                            </div>
                        </div>
                    )}

                    {/* Hover overlay with icon */}
                    <div className="absolute inset-0 bg-zinc-950/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform duration-300">
                            <ExternalLink className="w-6 h-6 text-white" />
                        </div>
                    </div>
                </div>

                {/* Decorative gradient blob */}
                <div className={`absolute -z-10 w-64 h-64 rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-700 ${project.color.includes('violet') ? 'bg-violet-500' :
                    project.color.includes('blue') ? 'bg-blue-500' :
                        project.color.includes('emerald') ? 'bg-emerald-500' :
                            project.color.includes('orange') ? 'bg-orange-500' :
                                project.color.includes('pink') ? 'bg-pink-500' :
                                    'bg-sky-500'
                    } ${isEven ? '-bottom-20 -right-20' : '-bottom-20 -left-20'}`} />
            </div>

            {/* Content */}
            <div className={`space-y-6 ${!isEven ? 'lg:order-1 lg:text-right' : ''}`}>
                {/* Category */}
                <motion.span
                    initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="inline-block text-sm font-medium text-zinc-500 uppercase tracking-widest"
                >
                    {project.category}
                </motion.span>

                {/* Title */}
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white group-hover:text-zinc-100 transition-colors duration-300">
                    {project.title}
                </h3>

                {/* Description */}
                <p className="text-zinc-400 text-lg leading-relaxed max-w-lg">
                    {project.description}
                </p>

                {/* Tools */}
                <div className={`flex flex-wrap gap-2 ${!isEven ? 'lg:justify-end' : ''}`}>
                    {project.tools.map((tool) => (
                        <span
                            key={tool}
                            className="px-4 py-2 text-sm rounded-full bg-white/5 text-zinc-400 border border-white/5 group-hover:border-white/10 group-hover:bg-white/10 transition-all duration-300"
                        >
                            {tool}
                        </span>
                    ))}
                </div>

                {/* CTA */}
                {project.link && (
                    <div className={`pt-4 ${!isEven ? 'lg:flex lg:justify-end' : ''}`}>
                        <span className="inline-flex items-center gap-2 text-white font-medium group-hover:gap-3 transition-all duration-300">
                            View Project
                            <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </span>
                    </div>
                )}
            </div>
        </div>
    );
}
