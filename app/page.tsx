"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import FloatingActionButton from "./components/FloatingActionButton";
import TestimonialsSlider from "./components/TestimonialsSlider";
import Footer from "./components/Footer";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Leaf, Scissors } from "lucide-react";

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [activeSection, setActiveSection] = useState<
    "naturopathy" | "sewing" | null
  >(null);

  useEffect(() => {
    setIsMounted(true);
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const naturopathyImages = [
    { src: "/landing/naturopathy/20201025_113534.jpg", alt: "Naturopathy 1" },
    {
      src: "/landing/naturopathy/IMG_20210630_204810.jpg",
      alt: "Naturopathy 2",
    },
    {
      src: "/landing/naturopathy/IMG_20210822_181835.jpg",
      alt: "Naturopathy 3",
    },
  ];

  const sewingImages = [
    { src: "/landing/sewing/IMG-20200828-WA0012.jpg", alt: "Sewing 1" },
    { src: "/landing/sewing/IMG-20201117-WA0000.jpg", alt: "Sewing 2" },
    { src: "/landing/sewing/IMG_20210630_205523.jpg", alt: "Sewing 3" },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-purple-50 to-pink-50">
      <Navbar />
      <main className="flex-grow relative overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 md:h-screen">
          <section
            className="relative flex items-center justify-center overflow-hidden cursor-pointer h-[50vh] md:h-auto"
            onMouseEnter={() => !isMobile && setActiveSection("naturopathy")}
            onMouseLeave={() => !isMobile && setActiveSection(null)}
          >
            {isMounted && (
              <div className="absolute inset-0">
                <Image
                  src="/landing/naturopathy.jpg"
                  alt="Naturopathy background"
                  layout="fill"
                  objectFit="cover"
                  priority
                />
              </div>
            )}
            <div className="absolute inset-0 bg-black bg-opacity-50" />
            <div className="relative z-10 text-center text-white">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-3xl md:text-5xl font-bold mb-4"
              >
                Naturopathy
              </motion.h1>
              {isMobile && (
                <Link
                  href="/naturopathy"
                  className="inline-block bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition-colors"
                >
                  Learn More
                </Link>
              )}
            </div>
            {!isMobile && (
              <AnimatePresence>
                {activeSection === "naturopathy" && (
                  <motion.div
                    className="absolute inset-0 bg-[#D9D9D9] z-20 flex items-center justify-center p-8 overflow-y-auto"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="max-w-2xl">
                      <motion.div className="space-y-6 text-black">
                        <h2 className="text-3xl font-bold flex items-center">
                          <Leaf className="mr-2 text-green-400" />
                          Naturopathy
                        </h2>
                        <div>
                          <p className="text-lg mb-4">
                            Explore the healing power of nature through our
                            naturopathic practices. We offer holistic approaches
                            to wellness, combining traditional wisdom with
                            modern techniques to help you achieve optimal health
                            and balance. Our naturopathic treatments address the
                            root causes of health issues, promoting long-lasting
                            wellness and vitality.
                          </p>
                          <Carousel images={naturopathyImages} />
                        </div>
                        <div className="flex gap-4 w-full">
                          <Link
                            href="/naturopathy"
                            className="w-[50%] h-[50px] flex items-center justify-center bg-[#B9BF04] text-black px-6 rounded-full hover:bg-[#DCDF81] transition-colors transform hover:scale-105"
                          >
                            <span className="text-center">
                              Learn More About Naturopathy
                            </span>
                          </Link>
                          <Link
                            href="/contact"
                            className="w-[50%] h-[50px] flex items-center justify-center bg-[#B9BF04] text-black px-6 rounded-full hover:bg-[#DCDF81] transition-colors transform hover:scale-105"
                          >
                            <span className="text-center">Contact</span>
                          </Link>
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            )}
          </section>

          <section
            className="relative flex items-center justify-center overflow-hidden cursor-pointer h-[50vh] md:h-auto"
            onMouseEnter={() => !isMobile && setActiveSection("sewing")}
            onMouseLeave={() => !isMobile && setActiveSection(null)}
          >
            {isMounted && (
              <div className="absolute inset-0">
                <Image
                  src="/landing/sewing.jpg"
                  alt="Sewing background"
                  layout="fill"
                  objectFit="cover"
                  priority
                />
              </div>
            )}
            <div className="absolute inset-0 bg-black bg-opacity-50" />
            <div className="relative z-10 text-center text-white">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-3xl md:text-5xl font-bold mb-4"
              >
                Sewing
              </motion.h1>
              {isMobile && (
                <Link
                  href="/sewing"
                  className="inline-block bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors"
                >
                  Learn More
                </Link>
              )}
            </div>
            {!isMobile && (
              <AnimatePresence>
                {activeSection === "sewing" && (
                  <motion.div
                    className="absolute inset-0 bg-[#D9D9D9] z-20 flex items-center justify-center p-8 overflow-y-auto"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="max-w-2xl">
                      <motion.div className="space-y-6 text-black">
                        <h2 className="text-3xl font-bold flex items-center">
                          <Scissors className="mr-2 text-blue-400" />
                          Sewing
                        </h2>
                        <div>
                          <p className="text-lg mb-4">
                            Discover the therapeutic benefits of sewing and
                            textile arts. Our creative workshops and courses
                            help you express yourself, reduce stress, and create
                            beautiful, handmade items that bring joy to your
                            life. Through sewing, you&apos;ll develop new
                            skills, boost your creativity, and find a calming,
                            meditative practice that nurtures your well-being.
                          </p>
                          <Carousel images={sewingImages} />
                        </div>
                        <div className="flex gap-4 w-full">
                          <Link
                            href="/sewing"
                            className="w-[50%] h-[50px] flex items-center justify-center bg-[#F2B705] text-black px-6 rounded-full hover:bg-[#F8DB82] transition-colors transform hover:scale-105"
                          >
                            <span className="text-center">
                              Explore Sewing Workshops
                            </span>
                          </Link>
                          <Link
                            href="/contact"
                            className="w-[50%] h-[50px] flex items-center justify-center bg-[#F2B705] text-black px-6 rounded-full hover:bg-[#F8DB82] transition-colors transform hover:scale-105"
                          >
                            <span className="text-center">Contact</span>
                          </Link>
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            )}
          </section>
        </div>

        <TestimonialsSlider />
      </main>

      <Footer />
      <FloatingActionButton />
      <Analytics />
      <SpeedInsights />
    </div>
  );
}
