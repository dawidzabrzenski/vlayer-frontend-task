import { useState } from "react";
import { motion } from "motion/react";

function BurgerIcon() {
  const [isOpen, setIsOpen] = useState(false);

  const lineStyle = {
    width: "100%",
    height: 4,
    background: "#000",
    borderRadius: 2,
    transformOrigin: "center",
  };

  const variants = {
    closed: { rotate: 0, translateY: 0 },
    open: {
      top: { rotate: 45, translateY: 6 },
      bottom: { rotate: -45, translateY: -6 },
    },
  };

  return (
    <div
      style={{
        width: 30,
        height: 30,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        cursor: "pointer",
        gap: 8,
      }}
      onClick={() => setIsOpen(!isOpen)}
    >
      <motion.div
        style={lineStyle}
        variants={{ closed: variants.closed, open: variants.open.top }}
        animate={isOpen ? "open" : "closed"}
        transition={{ duration: 0.3 }}
      />
      <motion.div
        style={lineStyle}
        variants={{ closed: variants.closed, open: variants.open.bottom }}
        animate={isOpen ? "open" : "closed"}
        transition={{ duration: 0.3 }}
      />
    </div>
  );
}

export default BurgerIcon;
