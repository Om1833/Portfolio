"use client";

import { Section } from "@/components/Section";
import { Button } from "@/components/Button";
import { motion } from "framer-motion";
import { Send, Mail, MapPin, Phone } from "lucide-react";
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

            setTimeout(() => {
                setIsSubmitted(false);
            }, 5000);
        } catch (err) {
            setError('Failed to send message. Please try again.');
            setIsSubmitted(false);
            console.error('EmailJS error:', err);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <Section id="contact">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                {/* Left Column - Info */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="space-y-8"
                >
                    <div>
                        <span className="text-sm font-medium text-purple-400 uppercase tracking-widest mb-4 block">
                            Get in Touch
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            Let's work together
                        </h2>
                        <p className="text-lg text-white/50">
                            Have a project in mind? I'd love to hear about it. Drop me a message and let's create something amazing.
                        </p>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-xl glass-purple flex items-center justify-center">
                                <Mail className="w-5 h-5 text-purple-400" />
                            </div>
                            <div>
                                <p className="text-sm text-white/40">Email</p>
                                <p className="text-white font-medium">patelomok2@gmail.com</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-xl glass-purple flex items-center justify-center">
                                <Phone className="w-5 h-5 text-purple-400" />
                            </div>
                            <div>
                                <p className="text-sm text-white/40">Phone</p>
                                <p className="text-white font-medium">+91 8849862758</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-xl glass-purple flex items-center justify-center">
                                <MapPin className="w-5 h-5 text-purple-400" />
                            </div>
                            <div>
                                <p className="text-sm text-white/40">Location</p>
                                <p className="text-white font-medium">Ahmedabad, Gujarat</p>
                            </div>
                        </div>
                    </div>

                    {/* Social Links */}
                    <div className="flex gap-3">
                        {personalInfo.socials.map((social) => (
                            <Link
                                key={social.name}
                                href={social.href}
                                target="_blank"
                                className="px-4 py-2 rounded-full glass text-white/60 text-sm font-medium hover:bg-white/10 hover:text-white transition-colors"
                            >
                                {social.name}
                            </Link>
                        ))}
                    </div>
                </motion.div>

                {/* Right Column - Form */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <form ref={formRef} onSubmit={handleSubmit} className="space-y-6 p-8 glass-card rounded-2xl">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-white/60 mb-2">
                                Your Name
                            </label>
                            <input
                                id="name"
                                name="from_name"
                                type="text"
                                required
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                                placeholder="John Doe"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-white/60 mb-2">
                                Email Address
                            </label>
                            <input
                                id="email"
                                name="from_email"
                                type="email"
                                required
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                                placeholder="john@example.com"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-white/60 mb-2">
                                Your Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                required
                                rows={5}
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-none"
                                placeholder="Tell me about your project..."
                            />
                        </div>

                        {error && (
                            <p className="text-red-400 text-sm">{error}</p>
                        )}

                        <Button
                            type="submit"
                            disabled={isSubmitting || isSubmitted}
                            variant="primary"
                            size="lg"
                            className="w-full"
                        >
                            {isSubmitting ? (
                                <span className="flex items-center gap-2">
                                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
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
