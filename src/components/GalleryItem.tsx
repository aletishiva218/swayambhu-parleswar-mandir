
import React, { useState } from 'react';
import { X } from 'lucide-react';

interface GalleryItemProps {
  imageUrl: string;
  alt: string;
  category: string;
}

const GalleryItem = ({ imageUrl, alt, category }: GalleryItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div 
        className="gallery-item card-hover cursor-pointer" 
        onClick={() => setIsOpen(true)}
      >
        <img 
          src={imageUrl} 
          alt={alt} 
          className="w-full h-64 object-cover"
        />
        <div className="p-2 bg-temple-gold bg-opacity-80 text-temple-dark text-sm font-medium">
          {category}
        </div>
      </div>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4" onClick={() => setIsOpen(false)}>
          <button 
            className="absolute top-4 right-4 text-white hover:text-temple-saffron"
            onClick={() => setIsOpen(false)}
          >
            <X size={24} />
          </button>
          <img 
            src={imageUrl}
            alt={alt}
            className="max-h-[90vh] max-w-full object-contain"
          />
        </div>
      )}
    </>
  );
};

export default GalleryItem;
