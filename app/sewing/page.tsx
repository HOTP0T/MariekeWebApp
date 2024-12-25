"use client";

import Image from "next/image";
import Link from "next/link";
import Carousel from "../components/Carousel"; // Adjust the path if necessary
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FloatingActionButton from "../components/FloatingActionButton";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function Sewing() {
  const sewingImages = [
    { src: "/sewing/IMG_20210819_142751.jpg", alt: "Sewing 1" },
    { src: "/sewing/IMG_20210819_215725.jpg", alt: "Sewing 2" },
    {
      src: "/placeholder.svg?height=400&width=600&text=Sewing 3",
      alt: "Sewing 3",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <header className="bg-white shadow-sm">
        <Navbar />
      </header>
      <main className="flex-grow">
        <section className="relative h-[175px] flex items-center justify-center">
          <Image
            src="/sewing/shutterstock_147651662.webp"
            alt="Sewing banner"
            layout="fill"
            objectFit="cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-50" />
          <h1 className="relative z-10 text-4xl md:text-6xl font-bold text-white">
            Sewing
          </h1>
        </section>

        <section className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Our Sewing Workshops</h2>
            <p className="text-lg text-gray-600 mb-8">
              Our sewing workshops provide a hands-on learning experience where
              participants can learn the basics of sewing&lsquo pattern
              design&lsquo and creating custom-made garments. Whether you&aposre
              a beginner or an experienced sewer&lsquo our workshops offer
              something for everyone.
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
              Sewing not only allows for creativity and self-expression, but it
              also provides a calming, meditative practice that promotes
              relaxation and mental well-being. Join our workshops to learn new
              skills and create beautiful, handmade items.
            </p>
            <div className="text-center">
              <Link
                href="/contact"
                className="inline-block bg-[#B9BF04] text-white px-6 py-2 rounded hover:bg-[#ADB982] transition-colors"
              >
                Join a Workshop
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingActionButton />
      <Analytics />
      <SpeedInsights />
    </div>
  );
}
