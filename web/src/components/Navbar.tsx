"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
];

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);

            const sections = navItems.map(item => item.href.slice(1));
            for (const section of sections.reverse()) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 150) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                    ? "bg-[#0a0a0f]/80 backdrop-blur-xl border-b border-white/5"
                    : "bg-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex items-center justify-between h-16 md:h-20">
                    {/* Logo */}
                    <Link
                        href="#home"
                        className="text-xl font-bold text-white hover:text-purple-400 transition-colors"
                    >
                        OM<span className="text-purple-500">.</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-1">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`relative px-4 py-2 text-sm font-medium transition-colors ${activeSection === item.href.slice(1)
                                        ? "text-white"
                                        : "text-white/50 hover:text-white"
                                    }`}
                            >
                                {item.name}
                                {activeSection === item.href.slice(1) && (
                                    <motion.div
                                        layoutId="activeIndicator"
                                        className="absolute bottom-0 left-4 right-4 h-0.5 bg-purple-500 rounded-full"
                                        transition={{ duration: 0.3, ease: "easeOut" }}
                                    />
                                )}
                            </Link>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <div className="hidden md:block">
                        <Link
                            href="#contact"
                            className="px-5 py-2.5 text-sm font-medium text-white bg-purple-600 hover:bg-purple-500 rounded-xl transition-colors"
                        >
                            Get in Touch
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden p-2 text-white/60 hover:text-white transition-colors"
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden bg-[#0a0a0f]/95 backdrop-blur-xl border-t border-white/5"
                    >
                        <div className="px-6 py-4 space-y-1">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${activeSection === item.href.slice(1)
                                            ? "bg-purple-500/20 text-purple-300"
                                            : "text-white/60 hover:bg-white/5 hover:text-white"
                                        }`}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
