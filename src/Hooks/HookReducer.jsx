import React, { useReducer } from "react";

function HookReducer() {
  const initalState = 0;
  const reducer = (state, action) => {
    console.log(state,action);
    return state;
  };
  const [state, dispatch] = useReducer(reducer, initalState);
  return <>
    
    <button onClick={ ()=>{ dispatch({type:"INCREMENT"})  } }>Increment</button>
  </>;
}

export default HookReducer;
