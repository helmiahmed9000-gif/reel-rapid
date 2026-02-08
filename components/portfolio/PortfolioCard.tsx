'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { Play, Eye, Heart, X } from 'lucide-react';

interface PortfolioItem {
    id: number;
    title: string;
    category: string;
    views: string;
    likes: string;
    thumbnail: string | null;
    videoUrl?: string;
    gradient: string;
}

interface PortfolioCardProps {
    item: PortfolioItem;
}

// Helper function to extract YouTube video ID from various URL formats
function getYouTubeVideoId(url: string): string | null {
    // Handle YouTube Shorts URLs
    const shortsMatch = url.match(/youtube\.com\/shorts\/([a-zA-Z0-9_-]+)/);
    if (shortsMatch) {
        return shortsMatch[1];
    }

    // Handle regular YouTube URLs
    const regularMatch = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]+)/);
    if (regularMatch) {
        return regularMatch[1];
    }

    return null;
}

function getYouTubeThumbnail(videoId: string): string {
    return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
}

export function PortfolioCard({ item }: PortfolioCardProps) {
    const [imageError, setImageError] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const videoId = item.videoUrl ? getYouTubeVideoId(item.videoUrl) : null;
    const embedUrl = videoId ? `https://www.youtube.com/embed/${videoId}` : null;
    const thumbnailUrl = videoId ? getYouTubeThumbnail(videoId) : null;

    // Close modal on escape key
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                setIsModalOpen(false);
            }
        };

        if (isModalOpen) {
            document.addEventListener('keydown', handleEscape);
            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = 'unset';
        };
    }, [isModalOpen]);

    const handleCardClick = () => {
        if (embedUrl) {
            setIsModalOpen(true);
        }
    };

    const handleCloseModal = (e: React.MouseEvent) => {
        e.stopPropagation();
        setIsModalOpen(false);
    };

    return (
        <>
            <Card
                className="group relative overflow-hidden rounded-2xl cursor-pointer hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                onClick={handleCardClick}
            >
                {/* Video Container - 9:16 Aspect Ratio */}
                <div className="relative aspect-[9/16] overflow-hidden">
                    {/* Video Thumbnail or Gradient Background */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient}`}>
                        {/* YouTube Thumbnail for video items */}
                        {thumbnailUrl && !imageError ? (
                            <Image
                                src={thumbnailUrl}
                                alt={item.title}
                                fill
                                className="object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
                                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 16vw"
                                onError={() => setImageError(true)}
                            />
                        ) : item.thumbnail && !imageError ? (
                            <Image
                                src={item.thumbnail}
                                alt={item.title}
                                fill
                                className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 16vw"
                                onError={() => setImageError(true)}
                            />
                        ) : null}

                        {/* Placeholder Pattern - showing when no thumbnail or error */}
                        <div className={`absolute inset-0 ${(thumbnailUrl || item.thumbnail) && !imageError ? 'opacity-10' : 'opacity-20'}`}>
                            <div className="absolute inset-0" style={{
                                backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                                backgroundSize: '20px 20px'
                            }} />
                        </div>

                        {/* Play Button Overlay */}
                        <div className="absolute inset-0 flex items-center justify-center z-10">
                            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 group-hover:bg-white/30 transition-all duration-300 shadow-lg">
                                <Play className="w-8 h-8 text-white fill-white ml-1" />
                            </div>
                        </div>
                    </div>

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 z-20">
                        <h3 className="text-white font-semibold text-sm mb-1 line-clamp-2">
                            {item.title}
                        </h3>
                        <p className="text-white/70 text-xs mb-3">
                            {item.category}
                        </p>
                        <div className="flex items-center gap-4 text-white/80 text-xs">
                            <span className="flex items-center gap-1">
                                <Eye className="w-3.5 h-3.5" />
                                {item.views}
                            </span>
                            <span className="flex items-center gap-1">
                                <Heart className="w-3.5 h-3.5" />
                                {item.likes}
                            </span>
                        </div>
                    </div>

                    {/* Category Badge */}
                    <div className="absolute top-3 left-3 px-2 py-1 bg-black/50 backdrop-blur-sm rounded-full z-20 pointer-events-none">
                        <span className="text-white text-[10px] font-medium">
                            {item.category}
                        </span>
                    </div>

                    {/* Stats Badge */}
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs z-20 pointer-events-none">
                        <span className="flex items-center gap-1 bg-black/50 backdrop-blur-sm px-2 py-1 rounded-full">
                            <Eye className="w-3 h-3" />
                            {item.views}
                        </span>
                        <span className="flex items-center gap-1 bg-black/50 backdrop-blur-sm px-2 py-1 rounded-full">
                            <Heart className="w-3 h-3" />
                            {item.likes}
                        </span>
                    </div>
                </div>
            </Card>

            {/* Video Modal */}
            {isModalOpen && embedUrl && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-in fade-in duration-200"
                    onClick={handleCloseModal}
                >
                    {/* Backdrop */}
                    <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" />

                    {/* Modal Content */}
                    <div
                        className="relative z-10 w-full max-w-md animate-in zoom-in-95 duration-200"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close Button */}
                        <button
                            onClick={handleCloseModal}
                            className="absolute -top-12 right-0 p-2 text-white/80 hover:text-white transition-colors rounded-full hover:bg-white/10"
                            aria-label="Close video"
                        >
                            <X className="w-8 h-8" />
                        </button>

                        {/* Video Title */}
                        <div className="absolute -top-12 left-0 text-white">
                            <h3 className="font-semibold text-lg">{item.title}</h3>
                            <p className="text-white/60 text-sm">{item.category}</p>
                        </div>

                        {/* Video Container */}
                        <div className="relative aspect-[9/16] rounded-2xl overflow-hidden shadow-2xl bg-black">
                            <iframe
                                src={`${embedUrl}?autoplay=1&loop=1&controls=1&rel=0`}
                                title={item.title}
                                className="absolute inset-0 w-full h-full"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        </div>

                        {/* Video Stats */}
                        <div className="flex items-center justify-center gap-6 mt-4 text-white/80">
                            <span className="flex items-center gap-2">
                                <Eye className="w-5 h-5" />
                                <span className="font-medium">{item.views} views</span>
                            </span>
                            <span className="flex items-center gap-2">
                                <Heart className="w-5 h-5" />
                                <span className="font-medium">{item.likes} likes</span>
                            </span>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
