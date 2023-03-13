import React, { useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";

const Transition = () => {
  const parentY = useMotionValue(0);
  const childY = useMotionValue(0);
  const [parentPosition, setParentPosition] = useState(0);
  const [chldrenPosition, setChildrenPosition] = useState(0);

  useEffect(() => {
    parentY.onChange((latest) => {
      if (
        latest === 0 ||
        (latest > 1 && latest < 2) ||
        (latest > 109 && latest < 110) ||
        latest === 110
      ) {
        setParentPosition(latest);
        // console.log(latest);
      }
    });
    childY.onChange((latest) => {
      if (
        latest === 0 ||
        (latest < -1 && latest > -2) ||
        (latest < -109 && latest > -110) ||
        latest === -110
      ) {
        console.log(latest);
        setChildrenPosition(latest);
      }
    });
  }, []);

  const parentchild1Variat = {
    show: {
      display: "block",
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
    hide: {
      display: "none",
      opacity: 0,
    },
  };
  const parentchild2Variat = {
    show: {
      display: "block",
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
    hide: {
      display: "none",
      opacity: 0,
    },
  };

  return (
    <div
      style={{
        padding: "50px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "10px",
      }}
    >
      <motion.div
        initial={{ y: 0, opacity: 1 }}
        animate={{
          y: [0, 110, 110, 110, 110, 110, 110, 0],
          //   opacity: [1, 0.5, 1, 1, 1, 1, 0.5, 1],
        }}
        transition={{ duration: 5, delay: 4, repeat: Infinity, repeatDelay: 4 }}
        style={{
          width: "400px",
          height: "100px",
          border: "1px solid black",
          backgroundColor: "red",
          y: parentY,
        }}
      >
        <motion.div
          variants={parentchild1Variat}
          animate={parentPosition === 0 ? "show" : "hide"}
        >
          <p style={{ color: "#fff" }}>Parent1</p>
        </motion.div>
        <motion.div
          variants={parentchild2Variat}
          animate={parentPosition === 110 ? "show" : "hide"}
        >
          <p style={{ color: "#fff" }}>Parent2</p>
        </motion.div>
      </motion.div>
      <div style={{ display: "flex", gap: "10px" }}>
        {Array(4)
          .fill(4)
          .map(() => (
            <motion.div
              initial={{ y: 0 }}
              animate={{ y: [0, -110, -110, -110, -110, -110, -110, 0] }}
              transition={{
                duration: 5,
                delay: 4,
                repeat: Infinity,
                repeatDelay: 4,
              }}
              style={{
                width: "100px",
                height: "100px",
                border: "1px solid black",
                backgroundColor: "black",
                y: childY,
              }}
            >
              <motion.div
                variants={parentchild1Variat}
                animate={chldrenPosition === 0 ? "show" : "hide"}
              >
                <p style={{ color: "#fff" }}>child1</p>
              </motion.div>
              <motion.div
                variants={parentchild2Variat}
                animate={chldrenPosition === -110 ? "show" : "hide"}
              >
                <p style={{ color: "#fff" }}>child2</p>
              </motion.div>
            </motion.div>
          ))}
      </div>
    </div>
  );
};

export default Transition;
