"use client";

import { motion } from "framer-motion";
import { logotype } from "./logotype";

type SvgHeaderProps = {
  className?: string;
};

const SvgHeader = ({ className }: SvgHeaderProps) => (
  <motion.svg
    viewBox="0 0 208 79"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <defs>
      <motion.linearGradient
        id="a"
        gradientUnits="userSpaceOnUse"
        className={"origin-center"}
        animate={{ rotate: 360, x: [0, "100%", 0], y: [0, "100%", 0] }}
        transition={{
          repeat: Infinity,
          duration: 40,
          ease: "easeInOut",
          repeatType: "loop",
        }}
      >
        <stop offset="0%" stopColor="currentColor" />
        <motion.stop
          initial={{ offset: "30%" }}
          animate={{ offset: ["30%", "50%"] }}
          transition={{
            duration: 15,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
          }}
          stopColor="currentColor"
          stopOpacity={0}
        />
      </motion.linearGradient>
    </defs>
    <mask id="b" fill="currentColor">
      <path fillRule="evenodd" clipRule="evenodd" d={logotype} />
    </mask>
    <motion.path
      fillRule="evenodd"
      clipRule="evenodd"
      initial={{ opacity: 0.5 }}
      animate={{ opacity: [0.5, 1, 0.5] }}
      transition={{
        duration: 20,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut",
      }}
      d={logotype}
      fill="url(#a)"
    />
    <path
      d={logotype}
      fill="none"
      stroke="currentColor"
      strokeWidth={0.2}
      mask="url(#b)"
    />
  </motion.svg>
);
export default SvgHeader;
