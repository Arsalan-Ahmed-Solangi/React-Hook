import React, { createContext } from "react";
import NestedChild from "./NestedChild";

const Data = createContext();
function HookUseContext() {
  return (
    <div>
      HookUseContext
      <Data.Provider value={"Arsalan Ahmed Solangi"}>
        <ChildComponent />
      </Data.Provider>
    </div>
  );
}

function ChildComponent() {
  return <div>
    <NestedChild/>

  </div>;
}

export default HookUseContext;
export { Data };