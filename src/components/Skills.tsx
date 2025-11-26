"use client";

import { motion } from "framer-motion";
import {
    Code2,
    Brain,
    Globe,
    Database,
    Server,
    BarChart,
    Terminal,
} from "lucide-react";

const skills = [
    {
        category: "Programming Languages",
        icon: <Code2 className="w-6 h-6" />,
        items: ["Python", "R", "SQL"],
    },
    {
        category: "AI & Machine Learning",
        icon: <Brain className="w-6 h-6" />,
        items: [
            "LangChain AI",
            "Vector Embeddings",
            "Qdrant",
            "Machine Learning",
            "NLP",
        ],
    },
    {
        category: "Web Development",
        icon: <Globe className="w-6 h-6" />,
        items: ["FastAPI", "API Development", "Microservices"],
    },
    {
        category: "Web Scraping",
        icon: <Terminal className="w-6 h-6" />,
        items: ["Scrapy", "Selenium", "Playwright", "BeautifulSoup"],
    },
    {
        category: "Data Management",
        icon: <Database className="w-6 h-6" />,
        items: ["MongoDB", "PostgreSQL", "DuckDB", "S3", "Data Validation"],
    },
    {
        category: "DevOps & Tooling",
        icon: <Server className="w-6 h-6" />,
        items: ["Docker", "Celery", "Redis", "Hera Workflows", "GCP"],
    },
    {
        category: "Data Visualization",
        icon: <BarChart className="w-6 h-6" />,
        items: ["Tableau", "MS Excel (Advanced)"],
    },
];

export default function Skills() {
    return (
        <section id="skills" className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl font-bold mb-4">Skills & Expertise</h2>
                    <p className="text-gray-600 dark:text-gray-400">
                        A comprehensive toolkit for building data-driven solutions.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill.category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white dark:bg-neutral-900 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-neutral-800 hover:shadow-md transition-shadow"
                        >
                            <div className="flex items-center gap-4 mb-4">
                                <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg text-blue-600">
                                    {skill.icon}
                                </div>
                                <h3 className="font-semibold text-lg">{skill.category}</h3>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {skill.items.map((item) => (
                                    <span
                                        key={item}
                                        className="px-3 py-1 text-sm bg-gray-100 dark:bg-neutral-800 rounded-full text-gray-700 dark:text-gray-300"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
