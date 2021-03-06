import React from "react";

const Spinner = () => {
  return (
    <div data-testid="spinner">
      <div className="flex items-center justify-center pt-24 h-1/2 ">
        <div className="w-16 h-16 border-b-2 border-gray-900 rounded-full animate-spin"></div>
      </div>
    </div>
  );
};

export default Spinner;
