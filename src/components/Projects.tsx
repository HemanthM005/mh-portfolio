"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Github, ExternalLink, ArrowRight } from "lucide-react";

interface Project {
    id: number;
    title: string;
    shortDescription: string;
    fullDescription: string[];
    techStack: string[];
    githubUrl?: string;
    demoUrl?: string;
}

const projects: Project[] = [
    {
        id: 1,
        title: "Vector Similarity Search System",
        shortDescription:
            "Production-ready FastAPI application for intelligent dataset recommendations using vector similarity search.",
        fullDescription: [
            "Architected and deployed a production-ready FastAPI application containerized with Docker that delivers intelligent dataset recommendations using vector similarity search.",
            "Engineered a Qdrant-powered vector database that indexes dataset metadata for optimized information retrieval and reduced query latency.",
            "Implemented flexible top-N filtering with cosine similarity scoring, enabling precise relevance-based dataset recommendations for users.",
            "Created performance metrics to evaluate and continuously improve search result quality.",
        ],
        techStack: ["FastAPI", "Docker", "Qdrant", "Python", "Vector Search"],
        githubUrl: "https://github.com",
    },
    {
        id: 2,
        title: "AI-Powered Public Information Chatbot",
        shortDescription:
            "Advanced AI chatbot for public information access using LangChain and Google Cloud's Discovery Engine.",
        fullDescription: [
            "Spearheaded development of an advanced FastAPI-based AI chatbot for public information access using LangChain for language model orchestration.",
            "Designed complex conversational workflows with LangGraph to handle multi-turn interactions and maintain context integrity.",
            "Implemented Qdrant vector database to store and efficiently retrieve embeddings of public datasets, enabling semantic search capabilities.",
            "Integrated Google Cloud's Discovery Engine API for intelligent reranking of search results, significantly improving response relevance and accuracy.",
        ],
        techStack: [
            "LangChain",
            "LangGraph",
            "FastAPI",
            "Qdrant",
            "GCP Discovery Engine",
        ],
        githubUrl: "https://github.com",
    },
    {
        id: 3,
        title: "Automated Data Validation Framework",
        shortDescription:
            "Comprehensive dataset validation system using Great Expectations reducing manual time by 70-80%.",
        fullDescription: [
            "Delivered a FastAPI application for comprehensive dataset validation using Great Expectations with customized validation rules.",
            "Developed a flexible ingestion system supporting dynamic uploads from both S3 buckets and local storage.",
            "Created automated validation pipelines to detect and flag whitespace issues, duplicates, and unwanted symbols.",
            "Reduced manual data validation time by 70-80%, dramatically increasing team productivity.",
        ],
        techStack: ["FastAPI", "Great Expectations", "S3", "Python"],
        githubUrl: "https://github.com",
    },
    {
        id: 4,
        title: "Automated EDA Pipeline",
        shortDescription:
            "Automated Exploratory Data Analysis pipeline using ydata-profiling and Celery.",
        fullDescription: [
            "Constructed a FastAPI application incorporating ydata-profiling to generate comprehensive automated EDA summaries.",
            "Built a versatile data conversion service to transform datasets from S3 buckets into multiple formats (CSV, XLSX, PARQUET).",
            "Implemented Celery with Redis for efficient background task processing and Flower for real-time task queue monitoring.",
            "Optimized processing pipeline to handle large datasets while maintaining system responsiveness.",
        ],
        techStack: ["FastAPI", "Celery", "Redis", "ydata-profiling", "S3"],
        githubUrl: "https://github.com",
    },
    {
        id: 5,
        title: "Web Scraping Infrastructure",
        shortDescription:
            "Sophisticated web scraping pipelines using Scrapy, Selenium, and Playwright for large-scale data extraction.",
        fullDescription: [
            "Developed and maintained sophisticated web scraping pipelines using Scrapy, Selenium, and Playwright to extract data from complex, dynamic websites.",
            "Extracted large-scale datasets from government portals, financial platforms, and regulatory sites, successfully bypassing anti-scraping measures.",
            "Implemented concurrent requests, IP rotation, and session handling to optimize scraper efficiency and reliability.",
            "Created automated data cleaning and preprocessing workflows using pandas and PyArrow to ensure consistency and accuracy.",
        ],
        techStack: ["Scrapy", "Selenium", "Playwright", "Pandas", "MongoDB"],
        githubUrl: "https://github.com",
    },
];

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    return (
        <section id="projects" className="py-20 bg-gray-50 dark:bg-neutral-900/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
                    <p className="text-gray-600 dark:text-gray-400">
                        A selection of my work in AI, Data Engineering, and Web Development.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white dark:bg-neutral-900 rounded-2xl shadow-sm border border-gray-100 dark:border-neutral-800 overflow-hidden hover:shadow-md transition-shadow flex flex-col"
                        >
                            <div className="p-6 flex-1 flex flex-col">
                                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                                <p className="text-gray-600 dark:text-gray-400 mb-4 flex-1">
                                    {project.shortDescription}
                                </p>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.techStack.slice(0, 3).map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-2 py-1 text-xs bg-blue-50 dark:bg-blue-900/20 text-blue-600 rounded-md"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                    {project.techStack.length > 3 && (
                                        <span className="px-2 py-1 text-xs bg-gray-100 dark:bg-neutral-800 text-gray-500 rounded-md">
                                            +{project.techStack.length - 3}
                                        </span>
                                    )}
                                </div>
                                <button
                                    onClick={() => setSelectedProject(project)}
                                    className="inline-flex items-center text-blue-600 font-medium hover:underline mt-auto"
                                >
                                    Learn more <ArrowRight className="ml-1 h-4 w-4" />
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
                        onClick={() => setSelectedProject(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-white dark:bg-neutral-900 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative"
                        >
                            <button
                                onClick={() => setSelectedProject(null)}
                                className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-neutral-800 transition-colors"
                            >
                                <X className="h-6 w-6" />
                            </button>

                            <div className="p-8">
                                <h3 className="text-2xl font-bold mb-4">
                                    {selectedProject.title}
                                </h3>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {selectedProject.techStack.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-3 py-1 text-sm bg-blue-50 dark:bg-blue-900/20 text-blue-600 rounded-full"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="space-y-4 mb-8">
                                    {selectedProject.fullDescription.map((desc, i) => (
                                        <p key={i} className="text-gray-600 dark:text-gray-300">
                                            • {desc}
                                        </p>
                                    ))}
                                </div>

                                <div className="flex gap-4">
                                    {selectedProject.githubUrl && (
                                        <a
                                            href={selectedProject.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center px-4 py-2 rounded-lg bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-medium hover:opacity-90 transition-opacity"
                                        >
                                            <Github className="mr-2 h-4 w-4" />
                                            View Code
                                        </a>
                                    )}
                                    {selectedProject.demoUrl && (
                                        <a
                                            href={selectedProject.demoUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-neutral-800 transition-colors"
                                        >
                                            <ExternalLink className="mr-2 h-4 w-4" />
                                            Live Demo
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
