import Link from "next/link";
import { Github, Linkedin, Dribbble, Twitter } from "lucide-react";

const socials = [
    { name: "GitHub", href: "https://github.com", icon: Github },
    { name: "LinkedIn", href: "https://linkedin.com", icon: Linkedin },
    { name: "Dribbble", href: "https://dribbble.com", icon: Dribbble },
    { name: "Twitter", href: "https://twitter.com", icon: Twitter },
];

const navLinks = [
    { name: "Projects", href: "/projects" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
];

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full border-t border-white/5 py-16 relative overflow-hidden">
            {/* Subtle gradient glow */}
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 to-transparent pointer-events-none" />

            <div className="mx-auto max-w-7xl px-6 md:px-12 relative z-10">
                <div className="grid md:grid-cols-3 gap-12 mb-16">
                    {/* Brand */}
                    <div className="space-y-4">
                        <Link href="/" className="text-2xl font-bold tracking-tight">
                            Patel Om
                        </Link>
                        <p className="text-sm text-zinc-500 leading-relaxed max-w-xs">
                            UI/UX & Graphic Designer crafting digital experiences that matter.
                        </p>
                    </div>

                    {/* Navigation */}
                    <div className="space-y-4">
                        <h4 className="text-sm font-medium text-zinc-500 uppercase tracking-wider">Navigation</h4>
                        <nav className="flex flex-col gap-3">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="text-zinc-400 hover:text-white transition-colors text-sm w-fit"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </nav>
                    </div>

                    {/* Socials */}
                    <div className="space-y-4">
                        <h4 className="text-sm font-medium text-zinc-500 uppercase tracking-wider">Connect</h4>
                        <div className="flex items-center gap-4">
                            {socials.map((social) => (
                                <Link
                                    key={social.name}
                                    href={social.href}
                                    target="_blank"
                                    className="w-10 h-10 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-800 hover:border-white/20 transition-all duration-300"
                                >
                                    <social.icon size={18} />
                                    <span className="sr-only">{social.name}</span>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-zinc-600">
                        © {currentYear} Patel Om. All rights reserved.
                    </p>
                    <p className="text-xs text-zinc-600">
                        Built with Next.js & Three.js
                    </p>
                </div>
            </div>
        </footer>
    );
}
