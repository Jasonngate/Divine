import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { MoveRight } from "lucide-react";

// Animation variants
const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeInOut" },
  },
};

const About = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={sectionVariants}
      className="pt-20 md:py-24 text-[#FEF2CD] overflow-hidden"
    >
      <div className="container mx-auto max-w-6xl px-6 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Text Section */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col items-center md:items-start text-center md:text-left"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-[#FBD051] mb-6 tracking-tight"
          >
            Meet Dr. (Hon) Jinel K
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-lg mb-6 text-[#FEF2CD]/90 leading-relaxed max-w-xl"
          >
            With over a decade of experience in spiritual guidance, Dr. Jinel K
            has helped thousands of souls find their true path through the
            ancient arts of divination and healing.
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-lg mb-8 text-[#FEF2CD]/90 leading-relaxed max-w-xl"
          >
            Based in Kandivali West, Mumbai, her practice combines traditional
            wisdom with modern understanding to provide profound insights and
            transformative healing.
          </motion.p>

          <Link href="/about" passHref>
            <motion.button
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.95 }}
              className="relative group bg-gradient-to-r from-[#d4af37] via-[#ffd700] to-[#b8860b] text-[#3a0d1e] font-semibold rounded-lg px-8 py-3 flex items-center gap-3 shadow-lg transition-all duration-300 overflow-hidden hover:shadow-2xl border border-[#d4af37]/30"
            >
              <span className="relative z-10 flex items-center gap-3">
                Learn More About Dr. Jinel
                <MoveRight
                  className="transition-transform duration-300 group-hover:translate-x-1"
                  size={20}
                />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#b8860b] to-[#d4af37] opacity-0 group-hover:opacity-100 transition-opacity duration-400"></div>
            </motion.button>
          </Link>
        </motion.div>

        {/* Image Section */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center md:justify-end"
        >
          <div className="relative group w-[300px] h-[400px] md:w-[380px] md:h-[480px] lg:w-[400px] lg:h-[500px]">
            {/* Aura Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 via-amber-500 to-yellow-600 rounded-full blur-xl opacity-30 group-hover:opacity-40 transition-opacity duration-500"></div>

            {/* Image Container */}
            <motion.div
              whileHover={{ scale: 1.05, rotate: 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/40 h-full border-2 border-solid border-[#FBD051] hover:border-yellow-400 transition-colors duration-300"
            >
              <Image
                src="/author.png"
                alt="Dr. Jinel K, a spiritual guide and astrologer"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 80vw, 400px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
