
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SectionTitle from '@/components/SectionTitle';
import { Info, HelpCircle } from 'lucide-react';

const RulesPage = () => {
  return (
    <>
      <Header />
      
      <div className="pt-24 pb-16 bg-temple-gold bg-opacity-10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-temple-maroon mb-6">Temple Rules & FAQs</h1>
            <p className="text-xl text-gray-700 mb-8 font-light">
              Important guidelines for visitors and answers to commonly asked questions.
            </p>
          </div>
        </div>
      </div>
      
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Temple Rules" 
            subtitle="Guidelines for a respectful and spiritual visit"
          />
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              <div className="bg-gray-50 p-5 rounded-lg border-l-4 border-temple-saffron">
                <h3 className="text-lg font-semibold text-temple-maroon mb-2">Dress Code</h3>
                <p className="text-gray-700">
                  Visitors are requested to dress modestly and respectfully. Men should avoid wearing shorts, 
                  sleeveless shirts, or hats. Women should avoid revealing clothes, shorts, or sleeveless tops. 
                  Traditional Indian attire is appreciated but not mandatory.
                </p>
              </div>
              
              <div className="bg-gray-50 p-5 rounded-lg border-l-4 border-temple-saffron">
                <h3 className="text-lg font-semibold text-temple-maroon mb-2">Photography</h3>
                <p className="text-gray-700">
                  Photography is not permitted inside the main sanctum. Photography for personal use is allowed 
                  in other areas of the temple complex. Commercial photography or videography requires prior permission 
                  from the temple administration.
                </p>
              </div>
              
              <div className="bg-gray-50 p-5 rounded-lg border-l-4 border-temple-saffron">
                <h3 className="text-lg font-semibold text-temple-maroon mb-2">Mobile Phones</h3>
                <p className="text-gray-700">
                  Mobile phones must be switched off or kept in silent mode inside the temple. Using mobile phones 
                  for calls is not permitted near the sanctum. Please be mindful of other devotees during your visit.
                </p>
              </div>
              
              <div className="bg-gray-50 p-5 rounded-lg border-l-4 border-temple-saffron">
                <h3 className="text-lg font-semibold text-temple-maroon mb-2">Footwear</h3>
                <p className="text-gray-700">
                  Shoes and slippers must be removed before entering the temple premises. Designated shoe racks are 
                  available near the entrance. Please keep your footwear at the designated areas only.
                </p>
              </div>
              
              <div className="bg-gray-50 p-5 rounded-lg border-l-4 border-temple-saffron">
                <h3 className="text-lg font-semibold text-temple-maroon mb-2">Offerings</h3>
                <p className="text-gray-700">
                  Devotees are welcome to bring traditional offerings like flowers, fruits, and sweets. Outside food 
                  items are not allowed inside the temple. The temple provides prasad for all visitors after darshan.
                </p>
              </div>
              
              <div className="bg-gray-50 p-5 rounded-lg border-l-4 border-temple-saffron">
                <h3 className="text-lg font-semibold text-temple-maroon mb-2">Queue System</h3>
                <p className="text-gray-700">
                  Please follow the queue system for darshan. Special arrangements are made for elderly, differently-abled, 
                  and devotees with small children. Temple volunteers are available to assist you if needed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Frequently Asked Questions" 
            subtitle="Common questions about the temple and its services"
          />
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-start">
                  <div className="mr-4">
                    <HelpCircle size={24} className="text-temple-saffron" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-temple-maroon mb-2">What are the temple timings?</h3>
                    <p className="text-gray-700">
                      The temple is open from 5:00 AM to 12:00 PM in the morning and from 4:00 PM to 9:00 PM in the evening.
                      The temple is open all days of the week including weekends and public holidays.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-start">
                  <div className="mr-4">
                    <HelpCircle size={24} className="text-temple-saffron" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-temple-maroon mb-2">How can I book special pujas?</h3>
                    <p className="text-gray-700">
                      Special pujas can be booked either in person at the temple office or online through our website's 
                      Puja Booking page. We request devotees to book at least 3 days in advance for special pujas.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-start">
                  <div className="mr-4">
                    <HelpCircle size={24} className="text-temple-saffron" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-temple-maroon mb-2">Is there accommodation available near the temple?</h3>
                    <p className="text-gray-700">
                      The temple trust operates a guest house for pilgrims with limited rooms. These can be booked in advance 
                      through the temple office. Additionally, there are several hotels and lodges in the vicinity catering to 
                      different budgets.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-start">
                  <div className="mr-4">
                    <HelpCircle size={24} className="text-temple-saffron" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-temple-maroon mb-2">Are there any facilities for the elderly or differently-abled?</h3>
                    <p className="text-gray-700">
                      Yes, the temple has wheelchair ramps and separate queues for elderly and differently-abled devotees. 
                      Wheelchairs are available free of charge at the entrance. Temple volunteers are also available to 
                      assist those who need help.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-start">
                  <div className="mr-4">
                    <HelpCircle size={24} className="text-temple-saffron" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-temple-maroon mb-2">What are the major festivals celebrated at the temple?</h3>
                    <p className="text-gray-700">
                      The major festivals celebrated at the temple include Mahashivaratri, Navratri, Diwali, Janmashtami, 
                      and the temple's annual foundation day. Special rituals, cultural programs, and community meals are 
                      organized during these festivals.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-start">
                  <div className="mr-4">
                    <HelpCircle size={24} className="text-temple-saffron" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-temple-maroon mb-2">How can I volunteer at the temple?</h3>
                    <p className="text-gray-700">
                      We welcome volunteers who wish to contribute their time and skills. You can register as a volunteer 
                      at the temple office or through our website. Volunteers can help with various activities like guiding 
                      visitors, assisting with events, or supporting administrative tasks.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <div className="bg-temple-gold bg-opacity-10 p-6 rounded-lg">
              <div className="flex justify-center mb-4">
                <Info size={32} className="text-temple-maroon" />
              </div>
              <h2 className="text-2xl font-bold text-temple-maroon mb-4">Have More Questions?</h2>
              <p className="text-gray-700 mb-6">
                If you have any other questions or need further information about the temple and its services, 
                please feel free to contact us.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a href="/contact" className="btn-primary">Contact Us</a>
                <a href="tel:+919876543210" className="btn-secondary">Call Helpline</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  );
};

export default RulesPage;
