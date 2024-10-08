'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, ChevronDown, ChevronUp } from 'lucide-react';
import ComboboxDemo, { Category } from './combobox';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem = ({ question, answer }: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="flex justify-between items-center w-full text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-medium">{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {isOpen ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <p className="mt-2 text-gray-600">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FloatingActionButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<Category>('Naturopathy');

  const faqData = {
    Naturopathy: [
      {
        question: 'What is naturopathy?',
        answer: 'Naturopathy is a holistic approach to health and wellness that focuses on natural remedies and the body\'s innate ability to heal itself.',
      },
      {
        question: 'What should I expect during a naturopathy consultation?',
        answer: 'During a consultation, we\'ll discuss your health history, current concerns, and lifestyle. We may recommend natural therapies or dietary changes.',
      },
      {
        question: 'What services do you offer in naturopathy?',
        answer: 'Our naturopathic services include nutritional counseling, herbal medicine, acupuncture, lifestyle coaching, and stress management.',
      },
    ],
    Sewing: [
      {
        question: 'How can sewing benefit my mental health?',
        answer: 'Sewing is a therapeutic activity that promotes mindfulness, reduces stress, and boosts creativity.',
      },
      {
        question: 'Do I need prior experience for your sewing workshops?',
        answer: 'No experience is necessary. Our workshops are for all levels, from complete beginners to experienced sewers.',
      },
      {
        question: 'How long are the sewing workshops?',
        answer: 'Workshops typically last 2-3 hours for beginners, with advanced projects spanning multiple sessions.',
      },
    ],
    Services: [
      {
        question: 'What services do you offer?',
        answer: 'We offer a wide range of services, including nutritional counseling, herbal medicine, acupuncture, and sewing workshops.',
      },
      {
        question: 'How do your sewing courses work?',
        answer: 'Our courses cover topics like basic sewing techniques, pattern making, and advanced garment construction.',
      },
      {
        question: 'What are the benefits of naturopathic treatments?',
        answer: 'Naturopathic treatments address chronic conditions and promote long-term health by focusing on the root causes of illness.',
      },
    ],
  };

  const handleCategoryChange = (category: Category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="bg-white p-4 rounded-lg shadow-lg mb-4 w-80 h-96 overflow-y-auto"
          >
            <h3 className="text-lg font-semibold mb-2">Choose a Topic</h3>
            <ComboboxDemo onSelect={handleCategoryChange} />
            <div className="mt-4">
              {faqData[selectedCategory].map((item, index) => (
                <FAQItem key={index} question={item.question} answer={item.answer} />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="bg-blue-600 text-white p-3 rounded-full shadow-lg"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </motion.button>
    </div>
  );
};

export default FloatingActionButton;