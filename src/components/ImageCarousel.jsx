import React, { useState, useEffect, useCallback, memo } from 'react';
import { AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CarouselImage from './CarouselImage';
import CarouselDots from './CarouselDots';
import { preloadImages } from '../utils/imageLoader';

const SLIDE_DURATION = 5000;
const LOADING_TIMEOUT = 5000;

const ImageCarousel = memo(({ images, title }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [loadingError, setLoadingError] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: false
  });

  useEffect(() => {
    let mounted = true;
    let timeoutId;

    const loadImages = async () => {
      try {
        const timeoutPromise = new Promise((_, reject) => {
          timeoutId = setTimeout(() => {
            reject(new Error('Loading timeout'));
          }, LOADING_TIMEOUT);
        });

        await Promise.race([
          preloadImages(images),
          timeoutPromise
        ]);

        if (mounted) {
          setIsLoaded(true);
          setLoadingError(false);
        }
      } catch (error) {
        console.error('Failed to load images:', error);
        if (mounted) {
          setLoadingError(true);
          setIsLoaded(true);
        }
      } finally {
        clearTimeout(timeoutId);
      }
    };

    loadImages();

    return () => {
      mounted = false;
      clearTimeout(timeoutId);
    };
  }, [images]);

  // Reset to first image when not in view
  useEffect(() => {
    if (!inView) {
      setCurrentImage(0);
      setDirection(0);
    }
  }, [inView]);

  useEffect(() => {
    if (!isLoaded || loadingError || !inView) return;

    const intervalId = setInterval(() => {
      setDirection(1);
      setCurrentImage(prev => (prev + 1) % images.length);
    }, SLIDE_DURATION);

    return () => clearInterval(intervalId);
  }, [isLoaded, loadingError, images.length, inView]);

  const handleDotClick = useCallback((index) => {
    setDirection(index > currentImage ? 1 : -1);
    setCurrentImage(index);
  }, [currentImage]);

  if (!isLoaded || loadingError) {
    return (
      <div className="relative aspect-video bg-gray-100 dark:bg-gray-900 rounded-t-xl">
        <div className="absolute inset-0 flex items-center justify-center">
          {loadingError ? (
            <p className="text-gray-500 dark:text-gray-400">
              Failed to load images
            </p>
          ) : (
            <div className="w-full h-full bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-800 dark:to-gray-700 animate-pulse" />
          )}
        </div>
      </div>
    );
  }

  return (
    <div 
      ref={ref}
      className="relative aspect-video overflow-hidden bg-gray-100 dark:bg-gray-900 rounded-t-xl"
    >
      <AnimatePresence initial={false} mode="wait">
        <CarouselImage
          key={currentImage}
          src={images[currentImage]}
          alt={`${title} screenshot ${currentImage + 1}`}
          direction={direction}
          isActive={currentImage === 0}
        />
      </AnimatePresence>

      <CarouselDots
        total={images.length}
        current={currentImage}
        onChange={handleDotClick}
      />
    </div>
  );
});

ImageCarousel.displayName = 'ImageCarousel';

export default ImageCarousel;
