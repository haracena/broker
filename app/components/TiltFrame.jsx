"use client";
import React from "react";
import Tilt from "react-parallax-tilt";

const TiltFrame = ({ children }) => {
  return (
    <Tilt
      glareEnable={true}
      glareMaxOpacity={0.8}
      glareColor="#ffffff"
      glarePosition="bottom"
      glareBorderRadius="8px"
    >
      {children}
    </Tilt>
  );
};

export default TiltFrame;
