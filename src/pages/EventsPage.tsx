import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SectionTitle from '@/components/SectionTitle';
import EventCard from '@/components/EventCard';
import { Filter } from 'lucide-react';
import Calendar from '@/components/calendar/Calendar';

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
          
          <Calendar events={events} />
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
