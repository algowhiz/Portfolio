import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Briefcase, GraduationCap, Award } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const timelineData = [
  {
    title: "Senior Full Stack Developer",
    company: "Tech Company",
    date: "2022 - Present",
    description: "Leading MERN stack development, implementing microservices architecture, and mentoring junior developers.",
    icon: <Briefcase />,
  },
  {
    title: "Full Stack Developer",
    company: "Digital Agency",
    date: "2020 - 2022",
    description: "Built scalable web applications using Next.js, Node.js, and MongoDB. Implemented CI/CD pipelines.",
    icon: <Briefcase />,
  },
  {
    title: "Frontend Developer",
    company: "Startup",
    date: "2018 - 2020",
    description: "Developed responsive web applications using React and modern JavaScript frameworks.",
    icon: <Briefcase />,
  },
  {
    title: "Computer Science Degree",
    company: "University",
    date: "2014 - 2018",
    description: "Bachelor's degree in Computer Science with focus on web technologies and software engineering.",
    icon: <GraduationCap />,
  }
];

const Timeline = () => {
  const timelineRef = useRef(null);

  return (
    <section ref={timelineRef} className="py-20 bg-[#111111] text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Experience Timeline</h2>
        <VerticalTimeline lineColor="#1a1a1a">
          {timelineData.map((item, index) => (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element"
              contentStyle={{ background: '#1a1a1a', color: '#fff' }}
              contentArrowStyle={{ borderRight: '7px solid #1a1a1a' }}
              date={item.date}
              iconStyle={{ background: '#3B82F6', color: '#fff' }}
              icon={item.icon}
            >
              <h3 className="text-xl font-bold">{item.title}</h3>
              <h4 className="text-blue-500">{item.company}</h4>
              <p className="text-gray-400 mt-2">{item.description}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default Timeline;