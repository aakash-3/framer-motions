import React from "react";
import IntersectionObserver from "./IntersectionObserver";
import Scalebox from "./Scalebox";

const Scale = () => {
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
        <IntersectionObserver key={key}>
          <Scalebox>{item + 1}</Scalebox>
        </IntersectionObserver>
      ))}
    </div>
  );
};

export default Scale;
