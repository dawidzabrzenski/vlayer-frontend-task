import React from "react";
import { motion, AnimatePresence } from "motion/react";

function AvatarWithRing({ imageUrl, isActive = false }) {
  const angle = 0.7 * 360;

  const ringStyle = {
    background: `conic-gradient(hsla(248, 100%, 66%, 1) 0deg ${angle}deg, #E5E7EB ${angle}deg 360deg)`,
  };

  return (
    <div className="relative flex h-[88px] w-[88px] items-center justify-center">
      <AnimatePresence>
        {isActive && (
          <motion.div
            key="ring"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute -inset-1 rounded-full p-[4px]"
            style={ringStyle}
          >
            <div className="h-full w-full rounded-full bg-white p-[4px]"></div>
          </motion.div>
        )}
      </AnimatePresence>

      <img
        src={imageUrl}
        alt="avatar"
        className={`${isActive ? "bg-primary/20" : "bg-secondary"} z-10 h-20 w-20 rounded-full object-cover`}
      />
    </div>
  );
}

export default AvatarWithRing;
