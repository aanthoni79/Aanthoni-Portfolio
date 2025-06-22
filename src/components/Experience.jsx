import React, { useEffect, useRef } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";
import "../assets/glass-ui.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e) => {
      const rect = card.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      card.style.setProperty('--x', x);
      card.style.setProperty('--y', y);
    };

    card.addEventListener('mousemove', handleMouseMove);
    return () => card.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "none",
        border: "none",
        boxShadow: "none",
        padding: 0,
      }}
      contentArrowStyle={{ 
        borderRight: "7px solid hsla(var(--hue2), 12%, 20%, 0.5)",
        filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.2))"
      }}
      date={experience.date}
      iconStyle={{ 
        background: "transparent",
        boxShadow: "none",
        border: "none",
      }}
      icon={
        <div className='flex justify-center items-center w-full h-full company-icon-wrapper'>
          <a 
            href={experience.company_url} 
            target="_blank"
            rel="noopener noreferrer"
            className="w-full h-full flex items-center justify-center transition-transform duration-300 hover:scale-110 company-icon"
          >
            <img
              src={experience.icon}
              alt={experience.company_name}
              className='w-[60%] h-[60%] object-contain'
            />
          </a>
        </div>
      }
    >
      <div ref={cardRef} className="glass-card experience-card">
        <span className="shine"></span>
        <span className="glow"></span>
        
        <div className="experience-content">
          <h3 className="experience-company">
            <a 
              href={experience.company_url} 
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              {experience.company_name}
            </a>
          </h3>
          <p className="experience-title">{experience.title}</p>
          
          <ul className="experience-points">
            {experience.points.map((point, index) => (
              <li
                key={`experience-point-${index}`}
                className="experience-point"
              >
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  useEffect(() => {
    document.documentElement.style.setProperty('--hue1', '255');
    document.documentElement.style.setProperty('--hue2', '222');
  }, []);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          What I have done so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Work Experience
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
