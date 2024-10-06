'use client'

import Image from 'next/image'
import Link from 'next/link'
import Carousel from '../components/Carousel' // Adjust the path if necessary
import Navbar from '../components/Navbar'



export default function Sewing() {
  const sewingImages = [
    { src: '/sewing/IMG_20210819_142751.jpg', alt: 'Sewing 1' },
    { src: '/sewing/IMG_20210819_215725.jpg', alt: 'Sewing 2' },
    { src: '/placeholder.svg?height=400&width=600&text=Sewing 3', alt: 'Sewing 3' },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-white shadow-sm">
        <Navbar />
      </header>

      <main className="flex-grow">
        <section className="relative h-[40vh] flex items-center justify-center">
          <Image
            src="/sewing/shutterstock_147651662.webp?height=400&width=1920&text=Sewing"
            alt="Sewing banner"
            layout="fill"
            objectFit="cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-50" />
          <h1 className="relative z-10 text-4xl md:text-6xl font-bold text-white">Sewing</h1>
        </section>

        <section className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Our Sewing Workshops</h2>
            <p className="text-lg text-gray-600 mb-8">
              Our sewing workshops provide a hands-on learning experience where participants can learn the basics of sewing&lsquo pattern design&lsquo and creating custom-made garments. Whether you&aposre a beginner or an experienced sewer&lsquo our workshops offer something for everyone.
            </p>

            <Carousel images={sewingImages} />

            <h3 className="text-2xl font-semibold mb-4">Our Sewing Courses</h3>
            <ul className="list-disc list-inside space-y-2 mb-8">
              <li>Basic Sewing Techniques</li>
              <li>Advanced Garment Construction</li>
              <li>Pattern Making and Design</li>
              <li>Textile Selection and Care</li>
              <li>Alteration and Repairs</li>
            </ul>
            <h3 className="text-2xl font-semibold mb-4">Benefits of Sewing</h3>
            <p className="text-lg text-gray-600 mb-8">
              Sewing not only allows for creativity and self-expression, but it also provides a calming, meditative practice that promotes relaxation and mental well-being. Join our workshops to learn new skills and create beautiful, handmade items.
            </p>
            <div className="text-center">
              <Link href="/contact" className="inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors">
                Join a Workshop
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
    </div>
  )
}