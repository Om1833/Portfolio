
"use client";

import { Section } from "@/components/Section";
import { Button } from "@/components/Button";
import { motion } from "framer-motion";
import { Send, Mail, MapPin, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useState, FormEvent } from "react";
import { personalInfo } from "@/data/content";

export function Contact() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        await new Promise((resolve) => setTimeout(resolve, 1500));
        setIsSubmitting(false);
        setIsSubmitted(true);
    };

    return (
        <Section id="contact" className="border-t border-white/5">
            <div className="grid lg:grid-cols-2 gap-20">
                {/* Left Column - Info */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="space-y-12"
                >
                    <div>
                        <h2 className="text-4xl md:text-6xl font-bold mb-6 font-heading tracking-tight">
                            Let&apos;s work<br />together.
                        </h2>
                        <p className="text-xl text-zinc-400 leading-relaxed max-w-md">
                            Have a project in mind? I&apos;d love to hear about it. Send me a message and let&apos;s create something amazing.
                        </p>
                    </div>

                    <div className="space-y-8">
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-white/10 flex items-center justify-center flex-shrink-0">
                                <Mail className="w-5 h-5 text-zinc-400" />
                            </div>
                            <div>
                                <h3 className="text-sm font-medium text-zinc-500 uppercase tracking-wider mb-1">Email</h3>
                                <a href={`mailto:${personalInfo.email}`} className="text-lg text-white hover:text-zinc-300 transition-colors">
                                    {personalInfo.email}
                                </a>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-white/10 flex items-center justify-center flex-shrink-0">
                                <MapPin className="w-5 h-5 text-zinc-400" />
                            </div>
                            <div>
                                <h3 className="text-sm font-medium text-zinc-500 uppercase tracking-wider mb-1">Location</h3>
                                <p className="text-lg text-white">{personalInfo.location}</p>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-sm font-medium text-zinc-500 uppercase tracking-wider">Follow Me</h3>
                        <div className="flex flex-wrap gap-3">
                            {personalInfo.socials.map((social) => (
                                <Link
                                    key={social.name}
                                    href={social.href}
                                    target="_blank"
                                    className="group flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900 border border-white/10 text-sm text-zinc-300 hover:bg-zinc-800 hover:border-white/20 hover:text-white transition-all duration-300"
                                >
                                    {social.name}
                                    <ArrowUpRight className="w-4 h-4 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                                </Link>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Right Column - Form */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <form onSubmit={handleSubmit} className="space-y-6 p-8 rounded-3xl bg-zinc-900/50 border border-white/10 backdrop-blur-sm">
                        <div suppressHydrationWarning>
                            <label htmlFor="name" className="block text-sm font-medium text-zinc-400 mb-2">
                                Your Name
                            </label>
                            <input
                                id="name"
                                type="text"
                                required
                                className="w-full bg-zinc-950 border border-white/10 rounded-xl px-4 py-4 text-white placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-transparent transition-all duration-300"
                                placeholder="John Doe"
                            />
                        </div>
                        <div suppressHydrationWarning>
                            <label htmlFor="email" className="block text-sm font-medium text-zinc-400 mb-2">
                                Email Address
                            </label>
                            <input
                                id="email"
                                type="email"
                                required
                                className="w-full bg-zinc-950 border border-white/10 rounded-xl px-4 py-4 text-white placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-transparent transition-all duration-300"
                                placeholder="john@example.com"
                            />
                        </div>
                        <div suppressHydrationWarning>
                            <label htmlFor="message" className="block text-sm font-medium text-zinc-400 mb-2">
                                Your Message
                            </label>
                            <textarea
                                id="message"
                                required
                                rows={5}
                                className="w-full bg-zinc-950 border border-white/10 rounded-xl px-4 py-4 text-white placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-transparent transition-all duration-300 resize-none"
                                placeholder="Tell me about your project..."
                            />
                        </div>


                        <Button
                            type="submit"
                            disabled={isSubmitting || isSubmitted}
                            variant="primary"
                            size="lg"
                            className="w-full"
                        >
                            {isSubmitting ? (
                                <span className="flex items-center gap-2">
                                    <span className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                                    Sending...
                                </span>
                            ) : isSubmitted ? (
                                "Message Sent! ✓"
                            ) : (
                                <span className="flex items-center gap-2">
                                    Send Message
                                    <Send className="w-4 h-4" />
                                </span>
                            )}
                        </Button>
                    </form>
                </motion.div>
            </div>
        </Section>
    );
}
