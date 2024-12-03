import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-scroll';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const aboutRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.about-content', {
        scrollTrigger: {
          trigger: aboutRef.current,
          start: 'top center',
        },
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
      });
    }, aboutRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={aboutRef} id="about" className="py-20 bg-[#111111] text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="about-content text-3xl md:text-4xl font-bold mb-8">About Me</h2>
          <div className="about-content grid md:grid-cols-2 gap-12">
            <div>
              <img
                src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97"
                alt="Manish Kadam"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div>
              <p className="text-lg text-gray-300 mb-6">
                Hi, I'm Manish Kadam, a passionate Full Stack Developer with a keen eye for design and a
                love for creating seamless user experiences. I specialize in both frontend and backend
                development, bringing ideas to life through clean and efficient code. With expertise in
                React, TypeScript, Node.js, and modern web technologies, I build dynamic and responsive
                applications that users love to interact with.
              </p>
              <Link
                to='contact'
                className='md:block flex justify-center items-center'
              >
                <button className="contact-btn py-2 px-3 mt-2 text-lg font-semibold text-white bg-[#FF5722] border-2 border-[#FF5722] rounded-xl transition-all duration-300 hover:bg-transparent hover:text-[#FF5722] hover:border-[#FF5722]">
                  Contact Me
                </button>
              </Link>

            </div>
          </div>
        </div>
      </div>
    </section>

  );
};

export default About;