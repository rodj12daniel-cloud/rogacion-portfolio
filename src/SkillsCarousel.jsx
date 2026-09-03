import React, {
  useEffect,
  useRef,
  useState,
  useMemo,
  useCallback,
} from 'react';

import { motion, AnimatePresence } from 'framer-motion';

import {
  FaArrowLeft,
  FaArrowRight,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaPhp,
  FaGitAlt,
  FaGithub,
  FaFigma,
} from 'react-icons/fa';

import './SkillsCarousel.css';

const skills = [
  {
    name: 'React',
    category: 'Frontend',
    icon: FaReact,
    description:
      'Building interactive and component-based web applications.',
  },
  {
    name: 'JavaScript',
    category: 'Frontend',
    icon: FaJs,
    description:
      'Creating dynamic and interactive web experiences.',
  },
  {
    name: 'HTML',
    category: 'Frontend',
    icon: FaHtml5,
    description:
      'Building semantic and accessible website structures.',
  },
  {
    name: 'CSS',
    category: 'Frontend',
    icon: FaCss3Alt,
    description:
      'Creating responsive layouts, animations, and modern interfaces.',
  },
  {
    name: 'PHP',
    category: 'Backend',
    icon: FaPhp,
    description:
      'Developing server-side functionality and dynamic websites.',
  },
  {
    name: 'Git',
    category: 'Tools',
    icon: FaGitAlt,
    description:
      'Managing source code and development workflows.',
  },
  {
    name: 'GitHub',
    category: 'Tools',
    icon: FaGithub,
    description:
      'Hosting, managing, and collaborating on projects.',
  },
  {
    name: 'Figma',
    category: 'Design',
    icon: FaFigma,
    description:
      'Designing interfaces and planning user experiences.',
  },
];

function SkillsCarousel({ autoplay = true }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [containerWidth, setContainerWidth] = useState(1200);

  const imageContainerRef = useRef(null);
  const autoplayIntervalRef = useRef(null);

  const skillsLength = useMemo(() => skills.length, []);

  const activeSkill = useMemo(
    () => skills[activeIndex],
    [activeIndex]
  );

  useEffect(() => {
    function handleResize() {
      if (imageContainerRef.current) {
        setContainerWidth(
          imageContainerRef.current.offsetWidth
        );
      }
    }

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleNext = useCallback(() => {
    setActiveIndex(
      (prev) => (prev + 1) % skillsLength
    );

    if (autoplayIntervalRef.current) {
      clearInterval(autoplayIntervalRef.current);
    }
  }, [skillsLength]);

  const handlePrev = useCallback(() => {
    setActiveIndex(
      (prev) =>
        (prev - 1 + skillsLength) % skillsLength
    );

    if (autoplayIntervalRef.current) {
      clearInterval(autoplayIntervalRef.current);
    }
  }, [skillsLength]);

  useEffect(() => {
    if (autoplay) {
      autoplayIntervalRef.current = setInterval(() => {
        setActiveIndex(
          (prev) => (prev + 1) % skillsLength
        );
      }, 4000);
    }

    return () => {
      if (autoplayIntervalRef.current) {
        clearInterval(autoplayIntervalRef.current);
      }
    };
  }, [autoplay, skillsLength]);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'ArrowLeft') {
        handlePrev();
      }

      if (e.key === 'ArrowRight') {
        handleNext();
      }
    };

    window.addEventListener('keydown', handleKey);

    return () => {
      window.removeEventListener('keydown', handleKey);
    };
  }, [handlePrev, handleNext]);

  function calculateGap(width) {
    const minWidth = 768;
    const maxWidth = 1456;
    const minGap = 45;
    const maxGap = 75;

    if (width <= minWidth) {
      return minGap;
    }

    if (width >= maxWidth) {
      return maxGap;
    }

    return (
      minGap +
      (maxGap - minGap) *
        ((width - minWidth) /
          (maxWidth - minWidth))
    );
  }

  function getSkillStyle(index) {
    const gap = calculateGap(containerWidth);

    const isActive = index === activeIndex;

    const isLeft =
      (activeIndex - 1 + skillsLength) %
        skillsLength ===
      index;

    const isRight =
      (activeIndex + 1) % skillsLength === index;

    if (isActive) {
      return {
        zIndex: 3,
        opacity: 1,
        pointerEvents: 'auto',
        transform:
          'translateX(0px) translateY(0px) scale(1) rotateY(0deg)',
      };
    }

    if (isLeft) {
      return {
        zIndex: 2,
        opacity: 0.55,
        pointerEvents: 'auto',
        transform: `translateX(-${gap}px) translateY(-35px) scale(0.82) rotateY(12deg)`,
      };
    }

    if (isRight) {
      return {
        zIndex: 2,
        opacity: 0.55,
        pointerEvents: 'auto',
        transform: `translateX(${gap}px) translateY(-35px) scale(0.82) rotateY(-12deg)`,
      };
    }

    return {
      zIndex: 1,
      opacity: 0,
      pointerEvents: 'none',
      transform:
        'translateX(0px) translateY(0px) scale(0.7)',
    };
  }

  return (
    <section
      id="skills"
      className="skills-section"
    >
      <div className="skills-heading">
        <p>WHAT I WORK WITH</p>

        <h2>My Skills</h2>
      </div>

      <div className="skills-wrapper">

        {/* CAROUSEL */}
        <div
          className="skills-visual"
          ref={imageContainerRef}
        >
          {skills.map((skill, index) => {
            const Icon = skill.icon;

            return (
              <div
                key={skill.name}
                className="skill-card"
                style={getSkillStyle(index)}
                onClick={() => setActiveIndex(index)}
              >
                <div className="skill-icon">
                  <Icon />
                </div>

                <h3>{skill.name}</h3>

                <span>{skill.category}</span>
              </div>
            );
          })}
        </div>

        {/* DESCRIPTION */}
        <div className="skills-content">

          <div className="skills-info">

            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: -20,
                }}
                transition={{
                  duration: 0.3,
                }}
              >
                <h3>
                  {activeSkill.name}
                </h3>

                <p className="skill-category">
                  {activeSkill.category}
                </p>

                <p className="skill-description">
                  {activeSkill.description}
                </p>
              </motion.div>
            </AnimatePresence>

          </div>

          {/* ARROWS */}
          <div className="skills-arrows">

            <button
              onClick={handlePrev}
              aria-label="Previous skill"
            >
              <FaArrowLeft />
            </button>

            <button
              onClick={handleNext}
              aria-label="Next skill"
            >
              <FaArrowRight />
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}

export default SkillsCarousel;