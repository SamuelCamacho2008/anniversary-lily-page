import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface PhotoGalleryProps {
  photos: { src: string; title?: string }[];
}

const PhotoGallery = ({ photos }: PhotoGalleryProps) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setSelectedIndex(index);
  const closeLightbox = () => setSelectedIndex(null);
  
  const goNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % photos.length);
    }
  };
  
  const goPrev = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + photos.length) % photos.length);
    }
  };

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {photos.map((photo, index) => (
          <div
            key={index}
            onClick={() => openLightbox(index)}
            className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer shadow-md border border-rose/10 hover:border-rose/40 transition-all duration-300 hover:scale-105"
          >
            <img
              src={photo.src}
              alt={photo.title || `Momento ${index + 1}`}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-rose-dark/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
              <span className="font-elegant text-sm text-primary-foreground">
                {photo.title || `Momento ${index + 1}`}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-background/95 backdrop-blur-md flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 p-2 rounded-full bg-rose/20 text-rose hover:bg-rose/30 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); goPrev(); }}
            className="absolute left-4 md:left-8 p-3 rounded-full bg-rose/20 text-rose hover:bg-rose/30 transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <img
            src={photos[selectedIndex].src}
            alt={photos[selectedIndex].title || `Momento ${selectedIndex + 1}`}
            className="max-h-[85vh] max-w-[90vw] object-contain rounded-xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />

          <button
            onClick={(e) => { e.stopPropagation(); goNext(); }}
            className="absolute right-4 md:right-8 p-3 rounded-full bg-rose/20 text-rose hover:bg-rose/30 transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
            <p className="font-elegant text-lg text-muted-foreground">
              {selectedIndex + 1} / {photos.length}
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default PhotoGallery;
