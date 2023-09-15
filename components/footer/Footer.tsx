"use client";

import { letter, sentence } from "@/animations/text.animation";

import Container from "../Container";
import FooterForm from "./FooterForm";
import footer from "@/settings/data/footer";
import { motion } from "framer-motion";
import { v4 } from "uuid";

const Footer = () => {
  return (
    <footer className="footer">
      <Container className="flex items-center justify-between pb-[120px]">
        <h2 className="text-[64px] text-WHITE font-bold flex flex-col">
          {footer.title.map((item) => (
            <motion.span key={v4()} variants={sentence} initial="hidden" whileInView="visible">
              {item.split("").map((char, index) => {
                return (
                  <motion.span key={`char-${index}`} variants={letter}>
                    {char}
                  </motion.span>
                );
              })}
            </motion.span>
          ))}
        </h2>
        <FooterForm />
      </Container>
    </footer>
  );
};
export default Footer;
