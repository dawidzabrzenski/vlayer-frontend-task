import { motion } from "motion/react";
import Button from "../Button";

function Menu({ isOpen, setIsOpen }) {
  const menuVariants = {
    hidden: { x: "100%", opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  const menuLinks = [
    { name: "Rent", href: "#" },
    { name: "Buy", href: "#" },
    { name: "Sell", href: "#" },
    { name: "Manage Property", href: "#" },
    { name: "Resources", href: "#" },
  ];

  return (
    <motion.nav
      className={`fixed inset-0 z-20 flex flex-col items-center justify-end bg-white/60 backdrop-blur-md ${
        isOpen ? "block" : "hidden"
      }`}
      variants={menuVariants}
      initial="hidden"
      animate={isOpen ? "visible" : "hidden"}
      transition={{ duration: 0.3 }}
      aria-label="Mobile navigation"
    >
      <ul className="flex flex-col gap-8 py-9">
        {menuLinks.map((el) => (
          <li key={el.name}>
            <a
              className="text-3xl leading-[150%] font-medium"
              href={el.href}
              onClick={() => setIsOpen(false)}
            >
              {el.name}
            </a>
          </li>
        ))}
      </ul>
      <div className="flex flex-col">
        <Button type="primary">Button</Button>
        <Button type="secondary" />
      </div>
    </motion.nav>
  );
}

export default Menu;
