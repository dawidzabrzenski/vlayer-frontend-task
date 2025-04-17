import { motion } from "motion/react";
import AnimatedCounter from "../components/AnimatedCounter";
import ProductCard from "../components/Card/ProductCard";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -50 },
  show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

function Hero() {
  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      <div className="gradient-center flex flex-col gap-8 px-8 pb-6 pt-12">
        <motion.h2
          className="text-center text-[40px] font-bold leading-[110%] -tracking-wider"
          variants={itemVariants}
        >
          Buy, rent, or sell your property easily
        </motion.h2>
        <motion.p className="section-description-bold" variants={itemVariants}>
          A great platform to buy, sell, or even rent your properties without
          any commissions.
        </motion.p>
        <motion.div
          className="flex justify-evenly gap-4"
          variants={itemVariants}
        >
          <div className="border-secondary flex flex-col border-l-4 px-6">
            <AnimatedCounter start={0} end={50} duration={5} />
            <p className="text-font-gray text-base font-medium leading-[150%]">
              renters
            </p>
          </div>
          <div className="border-secondary flex flex-col border-l-4 px-6">
            <AnimatedCounter start={0} end={10} duration={5} />
            <p className="text-font-gray text-base font-medium leading-[150%]">
              properties
            </p>
          </div>
        </motion.div>
      </div>
      <motion.div
        className="flex w-full flex-col justify-center pt-4"
        variants={itemVariants}
      >
        <img className="relative px-12" src="./assets/map.png" alt="Map" />
        <div className="absolute -left-10 scale-[0.6]">
          <ProductCard
            compact
            price="$2,700"
            title="Beverly Springfield"
            address="2821 Lake Sevilla, Palm Harbor, TX"
            imageUrl="./assets/apartments/apartment-3.webp"
          />
        </div>
      </motion.div>
    </motion.section>
  );
}

export default Hero;
