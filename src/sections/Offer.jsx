import { useState } from 'react';
import { motion } from 'motion/react';
import ProductCard from "../components/Card/ProductCard";
import Tabs from "../components/Tabs";

function Offer() {
  const [activeTab, setActiveTab] = useState('Houses');

  const houses = [
    {
      price: "$2,700",
      title: "Palm Harbor",
      address: "2699 Green Valley, Highland Lake, FL",
      imageUrl: "./assets/houses/house-1.png",
    },
    {
      price: "$6,550",
      title: "St. Crystal",
      address: "210 US Highway, Highland Lake, FL",
      imageUrl: "./assets/houses/house-2.png",
    },
    {
      price: "$4,950",
      title: "Faulkner Ave",
      address: "909 Woodland St, Michigan, IN",
      imageUrl: "./assets/houses/house-3.png",
    },
  ];

  const apartments = [
    {
      price: "$2,140",
      title: "Tarpon Bay",
      address: "103 Lake Shores, Michigan, IN",
      imageUrl: "./assets/apartments/apartment-1.png",
    },
    {
      price: "$1,450",
      title: "St. Crystal",
      address: "Cove Red",
      imageUrl: "./assets/apartments/apartment-2.png",
    },
    {
      price: "$3,850",
      title: "Beverly Springfield",
      address: "2821 Lake Sevilla, Palm Harbor, TX",
      imageUrl: "./assets/apartments/apartment-3.png",
    },
  ];

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    console.log(`Selected tab: ${tab}`);
  };

  const activeList = activeTab === 'Houses' ? houses : apartments;

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.2, 
      },
    }),
  };

  return (
    <section className="mt-12 flex flex-col gap-12">
      <div className="flex justify-center px-8">
        <Tabs
          tabs={['Houses', 'Apartments']}
          defaultTab="Houses"
          onTabChange={handleTabChange}
        />
      </div>
      <div className="flex flex-col gap-6 px-8 text-center">
        <h2 className="text-3xl font-bold leading-[125%] tracking-[-0.01rem]">
          We make it easy for houses and apartments.
        </h2>
        <p className="text-font-gray text-base font-medium leading-[160%]">
          Whether it’s selling your current home, getting financing, or buying a
          new home, we make it easy and efficient. The best part? you’ll save a
          bunch of money and time with our services.
        </p>
      </div>
      <div className="scrollbar-hide flex snap-x snap-mandatory gap-4 overflow-x-auto pl-8 pr-8">
        {activeList.map((el, index) => (
          <motion.div
            key={`${activeTab}-${el.title}`} 
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            custom={index} 
          >
            <ProductCard
              price={el.price}
              type={activeTab.toLowerCase().slice(0, -1)}
              title={el.title}
              address={el.address}
              imageUrl={el.imageUrl}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Offer;