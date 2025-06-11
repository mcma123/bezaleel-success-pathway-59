"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function FloatingPaths({ position }: { position: number }) {
    const paths = Array.from({ length: 36 }, (_, i) => ({
        id: i,
        d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${
            380 - i * 5 * position
        } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
            152 - i * 5 * position
        } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
            684 - i * 5 * position
        } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
        color: `rgba(15,23,42,${0.1 + i * 0.03})`,
        width: 0.5 + i * 0.03,
    }));

    return (
        <div className="absolute inset-0 pointer-events-none">
            <svg
                className="w-full h-full text-slate-950 dark:text-white"
                viewBox="0 0 696 316"
                fill="none"
            >
                <title>Background Paths</title>
                {paths.map((path) => (
                    <motion.path
                        key={path.id}
                        d={path.d}
                        stroke="currentColor"
                        strokeWidth={path.width}
                        strokeOpacity={0.1 + path.id * 0.03}
                        initial={{ pathLength: 0.3, opacity: 0.6 }}
                        animate={{
                            pathLength: 1,
                            opacity: [0.3, 0.6, 0.3],
                            pathOffset: [0, 1, 0],
                        }}
                        transition={{
                            duration: 20 + Math.random() * 10,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "linear",
                        }}
                    />
                ))}
            </svg>
        </div>
    );
}

const TYPING_WORDS = ["Business Success", "Digital Transformation"];
const FADE_DURATION = 500; // ms for fade in/out
const DISPLAY_DURATION = 10000; // 10 seconds between changes

export function BackgroundPaths({
    title = "Background Paths",
}: {
    title?: string;
}) {
    // Fade effect state
    const [wordIndex, setWordIndex] = useState(0);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        let fadeTimeout: NodeJS.Timeout;
        let switchTimeout: NodeJS.Timeout;
        if (visible) {
            // After DISPLAY_DURATION, start fade out
            switchTimeout = setTimeout(() => setVisible(false), DISPLAY_DURATION);
        } else {
            // After fade out, switch word and fade in
            fadeTimeout = setTimeout(() => {
                setWordIndex((prev) => (prev + 1) % TYPING_WORDS.length);
                setVisible(true);
            }, FADE_DURATION);
        }
        return () => {
            clearTimeout(fadeTimeout);
            clearTimeout(switchTimeout);
        };
    }, [visible, wordIndex]);

    return (
        <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-white dark:bg-neutral-950">
            <div className="absolute inset-0">
                <FloatingPaths position={1} />
                <FloatingPaths position={-1} />
            </div>

            <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2 }}
                    className="max-w-4xl mx-auto"
                >
                    {/* Badge */}
                    <div className="inline-flex items-center px-4 py-2 bg-bezaleel-red/10 rounded-full text-bezaleel-red text-sm font-medium mb-6 animate-bounce-in">
                        <span className="w-2 h-2 bg-bezaleel-red rounded-full mr-2 animate-pulse"></span>
                        Trusted Business Partners Across Africa
                    </div>
                    {/* Main Headline */}
                    <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold mb-8 tracking-tighter text-bezaleel-dark">
                        Your Gateway to{' '}
                        <motion.span
                            key={wordIndex}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: visible ? 1 : 0 }}
                            transition={{ duration: FADE_DURATION / 1000 }}
                            className="bg-gradient-to-r from-bezaleel-red to-bezaleel-accent bg-clip-text text-transparent font-bold"
                        >
                            {TYPING_WORDS[wordIndex]}&nbsp;
                        </motion.span>
                        Across Africa
                    </h1>
                    {/* Subheadline */}
                    <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                        One-stop business consulting for South Africa, Zambia & Zimbabwe. From company registration to digital presence, we make business expansion seamless.
                    </p>
                    {/* CTA Button */}
                    <Link to="/services" className="inline-block group relative bg-gradient-to-b from-black/10 to-white/10 \
                        dark:from-white/10 dark:to-black/10 p-px rounded-2xl backdrop-blur-lg \
                        overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <Button
                            variant="ghost"
                            className="rounded-[1.15rem] px-8 py-6 text-lg font-semibold backdrop-blur-md \
                            bg-white/95 hover:bg-white/100 dark:bg-black/95 dark:hover:bg-black/100 \
                            text-black dark:text-white transition-all duration-300 \
                            group-hover:-translate-y-0.5 border border-black/10 dark:border-white/10\n                            hover:shadow-md dark:hover:shadow-neutral-800/50"
                        >
                            <span className="opacity-90 group-hover:opacity-100 transition-opacity">
                                Start Your Business Journey
                            </span>
                            <span
                                className="ml-3 opacity-70 group-hover:opacity-100 group-hover:translate-x-1.5 \
                                transition-all duration-300"
                            >
                                →
                            </span>
                        </Button>
                    </Link>
                </motion.div>
            </div>
        </div>
    );
} 