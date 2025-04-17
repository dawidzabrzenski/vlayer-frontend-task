import { motion } from "motion/react";
import { useState } from "react";

function Tabs({ tabs, defaultTab, onTabChange }) {
  const [activeTab, setActiveTab] = useState(defaultTab || tabs[0]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    if (onTabChange) {
      onTabChange(tab);
    }
  };

  return (
    <div className="bg-background-gray/30 border-secondary/30 flex gap-6 rounded-lg border px-2 py-2">
      {tabs.map((tab) => (
        <button
          key={tab}
          className={`group relative cursor-pointer rounded-lg px-10 py-2 text-[1.125rem] tracking-[-0.5px] transition-all duration-200 ${
            activeTab === tab
              ? "text-primary font-bold focus:outline-none"
              : "text-font-gray hover:text-primary focus:text-primary font-medium focus:outline-none"
          }`}
          onClick={() => handleTabClick(tab)}
        >
          {activeTab === tab && (
            <motion.div
              layoutId="tab-background"
              className="outline-secondary/30 group-active:bg-background-gray group-hover:bg-background-gray group-focus:bg-primary/20 group-active:outline-primary group-focus:outline-primary pointer-events-none absolute inset-0 z-0 rounded-lg bg-white outline transition-colors duration-200"
            />
          )}
          <span className="relative z-10">{tab}</span>
        </button>
      ))}
    </div>
  );
}

export default Tabs;
