import Image from 'next/image';

interface LogoProps {
    className?: string; // Additional classes for the container
    textClassName?: string; // Classes for the text portion
    iconClassName?: string; // Classes for the icon portion
    showText?: boolean; // Whether to show the text "Reel Rapid"
}

export function Logo({
    className = "",
    textClassName = "text-xl font-bold text-foreground",
    iconClassName = "w-10 h-10 bg-gradient-to-br from-primary to-orange-600 rounded-xl flex items-center justify-center",
    showText = true
}: LogoProps) {
    return (
        <div className={`flex items-center space-x-2 ${className}`}>
            {/* 
           To use your own logo image:
           1. Add your image file (e.g., 'logo.png') to the 'public' folder
           2. Uncomment the Image component below and remove the text-based icon div
        */}

            {/* IMAGE LOGO OPTION */}
            <div className="relative w-28 h-28">
                <Image
                    src="/images/logo.png"
                    alt="Reel Rapid Agency"
                    fill
                    className="object-contain"
                />
            </div>

            {/* DEFAULT TEXT LOGO */}
            {/* <div className={iconClassName}>
                <span className="text-white font-bold text-xl">RR</span>
            </div> */}

            {/* Text removed as requested */}
        </div>
    );
}
