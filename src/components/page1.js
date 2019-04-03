import React from "react";

const page1 = props => {
  return (
    <div>
      <p>one</p>
      <button onClick={() => props.onRouteChange("page2")}>page 2</button>
      <button onClick={() => props.onRouteChange("page3")}>page 3</button>
    </div>
  );
};

export default page1;
