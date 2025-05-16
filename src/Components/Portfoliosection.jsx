import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { motion } from 'framer-motion';
import img from "../assets/cat.jpg"; 
import img1 from "../assets/m.jpg";
import img2 from "../assets/cat.G.png";
import img3 from "../assets/cat part3.png"; 
import img4 from "../assets/girl.png";
import img5 from "../assets/girl2.png";
import img6 from "../assets/biker.jpg";
import img7 from "../assets/tshirt-01.jpg";

const artworks = [
  { src: img, title: 'Digital Art 1', category: 'Digital Art' },
  { src: img1, title: 'Illustration 1', category: 'Illustration' },
  { src: img2, title: 'Character Work', category: 'Character Design' },
  { src: img3, title: 'Digital Art 2', category: 'Digital Art' },
  { src: img4, title: 'Illustration 2', category: 'Illustration' },
  { src: img5, title: 'Character Work 2', category: 'Character Design' },
  { src: img6, title: 'Concept Bike', category: 'Character Design' },
  { src: img7, title: 'T-Shirt Mockup', category: 'Character Design' },
];

const categories = ['All', 'Digital Art', 'Illustration', 'Character Design'];

export default function PortfolioSection() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredArtworks = selectedCategory === 'All'
    ? artworks
    : artworks.filter(art => art.category === selectedCategory);

  return (
    <section className="bg-[#f9f9fb] py-10 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4   md:text-6xl font-serif font-bold text-center bg-gradient-to-r from-[#0a0f2c] via-[#3f4a8a] to-[#9999ff] bg-clip-text text-transparent">Featured Portfolio
        </h2>
        <p className="text-[#0a0f2c] mb-10 max-w-xl mx-auto">A collection of my favorite digital artworks across illustration, character design, and visual experiments.</p>
      </div>

      {/* Filter Buttons */}
      <div className="flex justify-center gap-3 flex-wrap mb-10 text-[#0a0f2c]">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 shadow-sm ${
              selectedCategory === cat
                ? 'bg-[#0a0f2c] text-white'
                : 'bg-blue-100 text-pink-800 hover:bg-blue-300'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Art Grid */}
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 max-w-7xl mx-auto">
        {filteredArtworks.map((art, index) => (
          <motion.div
            key={index}
            className="relative overflow-hidden rounded-2xl shadow-md group cursor-pointer"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
            onClick={() => setSelectedImage(art)}
          >
            <img
              src={art.src}
              alt={art.title}
              className="w-full h-auto object-cover rounded-2xl transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300 flex items-end p-4">
              <p className="text-white text-base font-semibold">{art.title}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox Dialog */}
      <Dialog
        open={selectedImage !== null}
        onClose={() => setSelectedImage(null)}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80"
      >
        {selectedImage && (
          <Dialog.Panel className="relative max-w-4xl p-4 animate-fadeIn">
            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              className="w-full rounded-xl shadow-2xl"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-2 right-2 text-white text-3xl font-bold"
            >
              &times;
            </button>
            <p className="text-white mt-4 text-center text-lg">
              {selectedImage.title} — <span className="italic">{selectedImage.category}</span>
            </p>
          </Dialog.Panel>
        )}
      </Dialog>

   </section>
  );
}
