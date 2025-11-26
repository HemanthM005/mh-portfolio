import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-white dark:bg-neutral-950 border-t py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-center md:text-left">
                    <p className="text-sm text-gray-500">
                        © {new Date().getFullYear()} Hemanth Manikala. All rights reserved.
                    </p>
                </div>
                <div className="flex space-x-6">
                    <a
                        href="https://github.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                    >
                        <Github className="h-5 w-5" />
                    </a>
                    <a
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-blue-600 transition-colors"
                    >
                        <Linkedin className="h-5 w-5" />
                    </a>
                    <a
                        href="mailto:mhemanthgvp@gmail.com"
                        className="text-gray-400 hover:text-red-500 transition-colors"
                    >
                        <Mail className="h-5 w-5" />
                    </a>
                </div>
            </div>
        </footer>
    );
}
