import React from "react";
import ParallaxBox from "./ParallaxBox";

const Parallax = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        paddingTop: "40px",
      }}
    >
      {[...Array(6).keys()].map((item, key) => (
        <ParallaxBox key={key}>{item + 1}</ParallaxBox>
      ))}
    </div>
  );
};

export default Parallax;
