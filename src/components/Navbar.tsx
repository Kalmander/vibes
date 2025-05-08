import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="bg-white dark:bg-gray-800 shadow mb-8">
            <div className="max-w-4xl mx-auto px-4 py-3 flex justify-between items-center">
                <div className="flex items-center space-x-4">
                    <Link href="/" className="text-xl font-bold text-gray-900 dark:text-white">Völuspá</Link>
                    <Link href="/categories" className="text-gray-700 dark:text-gray-200 hover:underline">Categories</Link>
                </div>
                <div>
                    <Link href="/profile" className="text-gray-700 dark:text-gray-200 hover:underline">Profile</Link>
                </div>
            </div>
        </nav>
    );
} 