'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import Navbar from './components/Navbar'
import Carousel from './components/Carousel'
import FloatingActionButton from './components/FloatingActionButton'
import TestimonialsSlider from './components/TestimonialsSlider'
import Footer from './components/Footer'
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Leaf, Scissors } from 'lucide-react'

export default function Home() {
  const [isMounted, setIsMounted] = useState(false)
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, 150])

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const naturopathyImages = [
    { src: '/landing/naturopathy/20201025_113534.jpg', alt: 'Naturopathy 1' },
    { src: '/landing/naturopathy/IMG_20210630_204810.jpg', alt: 'Naturopathy 2' },
    { src: '/landing/naturopathy/IMG_20210822_181835.jpg', alt: 'Naturopathy 3' },
  ]

  const sewingImages = [
    { src: '/landing/sewing/IMG-20200828-WA0012.jpg', alt: 'Sewing 1' },
    { src: '/landing/sewing/IMG-20201117-WA0000.jpg', alt: 'Sewing 2' },
    { src: '/landing/sewing/IMG_20210630_205523.jpg', alt: 'Sewing 3' },
  ]

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-purple-50 to-pink-50">
      <Navbar />
      <main className="flex-grow relative overflow-hidden">
        <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
          {isMounted && (
            <motion.div style={{ y }} className="absolute inset-0">
              <Image
                src="/landing/naturopathy.jpg"
                alt="Hero background"
                layout="fill"
                objectFit="cover"
                priority
              />
            </motion.div>
          )}
          <div className="absolute inset-0 bg-black bg-opacity-50" />
          <div className="relative z-10 text-center text-white">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold mb-4"
            >
              Welcome to Our World
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl"
            >
              Discover the perfect blend of nature and creativity
            </motion.p>
          </div>
        </section>

        <section className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div 
              className="space-y-6 flex flex-col"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold flex items-center">
                <Leaf className="mr-2 text-green-600" />
                Naturopathy
              </h2>
              <div className="flex-grow">
                <p className="text-lg text-gray-600 mb-4">
                  Explore the healing power of nature through our naturopathic practices. 
                  We offer holistic approaches to wellness, combining traditional wisdom 
                  with modern techniques to help you achieve optimal health and balance.
                  Our naturopathic treatments address the root causes of health issues,
                  promoting long-lasting wellness and vitality.
                </p>
                <Carousel images={naturopathyImages} />
              </div>
              <Link href="/naturopathy" className="inline-block bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition-colors transform hover:scale-105">
                Learn More About Naturopathy
              </Link>
            </motion.div>

            <motion.div 
              className="space-y-6 flex flex-col"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold flex items-center">
                <Scissors className="mr-2 text-blue-600" />
                Sewing
              </h2>
              <div className="flex-grow">
                <p className="text-lg text-gray-600 mb-4">
                  Discover the therapeutic benefits of sewing and textile arts. 
                  Our creative workshops and courses help you express yourself, 
                  reduce stress, and create beautiful, handmade items that bring joy to your life.
                  Through sewing, you&apos;ll develop new skills, boost your creativity, and
                  find a calming, meditative practice that nurtures your well-being.
                </p>
                <Carousel images={sewingImages} />
              </div>
              <Link href="/sewing" className="inline-block bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors transform hover:scale-105">
                Explore Sewing Workshops
              </Link>
            </motion.div>
          </div>
        </section>

        <TestimonialsSlider />
      </main>

      <Footer />
      <FloatingActionButton />
      <Analytics />
      <SpeedInsights />
    </div>
  )
}