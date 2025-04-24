
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SectionTitle from '@/components/SectionTitle';
import GalleryItem from '@/components/GalleryItem';

import aartiImage1 from "../assets/images/gallary/aarti/image1.png";
import aartiImage2 from "../assets/images/gallary/aarti/image2.png";
import aartiImage3 from "../assets/images/gallary/aarti/image3.png";
import aartiImage4 from "../assets/images/gallary/aarti/image4.png";
import aartiImage5 from "../assets/images/gallary/aarti/image5.png";

import festivaliImage1 from "../assets/images/gallary/festivals/image1.png";;
import festivaliImage2 from "../assets/images/gallary/festivals/image2.png";;
import festivaliImage3 from "../assets/images/gallary/festivals/image3.png";;
import festivaliImage4 from "../assets/images/gallary/festivals/image4.png";;
import festivaliImage5 from "../assets/images/gallary/festivals/image5.png";;
import festivaliImage6 from "../assets/images/gallary/festivals/image6.png";;
import festivaliImage7 from "../assets/images/gallary/festivals/image7.png";;
import festivaliImage8 from "../assets/images/gallary/festivals/image8.png";;
import festivaliImage9 from "../assets/images/gallary/festivals/image9.png";;
import festivaliImage10 from "../assets/images/gallary/festivals/image10.png";;

import insideImage1 from "../assets/images/gallary/inside view/image1.png";
import insideImage2 from "../assets/images/gallary/inside view/image2.png";
import insideImage3 from "../assets/images/gallary/inside view/image3.png";
import insideImage4 from "../assets/images/gallary/inside view/image4.png";
import insideImage5 from "../assets/images/gallary/inside view/image5.png";
import insideImage6 from "../assets/images/gallary/inside view/image6.png";
import insideImage7 from "../assets/images/gallary/inside view/image7.png";
import insideImage8 from "../assets/images/gallary/inside view/image8.png";
import insideImage9 from "../assets/images/gallary/inside view/image9.png";
import insideImage10 from "../assets/images/gallary/inside view/image10.png";
import insideImage11 from "../assets/images/gallary/inside view/image11.png";
import insideImage12 from "../assets/images/gallary/inside view/image12.png";
import insideImage13 from "../assets/images/gallary/inside view/image13.png";
import insideImage14 from "../assets/images/gallary/inside view/image14.png";
import insideImage15 from "../assets/images/gallary/inside view/image15.png";
import insideImage16 from "../assets/images/gallary/inside view/image16.png";
import insideImage17 from "../assets/images/gallary/inside view/image17.png";
import insideImage18 from "../assets/images/gallary/inside view/image18.png";
import insideImage19 from "../assets/images/gallary/inside view/image19.png";
import insideImage20 from "../assets/images/gallary/inside view/image20.png";
import insideImage21 from "../assets/images/gallary/inside view/image21.png";

import outsideImage1 from "../assets/images/gallary/outside view/image1.png";
import outsideImage2 from "../assets/images/gallary/outside view/image2.png";
import outsideImage3 from "../assets/images/gallary/outside view/image3.png";


const GalleryPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  // Sample gallery images with categories
  const galleryImages = [
    {
      id: 1,
      imageUrl: aartiImage1,
      category: 'Aarti',
    },
    {
      id: 2,
      imageUrl: aartiImage2,
      category: 'Aarti',
    },
    {
      id: 3,
      imageUrl: aartiImage3,
      category: 'Aarti',
    },
    {
      id: 4,
      imageUrl: aartiImage4,
      category: 'Aarti',
    },
    {
      id: 5,
      imageUrl: aartiImage5,
      category: 'Aarti',
    },
    {
      id: 6,
      imageUrl: festivaliImage1,
      category: 'Festivals',
    },
    {
      id: 7,
      imageUrl: festivaliImage2,
      category: 'Festivals',
    },
    {
      id: 8,
      imageUrl: festivaliImage3,
      category: 'Festivals',
    },
    {
      id: 9,
      imageUrl: festivaliImage4,
      category: 'Festivals',
    },
    {
      id: 10,
      imageUrl: festivaliImage5,
      category: 'Festivals',
    },
    {
      id: 11,
      imageUrl: festivaliImage6,
      category: 'Festivals',
    },
    {
      id: 12,
      imageUrl: festivaliImage7,
      category: 'Festivals',
    },
    {
      id: 13,
      imageUrl: festivaliImage8,
      category: 'Festivals',
    },
    {
      id: 14,
      imageUrl: festivaliImage9,
      category: 'Festivals',
    },
    {
      id: 15,
      imageUrl: festivaliImage10,
      category: 'Festivals',
    },
    {
      id: 16,
      imageUrl: insideImage1,
      category: 'Inside View',
    },
    {
      id: 17,
      imageUrl: insideImage2,
      category: 'Inside View',
    },
    {
      id: 18,
      imageUrl: insideImage3,
      category: 'Inside View',
    },
    {
      id: 19,
      imageUrl: insideImage4,
      category: 'Inside View',
    },
    {
      id: 20,
      imageUrl: insideImage5,
      category: 'Inside View',
    },
    {
      id: 21,
      imageUrl: insideImage6,
      category: 'Inside View',
    },
    {
      id: 22,
      imageUrl: insideImage7,
      category: 'Inside View',
    },
    {
      id: 23,
      imageUrl: insideImage8,
      category: 'Inside View',
    },
    {
      id: 24,
      imageUrl: insideImage9,
      category: 'Inside View',
    },
    {
      id: 25,
      imageUrl: insideImage10,
      category: 'Inside View',
    },
    {
      id: 26,
      imageUrl: insideImage11,
      category: 'Inside View',
    },
    {
      id: 27,
      imageUrl: insideImage12,
      category: 'Inside View',
    },
    {
      id: 28,
      imageUrl: insideImage13,
      category: 'Inside View',
    },
    {
      id: 29,
      imageUrl: insideImage14,
      category: 'Inside View',
    },
    {
      id: 30,
      imageUrl: insideImage15,
      category: 'Inside View',
    },
    {
      id: 31,
      imageUrl: insideImage16,
      category: 'Inside View',
    },
    {
      id: 32,
      imageUrl: insideImage17,
      category: 'Inside View',
    },
    {
      id: 33,
      imageUrl: insideImage18,
      category: 'Inside View',
    },
    {
      id: 34,
      imageUrl: insideImage19,
      category: 'Inside View',
    },
    {
      id: 35,
      imageUrl: insideImage20,
      category: 'Inside View',
    },
    {
      id: 37,
      imageUrl: insideImage21,
      category: 'Inside View',
    },
    {
      id: 38,
      imageUrl: outsideImage1,
      category: 'Outside View',
    },
    {
      id: 39,
      imageUrl: outsideImage2,
      category: 'Outside View',
    },
    {
      id: 40,
      imageUrl: outsideImage3,
      category: 'Outside View',
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
              {['all', 'Inside View', 'Aarti', 'Festivals','Outside View'].map((category) => (
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
