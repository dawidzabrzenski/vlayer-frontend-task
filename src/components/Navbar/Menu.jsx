import { motion, AnimatePresence } from "motion/react";
import Button from "../Button";

function Menu({ isOpen, setIsOpen }) {
  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const menuContainerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const menuItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const menuLinks = [
    { name: "Rent", href: "#" },
    { name: "Buy", href: "#" },
    { name: "Sell", href: "#" },
    { name: "Manage Property", href: "#" },
    { name: "Resources", href: "#" },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 z-10 bg-white/70 backdrop-blur-md"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={backdropVariants}
            transition={{ duration: 0.2 }}
          />

          <motion.nav
            className="fixed inset-0 z-20 flex flex-col justify-between px-6 py-9"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={menuContainerVariants}
            aria-label="Mobile navigation"
          >
            <motion.ul
              className="my-auto flex flex-col gap-8"
              variants={menuContainerVariants}
            >
              {menuLinks.map((el) => (
                <motion.li key={el.name} variants={menuItemVariants}>
                  <a
                    className="text-3xl leading-[150%] font-medium"
                    href={el.href}
                    onClick={() => setIsOpen(false)}
                  >
                    {el.name}
                  </a>
                </motion.li>
              ))}
            </motion.ul>

            <motion.div
              className="flex w-full flex-col gap-6"
              variants={menuContainerVariants}
            >
              <motion.div variants={menuItemVariants}>
                <Button type="secondary">Login</Button>
              </motion.div>
              <motion.div variants={menuItemVariants}>
                <Button type="primary">Sign Up</Button>
              </motion.div>
            </motion.div>
          </motion.nav>
        </>
      )}
    </AnimatePresence>
  );
}

export default Menu;
