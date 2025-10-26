"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Aarav Sharma",
      feedback:
        "Dr. Jinel's tarot reading gave me clarity I never had before. Her guidance felt divine and accurate.",
      location: "Mumbai, India",
    },
    {
      name: "Priya Desai",
      feedback:
        "I experienced angel healing and it was truly transformative. The energy was calming and life-changing.",
      location: "Pune, India",
    },
    {
      name: "Rahul Mehta",
      feedback:
        "Her vastu consultation helped balance the energy of my home. I could feel the difference instantly.",
      location: "Delhi, India",
    },
    {
      name: "Sneha Patel",
      feedback:
        "The crystal therapy session was incredibly powerful. I felt negative energies lifting away during the process.",
      location: "Bangalore, India",
    },
    {
      name: "Vikram Singh",
      feedback:
        "Dr. Jinel's spiritual guidance helped me through a difficult time. Her insights were remarkably accurate.",
      location: "Chennai, India",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [cardsToShow, setCardsToShow] = useState(1);

  useEffect(() => {
    const updateCardsToShow = () => {
      if (window.innerWidth >= 1024) {
        setCardsToShow(3);
      } else if (window.innerWidth >= 768) {
        setCardsToShow(2);
      } else {
        setCardsToShow(1);
      }
    };

    updateCardsToShow();
    window.addEventListener("resize", updateCardsToShow);

    return () => window.removeEventListener("resize", updateCardsToShow);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex(
        (prevIndex) => (prevIndex + 1) % (testimonials.length - cardsToShow + 1)
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, cardsToShow, testimonials.length]);

  const nextTestimonial = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) =>
      Math.min(prevIndex + 1, testimonials.length - cardsToShow)
    );
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
    setIsAutoPlaying(false);
  };

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  };

  // SVG icons as components to avoid external dependencies
  const ChevronLeft = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="15 18 9 12 15 6"></polyline>
    </svg>
  );

  const ChevronRight = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="9 18 15 12 9 6"></polyline>
    </svg>
  );

  const QuoteIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="80"
      height="80"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
      <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path>
    </svg>
  );

  return (
    <section className="py-14 md:py-14 text-[#FEF2CD] overflow-hidden relative">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 bg-[#FBD051] rounded-full filter blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-[#FBD051] rounded-full filter blur-xl"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-[#FBD051] rounded-full filter blur-xl"></div>
      </div>

      <div className="container mx-auto px-4 text-center max-w-6xl relative z-10">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold text-[#FBD051] mb-4"
        >
          What Clients Say
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-lg text-[#FEF2CD]/80 mb-12 max-w-2xl mx-auto"
        >
          Discover the experiences of those who found guidance through Divine
          Miracle.
        </motion.p>

        {/* Testimonials Carousel */}
        <div className="relative">
          <div className="overflow-hidden py-6">
            <div className="flex justify-center">
              <AnimatePresence
                initial={false}
                custom={direction}
                mode="popLayout"
              >
                {testimonials
                  .slice(currentIndex, currentIndex + cardsToShow)
                  .map((testimonial, index) => (
                    <motion.div
                      key={`${currentIndex}-${index}`}
                      custom={direction}
                      variants={variants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                        duration: 0.5,
                      }}
                      className="px-4 w-full"
                      style={{
                        maxWidth:
                          cardsToShow === 1
                            ? "100%"
                            : cardsToShow === 2
                            ? "50%"
                            : "33.333%",
                      }}
                    >
                      <motion.div
                        whileHover={{ y: -10 }}
                        className="bg-gradient-to-br from-[#3a0025] to-[#2a0015] border border-[#FBD051]/30 rounded-2xl shadow-2xl p-6 text-left relative overflow-hidden h-full"
                      >
                        {/* Quote icon */}
                        <div className="absolute -top-4 -right-4 text-[#FBD051]/10">
                          <QuoteIcon />
                        </div>

                        {/* Card content */}
                        <div className="relative z-10">
                          <p className="text-lg text-[#FEF2CD]/90 leading-relaxed mb-6 italic">
                            "{testimonial.feedback}"
                          </p>
                          <div className="mt-4 pt-4 border-t border-[#FBD051]/20">
                            <h4 className="text-xl font-semibold text-[#FBD051]">
                              {testimonial.name}
                            </h4>
                            <span className="text-sm text-[#FEF2CD]/70">
                              {testimonial.location}
                            </span>
                          </div>
                        </div>
                      </motion.div>
                    </motion.div>
                  ))}
              </AnimatePresence>
            </div>
          </div>

          {/* Navigation arrows */}
          <button
            onClick={prevTestimonial}
            disabled={currentIndex === 0}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-[#FBD051] text-[#2a0015] p-2 rounded-full shadow-lg hover:bg-[#FBD051]/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all z-20"
            aria-label="Previous testimonials"
          >
            <ChevronLeft />
          </button>

          <button
            onClick={nextTestimonial}
            disabled={currentIndex >= testimonials.length - cardsToShow}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-[#FBD051] text-[#2a0015] p-2 rounded-full shadow-lg hover:bg-[#FBD051]/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all z-20"
            aria-label="Next testimonials"
          >
            <ChevronRight />
          </button>
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: testimonials.length - cardsToShow + 1 }).map(
            (_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                  setIsAutoPlaying(false);
                }}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex
                    ? "bg-[#FBD051] scale-125"
                    : "bg-[#FBD051]/30"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
