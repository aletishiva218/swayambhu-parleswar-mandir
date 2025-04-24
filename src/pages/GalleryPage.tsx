
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SectionTitle from '@/components/SectionTitle';
import GalleryItem from '@/components/GalleryItem';

const GalleryPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  // Sample gallery images with categories
  const galleryImages = [
    {
      id: 1,
      imageUrl: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=600&q=80',
      alt: 'Temple Front View',
      category: 'architecture',
    },
    {
      id: 2,
      imageUrl: 'https://images.unsplash.com/photo-1466442929976-97f336a657be?auto=format&fit=crop&w=600&q=80',
      alt: 'Temple Interior',
      category: 'architecture',
    },
    {
      id: 3,
      imageUrl: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=600&q=80',
      alt: 'Temple Tower',
      category: 'architecture',
    },
    {
      id: 4,
      imageUrl: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=600&q=80',
      alt: 'Morning Aarti Ceremony',
      category: 'aarti',
    },
    {
      id: 5,
      imageUrl: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=600&q=80',
      alt: 'Evening Aarti',
      category: 'aarti',
    },
    {
      id: 6,
      imageUrl: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=600&q=80',
      alt: 'Special Aarti',
      category: 'aarti',
    },
    {
      id: 7,
      imageUrl: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=600&q=80',
      alt: 'Holi Festival Celebration',
      category: 'festivals',
    },
    {
      id: 8,
      imageUrl: 'https://images.unsplash.com/photo-1466442929976-97f336a657be?auto=format&fit=crop&w=600&q=80',
      alt: 'Diwali Celebration',
      category: 'festivals',
    },
    {
      id: 9,
      imageUrl: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=600&q=80',
      alt: 'Mahashivratri Celebration',
      category: 'festivals',
    },
    {
      id: 10,
      imageUrl: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=600&q=80',
      alt: 'Janmashtami Festival',
      category: 'festivals',
    },
    {
      id: 11,
      imageUrl: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=600&q=80',
      alt: 'Temple Courtyard',
      category: 'architecture',
    },
    {
      id: 12,
      imageUrl: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=600&q=80',
      alt: 'Special Rudrabhishekam',
      category: 'aarti',
    },
  ];
  
  const filteredImages = activeCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(image => image.category === activeCategory);
  
  return (
    <>
      <Header />
      
      <div className="pt-24 pb-16 bg-temple-gold bg-opacity-10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-temple-maroon mb-6">Temple Gallery</h1>
            <p className="text-xl text-gray-700 mb-8 font-light">
              Explore the visual journey through our temple's architecture, ceremonies, and celebrations.
            </p>
          </div>
        </div>
      </div>
      
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Photo Gallery" 
            subtitle="Browse through our collection of images showcasing various aspects of the temple"
            centered
          />
          
          <div className="mb-10 text-center">
            <div className="inline-flex flex-wrap justify-center gap-2 bg-gray-100 rounded-lg p-2">
              {['all', 'architecture', 'aarti', 'festivals'].map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-md transition-all ${
                    activeCategory === category 
                      ? 'bg-temple-saffron text-white' 
                      : 'bg-white text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>
          </div>
          
          <div className="image-gallery max-w-7xl mx-auto">
            {filteredImages.map((image) => (
              <GalleryItem 
                key={image.id}
                imageUrl={image.imageUrl}
                alt={image.alt}
                category={image.alt}
              />
            ))}
          </div>
        </div>
      </div>
      
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-temple-maroon mb-6">Share Your Temple Moments</h2>
          <p className="max-w-2xl mx-auto mb-8 text-gray-700">
            We invite devotees to share their spiritual moments at our temple. Tag your photos with 
            #स्वयंभूपालेश्वर on social media or email them to photos@swayambhupaleshwar.org for a chance 
            to be featured in our gallery.
          </p>
          <button className="btn-primary">
            Submit Photos
          </button>
        </div>
      </div>
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-temple-maroon mb-6">Stay Updated</h2>
          <p className="max-w-2xl mx-auto mb-8 text-gray-700">
            Subscribe to our newsletter to receive updates about upcoming events, festivals, and ceremonies.
          </p>
          
          <div className="max-w-md mx-auto">
            <div className="flex">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="temple-input rounded-r-none flex-1"
              />
              <button className="btn-primary rounded-l-none">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default GalleryPage;
