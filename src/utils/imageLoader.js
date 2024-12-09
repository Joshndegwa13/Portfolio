export const preloadImage = (src) => {
  return new Promise((resolve, reject) => {
    if (!src) {
      reject(new Error('Invalid image source'));
      return;
    }

    const img = new Image();
    let timeoutId;

    const cleanup = () => {
      clearTimeout(timeoutId);
      img.onload = null;
      img.onerror = null;
    };

    img.onload = () => {
      cleanup();
      resolve(src);
    };

    img.onerror = () => {
      cleanup();
      reject(new Error(`Failed to load image: ${src}`));
    };

    timeoutId = setTimeout(() => {
      cleanup();
      reject(new Error(`Timeout loading image: ${src}`));
    }, 15000); // Increased timeout for slower connections

    if ('connection' in navigator) {
      if (navigator.connection.saveData) {
        img.loading = 'lazy';
      }
    }

    if ('requestIdleCallback' in window) {
      requestIdleCallback(() => {
        img.src = src;
      });
    } else {
      img.src = src;
    }

    if (img.complete) {
      cleanup();
      resolve(src);
    }
  });
};

export const preloadImages = async (images, priority = false) => {
  if (!Array.isArray(images) || images.length === 0) {
    console.warn('No images to preload');
    return false;
  }

  try {
    const uniqueImages = [...new Set(images)].filter(Boolean);
    
    // Prioritize first image for immediate loading
    if (priority && uniqueImages.length > 0) {
      await preloadImage(uniqueImages[0]);
    }

    // Load remaining images in parallel
    const remainingImages = priority ? uniqueImages.slice(1) : uniqueImages;
    const results = await Promise.allSettled(remainingImages.map(preloadImage));
    
    const failedImages = results
      .filter(result => result.status === 'rejected')
      .map(result => result.reason);

    if (failedImages.length > 0) {
      console.warn('Some images failed to load:', failedImages);
    }

    return results.some(result => result.status === 'fulfilled');
  } catch (error) {
    console.error('Image preloading failed:', error);
    return false;
  }
};

// Cache for storing preloaded images
const imageCache = new Map();

export const getCachedImage = (src) => {
  return imageCache.get(src);
};

export const cacheImage = (src, img) => {
  imageCache.set(src, img);
};

// Clear cache when memory is under pressure
if ('onmemorywarning' in window) {
  window.addEventListener('memorywarning', () => {
    imageCache.clear();
  });
}