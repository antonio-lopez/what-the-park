import Explore from "@/components/containers/Explore";
import Hero from "@/components/containers/Hero";
import Highlights from "@/components/containers/Highlights";
import Directions from "@/components/containers/Directions";
import Footer from "@/components/ui/Footer";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <Hero />

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <Explore />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <Highlights />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <Directions />
      </motion.div>

      <Footer />
    </>
  );
}
