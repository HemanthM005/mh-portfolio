"use client";

import { motion } from "framer-motion";

export default function About() {
    return (
        <section id="about" className="py-20 bg-gray-50 dark:bg-neutral-900/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="max-w-3xl mx-auto text-center"
                >
                    <h2 className="text-3xl font-bold mb-8">About Me</h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                        Experienced Data Scientist with expertise in building AI-powered
                        applications, vector similarity search systems, and data validation
                        frameworks. Skilled in developing production-grade solutions using
                        FastAPI, Docker, and cloud technologies. Adept at implementing ML
                        workflows, web scraping automation, and mentoring junior team members.
                    </p>
                    <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                        I have a proven track record of architecting scalable backend systems
                        and delivering intelligent data solutions in fast-paced startup
                        environments. My work spans across Natural Language Processing (NLP),
                        Information Retrieval, and Data Engineering.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
