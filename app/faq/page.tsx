"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Lightbulb, Scissors } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";

const faqs = [
  {
    question: "What is naturopathy?",
    answer:
      "Naturopathy is a holistic approach to health and wellness that focuses on natural remedies and the body's innate ability to heal itself. It combines traditional healing methods with modern scientific knowledge to promote overall well-being.",
    icon: <Lightbulb className="text-green-500" />,
  },
  {
    question: "How can sewing benefit my mental health?",
    answer:
      "Sewing can be a therapeutic activity that promotes mindfulness, reduces stress, and boosts creativity. It provides a sense of accomplishment and can be a form of self-expression, contributing to improved mental well-being.",
    icon: <Scissors className="text-blue-500" />,
  },
  {
    question: "Do I need any prior experience to join your sewing workshops?",
    answer:
      "No prior experience is necessary for our beginner workshops. We offer classes for all skill levels, from complete beginners to advanced sewers. Our experienced instructors will guide you through each step of the process.",
    icon: <Scissors className="text-blue-500" />,
  },
  {
    question: "What should I expect during a naturopathy consultation?",
    answer:
      "During a naturopathy consultation, we'll discuss your health history, current concerns, and lifestyle factors. We may perform physical examinations and recommend natural therapies, dietary changes, or supplements tailored to your individual needs.",
    icon: <Lightbulb className="text-green-500" />,
  },
  {
    question: "How long are your sewing workshops?",
    answer:
      "Our sewing workshops vary in length depending on the project and skill level. Beginner workshops typically last 2-3 hours, while more advanced projects may span multiple sessions. Check our schedule for specific workshop durations.",
    icon: <Scissors className="text-blue-500" />,
  },
];

const FAQItem = ({ question, answer, icon }) => {
  const [isOpen, setIsOpen] = useState(false);

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
          {icon}
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

const FloatingBubble = ({ children }) => {
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
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-purple-50 to-pink-50">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8 relative overflow-hidden">
        <motion.h1
          className="text-4xl font-bold mb-8 text-center text-purple-800"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Frequently Asked Questions
        </motion.h1>

        {mounted && (
          <>
            {/* <FloatingBubble>
              <Image src="/faq/interro.png" alt="Decorative bubble" width={100} height={100} className="opacity-50" />
            </FloatingBubble> */}
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
