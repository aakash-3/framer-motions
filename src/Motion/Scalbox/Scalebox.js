import React, { useContext, useMemo } from "react";
import { motion } from "framer-motion";
import { IntersectionContext } from "./IntersectionObserver";

const Scalebox = ({
  children,
  duration = 0.4,
  easing = [0.42, 0, 0.58, 1], // [number, number, number, number] | "linear" | "easeIn" | "easeOut" | "easeInOut" | "circIn" | "circOut" | "circInOut" | "backIn" | "backOut" | "backInOut" | "anticipate" | EasingFunction;
}) => {
  const { inView } = useContext(IntersectionContext);
  const transition = useMemo(
    () => ({
      duration,
      ease: easing,
    }),
    [duration, easing]
  );

  const variants = {
    hidden: {
      scale: 0,
      opacity: 0,
      transition,
    },
    show: {
      scale: 1,
      opacity: 1,
      transition,
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      exit="hidden"
      variants={variants}
      style={{
        width: "350px",
        height: "300px",
        border: "1px solid black",
        backgroundColor: "blue",
      }}
    >
      {children}
    </motion.div>
  );
};

export default Scalebox;
