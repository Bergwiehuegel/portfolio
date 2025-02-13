import React from "react";

export default function Footer() {
    return (
        <footer className="w-full bg-gray-800 text-white py-4">
            <div className="container mx-auto flex flex-col items-center text-center space-y-2 sm:space-y-0 sm:flex-row sm:justify-between">
                {/* Copyright Text */}
                <p className="text-sm">
                    &copy; {new Date().getFullYear()} MyWebsite. All rights reserved.
                </p>

                {/* Links */}
                <div className="flex space-x-4">
                    <a
                        href="https://twitter.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-cyan-400"
                    >
                        Twitter
                    </a>
                    <a
                        href="https://facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-cyan-400"
                    >
                        Facebook
                    </a>
                    <a
                        href="https://github.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-cyan-400"
                    >
                        GitHub
                    </a>
                </div>
            </div>
        </footer>
    );
}
