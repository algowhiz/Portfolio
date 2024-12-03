import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, MapPin, Send } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const contactRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.contact-content', {
        scrollTrigger: {
          trigger: contactRef.current,
          start: 'top center',
        },
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
      });
    }, contactRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={contactRef} id="contact" className="py-20 bg-[#111111] text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="contact-content text-3xl md:text-4xl font-bold mb-8 text-center">
            Get In Touch
          </h2>
          <div className="contact-content grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-lg text-gray-300 mb-8">
                I'm always open to new opportunities and collaborations. Feel free to reach out!
              </p>
              <div className="space-y-4">
                <div className="flex items-center text-gray-300">
                  <Mail className="mr-4" />
                  <a href="mailto:contact@example.com" className="hover:text-blue-500 transition-colors">
                    manishkadam4599@gmail.com
                  </a>
                </div>
                <div className="flex items-center text-gray-300">
                  <MapPin className="mr-4" />
                  <span> 📍 Mumbai , Maharashtra</span>
                </div>
              </div>
            </div>
            <form action="https://getform.io/f/anlljyka" method="POST" className="space-y-4">
              <div>
                <input
                  type="text"
                  name='name'
                  placeholder="Your Name"
                  className="w-full px-4 py-2 bg-[#1a1a1a] rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <input
                  type="email"
                  name='email'
                  placeholder="Your Email"
                  className="w-full px-4 py-2 bg-[#1a1a1a] rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <textarea
                name='message'
                  placeholder="Your Message"
                  rows={4}
                  className="w-full px-4 py-2 bg-[#1a1a1a] rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>
              <button
                type="submit"
                name='submit'
                className="flex items-center justify-center w-full px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
              >
                Send Message <Send size={20} className="ml-2" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;