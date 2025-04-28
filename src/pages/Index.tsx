
import React, { useRef } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import SectionTitle from '@/components/SectionTitle';
import EventCard from '@/components/EventCard';
import shivling from "../assets/images/shivling.png";
import { Link } from 'react-router-dom';
import MorningAartiImage from "../assets/images/temple activities/morning aarti.png";
import abhishekamImage from "../assets/images/temple activities/abhishekam.png";
import AfternoonPoojaImage from "../assets/images/temple activities/Afternoon Pooja.png";
import EveningAartiImage from "../assets/images/temple activities/Evening Aarti.png";
import MahaShivratriImage from "../assets/images/temple activities/Maha Shivratri Festival Celebrations.png";
import RudrabhishekPoojaImage from "../assets/images/temple activities/Rudrabhishek Pooja (Special Ritual).png";
import ShringarandAlankarImage from "../assets/images/temple activities/Shringar and Alankara.png";

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
              Swayambhu Paleshwar Mahadev Mandir Devasthan is a sacred and ancient temple dedicated to Lord Shiva, revered by devotees for its divine energy and spiritual significance. The word Swayambhu means "self-manifested," signifying that the Shiva Lingam here is not man-made but emerged naturally, making it an exceptionally powerful and holy site.
              </p>
              <p className="text-gray-700 leading-relaxed">
              Situated in a serene and peaceful environment, the temple is a place of deep devotion, meditation, and worship. Thousands of devotees visit the temple throughout the year, especially during the holy month of Shravan and on the auspicious occasion of Mahashivratri, to seek blessings, offer prayers, and experience the spiritual vibrations of Lord Paleshwar Mahadev.
              </p>
              <p className="text-gray-700 leading-relaxed">
              The temple complex is beautifully maintained and serves not only as a religious center but also as a space for community gatherings, spiritual programs, and traditional rituals. With its rich history, divine presence, and spiritual importance, Swayambhu Paleshwar Mahadev Mandir Devasthan continues to be a beacon of faith, peace, and devotion for all who visit.
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
                    src={MorningAartiImage}
                    alt="Morning Aarti" 
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold text-xl text-temple-maroon mb-2">Morning Aarti</h3>
                    <p className="text-gray-600 text-sm">A daily ritual performed at dawn to awaken the deity, accompanied by bells and mantras.</p>
                    <div className="mt-4 text-sm text-gray-500">
                      <p>Timings: 5:30 AM - 6:15 AM</p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
              
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <div className="bg-white rounded-lg overflow-hidden shadow-md h-full">
                  <img 
                    src={abhishekamImage}
                    alt="Abhishekam (Sacred Bathing)" 
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold text-xl text-temple-maroon mb-2">Abhishekam (Sacred Bathing)</h3>
                    <p className="text-gray-600 text-sm">Ritual bathing of the Swayambhu Shiva Lingam with water, milk, honey, and other sacred items.</p>
                    <div className="mt-4 text-sm text-gray-500">
                      <p>Timings: 7:00 AM - 8:00 AM</p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
             
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <div className="bg-white rounded-lg overflow-hidden shadow-md h-full">
                  <img 
                    src={ShringarandAlankarImage}
                    alt="Shringar and Alankara" 
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold text-xl text-temple-maroon mb-2">Shringar and Alankara</h3>
                    <p className="text-gray-600 text-sm">Adorning the deity with beautiful clothes, flowers, and ornaments, symbolizing devotion and respect..</p>
                    <div className="mt-4 text-sm text-gray-500">
                      <p>Timings: 8:30 AM – 9:00 AM</p>
                    </div>
                  </div>
                </div>
              </CarouselItem>

              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <div className="bg-white rounded-lg overflow-hidden shadow-md h-full">
                  <img 
                    src={AfternoonPoojaImage}
                    alt="Afternoon Pooja" 
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold text-xl text-temple-maroon mb-2">Afternoon Pooja</h3>
                    <p className="text-gray-600 text-sm">Midday offering and prayer session where special bhog (offerings) are presented to Lord Shiva..</p>
                    <div className="mt-4 text-sm text-gray-500">
                      <p>Timings:12:00 PM – 12:30 PM</p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
             
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <div className="bg-white rounded-lg overflow-hidden shadow-md h-full">
                  <img 
                    src={EveningAartiImage}
                    alt="Evening Aarti" 
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold text-xl text-temple-maroon mb-2">Evening Aarti</h3>
                    <p className="text-gray-600 text-sm">Sacred evening ritual to offer gratitude, light lamps, and chant prayers as the day ends.</p>
                    <div className="mt-4 text-sm text-gray-500">
                      <p>Timings:7:00 PM – 7:45 PM</p>
                    </div>
                  </div>
                </div>
              </CarouselItem>

              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <div className="bg-white rounded-lg overflow-hidden shadow-md h-full">
                  <img 
                    src={RudrabhishekPoojaImage}
                    alt="Rudrabhishek Pooja (Special Ritual)" 
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold text-xl text-temple-maroon mb-2">Rudrabhishek Pooja (Special Ritual)</h3>
                    <p className="text-gray-600 text-sm">Powerful Vedic ritual performed to invoke the blessings of Lord Shiva for health, prosperity, and peace.</p>
                    <div className="mt-4 text-sm text-gray-500">
                      <p>Timings:By Prior Booking</p>
                    </div>
                  </div>
                </div>
              </CarouselItem>

              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <div className="bg-white rounded-lg overflow-hidden shadow-md h-full">
                  <img 
                    src={MahaShivratriImage}
                    alt="Maha Shivratri Festival Celebrations" 
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold text-xl text-temple-maroon mb-2">Maha Shivratri Festival Celebrations</h3>
                    <p className="text-gray-600 text-sm">Grand celebration with night-long chanting, bhajans, abhishekams, and special darshan of Lord Paleshwar Mahadev.</p>
                    <div className="mt-4 text-sm text-gray-500">
                      <p>Timings:As per festival schedule</p>
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
