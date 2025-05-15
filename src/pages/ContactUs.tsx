
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const ContactUs = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle form submission
    // For now, just show an alert
    alert('Your message has been sent. Thank you for contacting us!');
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <div className="pt-16 flex-grow">
        <div className="container mx-auto px-4 py-16">
          <div className="flex items-center mb-8">
            <Button 
              variant="ghost" 
              className="flex items-center text-unblue hover:text-unblue-dark"
              asChild
            >
              <Link to="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
            </Button>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h1 className="text-3xl font-bold mb-6 text-center font-serif">Contact Us</h1>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <div>
                <h2 className="text-2xl font-semibold mb-4 font-serif">Get in Touch</h2>
                <p className="text-gray-700 mb-6 font-serif">
                  Have questions about the Emergency Leave Application process? Our team is here to help.
                  Fill out the form, and we'll get back to you as soon as possible.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <div className="bg-unblue text-white p-3 rounded-full mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium font-serif">Phone</h3>
                      <p className="text-gray-600 font-serif">+1-212-555-1212</p>
                      <p className="text-gray-600 font-serif">Available 24/7 for emergency inquiries</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-unblue text-white p-3 rounded-full mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                        <polyline points="22,6 12,13 2,6"></polyline>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium font-serif">Email</h3>
                      <p className="text-gray-600 font-serif">emergency@un.org</p>
                      <p className="text-gray-600 font-serif">We'll respond as quickly as possible</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-unblue text-white p-3 rounded-full mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium font-serif">Address</h3>
                      <p className="text-gray-600 font-serif">United Nations Headquarters</p>
                      <p className="text-gray-600 font-serif">New York, NY 10017, USA</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-4 rounded border border-gray-200">
                  <h3 className="font-medium mb-2 font-serif">Emergency Hotline</h3>
                  <p className="text-gray-700 font-serif">
                    For urgent emergency leave requests, please call our 24/7 hotline:
                    <span className="block font-bold mt-1">+1-800-UN-EMERGENCY</span>
                  </p>
                </div>
              </div>
              
              <div>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block mb-2 font-medium text-gray-700 font-serif">Full Name</label>
                    <Input id="name" className="w-full p-3" placeholder="Your full name" required />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block mb-2 font-medium text-gray-700 font-serif">Email Address</label>
                    <Input id="email" type="email" className="w-full p-3" placeholder="Your email address" required />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block mb-2 font-medium text-gray-700 font-serif">Subject</label>
                    <Input id="subject" className="w-full p-3" placeholder="Subject of your inquiry" required />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block mb-2 font-medium text-gray-700 font-serif">Message</label>
                    <Textarea id="message" className="w-full p-3 min-h-[150px]" placeholder="Your message" required />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-unblue hover:bg-unblue-dark text-white font-medium py-3 font-serif"
                  >
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
            
            <div className="mt-12">
              <h2 className="text-2xl font-semibold mb-4 text-center font-serif">Visit Our Offices</h2>
              <div className="aspect-ratio w-full h-[400px] rounded-lg overflow-hidden">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2663989523134!2d-73.97026612386194!3d40.7508930713231!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2591ce0574791%3A0x9a7593bdd079fe15!2sUnited%20Nations%20Headquarters!5e0!3m2!1sen!2sus!4v1716321427594!5m2!1sen!2sus" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;
