
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SectionTitle from '@/components/SectionTitle';
import VideoCard from '@/components/VideoCard';

const VideosPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  // Sample video data
  const videos = [
    {
      id: 1,
      title: 'Morning Aarti - Mangala Aarti',
      embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      date: 'March 15, 2023',
      description: 'Daily morning ritual performed at dawn to awaken the deity.',
      category: 'aarti'
    },
    {
      id: 2,
      title: 'Shiva Tandava Stotram',
      embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      date: 'February 10, 2023',
      description: 'Ancient hymn dedicated to Lord Shiva describing his powerful dance.',
      category: 'devotional'
    },
    {
      id: 3,
      title: 'Mahashivratri Special Celebration',
      embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      date: 'February 18, 2023',
      description: 'Special celebrations and rituals on the occasion of Mahashivratri.',
      category: 'festivals'
    },
    {
      id: 4,
      title: 'Evening Aarti - Sandhya Aarti',
      embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      date: 'March 5, 2023',
      description: 'Evening ritual performed with lamps and offerings.',
      category: 'aarti'
    },
    {
      id: 5,
      title: 'Spiritual Discourse on Shiva Purana',
      embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      date: 'January 25, 2023',
      description: 'Lecture by Swami Shivananda on the sacred texts of Shiva Purana.',
      category: 'discourses'
    },
    {
      id: 6,
      title: 'Temple Architecture Tour',
      embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      date: 'December 12, 2022',
      description: 'Guided tour explaining the symbolism and history of temple architecture.',
      category: 'tours'
    },
    {
      id: 7,
      title: 'Rudrabhishek Ceremony',
      embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      date: 'March 1, 2023',
      description: 'Special bathing ceremony of Lord Shiva performed with sacred substances.',
      category: 'ceremonies'
    },
    {
      id: 8,
      title: 'Navratri Festival Highlights',
      embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      date: 'October 15, 2022',
      description: 'Celebration of the nine-day festival dedicated to the divine feminine.',
      category: 'festivals'
    },
    {
      id: 9,
      title: 'Vedic Chanting Session',
      embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      date: 'February 5, 2023',
      description: 'Traditional Vedic mantras chanted by temple priests.',
      category: 'devotional'
    }
  ];
  
  const filteredVideos = activeCategory === 'all' 
    ? videos 
    : videos.filter(video => video.category === activeCategory);
  
  return (
    <>
      <Header />
      
      <div className="pt-24 pb-16 bg-temple-gold bg-opacity-10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-temple-maroon mb-6">Video Gallery</h1>
            <p className="text-xl text-gray-700 mb-8 font-light">
              Watch recordings of temple ceremonies, festivals, and spiritual discourses.
            </p>
          </div>
        </div>
      </div>
      
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Temple Videos" 
            subtitle="Explore our collection of videos showcasing various temple activities"
            centered
          />
          
          <div className="mb-10 text-center">
            <div className="inline-flex flex-wrap justify-center gap-2 bg-gray-100 rounded-lg p-2">
              {['all', 'aarti', 'festivals', 'devotional', 'discourses', 'ceremonies', 'tours'].map((category) => (
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {filteredVideos.map(video => (
              <VideoCard
                key={video.id}
                title={video.title}
                embedUrl={video.embedUrl}
                date={video.date}
                description={video.description}
              />
            ))}
          </div>
        </div>
      </div>
      
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-temple-maroon mb-6">Subscribe to Our Channel</h2>
          <p className="max-w-3xl mx-auto mb-8 text-gray-700">
            Stay updated with our latest videos by subscribing to our YouTube channel. We regularly upload 
            recordings of temple ceremonies, spiritual discourses, and festival celebrations.
          </p>
          <a 
            href="https://www.youtube.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Visit YouTube Channel
          </a>
        </div>
      </div>
      
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Live Darshan" 
            subtitle="Connect with the divine through our daily live streaming"
            centered
          />
          
          <div className="max-w-4xl mx-auto">
            <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
                title="Live Darshan" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                className="w-full h-full object-cover"
              ></iframe>
            </div>
            
            <div className="mt-8 p-6 bg-temple-gold bg-opacity-10 rounded-lg">
              <h3 className="text-xl font-semibold text-temple-maroon mb-3">Live Streaming Schedule</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-white rounded">
                  <h4 className="font-medium mb-2">Morning Aarti</h4>
                  <p className="text-gray-600">Daily: 5:30 AM - 6:15 AM</p>
                </div>
                
                <div className="p-4 bg-white rounded">
                  <h4 className="font-medium mb-2">Afternoon Aarti</h4>
                  <p className="text-gray-600">Daily: 12:00 PM - 12:30 PM</p>
                </div>
                
                <div className="p-4 bg-white rounded">
                  <h4 className="font-medium mb-2">Evening Aarti</h4>
                  <p className="text-gray-600">Daily: 6:30 PM - 7:15 PM</p>
                </div>
                
                <div className="p-4 bg-white rounded">
                  <h4 className="font-medium mb-2">Special Pujas</h4>
                  <p className="text-gray-600">Check schedule for timings</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  );
};

export default VideosPage;
