"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { ChevronRight } from 'lucide-react';

interface TocItem {
    level: number;
    text: string;
    slug: string;
}

interface TableOfContentsProps {
    headings: TocItem[];
}

export function TableOfContents({ headings }: TableOfContentsProps) {
    const [activeId, setActiveId] = useState<string>("");

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id);
                    }
                });
            },
            { rootMargin: "-20% 0px -35% 0px" }
        );

        headings.forEach((heading) => {
            const element = document.getElementById(heading.slug);
            if (element) {
                observer.observe(element);
            }
        });

        return () => observer.disconnect();
    }, [headings]);

    if (headings.length === 0) return null;

    return (
        <nav className="hidden lg:block sticky top-32 h-fit max-h-[calc(100vh-10rem)] overflow-y-auto pr-4">
            <h3 className="font-bold text-lg mb-4 text-foreground flex items-center gap-2">
                <span className="w-1 h-6 bg-primary rounded-full"></span>
                Contents
            </h3>
            <ul className="space-y-3 text-sm">
                {headings.map((heading) => (
                    <li
                        key={heading.slug}
                        className={cn(
                            "transition-colors duration-200",
                            heading.level === 3 ? "pl-4" : ""
                        )}
                    >
                        <Link
                            href={`#${heading.slug}`}
                            className={cn(
                                "block hover:text-primary transition-colors line-clamp-2",
                                activeId === heading.slug
                                    ? "text-primary font-medium"
                                    : "text-muted-foreground"
                            )}
                            onClick={(e) => {
                                e.preventDefault();
                                document.getElementById(heading.slug)?.scrollIntoView({
                                    behavior: "smooth",
                                });
                                setActiveId(heading.slug);
                            }}
                        >
                            {activeId === heading.slug && (
                                <ChevronRight className="inline w-3 h-3 mr-1 -ml-4" />
                            )}
                            {heading.text}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
