import React from "react";
import { motion } from "framer-motion";
const InitiativeCard = ({ icon, title, desc }) => {
  return (
    <motion.div
    whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
    transition={{ duration: 0.5 }} className="max-w-[409px] md:flex-1 py-8">
      <img alt="icons" src={icon} />
      <h3 className="text-2xl sm:text-[32px] text-yellow mt-2">{title}</h3>
      <p className="text-grey_p mt-2 text-base">{desc}</p>
    </motion.div>
  );
};

export default InitiativeCard;
