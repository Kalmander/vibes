import { notFound } from "next/navigation";

const threads = [
    { id: "1", categoryId: "general", title: "Welcome to the forum!", author: "Admin" },
    { id: "2", categoryId: "general", title: "Introduce yourself", author: "User123" },
    { id: "3", categoryId: "support", title: "How do I reset my password?", author: "HelpMe" },
    { id: "4", categoryId: "announcements", title: "Forum rules", author: "Admin" },
];

const posts = [
    { id: "p1", threadId: "1", author: "Admin", content: "Welcome everyone! Feel free to start a discussion." },
    { id: "p2", threadId: "1", author: "User123", content: "Thanks for setting this up!" },
    { id: "p3", threadId: "1", author: "AnotherUser", content: "Excited to be here." },
    { id: "p4", threadId: "2", author: "User123", content: "Hi, I'm User123. Nice to meet you all!" },
];

export default function ThreadPage({ params }: { params: { threadId: string } }) {
    const thread = threads.find((t) => t.id === params.threadId);
    if (!thread) return notFound();
    const threadPosts = posts.filter((p) => p.threadId === params.threadId);

    return (
        <div className="min-h-screen p-8 md:p-16 bg-gray-50 dark:bg-gray-900">
            <div className="max-w-2xl mx-auto">
                <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">{thread.title}</h2>
                <div className="text-gray-600 dark:text-gray-300 mb-8">By {thread.author}</div>
                <div className="space-y-6 mb-8">
                    {threadPosts.length === 0 ? (
                        <div className="text-gray-500 dark:text-gray-400">No replies yet.</div>
                    ) : (
                        threadPosts.map((post) => (
                            <div key={post.id} className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
                                <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">{post.author}</div>
                                <div className="text-gray-900 dark:text-white">{post.content}</div>
                            </div>
                        ))
                    )}
                </div>
                <form className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
                    <textarea
                        className="w-full p-2 rounded border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white mb-2"
                        rows={3}
                        placeholder="Write a reply..."
                        disabled
                    />
                    <button
                        type="submit"
                        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition opacity-50 cursor-not-allowed"
                        disabled
                    >
                        Reply (coming soon)
                    </button>
                </form>
            </div>
        </div>
    );
} 