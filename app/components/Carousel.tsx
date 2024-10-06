'use client'

import Image from 'next/image'
import { useState } from 'react'

interface CarouselProps {
  images: { src: string; alt: string }[]
}

export default function Carousel({ images }: CarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const totalSlides = images.length

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)
  }

  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg mb-4 w-full h-[450px]">
      <div
        className="flex transition-transform duration-300 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="w-full flex-shrink-0 h-[450px]">
            <Image
              src={image.src}
              alt={image.alt}
              width={600} // Define a width suitable for the carousel container
              height={600} // Define a height suitable for the carousel container
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
      <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full"
      >
        &#8592;
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full"
      >
        &#8594;
      </button>
    </div>
  )
}