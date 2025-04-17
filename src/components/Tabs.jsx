import { motion } from 'motion/react';
import { useState } from 'react';

function Tabs({ tabs, defaultTab, onTabChange}) {
  const [activeTab, setActiveTab] = useState(defaultTab || tabs[0]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    if (onTabChange) {
      onTabChange(tab);
    }
  };

  return (
    <div
      className={`bg-background-gray/30 border-secondary/30 flex gap-6 rounded-lg border px-2 py-2`}
    >
      {tabs.map((tab) => (
        <button
          key={tab}
          className={`relative rounded-lg px-10 py-2 text-[1.125rem] tracking-[-0.5px] transitions-all duration-200 ${
            activeTab === tab
              ? 'text-primary font-bold'
              : 'text-font-gray font-medium hover:text-primary'
          }`}
          onClick={() => handleTabClick(tab)}
        >
          {activeTab === tab && (
            <motion.div
              layoutId="tab-background"
              className="absolute inset-0 bg-white rounded-lg z-0 outline-secondary/30 outline"
            />
          )}
          <span className="relative z-10">{tab}</span>
        </button>
      ))}
    </div>
  );
}

export default Tabs;