'use client';
import { motion } from 'framer-motion';
import { SiAdobeillustrator, SiAdobephotoshop } from 'react-icons/si';
import { FaPaintBrush, FaPrint, FaFacebook, FaBullhorn } from 'react-icons/fa';
import { GiFeather } from 'react-icons/gi';

// Unified fade-in helper
const fadeIn = (direction = 'up', offset = 40, duration = 0.6, stiffness = 100, damping = 20) => ({
  hidden: {
    opacity: 0,
    x: direction === 'left' ? -offset : direction === 'right' ? offset : 0,
    y: direction === 'up' ? offset : direction === 'down' ? -offset : 0,
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      type: 'spring',
      stiffness,
      damping,
      duration,
    },
  },
});

const skills = [
  { icon: <SiAdobephotoshop />, label: 'Adobe Photoshop' },
  { icon: <SiAdobeillustrator />, label: 'Adobe Illustrator' },
  { icon: <FaPaintBrush />, label: 'Logo & Branding Design' },
  { icon: <FaPrint />, label: 'Packaging & Print Design' },
  { icon: <FaFacebook />, label: 'Social Media Graphics' },
  { icon: <GiFeather />, label: 'Illustration & Typography' },
  { icon: <FaBullhorn />, label: 'Digital Marketing Campaigns' },
];

const About = () => (
  <section
    id="about"
    className="relative min-h-screen bg-gradient-to-br from-white via-[#f8f8ff] to-[#e7eaff] px-6 md:px-12 py-20 text-[#3f4a8a] font-sans overflow-hidden"
  >
    <div className="relative z-10 max-w-6xl mx-auto">

      {/* Heading */}
      <div className="flex items-center justify-center mb-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn('left')}
          className="h-[4px] bg-[#3f4a8a] mr-4"
          style={{ width: '90px' }}
        />

        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn('up')}
          className="text-4xl md:text-6xl font-serif font-bold text-center bg-gradient-to-r from-[#0a0f2c] via-[#3f4a8a] to-[#9999ff] bg-clip-text text-transparent"
        >
          About Me
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn('right')}
          className="h-[4px] bg-[#3f4a8a] ml-4"
          style={{ width: '90px' }}
        />
      </div>

      {/* Intro */}
      <motion.p
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn('up')}
        className="text-lg md:text-xl text-center max-w-3xl mx-auto leading-relaxed mb-8"
      >
        I&apos;m <span className="font-semibold">Tooba Naveed</span> — A creative Digital Artist, Illustrator & Graphic Designer from NCA. I transform ideas into compelling visual stories that evoke emotion, elevate brands, and leave a lasting impression across digital and print platforms.

      </motion.p>

      {/* Info Grid */}
      <div className="flex flex-col md:flex-row gap-8 md:gap-12">
        {/* Experience Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn('up')}
          className="flex-1 backdrop-blur-md rounded-2xl p-6 md:p-8"
        >
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="text-xl">💼</span> Experience
          </h3>

          <div className="space-y-6 font-sans">
            {[
              {
                title: 'Senior Digital Artist & Illustrator',
                time: '2020 – Present',
                desc: 'With 4+ years of experience as a freelance digital artist, I specialize in creating custom illustrations, brand visuals, packaging artwork, and content for social media across industries like fashion, lifestyle, and beauty. I work closely with clients to turn ideas into impactful visuals that communicate their brand story.',
              },
              {
                title: 'Textile & Surface Pattern Designer – Nishat Mills Ltd.',
                time: '2018-2020',
                desc: 'Worked on a range of commercial design projects focused on digital prints, seamless patterns, and motif development for fashion and home décor collections. My work combines artistic creativity with industry trends to deliver production-ready designs that align with brand aesthetics.',
              },
            ].map((exp, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn('right')}
                className="border-l-4 border-[#3f4a8a] pl-4"
              >
                <p className="text-base font-semibold">{exp.title}</p>
                <p className="text-sm">{exp.time}</p>
                <p className="text-sm">{exp.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15 } } }}
          className="grid grid-cols-2 gap-4 p-6 md:p-8"
        >
          <h3 className="col-span-2 text-2xl font-bold mb-6 flex items-center gap-2 font-sans">
            <span className="text-xl">🎨</span> Skills & Tools
          </h3>

          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn('up')}
              className="flex items-center space-x-3 font-sans"
            >
              <span className="text-xl text-indigo-600">{skill.icon}</span>
              <span className="font-sans">{skill.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  </section>
);

export default About;
