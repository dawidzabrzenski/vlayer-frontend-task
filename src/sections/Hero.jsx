import { motion } from "motion/react";
import AnimatedCounter from "../components/AnimatedCounter";
import ProductCard from "../components/Card/ProductCard";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -50 },
  show: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut" } },
};

const wordVariants = {
  hidden: { opacity: 0, x: 20 },
  show: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut" } },
};

function Hero() {
  const h2Text = "Buy, rent, or sell your property easily";
  const pTextFirstLine = "A great platform to buy, sell, or even rent";
  const pTextSecondLine = "your properties without any commissions.";

  return (
    <motion.section
      className="flex flex-col gap-4 md:h-[80vh] md:flex-row"
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      <div className="gradient-center flex flex-col justify-center gap-8 px-8 pb-6 pt-12 md:w-1/2 md:gap-20 md:px-16">
        <motion.h2
          className="text-center text-[40px] font-bold leading-[110%] -tracking-wider md:max-w-[544px] md:text-left md:text-6xl"
          initial="hidden"
          animate="show"
          variants={{
            show: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          {h2Text.split(" ").map((word, index) => (
            <motion.span key={index} variants={wordVariants}>
              {word}{" "}
            </motion.span>
          ))}
        </motion.h2>
        <motion.p
          className="section-description-bold text-center md:text-left"
          initial="hidden"
          animate="show"
          variants={{
            show: {
              transition: {
                staggerChildren: 0.05,
              },
            },
          }}
        >
          {pTextFirstLine.split(" ").map((word, index) => (
            <motion.span key={`first-${index}`} variants={wordVariants}>
              {word}{" "}
            </motion.span>
          ))}
          <motion.br className="hidden md:block" variants={wordVariants} />
          {pTextSecondLine.split(" ").map((word, index) => (
            <motion.span key={`second-${index}`} variants={wordVariants}>
              {word}{" "}
            </motion.span>
          ))}
        </motion.p>
        <motion.div
          className="flex justify-evenly gap-4 md:justify-start md:gap-12"
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
        className="relative flex h-full w-full flex-col justify-center md:w-1/2"
        variants={itemVariants}
      >
        <motion.img
          className="h-full w-full object-cover object-top px-12 md:px-0"
          src="./assets/map.png"
          alt="Map"
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { duration: 0.8, ease: "easeOut" },
          }}
        />
        <motion.div
          variants={itemVariants}
          className="absolute -left-10 scale-[0.6] md:-left-14 md:scale-100"
        >
          <ProductCard
            compact
            price="$2,700"
            title="Beverly Springfield"
            address="2821 Lake Sevilla, Palm Harbor, TX"
            imageUrl="./assets/apartments/apartment-3.webp"
          />
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

export default Hero;
