import React from "react";

const ChartPlaceholder = ({ chartImageUrl }) => {
  return (
    <img
      src={chartImageUrl}
      alt="7D Chart"
      className="h-8 mx-auto"
      width="100"
    />
  );
};

export default ChartPlaceholder;
