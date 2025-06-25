"use client"

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

interface ImageItem {
  id: number;
  url: string;
  alt: string;
  width: number; 
  height: number;
  span: string;
  aspectRatio?: number; 
}

const pexelsImages: ImageItem[] = [
    {
      id: 1,
      url: "/assets/1.JPG",
      alt: "🏔️",
      width: 600,
      height: 800,
      span: "col-span-1 row-span-2"
    },
    {
      id: 2,
      url: "/assets/2.JPG",
      alt: "🏢",
      width: 800,
      height: 600,
      span: "col-span-2 row-span-1"
    },
    {
      id: 3,
      url: "/assets/3.JPG",
      alt: "🌅",
      width: 600,
      height: 600,
      span: "col-span-1 row-span-1"
    },
    {
      id: 4,
      url: "/assets/4.JPG",
      alt: "🌃",
      width: 400,
      height: 600,
      span: "col-span-1 row-span-2"
    },
    {
      id: 5,
      url: "/assets/5.JPG",
      alt: "📸",
      width: 600,
      height: 400,
      span: "col-span-2 row-span-1"
    },
    {
      id: 6,
      url: "/assets/6.JPG",
      alt: "☕",
      width: 500,
      height: 500,
      span: "col-span-1 row-span-1"
    },
    {
      id: 7,
      url: "/assets/7.JPG",
      alt: "💦",
      width: 800,
      height: 600,
      span: "col-span-2 row-span-1"
    },
    {
      id: 8,
      url: "/assets/8.JPG",
      alt: "🥾",
      width: 400,
      height: 500,
      span: "col-span-1 row-span-1"
    },
    {
      id: 9,
      url: "/assets/9.JPG",
      alt: "🏛️",
      width: 500,
      height: 800,
      span: "col-span-1 row-span-2"
    },
    {
      id: 10,
      url: "/assets/10.JPG",
      alt: "🧗",
      width: 600,
      height: 450,
      span: "col-span-2 row-span-1"
    },
    {
      id: 11,
      url: "/assets/11.JPG",
      alt: "🍲",
      width: 500,
      height: 500,
      span: "col-span-1 row-span-1"
    },
    {
      id: 12,
      url: "/assets/12.JPG",
      alt: "🪴",
      width: 600,
      height: 700,
      span: "col-span-1 row-span-2"
    },
    {
      id: 13,
      url: "/assets/13.JPG",
      alt: "⛰️",
      width: 700,
      height: 500,
      span: "col-span-2 row-span-1"
    },
    {
      id: 14,
      url: "/assets/14.JPG",
      alt: "🏜️",
      width: 500,
      height: 750,
      span: "col-span-1 row-span-2"
    },
    {
      id: 15,
      url: "/assets/15.JPG",
      alt: "🌲",
      width: 600,
      height: 400,
      span: "col-span-2 row-span-1"
    },
    {
      id: 16,
      url: "/assets/16.JPG",
      alt: "🏗️",
      width: 450,
      height: 600,
      span: "col-span-1 row-span-1"
    },
    {
      id: 17,
      url: "/assets/17.JPG",
      alt: "🌄",
      width: 800,
      height: 500,
      span: "col-span-2 row-span-1"
    },
    {
      id: 18,
      url: "/assets/18.JPG",
      alt: "🏠",
      width: 500,
      height: 650,
      span: "col-span-1 row-span-2"
    },
    {
      id: 19,
      url: "/assets/19.JPG",
      alt: "✨",
      width: 700,
      height: 500,
      span: "col-span-2 row-span-1"
    },
    {
      id: 20,
      url: "/assets/20.JPG",
      alt: "🌱",
      width: 500,
      height: 500,
      span: "col-span-1 row-span-1"
    },
    {
      id: 21,
      url: "/assets/21.JPG",
      alt: "🏝️",
      width: 800,
      height: 600,
      span: "col-span-2 row-span-1"
    },
    {
      id: 22,
      url: "/assets/22.JPG",
      alt: "🛕",
      width: 400,
      height: 600,
      span: "col-span-1 row-span-2"
    },
    {
      id: 23,
      url: "/assets/23.JPG",
      alt: "🏙️",
      width: 700,
      height: 500,
      span: "col-span-2 row-span-1"
    },
    {
      id: 24,
      url: "/assets/24.JPG",
      alt: "📷",
      width: 600,
      height: 400,
      span: "col-span-2 row-span-1"
    },
    {
      id: 25,
      url: "/assets/25.JPG",
      alt: "🌇",
      width: 500,
      height: 800,
      span: "col-span-1 row-span-2"
    },
    {
      id: 26,
      url: "/assets/26.JPG",
      alt: "🌁",
      width: 600,
      height: 600,
      span: "col-span-1 row-span-1"
    },
    {
      id: 27,
      url: "/assets/27.JPG",
      alt: "🚠",
      width: 700,
      height: 500,
      span: "col-span-2 row-span-1"
    },
    {
      id: 28,
      url: "/assets/28.JPG",
      alt: "🏞️",
      width: 500,
      height: 750,
      span: "col-span-1 row-span-2"
    },
    {
      id: 29,
      url: "/assets/29.JPG",
      alt: "🗻",
      width: 600,
      height: 400,
      span: "col-span-2 row-span-1"
    },
    {
      id: 30,
      url: "/assets/31.JPG",
      alt: "🪂",
      width: 450,
      height: 600,
      span: "col-span-1 row-span-1"
    },
    {
      id: 31,
      url: "/assets/31.JPG",
      alt: "🛤️",
      width: 800,
      height: 500,
      span: "col-span-2 row-span-1"
    },
    {
      id: 32,
      url: "/assets/32.JPG",
      alt: "🪵",
      width: 500,
      height: 650,
      span: "col-span-1 row-span-2"
    },
    {
      id: 33,
      url: "/assets/33.JPG",
      alt: "🎡",
      width: 700,
      height: 500,
      span: "col-span-2 row-span-1"
    },
    {
      id: 34,
      url: "/assets/34.JPG",
      alt: "🎢",
      width: 500,
      height: 500,
      span: "col-span-1 row-span-1"
    },
    {
      id: 35,
      url: "/assets/35.JPG",
      alt: "🌌",
      width: 800,
      height: 600,
      span: "col-span-2 row-span-1"
    },
    {
      id: 36,
      url: "/assets/36.JPG",
      alt: "🌉",
      width: 600,
      height: 700,
      span: "col-span-1 row-span-2"
    }
  ];
  
