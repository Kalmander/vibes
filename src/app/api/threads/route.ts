import { NextResponse } from 'next/server';

// This would typically come from a database
let threads = [
    { id: "1", categoryId: "general", title: "Welcome to the forum!", author: "Admin", replies: 3 },
    { id: "2", categoryId: "general", title: "Introduce yourself", author: "User123", replies: 7 },
    { id: "3", categoryId: "support", title: "How do I reset my password?", author: "HelpMe", replies: 2 },
    { id: "4", categoryId: "announcements", title: "Forum rules", author: "Admin", replies: 0 },
];

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { title, category, content } = body;

        // Validate input
        if (!title || !category || !content) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        // Create new thread
        const newThread = {
            id: (threads.length + 1).toString(),
            categoryId: category,
            title,
            author: "Anonymous", // This would typically come from the authenticated user
            replies: 0,
            content,
            createdAt: new Date().toISOString(),
        };

        // In a real application, this would be saved to a database
        threads.push(newThread);

        return NextResponse.json(newThread, { status: 201 });
    } catch (error) {
        console.error('Error creating thread:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
} 