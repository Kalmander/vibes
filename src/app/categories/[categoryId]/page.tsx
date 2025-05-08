import Link from "next/link";
import { notFound } from "next/navigation";

const categories = [
    { id: "general", name: "General Discussion" },
    { id: "announcements", name: "Announcements" },
    { id: "support", name: "Support" },
    { id: "off-topic", name: "Off-topic" },
];

const threads = [
    { id: "1", categoryId: "general", title: "Welcome to the forum!", author: "Admin", replies: 3 },
    { id: "2", categoryId: "general", title: "Introduce yourself", author: "User123", replies: 7 },
    { id: "3", categoryId: "support", title: "How do I reset my password?", author: "HelpMe", replies: 2 },
    { id: "4", categoryId: "announcements", title: "Forum rules", author: "Admin", replies: 0 },
];

export default function CategoryPage({ params }: { params: { categoryId: string } }) {
    const category = categories.find((c) => c.id === params.categoryId);
    if (!category) return notFound();
    const categoryThreads = threads.filter((t) => t.categoryId === params.categoryId);

    return (
        <div className="min-h-screen p-8 md:p-16 bg-gray-50 dark:bg-gray-900">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">
                {category.name}
            </h2>
            <div className="max-w-2xl mx-auto grid gap-6">
                {categoryThreads.length === 0 ? (
                    <div className="text-gray-600 dark:text-gray-300 text-center">No threads yet.</div>
                ) : (
                    categoryThreads.map((thread) => (
                        <Link
                            key={thread.id}
                            href={`/thread/${thread.id}`}
                            className="block p-6 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition border border-gray-200 dark:border-gray-700"
                        >
                            <div className="text-lg font-semibold text-gray-900 dark:text-white">{thread.title}</div>
                            <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                                By {thread.author} • {thread.replies} replies
                            </div>
                        </Link>
                    ))
                )}
            </div>
            <div className="max-w-2xl mx-auto mt-8 text-right">
                <Link
                    href="/new-thread"
                    className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                >
                    + New Thread
                </Link>
            </div>
        </div>
    );
} 