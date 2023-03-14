import React from "react";
import { motion } from "framer-motion";
import { Box, Typography } from "@mui/material";
import AirplanemodeActiveIcon from "@mui/icons-material/AirplanemodeActive";
import DirectionsSubwayFilledIcon from "@mui/icons-material/DirectionsSubwayFilled";
import CarCrashIcon from "@mui/icons-material/CarCrash";
import AirportShuttleIcon from "@mui/icons-material/AirportShuttle";

const TransitionTwo = () => {
  return (
    <Box style={{ witdth: "100vw", height: "100vh" }}>
      <Box
        sx={{
          width: {
            xs: "400px",
            sm: "500px",
            md: "700px",
          },
          height: "500px",
          border: "1px solid black",
          backgroundColor: "green",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <Box sx={{ position: "absolute", width: "100%" }}>
          <motion.div
            initial={{ y: 0, opacity: 1 }}
            animate={{
              y: [0, 100, 100, 100, 100, 100, 100, 100, 100, 0],
              opacity: [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            }}
            transition={{
              duration: 5,
              delay: 4,
              repeat: Infinity,
              repeatDelay: 4,
            }}
            style={{
              boxSizing: "border-box",
              width: "100%",
              height: "120px",
              padding: "10px",
            }}
          >
            <Box
              style={{
                boxSizing: "border-box",
                width: "100%",
                height: "100%",
                backgroundColor: "lightblue",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "2px solid blue",
                borderRadius: "8px",
              }}
            >
              <CarCrashIcon sx={{ fontSize: "48px" }} />
              <Typography>Manufacturing</Typography>
            </Box>
          </motion.div>
          <Box style={{ display: "flex", gap: "10px" }}>
            {Array(6)
              .fill(6)
              .map((item, index) => (
                <motion.div
                  initial={{ y: 0, opacity: 1 }}
                  animate={{
                    y: [0, -100, -100, -100, -100, -100, -100, -100, -100, 0],
                    opacity: [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
                  }}
                  transition={{
                    duration: 5,
                    delay: 4,
                    repeat: Infinity,
                    repeatDelay: 4,
                  }}
                  style={{
                    boxSizing: "border-box",
                    flex: 1,
                    aspectRatio: 1,
                    padding: "6px",
                  }}
                >
                  <Box
                    style={{
                      boxSizing: "border-box",
                      width: "100%",
                      height: "100%",
                      backgroundColor: "lightblue",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      border: "2px solid blue",
                      borderRadius: "8px",
                    }}
                  >
                    <AirplanemodeActiveIcon sx={{ fontSize: "48px" }} />
                  </Box>
                  <Typography textAlign="center">Text1</Typography>
                </motion.div>
              ))}
          </Box>
        </Box>

        {/* /////////////----------------------------------------///////// */}

        <Box style={{ position: "absolute", width: "100%" }}>
          <Box style={{ display: "flex", gap: "10px" }}>
            {Array(6)
              .fill(6)
              .map((item, index) => (
                <motion.div
                  initial={{ y: 100, opacity: 0 }}
                  animate={{
                    y: [100, 0, 0, 0, 0, 0, 0, 0, 0, 100],
                    opacity: [0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
                  }}
                  transition={{
                    duration: 5,
                    delay: 4,
                    repeat: Infinity,
                    repeatDelay: 4,
                  }}
                  style={{
                    boxSizing: "border-box",
                    flex: 1,
                    aspectRatio: 1,
                    padding: "6px",
                  }}
                >
                  <Typography textAlign="center">
                    TextText uwdvg2 eiufw
                  </Typography>
                  <Box
                    style={{
                      boxSizing: "border-box",
                      width: "100%",
                      height: "100%",
                      backgroundColor: "white",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      border: "2px solid grey",
                      borderRadius: "8px",
                    }}
                  >
                    <DirectionsSubwayFilledIcon sx={{ fontSize: "48px" }} />
                  </Box>
                </motion.div>
              ))}
          </Box>
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{
              y: [-100, 0, 0, 0, 0, 0, 0, 0, 0, -100],
              opacity: [0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
            }}
            transition={{
              duration: 5,
              delay: 4,
              repeat: Infinity,
              repeatDelay: 4,
            }}
            style={{
              boxSizing: "border-box",
              width: "100%",
              height: "120px",
              padding: "10px",
            }}
          >
            <Box
              style={{
                boxSizing: "border-box",
                width: "100%",
                height: "100%",
                backgroundColor: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "2px solid grey",
                borderRadius: "8px",
              }}
            >
              <AirportShuttleIcon sx={{ fontSize: "48px" }} />
              <Typography>Retailing</Typography>
            </Box>
          </motion.div>
        </Box>
      </Box>
    </Box>
  );
};

export default TransitionTwo;
