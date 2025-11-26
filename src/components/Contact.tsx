"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Loader2 } from "lucide-react";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
        "idle"
    );

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus("success");
                setFormData({ name: "", email: "", message: "" });
            } else {
                setStatus("error");
            }
        } catch (error) {
            setStatus("error");
        }
    };

    return (
        <section id="contact" className="py-20 bg-gray-50 dark:bg-neutral-900/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
                    <p className="text-gray-600 dark:text-gray-400">
                        Have a project in mind or want to discuss data science? Let&apos;s chat.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                        <div className="space-y-6">
                            <div className="flex items-start">
                                <Mail className="w-6 h-6 text-blue-600 mt-1 mr-4" />
                                <div>
                                    <h4 className="font-medium mb-1">Email</h4>
                                    <a
                                        href="mailto:mhemanthgvp@gmail.com"
                                        className="text-gray-600 dark:text-gray-400 hover:text-blue-600"
                                    >
                                        mhemanthgvp@gmail.com
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <Phone className="w-6 h-6 text-blue-600 mt-1 mr-4" />
                                <div>
                                    <h4 className="font-medium mb-1">Phone</h4>
                                    <a
                                        href="tel:+918106438170"
                                        className="text-gray-600 dark:text-gray-400 hover:text-blue-600"
                                    >
                                        +91 8106438170
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <MapPin className="w-6 h-6 text-blue-600 mt-1 mr-4" />
                                <div>
                                    <h4 className="font-medium mb-1">Location</h4>
                                    <p className="text-gray-600 dark:text-gray-400">
                                        Hyderabad, India
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="bg-white dark:bg-neutral-900 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-neutral-800"
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label
                                    htmlFor="name"
                                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                                >
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    required
                                    value={formData.name}
                                    onChange={(e) =>
                                        setFormData({ ...formData, name: e.target.value })
                                    }
                                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                                    placeholder="Your Name"
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    required
                                    value={formData.email}
                                    onChange={(e) =>
                                        setFormData({ ...formData, email: e.target.value })
                                    }
                                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                                    placeholder="your@email.com"
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="message"
                                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                                >
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    required
                                    rows={4}
                                    value={formData.message}
                                    onChange={(e) =>
                                        setFormData({ ...formData, message: e.target.value })
                                    }
                                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all resize-none"
                                    placeholder="How can I help you?"
                                />
                            </div>
                            <button
                                type="submit"
                                disabled={status === "loading"}
                                className="w-full flex items-center justify-center px-6 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {status === "loading" ? (
                                    <Loader2 className="w-5 h-5 animate-spin" />
                                ) : (
                                    <>
                                        Send Message <Send className="ml-2 w-4 h-4" />
                                    </>
                                )}
                            </button>
                            {status === "success" && (
                                <p className="text-green-600 text-sm text-center">
                                    Message sent successfully!
                                </p>
                            )}
                            {status === "error" && (
                                <p className="text-red-600 text-sm text-center">
                                    Something went wrong. Please try again.
                                </p>
                            )}
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
