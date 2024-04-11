import React, { useReducer } from "react";

function HookReducer() {
  const initalState = 0;
  const reducer = (state, action) => {
    if (action.type == "INCREMENT") {
      return state + 1;
    } else if (action.type == "DECREMENT") {
      return state != 0 ? state - 1 : state;
    } else if (action.type == "RESET") {
      return (state = 0);
    }

    return state;
  };
  const [state, dispatch] = useReducer(reducer, initalState);
  return (
    <>
      <h4> {state}</h4>
      <button
        className="btn btn-light m-2"
        onClick={() => {
          dispatch({ type: "INCREMENT" });
        }}
      >
        INCREMENT
      </button>

      <button
        className="btn btn-light m-2"
        onClick={() => {
          dispatch({ type: "RESET" });
        }}
      >
        RESET
      </button>

      <button
        className="btn btn-light m-2"
        onClick={() => {
          dispatch({ type: "DECREMENT" });
        }}
      >
        DECREMENT
      </button>
    </>
  );
}

export default HookReducer;
