
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SectionTitle from '@/components/SectionTitle';
import EventCard from '@/components/EventCard';
import { Calendar, Filter } from 'lucide-react';

const EventsPage = () => {
  const [filter, setFilter] = useState('all');
  
  // Sample events data
  const events = [
    {
      id: 1,
      title: 'Maha Shivaratri Celebration',
      date: '11',
      month: 'Mar',
      description: 'Join us for an all-night celebration of Lord Shiva with special rituals, abhishekam, and cultural performances.',
      time: '6:00 PM onwards',
      location: 'Main Temple Complex',
      category: 'festival'
    },
    {
      id: 2,
      title: 'Weekly Rudrabhishekam',
      date: '15',
      month: 'Mar',
      description: 'Special Monday ritual with traditional abhishekam using milk, yogurt, honey, and other sacred offerings.',
      time: '9:00 AM - 11:00 AM',
      location: 'Sanctum Sanctorum',
      category: 'ritual'
    },
    {
      id: 3,
      title: 'Spiritual Discourse Series',
      date: '18',
      month: 'Mar',
      description: 'Learn about Vedic philosophy and scriptures with renowned scholar Dr. Ramesh Sharma.',
      time: '5:30 PM - 7:00 PM',
      location: 'Temple Hall',
      category: 'discourse'
    },
    {
      id: 4,
      title: 'Navratri Festival',
      date: '22',
      month: 'Apr',
      description: 'Nine nights of devotion to the Divine Mother with daily pujas, bhajans, and cultural programs.',
      time: '6:00 AM - 9:00 PM',
      location: 'Temple Hall',
      category: 'festival'
    },
    {
      id: 5,
      title: 'Bhajan Sandhya',
      date: '26',
      month: 'Mar',
      description: 'Evening of devotional songs and music dedicated to Lord Shiva by temple musicians and guest artists.',
      time: '7:00 PM - 9:00 PM',
      location: 'Temple Courtyard',
      category: 'cultural'
    },
    {
      id: 6,
      title: 'Annual Temple Anniversary',
      date: '05',
      month: 'May',
      description: 'Celebrating the temple foundation day with special yagnas, community meals, and cultural events.',
      time: '8:00 AM - 8:00 PM',
      location: 'Entire Temple Complex',
      category: 'festival'
    },
    {
      id: 7,
      title: 'Vedic Chanting Workshop',
      date: '10',
      month: 'Apr',
      description: 'Learn sacred Vedic mantras and proper chanting techniques from experienced pundits.',
      time: '10:00 AM - 12:00 PM',
      location: 'Temple Learning Center',
      category: 'workshop'
    },
    {
      id: 8,
      title: 'Monthly Satyanarayana Puja',
      date: '15',
      month: 'Apr',
      description: 'Traditional puja performed on full moon day for prosperity and well-being of devotees.',
      time: '5:00 PM - 7:00 PM',
      location: 'Temple Hall',
      category: 'ritual'
    }
  ];
  
  const filteredEvents = filter === 'all' 
    ? events 
    : events.filter(event => event.category === filter);
  
  return (
    <>
      <Header />
      
      <div className="pt-24 pb-16 bg-temple-gold bg-opacity-10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-temple-maroon mb-6">Temple Events</h1>
            <p className="text-xl text-gray-700 mb-8 font-light">
              Stay updated with upcoming ceremonies, festivals, and spiritual events at स्वयंभू पालेश्वर मंदिर.
            </p>
          </div>
        </div>
      </div>
      
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 max-w-4xl mx-auto">
            <SectionTitle 
              title="Upcoming Events"
              subtitle="Join us for these special occasions at our temple"
            />
            
            <div className="mt-4 md:mt-0 self-start md:self-end">
              <div className="flex items-center bg-gray-100 rounded-lg p-1">
                <Filter size={16} className="ml-2 text-gray-500" />
                <select 
                  className="bg-transparent p-2 outline-none"
                  value={filter}
                  onChange={(e) => setFilter(e.target.value)}
                >
                  <option value="all">All Events</option>
                  <option value="festival">Festivals</option>
                  <option value="ritual">Rituals</option>
                  <option value="discourse">Discourses</option>
                  <option value="cultural">Cultural</option>
                  <option value="workshop">Workshops</option>
                </select>
              </div>
            </div>
          </div>
          
          <div className="space-y-6 max-w-4xl mx-auto">
            {filteredEvents.map(event => (
              <EventCard
                key={event.id}
                title={event.title}
                date={event.date}
                month={event.month}
                description={event.description}
                time={event.time}
                location={event.location}
              />
            ))}
          </div>
        </div>
      </div>
      
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Calendar View" 
            subtitle="Overview of monthly events and celebrations at our temple"
            centered
          />
          
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6 md:p-8">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-bold text-temple-maroon flex items-center">
                <Calendar size={24} className="mr-2" /> April 2023
              </h3>
              <div className="flex space-x-2">
                <button className="p-2 rounded-md hover:bg-gray-100">
                  &larr; Previous
                </button>
                <button className="p-2 rounded-md hover:bg-gray-100">
                  Next &rarr;
                </button>
              </div>
            </div>
            
            <div className="grid grid-cols-7 gap-1">
              {/* Days of week */}
              {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day, index) => (
                <div key={index} className="text-center font-semibold p-2">
                  {day}
                </div>
              ))}
              
              {/* Empty days */}
              {Array(6).fill(null).map((_, index) => (
                <div key={`empty-${index}`} className="p-2 h-24 border border-gray-100"></div>
              ))}
              
              {/* Calendar days */}
              {Array(30).fill(null).map((_, index) => {
                const day = index + 1;
                const hasEvent = events.some(event => parseInt(event.date) === day && event.month === 'Apr');
                
                return (
                  <div 
                    key={`day-${day}`} 
                    className={`p-2 h-24 border border-gray-100 ${hasEvent ? 'bg-temple-gold bg-opacity-10' : ''}`}
                  >
                    <div className={`text-sm font-medium ${hasEvent ? 'text-temple-maroon' : ''}`}>
                      {day}
                    </div>
                    
                    {hasEvent && (
                      <div className="text-xs mt-1 bg-temple-saffron text-white p-1 rounded truncate">
                        Event
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
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

export default EventsPage;
