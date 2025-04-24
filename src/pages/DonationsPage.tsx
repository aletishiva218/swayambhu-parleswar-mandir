
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SectionTitle from '@/components/SectionTitle';
import { Check, Heart } from 'lucide-react';

const DonationsPage = () => {
  return (
    <>
      <Header />
      
      <div className="pt-24 pb-16 bg-temple-gold bg-opacity-10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-temple-maroon mb-6">Support Our Temple</h1>
            <p className="text-xl text-gray-700 mb-8 font-light">
              Your generous contributions help sustain and expand the spiritual services of स्वयंभू पालेश्वर मंदिर.
            </p>
          </div>
        </div>
      </div>
      
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Ways to Contribute" 
            subtitle="Support the temple through various donation options"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 transition-transform hover:-translate-y-1 hover:shadow-lg">
              <div className="bg-temple-gold p-4 text-center">
                <Heart className="mx-auto text-temple-maroon h-10 w-10 mb-2" />
                <h3 className="text-xl font-bold text-temple-maroon">General Donation</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-6">
                  Support the daily operations, maintenance, and services of the temple with a general donation of any amount.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <Check size={18} className="text-temple-saffron mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Daily puja and rituals</span>
                  </div>
                  <div className="flex items-start">
                    <Check size={18} className="text-temple-saffron mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">For Medical Facilities</span>
                  </div>
                  <div className="flex items-start">
                    <Check size={18} className="text-temple-saffron mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Support for priest for dharma rakshana, prachar & prasad</span>
                  </div>
                  <div className="flex items-start">
                    <Check size={18} className="text-temple-saffron mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Temple maintenance</span>
                  </div>
                  <div className="flex items-start">
                    <Check size={18} className="text-temple-saffron mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Support for priests</span>
                  </div>
                </div>
                <button className="btn-primary w-full mt-6">Donate Now</button>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 transition-transform hover:-translate-y-1 hover:shadow-lg">
              <div className="bg-temple-gold p-4 text-center">
                <Heart className="mx-auto text-temple-maroon h-10 w-10 mb-2" />
                <h3 className="text-xl font-bold text-temple-maroon">Annadanam</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-6">
                  Contribute to our food distribution program that provides meals to devotees, pilgrims, and those in need.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <Check size={18} className="text-temple-saffron mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Daily prasad distribution</span>
                  </div>
                  <div className="flex items-start">
                    <Check size={18} className="text-temple-saffron mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Festival feasts</span>
                  </div>
                  <div className="flex items-start">
                    <Check size={18} className="text-temple-saffron mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Community meals</span>
                  </div>
                </div>
                <button className="btn-primary w-full mt-6">Sponsor Meals</button>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 transition-transform hover:-translate-y-1 hover:shadow-lg">
              <div className="bg-temple-gold p-4 text-center">
                <Heart className="mx-auto text-temple-maroon h-10 w-10 mb-2" />
                <h3 className="text-xl font-bold text-temple-maroon">Temple Development</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-6">
                  Support temple expansion, renovation projects, and the creation of new facilities for devotees.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <Check size={18} className="text-temple-saffron mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Infrastructure improvement</span>
                  </div>
                  <div className="flex items-start">
                    <Check size={18} className="text-temple-saffron mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Festival Feasts: Daily & Weekly with Sponsar</span>
                  </div>
                  <div className="flex items-start">
                    <Check size={18} className="text-temple-saffron mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">New community hall</span>
                  </div>
                  <div className="flex items-start">
                    <Check size={18} className="text-temple-saffron mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Garden development</span>
                  </div>
                </div>
                <button className="btn-primary w-full mt-6">Contribute</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Bank Details & UPI" 
            subtitle="For direct transfers and digital payments"
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
            <div>
              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="text-xl font-semibold text-temple-maroon mb-4">Bank Transfer Details</h3>
                <div className="space-y-3">
                  <div className="flex flex-col">
                    <span className="text-gray-500 text-sm">Account Name</span>
                    <span className="font-medium">Swayambhu Paleshwar Mahadev Seva Samiti</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-gray-500 text-sm">Account Number</span>
                    <span className="font-medium">12345678901234</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-gray-500 text-sm">IFSC Code</span>
                    <span className="font-medium">SBIN0012345</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-gray-500 text-sm">Bank Name</span>
                    <span className="font-medium">State Bank of India</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-gray-500 text-sm">Branch</span>
                    <span className="font-medium">Main Branch, City Center</span>
                  </div>
                </div>
                <p className="mt-6 text-sm text-gray-600">
                  Please include your name and contact number in the transaction remarks for acknowledgment.
                </p>
              </div>
              
              <div className="mt-6 bg-white rounded-lg shadow p-6">
                <h3 className="text-xl font-semibold text-temple-maroon mb-4">Tax Benefits</h3>
                <p className="text-gray-700">
                  All donations to the temple trust are eligible for tax exemption under Section 80G 
                  of the Income Tax Act. An official receipt will be provided for all contributions.
                </p>
              </div>
            </div>
            
            <div>
              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="text-xl font-semibold text-temple-maroon mb-4">UPI Payment</h3>
                <div className="flex flex-col items-center">
                  <div className="w-48 h-48 bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-gray-600">QR Code Placeholder</span>
                  </div>
                  <p className="text-center mb-4">
                    Scan the QR code or use the UPI ID below
                  </p>
                  <div className="bg-gray-100 px-4 py-2 rounded-md text-center font-medium mb-2 w-full">
                    temple@upi
                  </div>
                  <p className="text-sm text-gray-500 text-center">
                    Supported by all UPI apps: Google Pay, PhonePe, Paytm, etc.
                  </p>
                </div>
              </div>
              
              <div className="mt-6 bg-white rounded-lg shadow p-6">
                <h3 className="text-xl font-semibold text-temple-maroon mb-4">Monthly Donation Programs</h3>
                <p className="text-gray-700 mb-4">
                  Set up recurring donations to provide sustained support for temple activities and services.
                </p>
                <button className="btn-secondary w-full">Set Up Monthly Donation</button>
              </div>
              <div className="mt-6 bg-white rounded-lg shadow p-6">
                <h3 className="text-xl font-semibold text-temple-maroon mb-4">Annually Donation Programs</h3>
                <p className="text-gray-700 mb-4">
                  Set up recurring donations to provide sustained support for temple activities and services.
                </p>
                <button className="btn-secondary w-full">Set Up Annually Donation</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-temple-maroon mb-6">
            "दानम् धर्मः परमः"
          </h2>
          <p className="max-w-3xl mx-auto mb-10 text-gray-700">
            "Charity is the supreme duty." Your contributions help preserve our cultural heritage and spiritual traditions.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="bg-temple-gold bg-opacity-10 p-6 rounded-lg">
              <div className="text-4xl font-bold text-temple-maroon mb-2">50,000+</div>
              <p className="text-gray-700">Annual Visitors</p>
            </div>
            
            <div className="bg-temple-gold bg-opacity-10 p-6 rounded-lg">
              <div className="text-4xl font-bold text-temple-maroon mb-2">500+</div>
              <p className="text-gray-700">Meals Served Weekly</p>
            </div>
            
            <div className="bg-temple-gold bg-opacity-10 p-6 rounded-lg">
              <div className="text-4xl font-bold text-temple-maroon mb-2">150+</div>
              <p className="text-gray-700">Community Programs</p>
            </div>
            
            <div className="bg-temple-gold bg-opacity-10 p-6 rounded-lg">
              <div className="text-4xl font-bold text-temple-maroon mb-2">125+</div>
              <p className="text-gray-700">Years of Service</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Other Ways to Support" 
            subtitle="Contribute to the temple through various services and in-kind donations"
            centered
          />
          <h3 className="text-xl font-semibold text-temple-maroon mb-3 text-center">All kinds of Services</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-temple-maroon mb-3">Volunteer Service</h3>
              <p className="text-gray-700 mb-4">
                Contribute your time and skills to help with temple activities, events, and maintenance.
              </p>
              <button className="text-temple-saffron hover:text-temple-maroon transition-colors font-medium">
                Learn More &rarr;
              </button>
            </div>
            
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-temple-maroon mb-3">Sponsor a Ritual</h3>
              <p className="text-gray-700 mb-4">
                Support special pujas, festivals, and ceremonies by sponsoring the required materials.
              </p>
              <button className="text-temple-saffron hover:text-temple-maroon transition-colors font-medium">
                View Opportunities &rarr;
              </button>
            </div>
            
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-temple-maroon mb-3">In-Kind Donations</h3>
              <p className="text-gray-700 mb-4">
                Donate items needed for temple operations such as flowers, oil, ghee, and other supplies.
              </p>
              <button className="text-temple-saffron hover:text-temple-maroon transition-colors font-medium">
                See Requirements &rarr;
              </button>
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

export default DonationsPage;
