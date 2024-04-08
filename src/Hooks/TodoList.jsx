import React, { useState } from "react";

function TodoList() {
  const object = [
    {
      Name: "Arsalan",
      id: 1,
      Age: 25,
    },
    {
      Name: "Solangi",
      Age: 30,
      id: 2,
    },
    {
      Name: "Ahmed",
      Age: 10,
      id: 3,
    },
    {
      Name: "Cartoon",
      Age: 10,
      id: 4,
    },
  ];

  const [data, setData] = useState(object);

  const clearData = () => {
    setData([]);
  };

  const removeElement = (index) => {
    const newArray = data.filter((value) => {
      return value.id != index;
    });
    setData(newArray);

  };
  return (
    <>
      {data.length &&
        data.map((value, index) => {
          return (
            <>
              <div
                key={value.id}
                style={{
                  background: "aliceblue",
                  padding: 5,
                  marginBottom: 5,
                  borderRadius: 10,
                }}
              >
                <h4 style={{ color: "charcoal" }}>
                  Name : {value.Name} & Age : {value.Age}
                  <button
                    onClick={() => removeElement(value.id)}
                    key={index}
                    style={{
                      background: "red",
                      padding: 3,
                      color: "#fff",
                      marginLeft: 10,
                    }}
                  >
                    remove
                  </button>
                </h4>
              </div>
            </>
          );
        })}
      {data.length && (
        <button style={{ color: "charcoal" }} onClick={clearData}>
          Clear
        </button>
      )}
    </>
  );
}

export default TodoList;
