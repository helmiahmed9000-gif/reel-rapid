import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { Link2, Linkedin, Twitter } from "lucide-react";

interface AuthorBioProps {
    name: string;
    role: string;
    bio: string;
    avatarUrl?: string;
    socials?: {
        twitter?: string;
        linkedin?: string;
        website?: string;
    };
}

export function AuthorBio({ name, role, bio, avatarUrl, socials }: AuthorBioProps) {
    const initials = name
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase()
        .slice(0, 2);

    return (
        <Card className="p-8 mt-12 bg-secondary/30 border-none">
            <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
                <Avatar className="w-20 h-20 border-2 border-background shadow-lg">
                    {avatarUrl && <AvatarImage src={avatarUrl} alt={name} />}
                    <AvatarFallback className="bg-primary text-primary-foreground text-xl font-bold">
                        {initials}
                    </AvatarFallback>
                </Avatar>

                <div className="flex-1 space-y-2">
                    <div>
                        <h3 className="text-xl font-bold text-foreground">{name}</h3>
                        <p className="text-sm font-medium text-primary">{role}</p>
                    </div>

                    <p className="text-muted-foreground leading-relaxed">
                        {bio}
                    </p>

                    {(socials?.twitter || socials?.linkedin || socials?.website) && (
                        <div className="flex gap-4 pt-2">
                            {socials.twitter && (
                                <a
                                    href={socials.twitter}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-muted-foreground hover:text-primary transition-colors"
                                    aria-label="Twitter"
                                >
                                    <Twitter className="w-5 h-5" />
                                </a>
                            )}
                            {socials.linkedin && (
                                <a
                                    href={socials.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-muted-foreground hover:text-primary transition-colors"
                                    aria-label="LinkedIn"
                                >
                                    <Linkedin className="w-5 h-5" />
                                </a>
                            )}
                            {socials.website && (
                                <a
                                    href={socials.website}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-muted-foreground hover:text-primary transition-colors"
                                    aria-label="Website"
                                >
                                    <Link2 className="w-5 h-5" />
                                </a>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </Card>
    );
}
