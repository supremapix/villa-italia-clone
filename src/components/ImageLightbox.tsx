import { useState, useEffect, useCallback, useRef } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, X, Pause, Play } from "lucide-react";

interface ImageItem {
  src: string;
  alt: string;
  title?: string;
  description?: string;
}

interface ImageLightboxProps {
  images: ImageItem[];
  initialIndex: number;
  isOpen: boolean;
  onClose: () => void;
  autoPlay?: boolean;
  autoPlayInterval?: number;
}

const ImageLightbox = ({
  images,
  initialIndex,
  isOpen,
  onClose,
  autoPlay = true,
  autoPlayInterval = 4000
}: ImageLightboxProps) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Minimum swipe distance (in px)
  const minSwipeDistance = 50;

  useEffect(() => {
    setCurrentIndex(initialIndex);
  }, [initialIndex, isOpen]);

  const nextImage = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const prevImage = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  // Autoplay effect
  useEffect(() => {
    if (!isPlaying || !isOpen) return;

    const interval = setInterval(nextImage, autoPlayInterval);
    return () => clearInterval(interval);
  }, [isPlaying, isOpen, nextImage, autoPlayInterval]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, nextImage, prevImage, onClose]);

  // Touch handlers for swipe
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextImage();
    }
    if (isRightSwipe) {
      prevImage();
    }

    // Reset touch state
    setTouchStart(null);
    setTouchEnd(null);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  if (images.length === 0) return null;

  const currentImage = images[currentIndex];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-[95vw] w-full h-[90vh] p-0 bg-black/95 border-none">
        <div
          ref={containerRef}
          className="relative w-full h-full flex items-center justify-center"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          {/* Close button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="absolute top-4 right-4 z-50 bg-black/50 hover:bg-black/70 text-white h-10 w-10"
          >
            <X className="h-6 w-6" />
          </Button>

          {/* Play/Pause button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={togglePlayPause}
            className="absolute top-4 left-4 z-50 bg-black/50 hover:bg-black/70 text-white h-10 w-10"
          >
            {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
          </Button>

          {/* Previous button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={prevImage}
            className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-50 bg-black/50 hover:bg-black/70 text-white h-12 w-12"
          >
            <ChevronLeft className="h-8 w-8" />
          </Button>

          {/* Next button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={nextImage}
            className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-50 bg-black/50 hover:bg-black/70 text-white h-12 w-12"
          >
            <ChevronRight className="h-8 w-8" />
          </Button>

          {/* Image */}
          <img
            src={currentImage.src}
            alt={currentImage.alt}
            className="max-w-full max-h-[80vh] object-contain select-none"
            draggable={false}
          />

          {/* Info overlay */}
          {(currentImage.title || currentImage.description) && (
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-4 md:p-6">
              {currentImage.title && (
                <h3 className="text-lg md:text-2xl font-display font-bold text-white mb-1">
                  {currentImage.title}
                </h3>
              )}
              {currentImage.description && (
                <p className="text-white/90 text-sm md:text-base">
                  {currentImage.description}
                </p>
              )}
            </div>
          )}

          {/* Counter */}
          <div className="absolute bottom-4 right-4 bg-black/50 px-3 py-1 rounded-full text-white text-sm">
            {currentIndex + 1} / {images.length}
          </div>

          {/* Dots for mobile */}
          <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-1.5 md:hidden">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentIndex
                    ? "bg-white w-6 h-2"
                    : "bg-white/40 w-2 h-2"
                }`}
                aria-label={`Ir para imagem ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ImageLightbox;
