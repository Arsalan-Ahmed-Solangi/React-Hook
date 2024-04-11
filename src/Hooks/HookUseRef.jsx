import React, { useRef } from "react";

function HookUseRef() {
  const ref = useRef(null);
  const submitForm = (e) => {
    e.preventDefault();
    console.log(ref.current.value);
  };
  return (
    <>
      <div className="card">
        <div className="card-body">
          <form action="" onSubmit={submitForm}>
            <div className="form-group">
              <label>Enter Lucky Name</label>
              <input
                className="form-control"
                type="text"
                id="luckyName"
                ref={ref}
              />
            </div>
            <button>Submit</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default HookUseRef;
