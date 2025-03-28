import React, { useState } from "react";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function savedata_byOnclick() {
    const playload = { name: name, email: email, password: password };

    console.log(playload);
    // setEmail("");
    // setPassword("");

    localStorage.setItem("user", JSON.stringify(playload));
  }
  // function savedata_byFunction(event) {
  //   event.preventDefault();
  //   const playload = { email: email, password: password };
  //   console.log(playload);
  //   localStorage;
  //   // setEmail('')
  //   // setPassword('')

  //   // console.log(event)
  // }
  return (
    <>
      <div className="container-fluid">
        <h1>Fruits Shop</h1>

        <div className="row">
          <div className="col" style={{ width: "100%" }}>
            <img
              src={
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlTxho4ctAuGF119v5lR4Qe1Xfj7l13gg7Cw&s"
              }
              className="card-img-top d-flex align-Item-center"
              alt="..."
              style={{ width: "40rem", height: "20rem", alignContent:"center"}}
            />
          </div>
          <div className="form-control m-2 col" style={{ width: "100%" }}>
            <form>
              <div className="mb-3">
                <legend htmlFor="exampleInputName" className="htmlForm-label">
                  Name
                </legend>
                <input
                  type="text"
                  className="htmlForm-control"
                  id="exampleInputName"
                  onChange={(e) => setName(e.target.value)}
                  style={{ width: "100%" }}
                />
              </div>
              <div className="mb-3">
                <legend htmlFor="exampleInputEmail" className="htmlForm-label">
                  Email address
                </legend>
                <input
                  type="email"
                  className="htmlForm-control"
                  id="exampleInputEmail"
                  onChange={(e) => setEmail(e.target.value)}
                  style={{ width: "100%" }}
                />
              </div>
              <div className="mb-3">
                <legend
                  htmlFor="exampleInputPassword"
                  className="htmlForm-label"
                >
                  Password
                </legend>
                <input
                  type="password"
                  className="htmlForm-control"
                  id="exampleInputPassword"
                  onChange={(e) => setPassword(e.target.value)}
                  style={{ width: "100%" }}
                />
              </div>

              <button
                className="btn btn-primary mb-2"
                onClick={savedata_byOnclick}
              >
                Register
              </button>
              <div className="m-1">
                {/* <Link to="">If Not Registered</Link> */}
                <a href="#">If Already Registered</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
