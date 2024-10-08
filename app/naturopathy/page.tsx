"use client";

import Image from "next/image";
import Link from "next/link";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import FloatingActionButton from "../components/FloatingActionButton";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function Naturopathy() {
  const naturopathyImages = [
    {
      src: "/naturopathy/IMG_20210825_180320.jpg?height=400&width=600&text=Naturopathy 1",
      alt: "Naturopathy 1",
    },
    {
      src: "/naturopathy/IMG_20210825_181547.jpg?height=400&width=600&text=Naturopathy 2",
      alt: "Naturopathy 2",
    },
    {
      src: "/sewing/IMG_20210819_142751.jpg?height=400&width=600&text=Naturopathy 3",
      alt: "Naturopathy 3",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-purple-50 to-pink-50">
      <Navbar />
      <main className="flex-grow">
        <section className="relative h-[40vh] flex items-center justify-center">
          <Image
            src="/naturopathy/Naturopathy-Treatment-980x613.jpg?height=400&width=600&text=Naturopathy"
            alt="Naturopathy banner"
            layout="fill"
            objectFit="cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-50" />
          <h1 className="relative z-10 text-4xl md:text-6xl font-bold text-white">
            Naturopathy
          </h1>
        </section>

        <section className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">
              Our Naturopathic Approach
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Naturopathy is a holistic approach to wellness that focuses on
              treating the whole person and addressing the root causes of health
              issues. Our naturopathic practices combine traditional wisdom with
              modern scientific understanding to provide comprehensive care for
              our clients.
            </p>

            <Carousel images={naturopathyImages} />

            <h3 className="text-2xl font-semibold mb-4">Our Services</h3>
            <ul className="list-disc list-inside space-y-2 mb-8">
              <li>Nutritional Counseling</li>
              <li>Herbal Medicine</li>
              <li>Acupuncture</li>
              <li>Lifestyle Coaching</li>
              <li>Stress Management</li>
              <li>Detoxification Programs</li>
            </ul>
            <h3 className="text-2xl font-semibold mb-4">
              Benefits of Naturopathy
            </h3>
            <p className="text-lg text-gray-600 mb-8">
              Naturopathic treatments can help with a wide range of health
              concerns, including chronic diseases&lsquo; digestive
              issues&lsquo; hormonal imbalances, and mental health. By
              addressing the underlying causes of illness and promoting the
              body&apos;s natural healing abilities&lsquo; naturopathy can lead
              to long-lasting improvements in overall health and well-being.
            </p>
            <div className="text-center">
              <Link
                href="/contact"
                className="inline-block bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition-colors"
              >
                Book a Consultation
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
