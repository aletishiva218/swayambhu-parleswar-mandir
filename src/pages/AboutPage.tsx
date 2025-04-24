
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SectionTitle from '@/components/SectionTitle';
import { CheckCircle } from 'lucide-react';
import OurHeritageImage from "../assets/images/ourheritage.png";

const AboutPage = () => {
  return (
    <>
      <Header />
      
      <div className="pt-24 pb-16 bg-temple-gold bg-opacity-10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-temple-maroon mb-6">About Our Temple</h1>
            <p className="text-xl text-gray-700 mb-8 font-light">
              Discover the spiritual journey of स्वयंभू पालेश्वर मंदिर, a sacred space dedicated to Lord Shiva.
            </p>
          </div>
        </div>
      </div>
      
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center max-w-6xl mx-auto">
            <div>
              <SectionTitle title="Our Heritage" />
              <div className="space-y-4 text-gray-700">
                <p>
                  स्वयंभू पालेश्वर मंदिर, an ancient shrine dating back to the 12th century, stands as a testament to the 
                  rich cultural and spiritual heritage of India. The temple houses a self-manifested (swayambhu) 
                  Shivalinga, which is believed to have emerged naturally from the earth.
                </p>
                <p>
                  Over the centuries, the temple has undergone several renovations and expansions, with each ruling 
                  dynasty adding its unique architectural elements. Despite these changes, the sanctity and spiritual 
                  significance of the original shrine remain preserved.
                </p>
                <p>
                  The temple has witnessed countless devotees seeking blessings and spiritual solace. It has stood 
                  resilient through changing times, natural calamities, and historical transformations, continuing to 
                  serve as a beacon of faith and devotion.
                </p>
                <p>
                  All religions and devotes comes to worship.
                </p>
              </div>
            </div>
            
            <div className="mt-6 lg:mt-0">
              <div className="relative">
                <img 
                  src={OurHeritageImage} 
                  alt="Temple Front View" 
                  className="rounded-lg shadow-lg"
                />
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-temple-saffron opacity-20 rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Temple Timeline" 
            subtitle="Explore the rich history of स्वयंभू पालेश्वर मंदिर through the ages"
            centered
          />
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-4 lg:left-1/2 transform lg:-translate-x-1/2 h-full w-1 bg-temple-maroon"></div>
              
              {/* Timeline items */}
              <div className="space-y-16">
                {/* Item 1 */}
                <div className="relative flex flex-col lg:flex-row items-center">
                  <div className="lg:w-1/2 lg:pr-8 lg:text-right order-2 lg:order-1">
                    <div className="bg-white p-5 rounded-lg shadow-md">
                      <h3 className="text-xl font-bold text-temple-maroon mb-2">12th Century</h3>
                      <p className="text-gray-700">First documented existence of the temple with the self-manifested Shivalinga. Early stone structures were built around the sacred site.</p>
                    </div>
                  </div>
                  
                  <div className="z-10 order-1 lg:order-2 mb-4 lg:mb-0">
                    <div className="flex items-center justify-center w-10 h-10 bg-temple-saffron rounded-full">
                      <span className="text-white font-bold">1</span>
                    </div>
                  </div>
                </div>
                
                {/* Item 2 */}
                <div className="relative flex flex-col lg:flex-row items-center">
                  <div className="z-10 order-1 mb-4 lg:mb-0">
                    <div className="flex items-center justify-center w-10 h-10 bg-temple-saffron rounded-full">
                      <span className="text-white font-bold">2</span>
                    </div>
                  </div>
                  
                  <div className="lg:w-1/2 lg:pl-8 order-2">
                    <div className="bg-white p-5 rounded-lg shadow-md">
                      <h3 className="text-xl font-bold text-temple-maroon mb-2">16th Century</h3>
                      <p className="text-gray-700">Major expansion of the temple complex with the addition of mandapas, gopurams, and intricate stone carvings by regional rulers.</p>
                    </div>
                  </div>
                </div>
                
                {/* Item 3 */}
                <div className="relative flex flex-col lg:flex-row items-center">
                  <div className="lg:w-1/2 lg:pr-8 lg:text-right order-2 lg:order-1">
                    <div className="bg-white p-5 rounded-lg shadow-md">
                      <h3 className="text-xl font-bold text-temple-maroon mb-2">19th Century</h3>
                      <p className="text-gray-700">Renovation and restoration work carried out after natural damages. Addition of the outer prakaram and enhancement of religious facilities.</p>
                    </div>
                  </div>
                  
                  <div className="z-10 order-1 lg:order-2 mb-4 lg:mb-0">
                    <div className="flex items-center justify-center w-10 h-10 bg-temple-saffron rounded-full">
                      <span className="text-white font-bold">3</span>
                    </div>
                  </div>
                </div>
                
                {/* Item 4 */}
                <div className="relative flex flex-col lg:flex-row items-center">
                  <div className="z-10 order-1 mb-4 lg:mb-0">
                    <div className="flex items-center justify-center w-10 h-10 bg-temple-saffron rounded-full">
                      <span className="text-white font-bold">4</span>
                    </div>
                  </div>
                  
                  <div className="lg:w-1/2 lg:pl-8 order-2">
                    <div className="bg-white p-5 rounded-lg shadow-md">
                      <h3 className="text-xl font-bold text-temple-maroon mb-2">Present Day</h3>
                      <p className="text-gray-700">Modern amenities added while preserving the ancient sanctity. Establishment of charitable trusts, community halls, and expansion of devotee services.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="py-16 bg-white" id="aarti">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Temple Rituals & Aarti" 
            subtitle="Experience the divine traditions and ceremonies performed at our temple"
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center max-w-6xl mx-auto">
            <div className="lg:col-span-3 order-2 lg:order-1">
              <div className="space-y-4 text-gray-700">
                <p>
                  The temple follows Vedic traditions in conducting daily rituals (nityakarma) and special 
                  ceremonies (naimittikakarma). Qualified priests perform these rituals with utmost devotion 
                  and precision.
                </p>
                
                <h3 className="text-xl font-semibold text-temple-maroon mt-6">Daily Aarti Schedule</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <CheckCircle size={18} className="text-temple-saffron mr-2" />
                    <span><strong>Mangala Aarti:</strong> 6:30 AM - Early morning ritual to awaken the deity</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle size={18} className="text-temple-saffron mr-2" />
                    <span><strong>Madhyahna Aarti:</strong> 12:00 PM - Afternoon worship with bhog offering</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle size={18} className="text-temple-saffron mr-2" />
                    <span><strong>Sandhya Aarti:</strong> 7:30 PM - Evening aarti with lamps and flowers</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle size={18} className="text-temple-saffron mr-2" />
                    <span><strong>Shayan Aarti:</strong> 8:00 PM - Night ritual before the deity rests</span>
                  </div>
          
                </div>
                
                <h3 className="text-xl font-semibold text-temple-maroon mt-6">Special Rituals</h3>
                <p>
                  Every Monday, a special Rudrabhishekam is performed to honor Lord Shiva. During auspicious occasions 
                  like Mahashivaratri, elaborate ceremonies including continuous abhishekam and chanting of Vedic mantras 
                  are conducted throughout the day and night.
                </p>
              </div>
            </div>
            
            <div className="lg:col-span-2 order-1 lg:order-2">
              <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
                <iframe 
                  width="100%" 
                  height="100%" 
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
                  title="Temple Aarti Ceremony" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                  className="w-full h-full object-cover"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="py-16 bg-gray-50" id="tours">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Visit Our Temple" 
            subtitle="Plan your spiritual journey to स्वयंभू पालेश्वर मंदिर"
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
            <div>
              <div className="space-y-4 text-gray-700">
                <h3 className="text-xl font-semibold text-temple-maroon">Location & Direction</h3>
                <p>
                  Located in the heart of the city, स्वयंभू पालेश्वर मंदिर is easily accessible by various modes 
                  of transportation. The temple is situated at:
                </p>
                
                <address className="not-italic border-l-4 border-temple-saffron pl-4 py-2">
                Village, Swayambhu Paleshwar Mahadev Mandir Rd,<br />
                 near Dena Bank, Bori Colony, Marol,<br />
                  Andheri East, Mumbai, Maharashtra 400059
                </address>
                
                <h3 className="text-xl font-semibold text-temple-maroon mt-6">Temple Tours</h3>
                <p>
                  Guided tours are available daily, providing insights into the temple's history, architecture, 
                  and religious significance. Tours are conducted in multiple languages by knowledgeable guides 
                  who explain the symbolism behind various elements of the temple.
                </p>
                
                <div className="pt-4">
                  <h3 className="text-xl font-semibold text-temple-maroon">Temple Rules</h3>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>Modest dress is required for all visitors</li>
                    <li>Photography is restricted in certain areas in garbhagriha</li>
                    <li>Mobile phones must be switched off or kept in silent mode</li>
                    <li>Shoes must be removed before entering the temple premises</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div>
              <div className="h-96 rounded-lg overflow-hidden shadow-lg">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3411.5609055772293!2d72.8754908746661!3d19.112151250837766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c81452d45f39%3A0xa2d3ff91b282cd9b!2sSwayambhu%20Paleshwar%20Mahadev%20Mandir%20Devasthan!5e1!3m2!1sen!2sin!4v1745410639509!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{border: 0}} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Temple Location Map"
                ></iframe>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="bg-temple-gold bg-opacity-20 p-4 rounded-lg text-center">
                  <h3 className="font-semibold mb-1 text-temple-maroon">Opening Hours</h3>
                  <p className="text-sm">5:00 AM - 9:00 PM<br />Open all days</p>
                </div>
                
                <div className="bg-temple-gold bg-opacity-20 p-4 rounded-lg text-center">
                  <h3 className="font-semibold mb-1 text-temple-maroon">Contact Number</h3>
                  <p className="text-sm">+91 99206 81945<br />swayambhupaleswar@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Key Facts" 
            subtitle="Important information about स्वयंभू पालेश्वर मंदिर"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="bg-temple-gold bg-opacity-10 rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-temple-maroon rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl">📅</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Founded</h3>
              <p className="text-gray-700">Circa 12th Century CE</p>
            </div>
            
            <div className="bg-temple-gold bg-opacity-10 rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-temple-maroon rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl">🏛️</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Architecture</h3>
              <p className="text-gray-700">Nagara Style Hindu Architecture</p>
            </div>
            
            <div className="bg-temple-gold bg-opacity-10 rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-temple-maroon rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl">🔱</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Main Deity</h3>
              <p className="text-gray-700">Lord Shiva (Swayambhu Linga)</p>
            </div>
            
            <div className="bg-temple-gold bg-opacity-10 rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-temple-maroon rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl">🌟</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Significance</h3>
              <p className="text-gray-700">Self-manifested Shiva Linga</p>
            </div>
            <div className="bg-temple-gold bg-opacity-10 rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-temple-maroon rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl">🕉️</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Ramshila</h3>
              <p className="text-gray-700">Ramlila: Lord Rama's story, drama.</p>
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

export default AboutPage;
