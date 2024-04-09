import React, { useState } from "react";

function Form() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState([]);
  const submitChange = (e) => {
    e.preventDefault();


    if(!email || !password){
        return alert("Fill All Data");
    }

    const values = {
      id: new Date().getTime().toString(),
      email,
      password
    };

    setData((prevData) => [...prevData, values]);
    setEmail("");
    setPassword("");
    console.log(data);
  };

  return (
    <div>   
      <form action="" onSubmit={submitChange}>
        <div className="form-group">
          <label htmlFor="email" style={{ color: "#fff" }}>
            Email
          </label>
          <input
            className="form-control"
            type="email"
            name="email"
            value={email}
            id="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            autoComplete="off"
          />
        </div>

        <div className="form-group mt-2">
          <label htmlFor="password" style={{ color: "#fff" }}>
            Password
          </label>
          <input
            value={password}
            className="form-control"
            type="password"
            name="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            id="password"
            autoComplete="off"
          />
        </div>

        <button style={{ color: "charcoal", marginTop: 10 }}>Login</button>
      </form>

      {data.length &&
        data.map((value, index) => {
          return (
            <>
              <div
                key={value.id}
                style={{
                  background: "aliceblue",
                  padding: 10,

                  marginBottom: 5,
                  marginTop: 10,
                  borderRadius: 10,
                }}
              >
                <h4 style={{ color: "charcoal", fontSize: 10 }}>
                  Email : {value.email} & Password : {value.password}
                </h4>
              </div>
            </>
          );
        })}
    </div>
  );
}

export default Form;
