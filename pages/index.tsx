import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import {
  IconBrandInstagram,
  IconBrandTiktok,
  IconBrandTwitter,
  IconMenu2,
  IconX,
  IconArrowUp,
  IconHeart,
  IconMail,
} from '@tabler/icons-react';

const socialLinks = [
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/ctrmeea',
    icon: <IconBrandInstagram size={24} />,
    color: 'text-pink-500',
  },
  {
    name: 'TikTok',
    url: 'https://www.tiktok.com/@ctrmeea',
    icon: <IconBrandTiktok size={24} />,
    color: 'text-black',
  },
  {
    name: 'Twitter',
    url: 'https://x.com/iky_ynd',
    icon: <IconBrandTwitter size={24} />,
    color: 'text-black',
  },
  {
    name: 'Email',
    url: 'mailto:emalini091@gmail.com',
    icon: <IconMail size={24} />,
    color: 'text-red-500',
  },
];

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Citra Amelia | Personal Portfolio</title>
        <meta name="description" content="Citra Amelia's personal portfolio website" />
        <meta name="keywords" content="Citra Amelia, Personal Portfolio, Portfolio Website" />
        <link rel="icon" href="https://kappa.lol/ljAtM" />
        <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </Head>

      <header className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-90 backdrop-blur-lg shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary font-quicksand">
              Citra Amelia
            </h1>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-300"
            >
              {isMenuOpen ? <IconX size={24} /> : <IconMenu2 size={24} />}
            </button>

            <nav className="hidden md:flex space-x-8">
              <a href="#about" className="nav-link font-quicksand">About</a>
              <a href="/album" className="nav-link font-quicksand">Gallery</a>
              <a href="#contact" className="nav-link font-quicksand">Contact</a>
            </nav>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#about" className="block px-3 py-2 rounded-md hover:bg-gray-100 transition-colors duration-300 font-quicksand">About</a>
              <a href="/album" className="block px-3 py-2 rounded-md hover:bg-gray-100 transition-colors duration-300 font-quicksand">Gallery</a>
              <a href="#contact" className="block px-3 py-2 rounded-md hover:bg-gray-100 transition-colors duration-300 font-quicksand">Contact</a>
            </div>
          </div>
        )}
      </header>

      <main className="pt-20">
        <section className="relative h-[70vh] flex items-center justify-center animate-gradient bg-gradient-to-br from-pink-100 via-purple-100 to-gray-100">
          <div className="text-center" data-aos="fade-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary font-quicksand animate-typing">
              Citra Amelia
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 font-quicksand animate-fade-in">
              Student & Gamers
            </p>
          </div>
        </section>

        <section id="about" className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary font-quicksand"
                data-aos="fade-right">
              About Me
            </h2>
            <div className="space-y-4 text-gray-600 font-quicksand">
              <p data-aos="fade-up" data-aos-delay="100">
                Birthday: March 19, 2007
              </p>
              <p data-aos="fade-up" data-aos-delay="200">
                Location: Langkat, North Sumatra, Indonesia
              </p>
              <p data-aos="fade-up" data-aos-delay="300">
                Education: S1 Universitas Malikussaleh, Management
              </p>
              <div className="mt-6" data-aos="fade-up" data-aos-delay="400">
                <p className="text-primary">
                  Excited to play games and draw things.
                </p>
                <p className="mt-2">
                  Active student with interests in arts and digital media.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 px-4 bg-gray-100">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary font-quicksand"
                data-aos="fade-right">
              Let's Connect
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {socialLinks.map((link, index) => (
                <a
                  key={link.name}
                  href={link.url}
                  className="flex flex-col items-center space-y-2 group transition-transform duration-300 hover:scale-110"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-aos="zoom-in"
                  data-aos-delay={index * 100}
                >
                  <div className={`${link.color} transform transition-all duration-300 group-hover:rotate-12`}>
                    {link.icon}
                  </div>
                  <span className="text-sm text-gray-600 font-quicksand">
                    {link.name}
                  </span>
                </a>
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
                © {new Date().getFullYear()} Citra Amelia. Made with <IconHeart size={16} className="inline text-primary" />
              </p>
            </div>
          </div>
        </div>
      </footer>

      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="scroll-indicator"
          aria-label="Scroll to top"
        >
          <IconArrowUp size={20} />
        </button>
      )}
    </div>
  );
}