'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const categories = [
    { id: "general", name: "General Discussion" },
    { id: "announcements", name: "Announcements" },
    { id: "support", name: "Support" },
    { id: "off-topic", name: "Off-topic" },
];

export default function NewThreadPage() {
    const router = useRouter();
    const [formData, setFormData] = useState({
        title: '',
        category: 'general',
        content: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setIsSubmitting(true);

        try {
            // TODO: Replace with actual API call
            const response = await fetch('/api/threads', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('Failed to create thread');
            }

            const data = await response.json();
            router.push(`/thread/${data.id}`);
        } catch (err) {
            setError('Failed to create thread. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    return (
        <div className="min-h-screen p-8 md:p-16 bg-gray-50 dark:bg-gray-900">
            <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-lg p-8 border border-gray-200 dark:border-gray-700">
                <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Create New Thread</h2>
                {error && (
                    <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
                        {error}
                    </div>
                )}
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="title" className="block text-gray-700 dark:text-gray-200 mb-1">Title</label>
                        <input
                            id="title"
                            name="title"
                            type="text"
                            required
                            minLength={3}
                            maxLength={100}
                            value={formData.title}
                            onChange={handleChange}
                            className="w-full p-2 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                            placeholder="Thread title"
                        />
                    </div>
                    <div>
                        <label htmlFor="category" className="block text-gray-700 dark:text-gray-200 mb-1">Category</label>
                        <select
                            id="category"
                            name="category"
                            required
                            value={formData.category}
                            onChange={handleChange}
                            className="w-full p-2 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                        >
                            {categories.map((cat) => (
                                <option key={cat.id} value={cat.id}>{cat.name}</option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label htmlFor="content" className="block text-gray-700 dark:text-gray-200 mb-1">Content</label>
                        <textarea
                            id="content"
                            name="content"
                            required
                            minLength={10}
                            value={formData.content}
                            onChange={handleChange}
                            className="w-full p-2 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                            rows={5}
                            placeholder="Write your post..."
                        />
                    </div>
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                            }`}
                    >
                        {isSubmitting ? 'Creating...' : 'Create Thread'}
                    </button>
                </form>
            </div>
        </div>
    );
} 