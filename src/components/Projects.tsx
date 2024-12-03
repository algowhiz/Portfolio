import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink, Github, ChevronDown, ChevronUp } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const allProjects = [
  {
    title: 'Sphere Events',
    description:
      'An online event hosting platform where users can create, manage, and host events. Features include ticket generation in PDF format, seamless payment integration, and efficient client management.',
    image: '/project1.png',
    tech: ['Redux', 'Tailwind CSS', 'MERN'],
    github: 'https://github.com/algowhiz/eventsphere-frontend',
    live: 'https://sphere-events.netlify.app/',
  },
  {
    title: 'Thread Aura',
    description:
      'A full-fledged e-commerce website with distinct user interfaces for Admin, Users, and Delivery personnel. Includes OTP verification for delivery, payment gateway integration, and a robust product management system.',
    image: '/project2.png',
    tech: ['Next.js', 'Node.js', 'MongoDB'],
    github: 'https://github.com/algowhiz/ThreadAura',
    live: 'https://thread-aura.netlify.app/categories?category=mens',
  },
  {
    title: 'CodeWhiz Compiler',
    description:
      'An online code compiler platform that supports multiple programming languages. Features real-time execution and sharing capabilities for code snippets.',
    image: '/project3.png',
    tech: ['React', 'Express', 'Piston API'],
    github: 'https://github.com/algowhiz/ThreadAura',
    live: 'https://codewhiz-compiler.netlify.app/',
  },
  {
    title: 'Giphy Clone',
    description:
      'A Giphy clone that allows users to search, browse, and share GIFs. Built with a focus on high-performance and responsive design.',
    image: '/project5.png',
    tech: ['React.js', 'Tailwind CSS'],
    github: 'https://github.com/algowhiz/giphy-clone',
    live: 'https://mk-giphy-3636.netlify.app/',
  },
  {
    title: 'Cozy Reads',
    description:
      'An online bookstore platform offering a wide collection of eBooks and audiobooks. Features include seamless browsing, real-time inventory management, and an integrated payment system.',
    image: '/project7.png',
    tech: ['Redux', 'Tailwind CSS', 'MERN'],
    github: 'https://github.com/algowhiz/CodeWhiz',
    live: 'https://cozy-reads.netlify.app/',
  },
  {
    title: 'Assignment Pro',
    description:
      'A collaborative assignment platform designed for corporate environments. Includes project submission, feedback management, and detailed progress tracking features.',
    image: '/project6.png',
    tech: ['Next.js', 'MongoDB'],
    github: 'https://github.com/algowhiz/ads-dashboard',
    live: 'https://blog-platform.com',
  },
  {
    title: 'Wallet Wings',
    description:
      'A transaction management system with pagination, CSV file upload/download functionality, and seamless transaction control. Features an intuitive interface for managing and tracking financial records efficiently.',
    image: '/project8.png',
    tech: ['React.js', 'MongoDB'],
    github: 'https://github.com/algowhiz/wallet-wings-frontend',
    live: 'https://wallet-wings.netlify.app/',
  },
];


const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const projectsRef = useRef(null);

  const visibleProjects = showAll ? allProjects : allProjects.slice(0, 4);

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.batch('.project-card', {
        start: 'top center+=100',
        end: 'bottom center',
        onEnter: (batch) => {
          gsap.to(batch, {
            opacity: 1,
            x: 0,
            stagger: 0.2,
            duration: 1,
          });
        },
        onLeaveBack: (batch) => {
          gsap.to(batch, {
            opacity: 0,
            x: (index) => (index % 2 === 0 ? -50 : 50),
          });
        },
      });
    }, projectsRef);

    return () => ctx.revert();
  }, [visibleProjects]);

  const handleShowMore = () => {
    setShowAll(true);
    ScrollTrigger.refresh();
  };

  const handleShowLess = () => {
    setShowAll(false);
    ScrollTrigger.refresh();
  };

  const preloadImages = () => {
    allProjects.forEach((project) => {
      const img = new Image();
      img.src = project.image;
    });
  };

  useEffect(() => {
    preloadImages();
  }, []);

  return (
    <section ref={projectsRef} id="projects" className="py-20 bg-[#0a0a0a] text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">Projects</h2>
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-blue-500 opacity-20"></div>

          <div className="space-y-24">
            {visibleProjects.map((project, index) => (
              <div
                key={index}
                className={`project-card project-${index} relative grid md:grid-cols-2 gap-8 items-center ${index % 2 === 0 ? 'md:text-right' : 'md:flex-row-reverse'
                  }`}
              >
                <div className={index % 2 === 0 ? 'md:order-1' : 'md:order-2'}>
                  <img
                    src={project.image}
                    alt={`Image for ${project.title}`}
                    className="w-full h-64 object-cover rounded-lg shadow-xl"
                  />
                </div>

                <div className={index % 2 === 0 ? 'md:order-2' : 'md:order-1'}>
                  <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                  <p className="text-gray-400 mb-6">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-blue-500 bg-opacity-20 text-blue-400 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-400 hover:text-white transition-colors"
                    >
                      <Github className="mr-2" size={20} /> Code
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-400 hover:text-white transition-colors"
                    >
                      <ExternalLink className="mr-2" size={20} /> Live Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {!showAll ? (
            <div className="flex justify-center mt-16">
              <button
                onClick={handleShowMore}
                className="flex items-center gap-2 px-6 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors"
              >
                Show More Projects
                <ChevronDown size={20} />
              </button>
            </div>
          ) : (
            <div className="flex justify-center mt-16">
              <button
                onClick={handleShowLess}
                className="flex items-center gap-2 px-6 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors"
              >
                Show Less Projects
                <ChevronUp size={20} />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
