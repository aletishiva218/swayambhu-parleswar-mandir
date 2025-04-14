
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SectionTitle from '@/components/SectionTitle';
import { Calendar, Check } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const PujaPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    pujaType: '',
    date: '',
    message: '',
  });
  
  const [submitted, setSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!formData.name || !formData.email || !formData.mobile || !formData.pujaType || !formData.date) {
      toast({
        title: "Error",
        description: "Please fill all required fields",
        variant: "destructive",
      });
      return;
    }
    
    // Show success message (in a real app, this would submit to a backend)
    toast({
      title: "Booking Successful",
      description: `Your ${formData.pujaType} has been scheduled for ${formData.date}. We'll contact you shortly to confirm.`,
    });
    
    setSubmitted(true);
  };
  
  const pujaOptions = [
    { value: '', label: 'Select Puja Type', disabled: true },
    { value: 'Rudrabhishek', label: 'Rudrabhishek' },
    { value: 'Laghu Rudra', label: 'Laghu Rudra' },
    { value: 'Mahamrityunjay Jaap', label: 'Mahamrityunjay Jaap' },
    { value: 'Navagraha Shanti', label: 'Navagraha Shanti' },
    { value: 'Satyanarayana Puja', label: 'Satyanarayana Puja' },
    { value: 'Ganpati Puja', label: 'Ganpati Puja' },
    { value: 'Griha Pravesh', label: 'Griha Pravesh' },
    { value: 'Birthday Puja', label: 'Birthday Puja' },
    { value: 'Wedding Rituals', label: 'Wedding Rituals' },
  ];
  
  return (
    <>
      <Header />
      
      <div className="pt-24 pb-16 bg-temple-gold bg-opacity-10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-temple-maroon mb-6">Online Puja Booking</h1>
            <p className="text-xl text-gray-700 mb-8 font-light">
              Book your puja services conveniently online for various ceremonies and rituals.
            </p>
          </div>
        </div>
      </div>
      
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div>
              <SectionTitle 
                title="Book a Puja" 
                subtitle="Fill in the form to schedule your preferred puja service"
              />
              
              {submitted ? (
                <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-md">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <Check className="h-5 w-5 text-green-500" />
                    </div>
                    <div className="ml-3">
                      <h3 className="text-lg font-medium text-green-800">Booking Successful</h3>
                      <div className="mt-2 text-green-700">
                        <p>Your {formData.pujaType} has been scheduled for {formData.date}.</p>
                        <p className="mt-2">Our priest will contact you shortly to confirm the details and provide further instructions.</p>
                      </div>
                      <div className="mt-4">
                        <button
                          type="button"
                          onClick={() => {
                            setSubmitted(false);
                            setFormData({
                              name: '',
                              email: '',
                              mobile: '',
                              pujaType: '',
                              date: '',
                              message: '',
                            });
                          }}
                          className="btn-primary text-sm"
                        >
                          Book Another Puja
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="temple-input"
                      required
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="temple-input"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="mobile" className="block text-sm font-medium text-gray-700 mb-1">
                        Mobile Number *
                      </label>
                      <input
                        type="tel"
                        id="mobile"
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleChange}
                        className="temple-input"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="pujaType" className="block text-sm font-medium text-gray-700 mb-1">
                      Puja Type *
                    </label>
                    <select
                      id="pujaType"
                      name="pujaType"
                      value={formData.pujaType}
                      onChange={handleChange}
                      className="temple-input"
                      required
                    >
                      {pujaOptions.map((option) => (
                        <option key={option.value} value={option.value} disabled={option.disabled}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
                      Preferred Date *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <Calendar size={16} className="text-gray-500" />
                      </div>
                      <input
                        type="date"
                        id="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        className="temple-input pl-10"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Additional Message (Optional)
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="temple-input"
                      placeholder="Any specific requirements or details you want to share..."
                    ></textarea>
                  </div>
                  
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="btn-primary w-full md:w-auto"
                    >
                      Book Puja
                    </button>
                  </div>
                </form>
              )}
            </div>
            
            <div className="mt-10 lg:mt-0">
              <SectionTitle 
                title="Puja Services" 
                subtitle="Learn about the various puja services we offer"
              />
              
              <div className="space-y-6">
                <div className="border border-gray-200 rounded-lg overflow-hidden">
                  <div className="bg-temple-maroon text-white p-4 font-medium">
                    Rudrabhishek
                  </div>
                  <div className="p-4">
                    <p className="text-gray-700 mb-3">
                      A powerful ritual dedicated to Lord Shiva, involving bathing the Shivalinga with various sacred substances 
                      while chanting Vedic mantras.
                    </p>
                    <div className="flex justify-between">
                      <span className="text-sm">Duration: 3 hours</span>
                      <span className="font-medium">₹ 5,100</span>
                    </div>
                  </div>
                </div>
                
                <div className="border border-gray-200 rounded-lg overflow-hidden">
                  <div className="bg-temple-maroon text-white p-4 font-medium">
                    Mahamrityunjay Jaap
                  </div>
                  <div className="p-4">
                    <p className="text-gray-700 mb-3">
                      A sacred chanting ritual to overcome health issues, fear of death, and obstacles. The ritual promotes 
                      longevity, good health, and protection.
                    </p>
                    <div className="flex justify-between">
                      <span className="text-sm">Duration: 2 hours</span>
                      <span className="font-medium">₹ 3,100</span>
                    </div>
                  </div>
                </div>
                
                <div className="border border-gray-200 rounded-lg overflow-hidden">
                  <div className="bg-temple-maroon text-white p-4 font-medium">
                    Satyanarayana Puja
                  </div>
                  <div className="p-4">
                    <p className="text-gray-700 mb-3">
                      A devotional worship ritual performed for Lord Vishnu to seek blessings for prosperity, happiness, 
                      and fulfillment of desires.
                    </p>
                    <div className="flex justify-between">
                      <span className="text-sm">Duration: 2-3 hours</span>
                      <span className="font-medium">₹ 2,100</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 p-5 bg-temple-gold bg-opacity-10 rounded-lg">
                <h3 className="text-xl font-semibold text-temple-maroon mb-3">Important Information</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <Check size={18} className="text-temple-saffron mr-2 mt-1 flex-shrink-0" />
                    <span>Bookings must be made at least 3 days in advance</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={18} className="text-temple-saffron mr-2 mt-1 flex-shrink-0" />
                    <span>All puja materials are provided by the temple</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={18} className="text-temple-saffron mr-2 mt-1 flex-shrink-0" />
                    <span>Rescheduling is allowed with 24 hours notice</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={18} className="text-temple-saffron mr-2 mt-1 flex-shrink-0" />
                    <span>For special puja requirements, please mention in the message field</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={18} className="text-temple-saffron mr-2 mt-1 flex-shrink-0" />
                    <span>Payment can be made online or at the temple counter</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-temple-maroon mb-6">Remote Puja Services</h2>
          <p className="max-w-3xl mx-auto mb-10 text-gray-700">
            Unable to visit the temple in person? We offer remote puja services where our priests will perform 
            the rituals on your behalf and send you the prasad by courier. Contact us for more details.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-14 h-14 bg-temple-saffron bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-temple-saffron">1</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Book Online</h3>
              <p className="text-gray-600 text-sm">Fill the online form with your details and puja requirements</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-14 h-14 bg-temple-saffron bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-temple-saffron">2</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Confirmation Call</h3>
              <p className="text-gray-600 text-sm">Our priest will call to confirm details and provide guidance</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-14 h-14 bg-temple-saffron bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-temple-saffron">3</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Attend or Receive</h3>
              <p className="text-gray-600 text-sm">Visit in person or receive prasad by courier after the ceremony</p>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  );
};

export default PujaPage;
