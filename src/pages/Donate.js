import React from "react";
import DonateForm from "../components/Donate/DonateForm";
import { DonateHero } from "../components/Donate/DonateHero";
import { motion } from "framer-motion";
const Donate = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="w-[90%] mobile:w-[95%] max-w-[1220px] mx-auto"
    >
      <DonateHero />
      <DonateForm />
    </motion.div>
  );
};

export default Donate;
