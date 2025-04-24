
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SectionTitle from '@/components/SectionTitle';
import { MapPin, Phone, Mail, Clock, Check } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [submitted, setSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill all required fields",
        variant: "destructive",
      });
      return;
    }
    
    // Show success message (in a real app, this would submit to a backend)
    toast({
      title: "Message Sent",
      description: "Thank you for contacting us. We will get back to you soon.",
    });
    
    setSubmitted(true);
  };
  
  return (
    <>
      <Header />
      
      <div className="pt-24 pb-16 bg-temple-gold bg-opacity-10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-temple-maroon mb-6">Contact Us</h1>
            <p className="text-xl text-gray-700 mb-8 font-light">
              Reach out to us with your questions, feedback, or to inquire about temple services.
            </p>
          </div>
        </div>
      </div>
      
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div>
              <SectionTitle 
                title="Get in Touch" 
                subtitle="We'd love to hear from you"
              />
              
              {submitted ? (
                <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-md">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <Check className="h-5 w-5 text-green-500" />
                    </div>
                    <div className="ml-3">
                      <h3 className="text-lg font-medium text-green-800">Message Sent!</h3>
                      <div className="mt-2 text-green-700">
                        <p>Thank you for contacting स्वयंभू पालेश्वर मंदिर.</p>
                        <p className="mt-2">Our team will get back to you as soon as possible.</p>
                      </div>
                      <div className="mt-4">
                        <button
                          type="button"
                          onClick={() => {
                            setSubmitted(false);
                            setFormData({
                              name: '',
                              email: '',
                              subject: '',
                              message: '',
                            });
                          }}
                          className="btn-primary text-sm"
                        >
                          Send Another Message
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Name *
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
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="temple-input"
                      placeholder="What is your message regarding?"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="temple-input"
                      required
                      placeholder="Please provide details about your inquiry..."
                    ></textarea>
                  </div>
                  
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="btn-primary"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              )}
            </div>
            
            <div className="mt-10 lg:mt-0">
              <SectionTitle 
                title="Contact Information" 
                subtitle="How to reach us"
              />
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-temple-saffron p-3 rounded-lg text-white mr-4">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-temple-maroon">Address</h3>
                    <address className="not-italic text-gray-700 mt-1">
                    Village, Swayambhu Paleshwar Mahadev Mandir Rd,<br />
                     near Dena Bank, Bori Colony, Marol,<br />
                      Andheri East, Mumbai, Maharashtra 400059
                    </address>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-temple-saffron p-3 rounded-lg text-white mr-4">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-temple-maroon">Phone</h3>
                    <p className="text-gray-700 mt-1">
                      <a href="tel:+919920681945" className="hover:text-temple-saffron">+91 99206 81945</a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-temple-saffron p-3 rounded-lg text-white mr-4">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-temple-maroon">Email</h3>
                    <p className="text-gray-700 mt-1">
                      <a href="mailto:swayambhupaleswar@gmail.com" className="hover:text-temple-saffron">swayambhupaleswar@gmail.com</a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-temple-saffron p-3 rounded-lg text-white mr-4">
                    <Clock size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-temple-maroon">Opening Hours</h3>
                    <div className="text-gray-700 mt-1">
                      <p><strong>Morning:</strong> 6:00 AM - 12:00 PM</p>
                      <p><strong>Evening:</strong> 5:00 PM - 9:00 PM</p>
                      <p className="mt-1 text-sm text-gray-500">Open all days of the week</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 bg-temple-gold bg-opacity-10 p-5 rounded-lg">
                <h3 className="text-lg font-semibold text-temple-maroon mb-3">Need Assistance?</h3>
                <p className="text-gray-700 mb-4">
                  For immediate assistance or to speak with a temple representative, please call our 
                  helpline number during temple hours.
                </p>
                <p className="text-temple-maroon font-semibold">Helpline: +91 99206 81945</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Location & Directions" 
            subtitle="Find your way to स्वयंभू पालेश्वर मंदिर"
            centered
          />
          
          <div className="max-w-6xl mx-auto">
            <div className="h-96 rounded-lg overflow-hidden shadow-lg mb-8">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3411.5610101591938!2d72.87549087520625!3d19.112146182099895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c81452d45f39%3A0xa2d3ff91b282cd9b!2sSwayambhu%20Paleshwar%20Mahadev%20Mandir%20Devasthan!5e1!3m2!1sen!2sin!4v1745494955464!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{border: 0}} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Temple Location Map"
              ></iframe>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-temple-maroon mb-3">By Car</h3>
                <p className="text-gray-700">
                  Located just off the main highway. Free parking available for devotees on temple premises. 
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-temple-maroon mb-3">By Public Transport</h3>
                <p className="text-gray-700">
                <b>By road:</b> On Andheri Kurla Road, take a turn at the Marol signal to go towards Radison Blu.<br/>
               <b> By public transport:</b> You can visit us from Blue line metro as well as Aqua line metro by getting down at Marol station. We are at walkable distance from there (200m).
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-temple-maroon mb-3">For Groups</h3>
                <p className="text-gray-700">
                  Special arrangements for large groups and tour buses with Guidance. Contact temple administration in advance 
                  to arrange for group visits.
                </p>
              </div>
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

export default ContactPage;
