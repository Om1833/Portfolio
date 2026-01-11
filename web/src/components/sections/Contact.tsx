
"use client";

import { Section } from "@/components/Section";
import { Button } from "@/components/Button";
import { motion } from "framer-motion";
import { Send, Mail, MapPin, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useState, FormEvent, useRef } from "react";
import emailjs from '@emailjs/browser';
import { personalInfo } from "@/data/content";

export function Contact() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [error, setError] = useState('');

    const formRef = useRef<HTMLFormElement>(null);

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError('');
        setIsSubmitted(false);

        if (!formRef.current) return;

        try {
            await emailjs.sendForm(
                'service_pmjrswe',
                'template_y009gff',
                formRef.current,
                'HEzgO24Z_U2tcHtHa'
            );

            setIsSubmitted(true);
            setError('');
            formRef.current.reset();

            // Reset success message after 5 seconds
            setTimeout(() => {
                setIsSubmitted(false);
            }, 5000);
        } catch (err) {
            setError('Failed to send message. Please try again or email me directly.');
            setIsSubmitted(false);
            console.error('EmailJS error:', err);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <Section id="contact" className="border-t border-orange-500/10">
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
                        <h2 className="text-4xl md:text-6xl font-bold mb-6 font-heading tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-orange-100 to-amber-200">
                            Let&apos;s work<br />together.
                        </h2>
                        <p className="text-xl text-orange-200/60 leading-relaxed max-w-md">
                            Have a project in mind? I&apos;d love to hear about it. Send me a message and let&apos;s create something amazing.
                        </p>
                    </div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        variants={{
                            hidden: { opacity: 0 },
                            visible: {
                                opacity: 1,
                                transition: { staggerChildren: 0.15 }
                            }
                        }}
                        className="space-y-8"
                    >
                        <motion.div
                            variants={{
                                hidden: { opacity: 0, x: -20 },
                                visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
                            }}
                            className="flex items-start gap-4"
                        >
                            <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-white/10 flex items-center justify-center flex-shrink-0">
                                <Mail className="w-5 h-5 text-zinc-400" />
                            </div>
                            <div>
                                <h3 className="text-sm font-medium text-zinc-500 uppercase tracking-wider mb-1">Email</h3>
                                <a href={`mailto:${personalInfo.email}`} className="text-lg text-white hover:text-zinc-300 transition-colors">
                                    {personalInfo.email}
                                </a>
                            </div>
                        </motion.div>
                        <motion.div
                            variants={{
                                hidden: { opacity: 0, x: -20 },
                                visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
                            }}
                            className="flex items-start gap-4"
                        >
                            <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-white/10 flex items-center justify-center flex-shrink-0">
                                <MapPin className="w-5 h-5 text-zinc-400" />
                            </div>
                            <div>
                                <h3 className="text-sm font-medium text-zinc-500 uppercase tracking-wider mb-1">Location</h3>
                                <p className="text-lg text-white">Ahmedabad, Gujarat</p>
                            </div>
                        </motion.div>
                        <motion.div
                            variants={{
                                hidden: { opacity: 0, x: -20 },
                                visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
                            }}
                            className="flex items-start gap-4"
                        >
                            <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-white/10 flex items-center justify-center flex-shrink-0">
                                <Send className="w-5 h-5 text-zinc-400" />
                            </div>
                            <div>
                                <h3 className="text-sm font-medium text-zinc-500 uppercase tracking-wider mb-1">Contact</h3>
                                <p className="text-lg text-white">patelomok2@gmail.com</p>
                                <p className="text-lg text-white">+91 8849862758</p>
                            </div>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                        className="space-y-4"
                    >
                        <h3 className="text-sm font-medium text-zinc-500 uppercase tracking-wider">Follow Me</h3>
                        <div className="flex flex-wrap gap-3">
                            {personalInfo.socials.map((social, idx) => (
                                <motion.div
                                    key={social.name}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.4 + idx * 0.1, duration: 0.3 }}
                                >
                                    <Link
                                        href={social.href}
                                        target="_blank"
                                        className="group flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900 border border-white/10 text-sm text-zinc-300 hover:bg-zinc-800 hover:border-white/20 hover:text-white transition-all duration-300"
                                    >
                                        {social.name}
                                        <ArrowUpRight className="w-4 h-4 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>

                {/* Right Column - Form */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <form ref={formRef} onSubmit={handleSubmit} className="space-y-6 p-8 rounded-3xl bg-stone-900/50 border border-orange-500/10 backdrop-blur-sm">
                        <div suppressHydrationWarning>
                            <label htmlFor="name" className="block text-sm font-medium text-orange-200/60 mb-2">
                                Your Name
                            </label>
                            <input
                                id="name"
                                name="from_name"
                                type="text"
                                required
                                className="w-full bg-stone-950 border border-orange-500/20 rounded-xl px-4 py-4 text-orange-100 placeholder:text-orange-300/30 focus:outline-none focus:ring-2 focus:ring-orange-500/40 focus:border-transparent transition-all duration-300"
                                placeholder="John Doe"
                            />
                        </div>
                        <div suppressHydrationWarning>
                            <label htmlFor="email" className="block text-sm font-medium text-orange-200/60 mb-2">
                                Email Address
                            </label>
                            <input
                                id="email"
                                name="from_email"
                                type="email"
                                required
                                className="w-full bg-stone-950 border border-orange-500/20 rounded-xl px-4 py-4 text-orange-100 placeholder:text-orange-300/30 focus:outline-none focus:ring-2 focus:ring-orange-500/40 focus:border-transparent transition-all duration-300"
                                placeholder="john@example.com"
                            />
                        </div>
                        <div suppressHydrationWarning>
                            <label htmlFor="message" className="block text-sm font-medium text-orange-200/60 mb-2">
                                Your Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                required
                                rows={5}
                                className="w-full bg-stone-950 border border-orange-500/20 rounded-xl px-4 py-4 text-orange-100 placeholder:text-orange-300/30 focus:outline-none focus:ring-2 focus:ring-orange-500/40 focus:border-transparent transition-all duration-300 resize-none"
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
                                    <span className="w-4 h-4 border-2 border-stone-900/30 border-t-stone-900 rounded-full animate-spin" />
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
