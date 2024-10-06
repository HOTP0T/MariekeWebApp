'use client'

import Image from 'next/image'
import Link from 'next/link'
import Navbar from './components/Navbar'
import Carousel from './components/Carousel'
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from '@vercel/speed-insights/next';

export default function Home() {
  const naturopathyImages = [
    { src: '/landing/naturopathy/20201025_113534.jpg?height=400&width=600&text=Naturopathy 1', alt: 'Naturopathy 1' },
    { src: '/landing/naturopathy/IMG_20210630_204810.jpg?height=400&width=600&text=Naturopathy 1', alt: 'Naturopathy 2' },
    { src: '/landing/naturopathy/IMG_20210822_181835.jpg?height=400&width=600&text=Naturopathy 1', alt: 'Naturopathy 3' },
  ]

  const sewingImages = [
    { src: '/landing/sewing/IMG-20200828-WA0012.jpg?height=400&width=600&text=Sewing 1', alt: 'Sewing 1' },
    { src: '/landing/sewing/IMG-20201117-WA0000.jpg?height=400&width=600&text=Sewing 2', alt: 'Sewing 2' },
    { src: '/landing/sewing/IMG_20210630_205523.jpg?height=400&width=600&text=Sewing 3', alt: 'Sewing 3' },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <section className="relative h-[60vh] flex items-center justify-center">
          <Image
            src="/landing/naturopathy.jpg"
            alt="Hero background"
            layout="fill"
            objectFit="cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-50" />
          <div className="relative z-10 text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Our World</h1>
            <p className="text-xl md:text-2xl">Discover the perfect blend of nature and creativity</p>
          </div>
        </section>

        <section className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6 flex flex-col">
              <h2 className="text-3xl font-bold">Naturopathy</h2>
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
              <Link href="/naturopathy" className="inline-block bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition-colors">
                Learn More About Naturopathy
              </Link>
            </div>

            <div className="space-y-6 flex flex-col">
              <h2 className="text-3xl font-bold">Sewing</h2>
              <div className="flex-grow">
                <p className="text-lg text-gray-600 mb-4">
                  Discover the therapeutic benefits of sewing and textile arts. 
                  Our creative workshops and courses help you express yourself&lsquo; 
                  reduce stress&lsquo; and create beautiful&lsquo; handmade items that bring joy to your life.
                  Through sewing&lsquo; you&apos;ll develop new skills&lsquo; boost your creativity&lsquo; and
                  find a calming&lsquo; meditative practice that nurtures your well-being.
                  <br ></br>
                  <br ></br>
                </p>
                <Carousel images={sewingImages} />
              </div>
              <Link href="/sewing" className="inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors">
                Explore Sewing Workshops
              </Link>
            </div>
          </div>
        </section>
      </main>
      <footer className="mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">About Us</h3>
              <p className="text-gray-600">
                We are dedicated to promoting natural healing and creative expression through naturopathy and sewing.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link href="/" className="hover:text-blue-600">Home</Link></li>
                <li><Link href="/contact" className="hover:text-blue-600">Contact</Link></li>
                <li><Link href="/naturopathy" className="hover:text-blue-600">Naturopathy</Link></li>
                <li><Link href="/sewing" className="hover:text-blue-600">Sewing</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <p className="text-gray-600">123 Nature Lane, Creativity City, NC 12345</p>
              <p className="text-gray-600">Email: info@example.com</p>
              <p className="text-gray-600">Phone: (123) 456-7890</p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t text-center text-gray-600">
            © {new Date().getFullYear()} Marieke Ceeleart. All rights reserved.
          </div>
        </div>
      </footer>
      <Analytics />
      <SpeedInsights />
    </div>
  )
}