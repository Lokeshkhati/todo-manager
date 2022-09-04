import React from "react";

const Main = ({ children }) => {
  return (
    <div className=" bg-gray-300 bg-hero bg-no-repeat bg-cover bg-center h-full w-full">
      {children}
    </div>
  );
};

export default Main;
