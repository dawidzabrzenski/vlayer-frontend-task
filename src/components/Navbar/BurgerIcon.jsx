import { motion } from "motion/react";

function BurgerIcon({ isOpen, setIsOpen }) {
  const topLineVariants = {
    closed: { rotate: 0, translateY: 0 },
    open: { rotate: 45, translateY: 6 },
  };

  const bottomLineVariants = {
    closed: { rotate: 0, translateY: 0 },
    open: { rotate: -45, translateY: -6 },
  };

  return (
    <div
      className="z-30 flex h-[30px] w-[30px] cursor-pointer flex-col justify-center"
      onClick={() => setIsOpen(!isOpen)}
    >
      <motion.div
        className="mb-2 h-1 w-full origin-center rounded-sm bg-black"
        variants={topLineVariants}
        animate={isOpen ? "open" : "closed"}
        transition={{ duration: 0.3 }}
      />
      <motion.div
        className="h-1 w-full origin-center rounded-sm bg-black"
        variants={bottomLineVariants}
        animate={isOpen ? "open" : "closed"}
        transition={{ duration: 0.3 }}
      />
    </div>
  );
}

export default BurgerIcon;
