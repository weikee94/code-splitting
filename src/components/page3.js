import React from "react";

const page3 = ({ onRouteChange }) => {
  return (
    <div>
      <p>three</p>
      <button onClick={() => onRouteChange("page1")}>page 1</button>
      <button onClick={() => onRouteChange("page2")}>page 2</button>
    </div>
  );
};

export default page3;
