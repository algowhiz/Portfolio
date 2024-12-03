import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  SiJavascript, 
  SiTypescript, 
  SiPython, 
  SiCplusplus,
  SiReact,
  SiNextdotjs,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiGit,
  SiDocker,
  SiGreensock
} from 'react-icons/si';
import { VscVscode } from "react-icons/vsc";
import { RiJavaLine,RiNextjsLine  } from "react-icons/ri";

gsap.registerPlugin(ScrollTrigger);

const techStacks = [
  {
    category: "Languages",
    techs: [
      { name: "JavaScript", icon: <SiJavascript style={{ color: '#F7DF1E', fontSize: '2rem' }} /> },
      { name: "TypeScript", icon: <SiTypescript style={{ color: '#007ACC', fontSize: '2rem' }} /> },
      { name: "Python", icon: <SiPython style={{ color: '#3776AB', fontSize: '2rem' }} /> },
      { name: "Java", icon: <RiJavaLine style={{ color: '#B07219', fontSize: '2rem' }} /> },
      { name: "C++", icon: <SiCplusplus style={{ color: '#00599C', fontSize: '2rem' }} /> }
    ]
  },
  {
    category: "Frontend",
    techs: [
      { name: "React", icon: <SiReact style={{ color: '#61DAFB', fontSize: '2rem' }} /> },
      { name: "Next.js", icon: <RiNextjsLine  style={{ color: '#ffffff', fontSize: '2rem' }} /> },
      { name: "HTML5", icon: <SiHtml5 style={{ color: '#E34F26', fontSize: '2rem' }} /> },
      { name: "CSS3", icon: <SiCss3 style={{ color: '#1572B6', fontSize: '2rem' }} /> },
      { name: "Tailwind", icon: <SiTailwindcss style={{ color: '#06B6D4', fontSize: '2rem' }} /> }
    ]
  },
  {
    category: "Backend",
    techs: [
      { name: "Node.js", icon: <SiNodedotjs style={{ color: '#339933', fontSize: '2rem' }} /> },
      { name: "Express", icon: <SiExpress style={{ color: '#FFFFFF', fontSize: '2rem' }} /> },
      { name: "MongoDB", icon: <SiMongodb style={{ color: '#47A248', fontSize: '2rem' }} /> },
      { name: "PostgreSQL", icon: <SiPostgresql style={{ color: '#336791', fontSize: '2rem' }} /> }
    ]
  },
  {
    category: "Tools",
    techs: [
      { name: "Git", icon: <SiGit style={{ color: '#F05032', fontSize: '2rem' }} /> },
      { name: "Docker", icon: <SiDocker style={{ color: '#2496ED', fontSize: '2rem' }} /> },
      { name: "VS Code", icon: <VscVscode style={{ color: '#007ACC', fontSize: '2rem' }} /> },
      { name: "GSAP", icon: <SiGreensock style={{ color: '#88CE02', fontSize: '2rem' }} /> }
    ]
  }
];

const TechStack = () => {
  const stackRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial states for icons
      gsap.set('.tech-icon', { opacity: 1, scale: 1 });

      // Animate section title
      gsap.from('.stack-title', {
        scrollTrigger: {
          trigger: stackRef.current,
          start: 'top center+=100',
        },
        y: 50,
        opacity: 0,
        duration: 1,
      });

      // Animate stack categories
      gsap.from('.stack-category', {
        scrollTrigger: {
          trigger: stackRef.current,
          start: 'top center+=50',
        },
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
      });

      // Animate tech icons
      gsap.from('.tech-icon', {
        scrollTrigger: {
          trigger: stackRef.current,
          start: 'top center',
        },
        scale: 0.5, // Set a visible starting scale
        opacity: 0, // Make sure icons are visible after animation
        duration: 0.5,
        stagger: 0.1,
        ease: 'back.out(1.7)',
      });
    }, stackRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={stackRef} className="py-20 bg-[#0a0a0a] text-white">
      <div className="container mx-auto px-4">
        <h2 className="stack-title text-3xl md:text-4xl font-bold mb-16 text-center">
          Tech Stack
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {techStacks.map((stack, index) => (
            <div
              key={index}
              className="stack-category bg-[#111111] p-6 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300"
            >
              <h3 className="text-xl font-bold text-center mb-6">{stack.category}</h3>
              <div className="grid grid-cols-2 gap-6">
                {stack.techs.map((tech, i) => (
                  <div key={i} className="flex flex-col items-center group">
                    <div className="tech-icon text-4xl mb-2 transform transition-all duration-300 group-hover:scale-110">
                      {tech.icon}
                    </div>
                    <span className="text-sm text-gray-400 group-hover:text-white transition-colors duration-300">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
