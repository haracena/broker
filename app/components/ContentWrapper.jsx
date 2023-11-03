import React from "react";

const ContentWrapper = ({ children, className }) => {
  return (
    <div className={`max-w-screen-xl my-0 mx-auto p-4 ${className}`}>
      {children}
    </div>
  );
};

export default ContentWrapper;
