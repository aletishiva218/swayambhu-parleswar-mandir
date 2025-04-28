
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SectionTitle from '@/components/SectionTitle';
import VideoCard from '@/components/VideoCard';

const VideosPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  // Sample video data with Facebook video URLs
  const videos = [
    {
      id: 1,
      title: 'Morning Aarti',
      embedUrl: 'https://www.facebook.com/plugins/video.php?height=314&href=https://www.facebook.com/swayambhupaleshwar/videos/1075319014272064/',
      description: 'A beautiful ritual conducted early in the morning to wake the deity and invoke blessings for the day ahead..',
      category: 'aarti'
    },
    {
      id: 2,
      title: 'Evening Aarti',
      embedUrl: 'https://www.facebook.com/plugins/video.php?height=314&href=https://www.facebook.com/swayambhupaleshwar/videos/1974717373014694/',
      description: 'The evening ritual, a devotional song and prayer, offering gratitude to Lord Shiva and seeking protection through the night.',
      category: 'aarti'
    },
    {
      id: 3,
      title: 'Mahashivratri Aarti',
      embedUrl: 'https://www.facebook.com/plugins/video.php?height=314&href=https://www.facebook.com/swayambhupaleshwar/videos/2907805179394285/',
      description: 'The powerful Aarti performed on Mahashivratri, one of the holiest nights dedicated to Lord Shiva.',
      category: 'aarti'
    },
    {
      id: 4,
      title: 'Mahashivratri 2025 Celebration',
      embedUrl: 'https://www.facebook.com/plugins/video.php?height=314&href=https://www.facebook.com/swayambhupaleshwar/videos/1231191240905090/',
      description: 'The grand celebration of Maha Shivratri, involving special rituals and prayers to honor Lord Shiva.',
      category: 'festivals'
    },
    {
      id: 5,
      title: 'Ganesh Chaturthi Celebration',
      embedUrl: 'https://www.facebook.com/plugins/video.php?height=314&href=https://www.facebook.com/swayambhupaleshwar/videos/640628565321302/',
      description: 'Celebration of Lord Ganesha’s birth, featuring the installation of Ganesh idols, prayers, and immersion ceremonies.',
      category: 'festivals'
    },
    {
      id: 6,
      title: 'Diwali Celebration',
      embedUrl: 'https://www.facebook.com/plugins/video.php?height=314&href=https://www.facebook.com/swayambhupaleshwar/videos/528985883220116/',
      description: 'The festival of lights, Diwali, celebrated with lamps, prayers, and worship to Goddess Lakshmi and Lord Shiva.',
      category: 'festivals'
    },
    {
      id: 7,
      title: 'Navratri Celebration',
      embedUrl: 'https://www.facebook.com/plugins/video.php?height=314&href=https://www.facebook.com/swayambhupaleshwar/videos/403742222009803/',
      description: 'Nine nights of devotion and prayers, celebrating Goddess Durga and other deities with dance and rituals.',
      category: 'festivals'
    },
    {
      id: 8,
      title: 'Gudi Padwa Celebration',
      embedUrl: 'https://www.facebook.com/plugins/video.php?height=314&href=https://www.facebook.com/swayambhupaleshwar/videos/562987311090458/',
      description: 'The Marathi New Year celebration, marked by rituals, prayers, and the raising of the Gudi (a symbolic flag).',
      category: 'festivals'
    },
    {
      id: 9,
      title: 'Bhajan Session',
      embedUrl: 'https://www.facebook.com/plugins/video.php?height=314&href=https://www.facebook.com/swayambhupaleshwar/videos/1153765033034580/',
      description: 'A session of devotional singing, singing hymns in praise of Lord Shiva to elevate the spiritual atmosphere.',
      category: 'devotional'
    },
    {
      id: 10,
      title: 'Shiv Stotra Chanting',
      embedUrl: 'https://www.facebook.com/plugins/video.php?height=314&href=https://www.facebook.com/swayambhupaleshwar/videos/1141467870978717/',
      description: 'The chanting of sacred Shiva Stotras, invocations to invoke blessings, peace, and prosperity.',
      category: 'devotional'
    },
    {
      id: 11,
      title: 'Shiv Vandana',
      embedUrl: 'https://www.facebook.com/plugins/video.php?height=314&href=https://www.facebook.com/swayambhupaleshwar/videos/1275020560001652/',
      description: 'The prayer or praise to Lord Shiva, emphasizing devotion and surrender to his divine energy.',
      category: 'devotional'
    },
    {
      id: 12,
      title: 'Puja Rituals',
      embedUrl: 'https://www.facebook.com/plugins/video.php?height=314&href=https://www.facebook.com/swayambhupaleshwar/videos/640628565321302/',
      description: 'The daily rituals performed at the temple to honor Lord Shiva, invoking divine energy and blessings.',
      category: 'devotional'
    },
    {
      id: 13,
      title: 'Devotional Songs',
      embedUrl: 'https://www.facebook.com/plugins/video.php?height=314&href=https://www.facebook.com/swayambhupaleshwar/videos/2907805179394285/',
      description: 'A collection of devotional music dedicated to Lord Shiva, enriching the spiritual experience.',
      category: 'devotional'
    },
    {
      id:14,
      title: 'Spiritual Talk on Lord Shiva',
      embedUrl: 'https://www.facebook.com/plugins/video.php?height=314&href=https://www.facebook.com/swayambhupaleshwar/videos/1075319014272064/',
      description: 'A discourse that delves into the significance of Lord Shiva’s teachings and philosophy.',
      category: 'discourses'
    },
    {
      id:15,
      title: 'Importance of Mahashivratri',
      embedUrl: 'https://www.facebook.com/plugins/video.php?height=314&href=https://www.facebook.com/swayambhupaleshwar/videos/1974717373014694/',
      description: 'A talk explaining the spiritual and religious significance of the holy night of Mahashivratri.',
      category: 'discourses'
    },
    {
      id:16,
      title: 'Understanding Rudrabhishek',
      embedUrl: 'https://www.facebook.com/plugins/video.php?height=314&href=https://www.facebook.com/swayambhupaleshwar/videos/2907805179394285/',
      description: 'A discourse explaining the Rudrabhishek, a sacred ritual to invoke the blessings of Lord Shiva.',
      category: 'discourses'
    },
    {
      id:17,
      title: 'Teachings of Lord Shiva',
      embedUrl: 'https://www.facebook.com/plugins/video.php?height=314&href=https://www.facebook.com/swayambhupaleshwar/videos/562987311090458/',
      description: 'Insights into the profound teachings of Lord Shiva and how they guide devotees on the path of spirituality.',
      category: 'discourses'
    },
    {
      id:18,
      title: 'Wedding Ceremony at Temple',
      embedUrl: 'https://www.facebook.com/plugins/video.php?height=314&href=https://www.facebook.com/swayambhupaleshwar/videos/1153765033034580/',
      description: 'A traditional wedding ceremony held at the temple, invoking divine blessings for the couple.',
      category: 'ceremonies'
    },
    {
      id:19,
      title: 'Naming Ceremony',
      embedUrl: 'https://www.facebook.com/plugins/video.php?height=314&href=https://www.facebook.com/swayambhupaleshwar/videos/1141467870978717/',
      description: 'A spiritual ceremony where newborns are named and blessed by the priest.',
      category: 'ceremonies'
    },
    {
      id:20,
      title: 'Housewarming Ceremony',
      embedUrl: 'https://www.facebook.com/plugins/video.php?height=314&href=https://www.facebook.com/swayambhupaleshwar/videos/1275020560001652/',
      description: 'A ceremony to bless a new home and seek prosperity, peace, and protection.',
      category: 'ceremonies'
    },
    {
      id:21,
      title: 'Thread Ceremony',
      embedUrl: 'https://www.facebook.com/plugins/video.php?height=314&href=https://www.facebook.com/swayambhupaleshwar/videos/640628565321302/',
      description: 'A rite of passage where young boys are blessed and given sacred threads as a symbol of their spiritual growth.',
      category: 'ceremonies'
    },
    {
      id:22,
      title: 'Annaprashan Ceremony',
      embedUrl: 'https://www.facebook.com/plugins/video.php?height=314&href=https://www.facebook.com/swayambhupaleshwar/videos/2907805179394285/',
      description: 'The ceremony where an infant is given solid food for the first time, marked with blessings and rituals.',
      category: 'ceremonies'
    },
    {
      id:23,
      title: 'Temple Walkthrough',
      embedUrl: 'https://www.facebook.com/plugins/video.php?height=314&href=https://www.facebook.com/swayambhupaleshwar/videos/1075319014272064/',
      description: 'A virtual tour of the temple, showcasing its architecture, divine ambiance, and spiritual significance.',
      category: 'tours'
    },
    {
      id:24,
      title: 'Temple Architecture Tour',
      embedUrl: 'https://www.facebook.com/plugins/video.php?height=314&href=https://www.facebook.com/swayambhupaleshwar/videos/1974717373014694/',
      description: "A guided exploration of the temple's stunning architectural features, including carvings and intricate designs.",
      category: 'tours'
    },
    {
      id:25,
      title: 'Temple Grounds Tour',
      embedUrl: 'https://www.facebook.com/plugins/video.php?height=314&href=https://www.facebook.com/swayambhupaleshwar/videos/2907805179394285/',
      description: 'A walkthrough of the temple grounds, showcasing its gardens, pathways, and serene atmosphere.',
      category: 'tours'
    },
    {
      id:26,
      title: 'Visitor Experience at Temple',
      embedUrl: 'https://www.facebook.com/plugins/video.php?height=314&href=https://www.facebook.com/swayambhupaleshwar/videos/562987311090458/',
      description: 'A video documenting the experience of visitors coming to the temple for prayers and rituals.',
      category: 'tours'
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
            href="https://www.youtube.com/@Gramdevswayambhupaleshwar" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Visit YouTube Channel
          </a>
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

export default VideosPage;
