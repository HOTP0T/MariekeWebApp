"use client";

import { useState, useEffect, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";

interface FAQ {
  question: string;
  answer: string;
  icon: "naturopathy" | "sewing";
}

const faqs: FAQ[] = [
  {
    question: "What is naturopathy?",
    answer:
      "Naturopathy is a holistic approach to health and wellness that focuses on natural remedies and the body's innate ability to heal itself. It combines traditional healing methods with modern scientific knowledge to promote overall well-being.",
    icon: "naturopathy",
  },
  {
    question: "How can sewing benefit my mental health?",
    answer:
      "Sewing can be a therapeutic activity that promotes mindfulness, reduces stress, and boosts creativity. It provides a sense of accomplishment and can be a form of self-expression, contributing to improved mental well-being.",
    icon: "sewing",
  },
  {
    question: "Do I need any prior experience to join your sewing workshops?",
    answer:
      "No prior experience is necessary for our beginner workshops. We offer classes for all skill levels, from complete beginners to advanced sewers. Our experienced instructors will guide you through each step of the process.",
    icon: "sewing",
  },
  {
    question: "What should I expect during a naturopathy consultation?",
    answer:
      "During a naturopathy consultation, we'll discuss your health history, current concerns, and lifestyle factors. We may perform physical examinations and recommend natural therapies, dietary changes, or supplements tailored to your individual needs.",
    icon: "naturopathy",
  },
  {
    question: "How long are your sewing workshops?",
    answer:
      "Our sewing workshops vary in length depending on the project and skill level. Beginner workshops typically last 2-3 hours, while more advanced projects may span multiple sessions. Check our schedule for specific workshop durations.",
    icon: "sewing",
  },
];

interface FAQItemProps {
  question: string;
  answer: string;
  icon: "naturopathy" | "sewing";
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, icon }) => {
  const [isOpen, setIsOpen] = useState(false);

  const getIcon = (iconType: "naturopathy" | "sewing") => {
    if (iconType === "naturopathy") {
      return (
        <Image
          src="/naturopathy/Property 1=Leaf.png"
          alt="Naturopathy icon"
          width={24}
          height={24}
          className="mr-2"
        />
      );
    } else {
      return (
        <Image
          src="/sewing/Property 1=Needle.png"
          alt="Sewing icon"
          width={24}
          height={24}
          className="mr-2"
        />
      );
    }
  };

  return (
    <motion.div
      className="border-b border-gray-200 py-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <button
        className="flex justify-between items-center w-full text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-medium flex items-center">
          {getIcon(icon)}
          <span className="ml-2">{question}</span>
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown className="h-5 w-5" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <p className="mt-2 text-gray-600">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

interface FloatingBubbleProps {
  children: ReactNode;
}

const FloatingBubble: React.FC<FloatingBubbleProps> = ({ children }) => {
  return (
    <motion.div
      className="absolute"
      animate={{
        y: [0, -10, 0],
        rotate: [0, 5, -5, 0],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        repeatType: "reverse",
      }}
    >
      {children}
    </motion.div>
  );
};

export default function FAQ() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <section className="relative h-[175px] flex items-center justify-center">
        <Image
          src="/faq/faq-banner.jpg"
          alt="FAQ banner"
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <h1 className="relative z-10 text-4xl md:text-6xl font-bold text-white">
          Frequently Asked Questions
        </h1>
      </section>
      <main className="flex-grow container mx-auto px-4 py-8 relative overflow-hidden">
        {mounted && (
          <>
            <FloatingBubble>
              <Image
                src="/faq/interro.png"
                alt="Decorative bubble"
                width={80}
                height={80}
                className="opacity-50 top-1/4 right-10"
              />
            </FloatingBubble>
            <FloatingBubble>
              <Image
                src="/faq/interro.png"
                alt="Decorative bubble"
                width={120}
                height={120}
                className="opacity-50 bottom-1/4 left-10"
              />
            </FloatingBubble>
          </>
        )}

        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-6 relative z-10">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              icon={faq.icon}
            />
          ))}
        </div>

        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-lg text-gray-600">
            Didn&apos;t find what you&apos;re looking for?
          </p>
          <a
            href="/contact"
            className="inline-block mt-4 px-6 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors"
          >
            Contact Us
          </a>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}
