'use client';
import { motion } from 'framer-motion';
import Navbar from './navbar';

const textVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.8,
      ease: 'easeOut',
    },
  }),
};

const Hero = () => {
  return (
    <div>
      <section className="bg-gradient-to-br from-[#0a0f2c] to-black">
        <Navbar />
        <div className="min-h-screen flex flex-col justify-center items-center text-white relative px-4 overflow-hidden font-sans">
          {/* Glassmorphism Content Wrapper */}
          <motion.div
            initial="hidden"
            animate="visible"
            className="z-10 text-center backdrop-blur-md p-8 md:p-12 max-w-2xl"
          >
            {/* Gradient Title */}
            <motion.h1
              variants={textVariants}
              custom={1}
              className="text-5xl md:text-7xl font-serif font-bold tracking-tight uppercase bg-gradient-to-r from-white via-[#c4c4ff] to-[#9999ff] text-transparent bg-clip-text"
            >
              Digital Artist and Illustrator
            </motion.h1>

            {/* Subheading */}
            <motion.p
              variants={textVariants}
              custom={2}
              className="mt-6 text-lg md:text-xl font-light text-[#c4c4ff] leading-relaxed max-w-xl mx-auto"
            >
              I turn ideas into stunning visual experiences that leave a lasting impact.
            </motion.p>

            {/* CTA Button */}
            <motion.div variants={textVariants} custom={3} className="mt-10">
              <button
                onClick={() =>
                  document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })
                }
                className="px-8 py-3 bg-gradient-to-r from-[#0a0f2c] via-[#3f4a8a] to-[#9999ff] text-white rounded-full text-base tracking-wide uppercase shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                Explore My Work ↓
              </button>
            </motion.div>

            {/* Scroll Indicator - Now placed below the button and visible on all devices */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="mt-10 flex justify-center w-full z-10"
              onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <div className="w-[22px] h-[40px] border-2 border-[#c4c4ff] rounded-full flex items-start justify-center p-1 shadow-inner">
                <motion.div
                  animate={{ y: [0, 12, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="w-[6px] h-[6px] bg-[#c4c4ff] rounded-full"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Hero;


