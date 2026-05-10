import React, { useState } from 'react';
import { cn } from '../lib/utils';

interface SafeImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackSrc?: string;
  className?: string;
}

const ARCHITECTURAL_FALLBACKS = [
  'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=1000&auto=format&fit=crop'
];

export const SafeImage: React.FC<SafeImageProps> = ({ 
  src, 
  alt, 
  fallbackSrc = ARCHITECTURAL_FALLBACKS[0],
  className,
  ...props 
}) => {
  const [currentSrc, setCurrentSrc] = useState(src);
  const [retryCount, setRetryCount] = useState(0);

  const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const img = e.currentTarget;
    
    // First retry: Try the Google Drive "u/0" fix
    if (retryCount === 0 && currentSrc?.includes('lh3.googleusercontent.com/d/')) {
      const newSrc = currentSrc.replace('lh3.googleusercontent.com/d/', 'lh3.googleusercontent.com/u/0/d/');
      setRetryCount(1);
      setCurrentSrc(newSrc);
    } 
    // Second retry: Try the thumbnail format
    else if (retryCount === 1 && currentSrc?.includes('lh3.googleusercontent.com/u/0/d/')) {
        const id = currentSrc.split('/').pop();
        if (id) {
            const newSrc = `https://drive.google.com/thumbnail?id=${id}&sz=w1000`;
            setRetryCount(2);
            setCurrentSrc(newSrc);
        } else {
            setRetryCount(3);
            setCurrentSrc(fallbackSrc);
        }
    }
    // Final fallback: Use architectural placeholder
    else if (retryCount < 3) {
      setRetryCount(3);
      setCurrentSrc(fallbackSrc);
    }

    if (props.onError) {
      props.onError(e);
    }
  };

  return (
    <img
      {...props}
      src={currentSrc}
      alt={alt}
      onError={handleError}
      referrerPolicy="no-referrer"
      className={cn("transition-opacity duration-300", !currentSrc ? "opacity-0" : "opacity-100", className)}
    />
  );
};
