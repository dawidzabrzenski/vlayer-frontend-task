import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import AvatarWithRing from "../components/PersonRing";

function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const people = [
    {
      name: "Mira Culos",
      desc: "“Estatery is the platform I go to on almost a daily basis for 2nd home and vacation condo shopping, or to just look at dream homes in new areas. Thanks for fun home shopping and comparative analyzing, Estatery!”",
      img: "./assets/testimonials/person-1.png",
    },
    {
      name: "Mark Brown",
      desc: "“I check Estatery almost every day — whether I'm seriously house hunting or just daydreaming about future getaways. It makes exploring new locations and comparing properties incredibly easy and enjoyable.”",
      img: "./assets/testimonials/person-3.png",
    },
    {
      name: "Jake White",
      desc: "“Estatery turns home shopping into a daily delight. Whether I'm planning for the future or just exploring what's out there, I always find something exciting and new.”",
      img: "./assets/testimonials/person-2.png",
    },
  ];

  return (
    <section className="gradient-down flex flex-col gap-6 px-8 py-8 text-center md:items-center md:gap-12">
      <div className="flex flex-col gap-4 px-6">
        <h3 className="section-title">Testimonials</h3>
        <p className="text-center text-[16px] font-normal leading-[160%] tracking-[0%] text-black/70 md:max-w-[352px]">
          See what our property managers, landlords, and tenants have to say
        </p>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
          className="flex flex-col gap-4 px-6 md:items-center md:gap-9"
        >
          <p className="section-description-bold max-w-[736px] text-center">
            {people[activeIndex].desc}
          </p>
          <p className="text-base font-bold leading-[150%]">
            {people[activeIndex].name},{" "}
            <span className="text-font-gray font-normal">Renter</span>
          </p>
        </motion.div>
      </AnimatePresence>

      <div className="flex justify-evenly gap-4 px-6 md:gap-12">
        {people.map((person, index) => (
          <div
            key={index}
            onClick={() => setActiveIndex(index)}
            className="cursor-pointer"
          >
            <AvatarWithRing
              imageUrl={person.img}
              isActive={index === activeIndex}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
