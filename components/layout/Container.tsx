import { cn } from '@/lib/utils';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  as?: 'div' | 'section' | 'article' | 'header' | 'footer' | 'main';
}

/**
 * Container component for the 1080px boxed layout
 * Constrains content to max-width of 1080px and centers it
 * Adds responsive horizontal padding
 */
export function Container({ 
  children, 
  className = '', 
  as: Component = 'div' 
}: ContainerProps) {
  return (
    <Component className={cn(
      'w-full max-w-[1080px] mx-auto px-4 md:px-6 lg:px-8',
      className
    )}>
      {children}
    </Component>
  );
}
