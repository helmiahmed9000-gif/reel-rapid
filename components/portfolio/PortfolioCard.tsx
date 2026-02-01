'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { Play, Eye, Heart } from 'lucide-react';

interface PortfolioItem {
    id: number;
    title: string;
    category: string;
    views: string;
    likes: string;
    thumbnail: string | null;
    gradient: string;
}

interface PortfolioCardProps {
    item: PortfolioItem;
}

export function PortfolioCard({ item }: PortfolioCardProps) {
    const [imageError, setImageError] = useState(false);

    return (
        <Card
            className="group relative overflow-hidden rounded-2xl cursor-pointer hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
        >
            {/* Video Container - 9:16 Aspect Ratio */}
            <div className="relative aspect-[9/16] overflow-hidden">
                {/* Thumbnail or Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient}`}>
                    {item.thumbnail && !imageError && (
                        <Image
                            src={item.thumbnail}
                            alt={item.title}
                            fill
                            className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 16vw"
                            onError={() => setImageError(true)}
                        />
                    )}

                    {/* Placeholder Pattern - showing when no thumbnail or error */}
                    <div className={`absolute inset-0 ${item.thumbnail && !imageError ? 'opacity-10' : 'opacity-20'}`}>
                        <div className="absolute inset-0" style={{
                            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                            backgroundSize: '20px 20px'
                        }} />
                    </div>

                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center z-10">
                        <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 group-hover:bg-white/30 transition-all duration-300">
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
                <div className="absolute top-3 left-3 px-2 py-1 bg-black/50 backdrop-blur-sm rounded-full z-20">
                    <span className="text-white text-[10px] font-medium">
                        {item.category}
                    </span>
                </div>

                {/* Stats Badge */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs z-20">
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
    );
}
