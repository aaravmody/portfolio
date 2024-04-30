import React from 'react';
import './hero.scss';
import { motion } from "framer-motion";
import TypewriterEffect from '../Typewriter/Type';

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper" style={{ position: "relative", zIndex: 0 }}>
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>AARAV MODY</motion.h2>
          <motion.h1 variants={textVariants}>
            <TypewriterEffect />
          </motion.h1>
          <motion.div variants={textVariants} className="buttons">
            <motion.button variants={textVariants} whileHover={{ scale: 1.1 }} onClick={() => window.location.href = '#Portfolio'}>
              See the Latest Works
            </motion.button>
            <motion.button variants={textVariants} whileHover={{ scale: 1.1 } } onClick={() => window.location.href = '#Contact'}>
              Contact Me
            </motion.button>
          </motion.div>
          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src="/scroll.png"
            alt=""
          />
        </motion.div>
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
        style={{ position: "absolute", zIndex: -1, bottom: 0, width: "100%" }}
      >
        Passionate. Enthusiastic
      </motion.div>
      <div className="imageContainer" style={{ position: "absolute", zIndex: 2 }}>
        <img src="/aarav.jpeg" alt="" />
      </div>
    </div>
  );
};

export default Hero;
