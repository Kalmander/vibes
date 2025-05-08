import Link from "next/link";

const categories = [
    { id: "general", name: "General Discussion", description: "Talk about anything and everything." },
    { id: "announcements", name: "Announcements", description: "Official news and updates." },
    { id: "support", name: "Support", description: "Get help and support here." },
    { id: "off-topic", name: "Off-topic", description: "Non-forum related discussions." },
];

export default function CategoriesPage() {
    return (
        <div className="min-h-screen p-8 md:p-16 bg-gray-50 dark:bg-gray-900">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">Categories</h2>
            <div className="max-w-2xl mx-auto grid gap-6">
                {categories.map((cat) => (
                    <Link
                        key={cat.id}
                        href={`/categories/${cat.id}`}
                        className="block p-6 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition border border-gray-200 dark:border-gray-700"
                    >
                        <div className="text-xl font-semibold text-gray-900 dark:text-white">{cat.name}</div>
                        <div className="text-gray-600 dark:text-gray-300 mt-1">{cat.description}</div>
                    </Link>
                ))}
            </div>
        </div>
    );
} 