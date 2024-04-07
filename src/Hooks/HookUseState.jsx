import React, { useState } from "react";

function HookUseState() {
  const [count, setCount] = React.useState({
    num: 0,
    Name: "Arsalan Ahmed",
  });

  const [data, setData] = useState([
    {
      Name: "Arsalan",
      Age: 25,
    },
    {
      Name: "Solangi",
      Age: 30,
    },
  ]);

  const [toggle, setToggle] = useState(false);

  const increaseCount = () => {
    setCount((prev) => {
      return {
        ...prev,
        num: prev.num + 1,
      };
    });
  };

  const resetCount = () => {
    setCount({
      num: 0,
      Name: "Arsalan Solangi",
    });
  };

  const decreaseCount = () => {
    if (count.num != 0) {
      setCount((prev) => {
        return {
          ...prev,
          num: prev.num - 1,
        };
      });
    }
  };

  return (
    <>
      {toggle && <h1 style={{ color: "white" }}>{count.Name}</h1>}

      <h4 style={{ color: "white" }}>Value : {count.num}</h4>
      <button style={{ margin: 10, height: 40 }} onClick={increaseCount}>
        Increase
      </button>
      <button style={{ margin: 10, height: 40 }} onClick={resetCount}>
        Reset
      </button>
      <button style={{ margin: 10, height: 40 }} onClick={decreaseCount}>
        Decrease
      </button>

      <button
        style={{ margin: 10, height: 40 }}
        onClick={() => {
          setToggle((prev) => !prev);
        }}
      >
        Toggle Button
      </button>
      <button
        style={{ margin: 10, height: 40 }}
        onClick={() => {
          setCount((prev) => {
            return {
              ...prev,
              Name: "Hello Change",
            };
          });
        }}
      >
        Change Name
      </button>

      <hr />
      {data.map((value, index) => {
        return (
          <h6
            key={index}
            style={{
              color: "#183Acf",
              background: "aliceblue",
              padding: 10,
              borderRadius: 10,
            }}
          >
            Name : {value.Name} | Age : {value.Age}
          </h6>
        );
      })}
      <button
        style={{ margin: 10, height: 40 }}
        onClick={() => {
          setData([]);
        }}
      >
        Clear Data
      </button>
    </>
  );
}

export default HookUseState;
