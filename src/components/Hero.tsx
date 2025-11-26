"use client";

import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, FileText } from "lucide-react";
import Link from "next/link";

export default function Hero() {
    return (
        <section
            id="home"
            className="min-h-[calc(100vh-4rem)] flex items-center justify-center py-20"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12">
                <div className="flex-1 text-center md:text-left">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-sm uppercase tracking-wider text-blue-600 font-semibold mb-4">
                            Data Scientist & AI Engineer
                        </h2>
                        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
                            Hi, I&apos;m <span className="text-blue-600">Manikala Hemanth</span>
                        </h1>
                        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto md:mx-0">
                            I build AI-powered applications, vector search systems, and robust data
                            pipelines. Passionate about turning complex data into actionable
                            insights.
                        </p>
                        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                            <Link
                                href="#projects"
                                className="inline-flex items-center px-6 py-3 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors"
                            >
                                View Projects <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                            <Link
                                href="#contact"
                                className="inline-flex items-center px-6 py-3 rounded-full border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-neutral-900 transition-colors"
                            >
                                Contact Me
                            </Link>
                            <div className="flex items-center gap-4 ml-4">
                                <a
                                    href="https://github.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors"
                                >
                                    <Github className="h-6 w-6" />
                                </a>
                                <a
                                    href="https://linkedin.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-500 hover:text-blue-600 transition-colors"
                                >
                                    <Linkedin className="h-6 w-6" />
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>
                <div className="flex-1 relative">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="relative w-72 h-72 md:w-96 md:h-96 mx-auto"
                    >
                        <div className="absolute inset-0 bg-blue-100 dark:bg-blue-900/20 rounded-full blur-3xl opacity-50 animate-pulse" />
                        <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white dark:border-neutral-800 shadow-2xl bg-gray-100 flex items-center justify-center">
                            {/* Placeholder for profile image */}
                            <span className="text-gray-400 text-6xl">HM</span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
