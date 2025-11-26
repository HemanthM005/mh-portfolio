"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
    {
        id: 1,
        role: "Data Scientist",
        company: "Factly Media & Research",
        period: "December 2021 – Present",
        description: [
            "Architected production-ready FastAPI application with Docker for dataset recommendations using vector similarity search.",
            "Engineered Qdrant-powered vector database for optimized information retrieval with reduced query latency.",
            "Implemented top-N filtering with cosine similarity scoring for precise recommendations.",
            "Developed AI chatbot using LangChain with LangGraph for multi-turn interactions and context maintenance.",
            "Integrated Google Cloud's Discovery Engine API for intelligent reranking, significantly improving response relevance.",
            "Created FastAPI application for comprehensive dataset validation using Great Expectations, reducing manual validation time by 70-80%.",
            "Constructed a FastAPI application incorporating ydata-profiling to generate comprehensive automated EDA summaries.",
            "Built a versatile data conversion service to transform datasets from S3 buckets into multiple formats (CSV, XLSX).",
            "Implemented Celery with Redis for efficient background processing and Flower for real-time task monitoring.",
        ],
    },
];

export default function Experience() {
    return (
        <section id="experience" className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl font-bold mb-4">Professional Experience</h2>
                    <p className="text-gray-600 dark:text-gray-400">
                        My journey in the tech industry.
                    </p>
                </motion.div>

                <div className="max-w-3xl mx-auto">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={exp.id}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative pl-8 border-l-2 border-blue-200 dark:border-blue-900 pb-12 last:pb-0"
                        >
                            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-600" />
                            <div className="mb-2">
                                <h3 className="text-xl font-bold">{exp.role}</h3>
                                <div className="flex items-center text-gray-600 dark:text-gray-400 mb-2">
                                    <Briefcase className="w-4 h-4 mr-2" />
                                    <span className="font-medium">{exp.company}</span>
                                    <span className="mx-2">•</span>
                                    <span className="text-sm">{exp.period}</span>
                                </div>
                            </div>
                            <ul className="space-y-2">
                                {exp.description.map((item, i) => (
                                    <li key={i} className="text-gray-600 dark:text-gray-300 flex items-start">
                                        <span className="mr-2 mt-1.5 w-1.5 h-1.5 bg-gray-400 rounded-full flex-shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
