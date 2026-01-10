"use client";

import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export function CursorGlow() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isVisible, setIsVisible] = useState(false);

    // Smooth spring animation for cursor following
    const springConfig = { damping: 25, stiffness: 150, mass: 0.5 };
    const cursorX = useSpring(0, springConfig);
    const cursorY = useSpring(0, springConfig);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
            if (!isVisible) setIsVisible(true);
        };

        const handleMouseLeave = () => {
            setIsVisible(false);
        };

        const handleMouseEnter = () => {
            setIsVisible(true);
        };

        window.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseleave", handleMouseLeave);
        document.addEventListener("mouseenter", handleMouseEnter);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseleave", handleMouseLeave);
            document.removeEventListener("mouseenter", handleMouseEnter);
        };
    }, [cursorX, cursorY, isVisible]);

    return (
        <motion.div
            className="fixed pointer-events-none z-50"
            style={{
                x: cursorX,
                y: cursorY,
                translateX: "-50%",
                translateY: "-50%",
            }}
            animate={{
                opacity: isVisible ? 1 : 0,
            }}
            transition={{ duration: 0.2 }}
        >
            {/* Outer glow - larger, more diffused */}
            <div
                className="absolute rounded-full"
                style={{
                    width: "300px",
                    height: "300px",
                    left: "-150px",
                    top: "-150px",
                    background: "radial-gradient(circle, rgba(120, 119, 198, 0.08) 0%, rgba(120, 119, 198, 0.02) 40%, transparent 70%)",
                    filter: "blur(20px)",
                }}
            />
            {/* Middle glow - medium intensity */}
            <div
                className="absolute rounded-full"
                style={{
                    width: "150px",
                    height: "150px",
                    left: "-75px",
                    top: "-75px",
                    background: "radial-gradient(circle, rgba(167, 139, 250, 0.12) 0%, rgba(139, 92, 246, 0.05) 50%, transparent 70%)",
                    filter: "blur(10px)",
                }}
            />
            {/* Inner glow - bright core */}
            <div
                className="absolute rounded-full"
                style={{
                    width: "60px",
                    height: "60px",
                    left: "-30px",
                    top: "-30px",
                    background: "radial-gradient(circle, rgba(255, 255, 255, 0.15) 0%, rgba(167, 139, 250, 0.1) 40%, transparent 70%)",
                    filter: "blur(5px)",
                }}
            />
        </motion.div>
    );
}
