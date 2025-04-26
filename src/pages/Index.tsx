
import React, { useRef } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import SectionTitle from '@/components/SectionTitle';
import EventCard from '@/components/EventCard';
import shivling from "../assets/images/shivling.png";
import { Link } from 'react-router-dom';

const Index = () => {
  const aboutRef = useRef<HTMLDivElement>(null);

  const scrollToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Header />
      <Hero scrollToAbout={scrollToAbout} />
      
      <div className="py-16 bg-gray-50" ref={aboutRef}>
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="About स्वयंभू पालेश्वर महादेव मंदिर देवस्थान" 
            subtitle="Discover the rich history and spiritual significance of our sacred temple dedicated to Lord Shiva."
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                स्वयंभू पालेश्वर मंदिर is a historical Shiva temple believed to be self-manifested (Swayambhu). 
                Legend has it that the Shivalinga appeared naturally from the earth centuries ago, making this site 
                especially sacred to devotees.
              </p>
              <p className="text-gray-700 leading-relaxed">
                The temple architecture represents the classic Indian temple style with intricate carvings depicting 
                various forms of Lord Shiva and stories from Hindu mythology. The main sanctum houses the ancient 
                Swayambhu Shivalinga, which continues to draw devotees seeking blessings.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Daily rituals and special pujas are performed by learned priests according to Vedic traditions. 
                During festivals like Mahashivaratri, thousands of devotees visit to receive darshan and participate 
                in the celebrations.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <Link to="/about" className="btn-primary">
                  Explore History
                </Link>
                <Link to="/puja" className="btn-secondary">
                  Book a Puja
                </Link>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <div className="relative max-w-md">
                <img 
                  src={shivling} 
                  alt="Temple View" 
                  className="rounded-lg shadow-xl z-10 relative"
                />
                <div className="absolute -bottom-5 -left-5 w-40 h-40 bg-temple-gold rounded-lg -z-0"></div>
                <div className="absolute -top-5 -right-5 w-40 h-40 border-2 border-temple-saffron rounded-lg -z-0"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="py-16 bg-temple-gold bg-opacity-10">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Temple Activities" 
            subtitle="Experience the divine through our regular temple activities and ceremonies"
            centered
          />
          
          <Carousel className="w-full max-w-4xl mx-auto">
            <CarouselContent>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <div className="bg-white rounded-lg overflow-hidden shadow-md h-full">
                  <img 
                    src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=600&q=80"
                    alt="Morning Aarti" 
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold text-xl text-temple-maroon mb-2">Morning Aarti</h3>
                    <p className="text-gray-600 text-sm">Daily ritual performed at dawn to awaken the deity, accompanied by bells and mantras.</p>
                    <div className="mt-4 text-sm text-gray-500">
                      <p>Timings: 5:30 AM - 6:15 AM</p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
              
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <div className="bg-white rounded-lg overflow-hidden shadow-md h-full">
                  <img 
                    src="https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=600&q=80"
                    alt="Evening Puja" 
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold text-xl text-temple-maroon mb-2">Evening Puja</h3>
                    <p className="text-gray-600 text-sm">Traditional worship ceremony with offerings of flowers, incense and light.</p>
                    <div className="mt-4 text-sm text-gray-500">
                      <p>Timings: 6:30 PM - 7:30 PM</p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
              
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <div className="bg-white rounded-lg overflow-hidden shadow-md h-full">
                  <img 
                    src="https://images.unsplash.com/photo-1466442929976-97f336a657be?auto=format&fit=crop&w=600&q=80"
                    alt="Abhishekam" 
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold text-xl text-temple-maroon mb-2">Rudrabhishekam</h3>
                    <p className="text-gray-600 text-sm">Special ritual bathing of the Shiva Linga with milk, curd, honey, and other offerings.</p>
                    <div className="mt-4 text-sm text-gray-500">
                      <p>Every Monday: 9:00 AM - 11:00 AM</p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
              
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <div className="bg-white rounded-lg overflow-hidden shadow-md h-full">
                  <img 
                    src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=600&q=80"
                    alt="Bhajan Sandhya" 
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold text-xl text-temple-maroon mb-2">Bhajan Sandhya</h3>
                    <p className="text-gray-600 text-sm">Evening devotional singing session with traditional instruments.</p>
                    <div className="mt-4 text-sm text-gray-500">
                      <p>Every Saturday: 7:00 PM - 8:30 PM</p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="left-0" />
            <CarouselNext className="right-0" />
          </Carousel>
        </div>
      </div>
      
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Upcoming Events" 
            subtitle="Join us for these special occasions and celebrations at our temple"
            centered
          />
          
          <div className="space-y-6 max-w-4xl mx-auto">
            <EventCard
              title="Maha Shivaratri Celebration"
              date="11"
              month="Mar"
              description="Join us for an all-night celebration of Lord Shiva with special rituals, abhishekam, and cultural performances."
              time="6:00 PM onwards"
              location="Main Temple Complex"
            />
            
            <EventCard
              title="Navratri Festival"
              date="22"
              month="Apr"
              description="Nine nights of devotion to the Divine Mother with daily pujas, bhajans, and cultural programs."
              time="6:00 AM - 9:00 PM"
              location="Temple Hall"
            />
            
            <EventCard
              title="Annual Temple Anniversary"
              date="05"
              month="May"
              description="Celebrating the temple foundation day with special yagnas, community meals, and cultural events."
              time="8:00 AM - 8:00 PM"
              location="Entire Temple Complex"
            />
          </div>
          
          <div className="text-center mt-10">
            <Link to="/events" className="btn-primary">
              View All Events
            </Link>
          </div>
        </div>
      </div>
      
      <div className="bg-temple-dark text-white py-16 bg-opacity-95">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-devnagari text-3xl md:text-4xl font-bold mb-6">
            "मन एव मनुष्याणां कारणं बन्धमोक्षयोः"
          </h2>
          <p className="text-lg max-w-2xl mx-auto mb-8 opacity-90">
            "The mind alone is the cause of bondage and liberation for humans."
            <br />- Amrtabindu Upanishad
          </p>
          
          <Link to="/puja" className="btn-primary">
            Book a Puja Online
          </Link>
        </div>
      </div>
      
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center p-6 bg-temple-gold bg-opacity-10 rounded-lg">
              <div className="w-16 h-16 bg-temple-saffron rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Temple Timings</h3>
              <p className="text-gray-700">
                <strong>Morning:</strong> 6:00 AM - 12:00 PM<br />
                <strong>Evening:</strong> 5:00 PM - 9:00 PM<br />
                <strong>Monday Special Puja(vastralankar & pushpaalankar):</strong> 6:30 PM - 8:00 PM
              </p>
            </div>
            
            <div className="text-center p-6 bg-temple-gold bg-opacity-10 rounded-lg">
              <div className="w-16 h-16 bg-temple-saffron rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Darshan Queue<br/>(With Special Passes)</h3>
              <p className="text-gray-700">
              Only on mahashivratri utsav.<br />
                Online darshan booking available.<br />
                Special arrangements for elderly<br />
                and differently-abled devotees.
              </p>
            </div>
            
            <div className="text-center p-6 bg-temple-gold bg-opacity-10 rounded-lg">
              <div className="w-16 h-16 bg-temple-saffron rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Puja Services</h3>
              <p className="text-gray-700">
                Various puja services available<br />
                including abhishekam, archana, goseva, annadanam seva, brahmin annadanam<br />
                and special occasion pujas.
              </p>
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

export default Index;
