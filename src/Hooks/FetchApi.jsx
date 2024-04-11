import React, { useEffect, useState } from "react";
import Loading from "./Loading";

function FetchApi() {
  const [users, setUsers] = useState([]);
  const [loading,setLoading] = useState(true);

  const getUsers = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/photos"
      );
      const data = await response.json();
      setUsers(data.slice(0, 20));
      setLoading(false)
    } catch (error) {
        console.log(error)
        setLoading(true)
    }
  };
  useEffect(() => {
    getUsers();
  }, []);

  if(loading) return <Loading/>

  return (
    <div className="container-fluid">
      <div className="row">
        {users.length &&
          users.map((value) => {
            return (
              <>
                <div className="col-md-4 col-lg-4 col-xs-12 col-sm-12 mb-2">
                  <div className="card p-1">
                    <div className="card-body p-0">
                      <div className="row">
                        <div className="col-md-4 col-lg-4 col-xs-12 col-sm-12">
                          <img
                            src={value.thumbnailUrl}
                            style={{ width: 100 }}
                          />
                        </div>
                        <div className="col-md-8 col-lg-8 col-xs-12 col-sm-12">
                          <h5>
                            Arsalan Ahmed <span className="textLeft"></span>
                          </h5>
                          <h6 style={{ color: "gray", fontSize: 13 }}>
                            {value.title}
                          </h6>
                          <div
                            style={{ fontSize: 10, background: "#faf3f3" }}
                            className="  d-flex justify-content-center rounded text-white stats"
                          >
                            <div
                              className="d-flex flex-column"
                              style={{ color: "#000", padding: 10 }}
                            >
                              <span> Followers </span> 9
                            </div>
                            <div
                              className="d-flex flex-column"
                              style={{ color: "#000", padding: 10 }}
                            >
                              <span> Likes </span> 9
                            </div>
                            <div
                              className="d-flex flex-column"
                              style={{ color: "#000", padding: 10 }}
                            >
                              {" "}
                              <span> Articles </span> 9
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
      </div>
    </div>
  );
}

export default FetchApi;
