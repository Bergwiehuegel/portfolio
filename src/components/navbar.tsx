import React from "react";
import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="w-full bg-gray-800 text-white">
            <div className="container mx-auto flex justify-between items-center p-4">
                {/* Logo */}
                <div className="text-lg font-bold">
                    <Link href="/">Home</Link>
                </div>
                <ul className="flex space-x-4">
                    <li>
                        <Link href="/about" className="hover:text-cyan-400">
                            About me
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact" className="hover:text-cyan-400">
                            Fun stuff
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
