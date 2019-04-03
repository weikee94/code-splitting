import React from "react";

const page2 = ({ onRouteChange }) => {
  return (
    <div>
      <p>two</p>
      <button onClick={() => onRouteChange("page1")}>page 1</button>
      <button onClick={() => onRouteChange("page3")}>page 3</button>
    </div>
  );
};

export default page2;
