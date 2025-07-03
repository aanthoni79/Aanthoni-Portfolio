import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion';
import { styles } from '../styles';
import { github } from '../assets';
import { SectionWrapper } from '../hoc';
import { projects } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { useRef, useEffect, useState } from 'react';

const ProjectCard = ({ index, name, description, tags, image, source_code_link }) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: false, margin: "-100px" });
  
  return (
    <motion.div
      ref={cardRef}
      className="project-card relative w-full h-[450px]"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
    >
      <div className='group relative w-full h-full rounded-2xl p-1 bg-gradient-to-br from-[#915EFF] via-[#4731D3] to-[#24235C] shadow-xl
                      transition-all duration-500 hover:scale-[1.02] overflow-hidden'>
        <div className='absolute inset-1 bg-tertiary rounded-2xl overflow-hidden'>
          {/* Background Image with Parallax */}
          <div className='absolute inset-0 transition-transform duration-500 group-hover:scale-110'>
            <img
              src={image}
              alt={name}
              className='w-full h-full object-cover'
            />
          </div>

          {/* Content Overlay */}
          <div className='absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent
                          flex flex-col justify-between p-8 translate-y-8 group-hover:translate-y-0 transition-transform duration-500'>
            {/* Tags */}
            <div className='flex flex-wrap gap-2 mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500'>
              {tags.map((tag) => (
                <span
                  key={tag.name}
                  className={`px-3 py-1.5 rounded-full text-[13px] font-medium tracking-wide bg-black/30 backdrop-blur-sm
                             border border-${tag.color} text-${tag.color}`}
                >
                  #{tag.name}
                </span>
              ))}
            </div>

            <div>
              {/* Project Title with Glowing Effect */}
              <h3 className='text-white font-semibold text-[22px] mb-2 relative tracking-tight'>
                <span className='relative z-10'>{name}</span>
                <span className='absolute inset-0 blur-lg bg-[#915EFF] opacity-30'></span>
              </h3>

              {/* Description */}
              <p className='text-gray-300 text-[15px] leading-relaxed font-normal opacity-0 group-hover:opacity-100 transition-opacity duration-500 line-clamp-3'>
                {description}
              </p>
            </div>

            {/* GitHub Link */}
            <motion.div
              className='absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm
                         flex items-center justify-center cursor-pointer border border-white/20
                         hover:bg-white/20 transition-colors duration-300'
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => window.open(source_code_link, "_blank")}
            >
              <img src={github} alt='github' className='w-1/2 h-1/2 object-contain' />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

const Works = () => {
  const containerRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Smooth spring animation for parallax effect
  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
  const smoothProgress = useSpring(scrollYProgress, springConfig);

  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange(setScrollProgress);
    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <>
      <div className='relative z-0 w-full min-h-[120vh] bg-primary overflow-hidden'>
        {/* Background Elements */}
        <div className='absolute inset-0 -z-10 opacity-30'>
          <div className='absolute inset-0 bg-gradient-to-b from-tertiary via-transparent to-tertiary'></div>
          <div 
            className='absolute w-[800px] h-[800px] rounded-full bg-gradient-to-r from-[#915EFF] to-[#4731D3] blur-[120px]'
            style={{
              left: '50%',
              top: '50%',
              transform: `translate(-50%, -50%) translate(${scrollProgress * 100}px, 0px)`,
            }}
          ></div>
        </div>

        {/* Section Header */}
        <motion.div 
          variants={textVariant()}
          className='relative pt-32'
          style={{
            transform: scrollProgress > 0.1 ? `translateY(${(scrollProgress - 0.1) * -100}px)` : 'none',
            opacity: 1 - scrollProgress * 2
          }}
        >
          <h2 className={`${styles.sectionHeadText} text-center font-semibold tracking-tight`}>Projects</h2>
        </motion.div>

        {/* Projects Grid Container */}
        <div 
          ref={containerRef}
          className='mt-24 w-full px-4 sm:px-8 pb-24'
        >
          <div className='grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 max-w-7xl mx-auto'>
            {projects.map((project, index) => (
              <ProjectCard 
                key={`project-${index}`}
                index={index}
                {...project}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default SectionWrapper(Works, "work");