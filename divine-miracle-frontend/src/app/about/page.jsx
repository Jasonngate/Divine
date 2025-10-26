"use client";

import { Heart, Star, Sparkles, Award } from "lucide-react";

// ----------------------
// Simple Card Component
// ----------------------
const Card = ({ children, className }) => (
  <div
    className={`rounded-xl border border-[#FEF2CD]/20 bg-white/5 shadow-xl backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-yellow-400/40 hover:shadow-yellow-400/20 ${className}`}
  >
    {children}
  </div>
);

const CardContent = ({ children, className }) => (
  <div className={`p-6 ${className}`}>{children}</div>
);

// ----------------------
// Page Transition (fade-in)
// ----------------------
const PageTransition = ({ children }) => (
  <div className="animate-fadeIn">{children}</div>
);

// ----------------------
// About Page
// ----------------------
export default function About() {
  const achievements = [
    {
      icon: <Star className="h-6 w-6" />,
      title: "20+ Years Experience",
      description: "A decade of spiritual guidance and healing",
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "1000+ Lives Touched",
      description: "Thousands of souls guided to their true path",
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Certified Practitioner",
      description: "Certified in multiple spiritual modalities",
    },
    {
      icon: <Sparkles className="h-6 w-6" />,
      title: "Holistic Approach",
      description: "Combining ancient wisdom with modern insights",
    },
  ];

  // Awards and recognition images - can include local files or internet URLs
  const awardImages = [
    // Local IMG files from public folder
    "/IMG-20251009-WA0041.jpg",
    "/IMG-20251009-WA0042.jpg",
    "/IMG-20251009-WA0043.jpg",
    "/IMG-20251009-WA0066.jpg",
    "/IMG-20251009-WA0065.jpg",
    "/IMG-20251009-WA0044.jpg",
    "/IMG-20251009-WA0045.jpg",
    "/IMG-20251009-WA0046.jpg",
    "/IMG-20251009-WA0047.jpg",
    "/IMG-20251009-WA0048.jpg",
    "/IMG-20251009-WA0049.jpg",
    "/IMG-20251009-WA0050.jpg",
    "/IMG-20251009-WA0062.jpg",
    "/IMG-20251009-WA0051.jpg",
    "/IMG-20251009-WA0052.jpg",
    "/IMG-20251009-WA0053.jpg",
    "/IMG-20251009-WA0054.jpg",
    "/IMG-20251009-WA0055.jpg",
    "/IMG-20251009-WA0056.jpg",
    "/IMG-20251009-WA0057.jpg",
    "/IMG-20251009-WA0058.jpg",
    "/IMG-20251009-WA0059.jpg",
    "/IMG-20251009-WA0060.jpg",
    "/IMG-20251009-WA0061.jpg",
    "/IMG-20251009-WA0063.jpg",
  ];

  // const awardImages = [
  //   // Google User Content URLs (most reliable method)
  //   "https://lh3.googleusercontent.com/d/1f6KleC0OcYpk4O30SneJBi1XN03ArdHL",
  //   "https://lh3.googleusercontent.com/d/1GIr3QVWoPXpXl9jrwpXLnLT52ytDe0HO",
  //   "https://lh3.googleusercontent.com/d/16-TiTPL9rKkV5aGwi1_InkiC8HHDcqoW",
  //   "https://lh3.googleusercontent.com/d/1PCgljWdOvBj7deOun7XzcH40XgWXzbF1",
  //   "https://lh3.googleusercontent.com/d/1QVWZOq1p0EWP8ellJM--Rt3PO-Z562gZ",
  //   "https://lh3.googleusercontent.com/d/1qiP3SriQWpzhm0IR25scUxAe7e2oHSNN",
  //   "https://lh3.googleusercontent.com/d/1rGgXHA558UaTB7xEa6r9C4Ir-z-Xwhly",
  //   "https://lh3.googleusercontent.com/d/1NQ1byls3mRA0R_SBG5ZrFL1MsOLfYhCx",
  //   "https://lh3.googleusercontent.com/d/11JtwOxos45FK2LPJk0qGuw9Bff7mPtNY",
  //   "https://lh3.googleusercontent.com/d/1DzVWS3luzbRcrRBtW_mUEXQed9oclfBR",
  //   "https://lh3.googleusercontent.com/d/1Dr2ihSO04FvkS_u7lvvMpuyOjMU-1DiN",
  //   "https://lh3.googleusercontent.com/d/1LtP3IhC3LS0m67gBRKrHOIQAOsS_iGht",
  //   "https://lh3.googleusercontent.com/d/1OVIOBnrr0ItWeKcAKfsf2XDgJpakm7c_",
  //   "https://lh3.googleusercontent.com/d/1WZi7Ql0DXOTbrrWnAhxz6k5HjQ0BfW1M",
  //   "https://lh3.googleusercontent.com/d/1ZrDsik4MuYXjuspeme1k6qNJ_7UwDYa1",
  //   "https://lh3.googleusercontent.com/d/1Kzo8O24E-f3ODadKNnyYUFRz_cSNnSvj",
  //   "https://lh3.googleusercontent.com/d/10FOUuBb2f7KKYLnNJghbE1Y9TarlAyLP",
  //   "https://lh3.googleusercontent.com/d/1cXo1Yk9Z2YF6b0b1y3Y7f2f1bJt1q3eE",
  //   "https://lh3.googleusercontent.com/d/1h0Yl1Zk3JqF2b4c5D6E7F8G9H0I1J2K3",
  //   "https://lh3.googleusercontent.com/d/1jN4p5Q6R7S8T9U0V1W2X3Y4Z5A6B7C8D",
  //   "https://lh3.googleusercontent.com/d/1Y6cviQDqvzUdnfpLaxUzE5ghRBmcXd3J",
  //   "https://lh3.googleusercontent.com/d/1zUOdwCTyXXk9XWL3sI6WdAEt-tVj0SMo",
  //   "https://lh3.googleusercontent.com/d/1mF4k375mQbaUeV5iy5W7Kz56KklgDl8D",
  //   "https://lh3.googleusercontent.com/d/1OQhGM7mUJK7m0kLGVVW_TEnMuS4lb4AO"
  // ];


  return (
    <PageTransition>
      <div className="min-h-screen py-24 sm:py-24 lg:py-24 bg-gradient-to-br from-[#2a0015] via-[#480026] to-[#2a0015] text-[#FEF2CD] relative overflow-hidden">
        {/* Glowing background */}
        <div className="absolute -top-40 -left-40 w-[20rem] sm:w-[30rem] h-[20rem] sm:h-[30rem] bg-pink-700/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-[18rem] sm:w-[28rem] h-[18rem] sm:h-[28rem] bg-purple-800/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[15rem] sm:w-[20rem] h-[15rem] sm:h-[20rem] bg-yellow-400/10 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Hero Section */}
          <section className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-yellow-200 via-yellow-300 to-yellow-400 bg-clip-text text-transparent drop-shadow-lg pb-4 font-cormorant">
              About Dr. (Hon) Jinel K
            </h1>
            <p className="text-lg sm:text-xl text-[#f8e9c9]/80 max-w-3xl mx-auto px-4">
              A compassionate spiritual guide dedicated to illuminating the path
              of self-discovery and healing through ancient wisdom and divine
              insight.
            </p>
          </section>

          {/* My Journey */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 mb-12 sm:mb-16 lg:mb-20 px-0 sm:px-6 lg:px-14">
            <div className="space-y-4 sm:space-y-6 order-2 lg:order-1">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 sm:mb-6">
                My Journey
              </h2>
              <p className="text-base sm:text-lg text-[#f8e9c9]/80 leading-relaxed">
                My spiritual journey began over a decade ago when I first
                discovered the profound wisdom hidden within ancient divination practices. What started as personal curiosity transformed into a calling to help others navigate their spiritual paths.
              </p>
              <p className="text-base sm:text-lg text-[#f8e9c9]/80 leading-relaxed">
                Based in the vibrant community of Kandivali West, Mumbai, I have dedicated my life to mastering various spiritual arts including Tarot reading, Numerology, Angel Healing, Vastu consultation, Astrology, and the ancient practice of Herbal Spells.
              </p>
              <p className="text-base sm:text-lg text-[#f8e9c9]/80 leading-relaxed">
                Each session is a sacred space where traditional wisdom meets modern understanding, creating a unique healing experience tailored to your individual needs and spiritual journey.
              </p>
            </div>

            <div className="relative order-1 lg:order-2 mb-6 lg:mb-0">
              <img
                src="/maam3.jpg"
                alt="Dr. Jinel K"
                className="rounded-2xl shadow-lg border border-[#FEF2CD]/20 w-full max-w-md mx-auto lg:max-w-full"
              />
              <div className="absolute -bottom-2 sm:-bottom-4 -right-2 sm:-right-4 w-16 sm:w-24 h-16 sm:h-24 bg-gradient-to-br from-yellow-400 via-amber-500 to-yellow-600 rounded-full filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
            </div>
          </div>

          {/* Achievements */}
          <section className="mb-12 sm:mb-16 lg:mb-20">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 text-foreground px-4">
              Achievements & Certifications
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12">
              {achievements.map((a, i) => (
                <Card key={i} className="text-center">
                  <CardContent className="p-4 sm:p-6">
                    <div className="text-yellow-300 mb-3 sm:mb-4 flex justify-center">
                      {a.icon}
                    </div>
                    <h3 className="font-semibold mb-2 text-[#FEF2CD] text-sm sm:text-base">
                      {a.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#f8e9c9]/80 leading-relaxed">
                      {a.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

          </section>

          {/* Awards Slider - Full Width */}
          <section className="mb-10 sm:mb-14 lg:mb-18">
            <h2 className="text-3xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 text-foreground px-4">
              Awards & Recognitions
            </h2>
          </section>
        </div>

        {/* Full Width Awards Slider */}
        <div className="w-full mb-12 sm:mb-16 lg:mb-20 overflow-hidden">
          <div className="animate-scroll flex gap-5" style={{ width: 'max-content' }}>
            {/* Double the array for seamless infinite scroll */}
            {[...awardImages, ...awardImages].map((src, i) => (
              <div key={`scroll-${i}`} className="flex-shrink-0">
                <div className="h-64 sm:h-72 md:h-80 w-auto rounded-xl overflow-hidden border border-[#FEF2CD]/20 shadow-lg">
                  <img
                    src={src}
                    alt={`Award ${(i % awardImages.length) + 1}`}
                    className="h-full w-auto object-contain transition-transform duration-300 hover:scale-105"
                    onError={(e) => {
                      // Fallback for broken images
                      e.target.style.display = 'none';
                    }}
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          {/* Philosophy */}
          <section className="bg-white/5 rounded-2xl p-6 sm:p-8 lg:p-12 border border-[#FEF2CD]/20">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8 text-foreground">
              My Philosophy
            </h2>
            <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6">
              <p className="text-base sm:text-lg text-[#f8e9c9]/80 text-center italic leading-relaxed">
                "Every soul carries within it the seeds of divine wisdom. My
                role is not to provide answers, but to help you discover the
                truth that already exists within you."
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mt-8 sm:mt-12">
                <div className="text-center">
                  <h3 className="font-semibold mb-2 sm:mb-3 text-[#FEF2CD] text-base sm:text-lg">
                    Authenticity
                  </h3>
                  <p className="text-[#f8e9c9]/80 text-sm sm:text-base leading-relaxed">
                    Honoring your true self and life purpose through genuine
                    spiritual connection.
                  </p>
                </div>
                <div className="text-center">
                  <h3 className="font-semibold mb-2 sm:mb-3 text-[#FEF2CD] text-base sm:text-lg">
                    Compassion
                  </h3>
                  <p className="text-[#f8e9c9]/80 text-sm sm:text-base leading-relaxed">
                    Creating a safe, nurturing space for healing and
                    self-discovery.
                  </p>
                </div>
                <div className="text-center">
                  <h3 className="font-semibold mb-2 sm:mb-3 text-[#FEF2CD] text-base sm:text-lg">Wisdom</h3>
                  <p className="text-[#f8e9c9]/80 text-sm sm:text-base leading-relaxed">
                    Combining ancient knowledge with modern insights for
                    holistic guidance.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Tailwind Animations */}
      <style jsx>{`
        .animate-fadeIn {
          animation: fadeIn 1s ease-in;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        .animate-scroll {
          animation: scroll 80s linear infinite;
        }
        
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-100% / 2));
          }
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </PageTransition>
  );
}
