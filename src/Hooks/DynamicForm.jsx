import React, { useState } from "react";

function DynamicForm() {
  const [formData, setFormData] = useState([]);
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const submitChange = (e) => {
    e.preventDefault();

    const record = { ...data, id: new Date().getTime().toString() };
    setFormData([...formData, record]);
    setData({
      name: "",
      email: "",
      password: "",
    });
  };
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  return (
    <div>
      <form action="" onSubmit={submitChange}>
        <div className="form-group">
          <label htmlFor="name" style={{ color: "#fff" }}>
            Name
          </label>
          <input
            className="form-control"
            type="name"
            name="name"
            value={data.name}
            id="name"
            onChange={handleChange}
            autoComplete="off"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email" style={{ color: "#fff" }}>
            Email
          </label>
          <input
            className="form-control"
            type="email"
            name="email"
            value={data.email}
            id="email"
            onChange={handleChange}
            autoComplete="off"
          />
        </div>

        <div className="form-group mt-2">
          <label htmlFor="password" style={{ color: "#fff" }}>
            Password
          </label>
          <input
            value={data.password}
            className="form-control"
            type="password"
            name="password"
            onChange={handleChange}
            id="password"
            autoComplete="off"
          />
        </div>

        <button style={{ color: "charcoal", marginTop: 10 }}>Login</button>
      </form>

      {formData.length &&
        formData.map((value) => {
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
                  Name : {value.name} & Email : {value.email} & Password :{" "}
                  {value.password}
                </h4>
              </div>
            </>
          );
        })}
    </div>
  );
}

export default DynamicForm;
