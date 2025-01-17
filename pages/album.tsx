import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import {
  IconMenu2,
  IconX,
  IconArrowUp,
  IconPhoto,
  IconHeart,
  IconLock,
} from '@tabler/icons-react';

const Album = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const photos = [
    {
      id: 1,
      src: "https://kappa.lol/JO31x",
      caption: "Oh really? 🤭",
      date: "2024-12-25"
    },
    {
      id: 2,
      src: "https://kappa.lol/dcvm7",
      caption: "A bright day with smiles 😊",
      date: "2025-01-16"
    },
    {
      id: 3,
      src: "https://kappa.lol/O77FO",
      caption: "Smiles again 😊",
      date: "2025-01-16"
    },
    {
      id: 4,
      src: "https://kappa.lol/2gzpH",
      caption: "Happiness",
      date: "2025-01-17"
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    const handleContextMenu = (e) => {
      e.preventDefault();
    };

    const handleKeyDown = (e) => {
      if (
        (e.ctrlKey && (e.key === 'c' || e.key === 's' || e.key === 'u' || e.key === 'p')) ||
        (e.key === 'PrintScreen') ||
        (e.altKey && e.key === 'PrintScreen')
      ) {
        e.preventDefault();
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Photo Gallery | Citra Amelia</title>
        <link rel="icon" href="https://kappa.lol/ljAtM" />
        <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <style>{`
          .prevent-select {
            -webkit-touch-callout: none;
            -webkit-user-select: none;
            -khtml-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
          }
          .image-container {
            position: relative;
          }
          .image-container::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            pointer-events: none;
          }
        `}</style>
      </Head>

      <header className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-90 backdrop-blur-lg shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500 font-quicksand">
              Photo Gallery
            </h1>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-300"
            >
              {isMenuOpen ? <IconX size={24} /> : <IconMenu2 size={24} />}
            </button>

            <nav className="hidden md:flex space-x-8">
              <a href="/" className="nav-link font-quicksand">Home</a>
              <a href="#gallery" className="nav-link font-quicksand">Gallery</a>
            </nav>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="/" className="block px-3 py-2 rounded-md hover:bg-gray-100 transition-colors duration-300 font-quicksand">Home</a>
              <a href="#gallery" className="block px-3 py-2 rounded-md hover:bg-gray-100 transition-colors duration-300 font-quicksand">Gallery</a>
            </div>
          </div>
        )}
      </header>

      <main className="pt-20">
        <section id="gallery" className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500 font-quicksand text-center"
                data-aos="fade-right">
              My Photo Collection
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {photos.map((photo) => (
                <div key={photo.id} className="bg-white rounded-lg shadow-md overflow-hidden prevent-select">
                  <div className="relative aspect-w-1 aspect-h-1 image-container">
                    <img
                      src={photo.src}
                      alt="Gallery Photo"
                      className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-105"
                      style={{ pointerEvents: 'none' }}
                    />
                    <div className="absolute top-2 right-2 bg-white bg-opacity-75 rounded-full p-1">
                      <IconLock size={16} className="text-gray-600" />
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="text-gray-600 font-quicksand text-sm mb-2">{photo.caption}</p>
                    <p className="text-gray-400 font-quicksand text-xs">{photo.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-white text-gray-600 py-8 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-center items-center">
            <div className="mb-4 md:mb-0">
              <p className="font-quicksand text-sm text-center">
                © {new Date().getFullYear()} Citra Amelia. Made with <IconHeart size={16} className="inline text-pink-500" />
              </p>
            </div>
          </div>
        </div>
      </footer>

      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed right-4 bottom-4 z-40 w-12 h-12 flex items-center justify-center rounded-full bg-pink-500 text-white cursor-pointer transition-all duration-300 hover:bg-pink-600"
          aria-label="Scroll to top"
        >
          <IconArrowUp size={20} />
        </button>
      )}
    </div>
  );
};

export default Album;
