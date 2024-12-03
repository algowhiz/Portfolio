import { useEffect, useRef } from 'react';
import { Github, Linkedin, ChevronDown } from 'lucide-react';
import { Link } from 'react-scroll';
import gsap from 'gsap';

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-content', {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power4.out',
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} id="home" className="h-screen bg-[#0a0a0a] text-white flex items-center">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="hero-content text-5xl md:text-7xl font-bold mb-6">
            Full Stack MERN Developer
          </h1>
          <p className="hero-content text-xl md:text-2xl text-gray-400 mb-8">
            Specializing in Next.js, React, Node.js, and MongoDB
          </p>
          <div className="hero-content flex justify-center space-x-6 mb-12">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition-colors"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition-colors"
            >
              <Linkedin size={24} />
            </a>
          </div>
          <Link
            to="about"
            smooth={true}
            className="hero-content inline-block animate-bounce cursor-pointer"
          >
            <ChevronDown size={32} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;