const MemoraPage: React.FC = () => {
  const [columns, setColumns] = useState<number>(4);
  const [columnImages, setColumnImages] = useState<ImageItem[][]>([]);
  const [selectedImage, setSelectedImage] = useState<ImageItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  
  useEffect(() => {
    const handleResize = (): void => {
      if (window.innerWidth < 640) {
        setColumns(2);
      } else if (window.innerWidth < 768) {
        setColumns(3);
      } else if (window.innerWidth < 1024) {
        setColumns(4);
      } else if (window.innerWidth < 1280) {
        setColumns(5);
      } else {
        setColumns(6);
      }
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const processedImages = pexelsImages.map(img => ({
      ...img,
      aspectRatio: img.width / img.height
    }));
    const balancedColumns = balanceColumns(processedImages, columns);
    setColumnImages(balancedColumns);
  }, [columns]);

  const balanceColumns = (images: ImageItem[], numColumns: number): ImageItem[][] => {
    const cols: ImageItem[][] = Array.from({ length: numColumns }, () => []);
    const columnHeights = Array(numColumns).fill(0);
    
    images.forEach(image => {
      const shortestColumnIndex = columnHeights.indexOf(Math.min(...columnHeights));
      cols[shortestColumnIndex].push(image);
      const estimatedHeight = 300 / image.aspectRatio!; 
      columnHeights[shortestColumnIndex] += estimatedHeight;
    });
    
    return cols;
  };

  const openModal = (image: ImageItem): void => {
    setSelectedImage(image);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden'; 
  };

  const closeModal = (): void => {
    setIsModalOpen(false);
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  const navigateImage = (direction: 'prev' | 'next'): void => {
    if (!selectedImage) return;
    
    const currentIndex = pexelsImages.findIndex(img => img.id === selectedImage.id);
    let newIndex;
    
    if (direction === 'next') {
      newIndex = (currentIndex + 1) % pexelsImages.length;
    } else {
      newIndex = currentIndex === 0 ? pexelsImages.length - 1 : currentIndex - 1;
    }
    
    setSelectedImage(pexelsImages[newIndex]);
  };

  const calculateImageHeight = (image: ImageItem): number => {
    const baseWidth = 300;
    const aspectRatio = image.width / image.height;
    let height = baseWidth / aspectRatio;
    
    const variance = Math.random() * 60 - 30; // -30 to +30
    height += variance;
    
    return Math.max(200, Math.min(500, height));
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isModalOpen) return;
      
      if (e.key === 'Escape') {
        closeModal();
      } else if (e.key === 'ArrowLeft') {
        navigateImage('prev');
      } else if (e.key === 'ArrowRight') {
        navigateImage('next');
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isModalOpen, selectedImage]);

  return (
    <div>
      <Header/>
      <div className="bg-gradient-to-br from-indigo-50 to-purple-50 min-h-screen pt-28 pb-10">
      <h1 className='text-black text-4xl text-center mb-10 font-bold'>Our <span className='text-yellow-500'>Gallery</span></h1>
    <div className="max-w-7xl mx-auto px-4">
          <div className={`grid gap-4 ${
            columns === 2 ? 'grid-cols-2' : 
            columns === 3 ? 'grid-cols-3' : 
            columns === 4 ? 'grid-cols-4' : 
            columns === 5 ? 'grid-cols-5' : 
            'grid-cols-6'
          }`}>
            {columnImages.map((column, columnIndex) => (
              <div key={columnIndex} className="flex flex-col gap-4">
                {column.map((image) => {
                  const dynamicHeight = calculateImageHeight(image);
                  
                  return (
                    <div
                      key={image.id}
                      className="group relative overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-xl cursor-pointer transition-all duration-300"
                      style={{ height: `${dynamicHeight}px` }}
                      onClick={() => openModal(image)}
                    >
                      <div className="relative w-full h-full overflow-hidden rounded-2xl">
                        <Image
                          src={image.url}
                          alt={image.alt}
                          fill
                          className="object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                          loading="lazy"
                          sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, (max-width: 1280px) 20vw, 16vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4">
                          <div className="flex justify-end">
                            <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
                              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                              </svg>
                            </div>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-white text-lg font-medium">{image.alt}</span>
                            <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
                              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isModalOpen && selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="relative max-w-4xl max-h-[90vh] w-full"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              transition={{ type: "spring", duration: 0.5 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeModal}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors z-10"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <button
                onClick={() => navigateImage('prev')}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm rounded-full p-3 text-white hover:bg-white/30 transition-colors z-10"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={() => navigateImage('next')}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm rounded-full p-3 text-white hover:bg-white/30 transition-colors z-10"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
              <div className="relative w-full max-w-2xl aspect-[4/3] mx-auto rounded-2xl overflow-hidden bg-white" style={{ maxHeight: '80vh' }}>
                <Image
                  src={selectedImage.url}
                  alt={selectedImage.alt}
                  fill
                  className="object-contain"
                  priority
                  sizes="(max-width: 768px) 90vw, 800px"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <Footer/>
    </div>
  );
};

export default MemoraPage;